#!/usr/bin/env node

/**
 * Script to upload docs folder to AWS S3
 * Bucket: papathemes
 * Destination folder: bc-chiara-docs
 */

const { S3Client, DeleteObjectCommand, PutObjectCommand, ListObjectsV2Command } = require('@aws-sdk/client-s3');
const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

// Configuration
const BUCKET_NAME = 'do-knowledge';
const S3_FOLDER = 'bc-chiara-docs/docs';
const LOCAL_FOLDER = './docs';

/**
 * Initialize S3 client
 * Credentials will be loaded from environment variables or AWS credentials file
 */
const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1'
});

/**
 * Delete all objects in the S3 folder
 * @returns {Promise<void>}
 */
async function deleteExistingFolder() {
  console.log('🗑️  Đang xóa nội dung cũ trong S3...');

  try {
    const listCommand = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: `${S3_FOLDER}/`
    });

    const listedObjects = await s3Client.send(listCommand);

    if (!listedObjects.Contents || listedObjects.Contents.length === 0) {
      console.log('✅ Không có file nào cần xóa');
      return;
    }

    console.log(`📝 Tìm thấy ${listedObjects.Contents.length} file cần xóa`);

    // Delete objects one by one
    for (const object of listedObjects.Contents) {
      const deleteCommand = new DeleteObjectCommand({
        Bucket: BUCKET_NAME,
        Key: object.Key
      });

      await s3Client.send(deleteCommand);
      console.log(`   ❌ Đã xóa: ${object.Key}`);
    }

    console.log('✅ Hoàn thành xóa nội dung cũ');
  } catch (error) {
    console.error('❌ Lỗi khi xóa nội dung cũ:', error.message);
    throw error;
  }
}

/**
 * Get all files in a directory recursively
 * @param {string} dirPath - Directory path
 * @param {string[]} arrayOfFiles - Array to store file paths
 * @returns {string[]} Array of file paths
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);

    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

/**
 * Upload a single file to S3
 * @param {string} filePath - Local file path
 * @returns {Promise<void>}
 */
async function uploadFile(filePath) {
  const relativePath = path.relative(LOCAL_FOLDER, filePath);
  const s3Key = `${S3_FOLDER}/${relativePath.replace(/\\/g, '/')}`;

  const fileContent = fs.readFileSync(filePath);
  const contentType = mime.lookup(filePath) || 'application/octet-stream';

  const uploadCommand = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: s3Key,
    Body: fileContent,
    ContentType: contentType
  });

  try {
    await s3Client.send(uploadCommand);
    console.log(`   ✅ Uploaded: ${relativePath}`);
  } catch (error) {
    console.error(`   ❌ Lỗi khi upload ${relativePath}:`, error.message);
    throw error;
  }
}

/**
 * Upload all files from docs folder to S3
 * @returns {Promise<void>}
 */
async function uploadFolder() {
  console.log('📤 Đang upload thư mục docs lên S3...');

  if (!fs.existsSync(LOCAL_FOLDER)) {
    throw new Error(`Thư mục ${LOCAL_FOLDER} không tồn tại!`);
  }

  const files = getAllFiles(LOCAL_FOLDER);
  console.log(`📝 Tìm thấy ${files.length} file để upload`);

  let uploaded = 0;
  for (const file of files) {
    await uploadFile(file);
    uploaded++;
  }

  console.log(`✅ Đã upload thành công ${uploaded}/${files.length} file`);
}

/**
 * Main function to execute the upload process
 */
async function main() {
  console.log('🚀 Bắt đầu quá trình upload lên AWS S3');
  console.log(`📦 Bucket: ${BUCKET_NAME}`);
  console.log(`📁 Thư mục đích: ${S3_FOLDER}`);
  console.log('');

  try {
    // Step 1: Delete existing folder
    await deleteExistingFolder();
    console.log('');

    // Step 2: Upload new files
    await uploadFolder();
    console.log('');

    console.log('🎉 Hoàn thành! Tất cả file đã được upload lên S3');
    console.log(`🌐 URL: https://${BUCKET_NAME}.s3.amazonaws.com/${S3_FOLDER}/`);
  } catch (error) {
    console.error('❌ Lỗi:', error.message);
    process.exit(1);
  }
}

// Run the script
main();
