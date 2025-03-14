# Release Notes

<div class="alert alert-info h4">
    If you encounter any issues, please <a href="https://papathemes.com/contact-us/">report to us</a>. You can always <a href="https://support.bigcommerce.com/s/article/Marketplace-Theme-Updates#restore">restore the ealier theme version</a>, check this <a href="https://youtu.be/eZdmudDUrQE">video</a> for instruction.
</div>

## 2.6.1 (03-14-2025)
- [CORNERSTONE] Replace Twitter logo with X logo within social sharing and social link components [#2387](https://github.com/bigcommerce/cornerstone/pull/2387)

## 2.6.0 (01-20-2025)
- [CORNERSTONE] Add nonce to scripts in checkout and account pages [#2525](https://github.com/bigcommerce/cornerstone/pull/2525)
- [CORNERSTONE] Use fetch when updating variants in cart ([#2521](https://github.com/bigcommerce/cornerstone/pull/2521))

## 2.5.5 (01-10-2025)
- [CORNERSTONE] Add google recaptcha to password reset request page [#2164](https://github.com/bigcommerce/cornerstone/pull/2164)
- Fix product card swatches' price not change if products have required checkbox option

## 2.5.4 (07-12-2024)
- [THEME-2230] Increase quick search debounce time to 1200ms

## 2.5.3 (05-03-2024)
- Fix product card image not zoom when resize window

## 2.5.2 (03-29-2024)
- Fix product variant image not change in the previous version

## 2.5.1 (03-21-2024)
- Fix JS error of lazyload

## 2.5.0 (03-21-2024)
- Update some theme options from text to input type
- Change menu icon to user icon
- Implement responsive image with LQIP
- Restore theme price

## 2.4.6 (02-29-2024)
- Fix video not playing on homepage carousel
- Fix [THEME-2116] "Buy Now" on PDP will add 2 products to cart if double-clicked

## 2.4.5 (02-05-2024)
- Sale Off 60%

## 2.4.4 (11-10-2023)
- Fix homepage carousel image overlaps when transition is enabled
- Fix sale badge display incorrect in some case

## 2.4.3 (07-28-2023)
- Fix hero carousel transition effect
- Fix edit cart item display incorrect message when product is unavailable / out of stock
- Fixed unavailable options' strikeout display during cart edit
- Fix cart quantity input change note working

## 2.4.2 (07-07-2023)
- Fix JS error when page speed optimization is not None
- Fix homepage carousel not autoplay
- Fix  slides to show for product carousels

## 2.4.1 (06-29-2023)
- Remove document.write when page speed optimization = performance
- Use faster slider for product carousel and home page carousel

## 2.4.0 (06-02-2023)
- Fix discount price display wrong in cart preview popup
- Fix tab contents aria-hidden="true" in PDP
- Fix aria-hidden of product options
- Use stencilColor for color variables
- Implemented the ability to show contact form in a popup
- Bump debug from 2.6.8 to 2.6.9 (#9)
- Bump decode-uri-component from 0.2.0 to 0.2.2 (#10)
- Bump json5 from 1.0.1 to 1.0.2 (#11)
- Bump qs from 6.4.0 to 6.4.1 (#12)
- [CORNERSTONE] Move phrases and static strings to en.json for improving translation customizing. [#1850](https://github.com/bigcommerce/cornerstone/pull/1850)
- [CORNERSTONE] Translation Gap: Gift Certificate -> Code required message. [#2064](https://github.com/bigcommerce/cornerstone/pull/2064)
- [CORNERSTONE] Removed all Google AMP template files [#2308](https://github.com/bigcommerce/cornerstone/pull/2308)
- [CORNERSTONE] (Partial Merge) Cornerstone performance optimizations: blocking scripts delaying DomContentLoaded. [#2158](https://github.com/bigcommerce/cornerstone/pull/2158)
- [CORNERSTONE] Webpack 5, Node 18 Support [#2311][https://github.com/bigcommerce/cornerstone/pull/2311]

## 2.3.0 (03-09-2023)
- Fix image distort on Safari iOS 16.3.1
- Update stencil-utils 6.15.0
- [CORNERSTONE] Added translations for Consent Manager. [#2083](https://github.com/bigcommerce/cornerstone/pull/2083)
- [CORNERSTONE] Added manual captcha to Contact Us form for additional spam protection. [#2290](https://github.com/bigcommerce/cornerstone/pull/2290)


## 2.2.2 (01-13-2023)
- Fix additional checkout buttons (PayPal) on preview cart
- Remove AMP support


## 2.2.1 (10-21-2022)
- Disable schema in Frequently Bought Together block
- Fix missing image schema, gtin, description in AMP page

## 2.2.0 (10-06-2022)
- Fix sub-categories not display in Faceted Filter
- Fix reviews pagination button not working if click on the icon
- Fix bundle error on stencil-cli 3.13.0
- Fix scss compatibility for stencil-cli 5.1.0
- Loading YouTube videos with browser native lazyload
- Fix Merchant Listings - itemCondition schema
- Change schema.org from http to https
- Display YouTube video iframe with browser native lazyload

## 2.1.2 (06-11-2022)
- Fix AMP errors when the menu contains widgets

## 2.1.1 (04-04-2022)
- Bump @bigcommerce/stencil-utis 6.11.0
- [CORNERSTONE] fix(storefront): STRF-8599 Drop Jquery: Replaced event's current target to the element passed from utils(on hook)

## 2.1.0 (04-01-2022)
- Fix to make browser back button navigate pagination properly when faceted search is enabled [#1606](https://github.com/bigcommerce/cornerstone/pull/1606)
- Add related products limit to 3 option
- Added new region on the cart page [#1901](https://github.com/bigcommerce/cornerstone/pull/1901)
- Added custom event for product price change on PDP page. [#1948](https://github.com/bigcommerce/cornerstone/pull/1948)
- PAYPAL-886 added container setting for spb container. [#2041](https://github.com/bigcommerce/cornerstone/pull/2041)
- Workaround for PayPal Pay Later Message setting doesn't show Product price section
- Remove Instafeed.
- Move quick search popup above the header bottom region

## 2.0.3 (12-10-2021)
- Fix Google Structured Data schema for product reviews - Invalid object type for field "author".
- Fix cart items not show on thank you page
- Add js option "disableSearchInput"
- Fix ESLint

## 2.0.2 (10-22-2021)
- Fix MPN not change when not show properties tab
- Fix currency dropdown display incorrect when logo position = top
- Add try/catch for setProductVariant()

## 2.0.1 (09-09-2021)
- End discount program.

## 2.0.0 (08-26-2021)
- Fix dropdown color in themed checkout page
- Add theme option "Enable widget regions in mega menus" to allow adding widgets to the mega menu.
- Fix sweetalert button focus color
- Fix credit card form on checkout page when checkout_theme is enabled
- Fix star, sash badge position
- Discount 25%

## 1.12.0 (07-01-2021)
- Fix dimensions titles displayed on mobile not follow theme settings
- Fix sale badge on product carousel not change color on hover
- Fix reCaptcha position not show correct on the checkout page
- Fix spacing at the bottom of page if enable PhotoSwipe
- Fix herocarousel boxed style
- Add option to disable remote banner
- Fix MPN not update when selecting product options
- Fix "# block" typo
- Optimize PDP: only load zoom image on active slide


## 1.11.1 (05-06-2021)
- [CORNERSTONE] BCTHEME-445 replace page builder ssl settings with new global region for html widget
- [CORNERSTONE] fixed email address validation in forms. [#2029](https://github.com/bigcommerce/cornerstone/pull/2029)
- [CORNERSTONE] fix(search): ES-2071 removed adding selected filters for price filter since not needed
- [CORNERSTONE] Remove AddThis for social sharing, replace with provider sharing links https://github.com/bigcommerce/cornerstone/pull/1997
- Fix missing data-event-type in infinite product loading
- Fix extractMoney function not working correct


## 1.11.0 (04-09-2021)
- Fix layout shifts CLS issue, page speed improvement.
- [PERFORMANCE] Optimize polyfills
- Load lazyload script async
- [CORNERSTONE] Reset cart quantity to 0 if we get a 404 for the cart
- Fix swatch image change display blank when card slider is enabled
- Fix JS error in function setProductVariant() on IE 11

## 1.10.1 (03-23-2021)
- Fix SweetAlert cancel button wrong color
- Fix [THEME-2074] When Default Option is Out of Stock, Add to Cart Button is Missing from other Option

## 1.10.0 (03-09-2021)
- Fix Faceted Search show more selects not scroll on iOS/Safari
- Fix redeem code text box on the checkout page - theme checkout enabled
- Fix Burst sale badge smaller
- Disable Buy Now button if product is not available
- Show swatch full image on product cards
- Fix PAYMENTS-4228 include currency_code field in the Account > Payment Methods
- Update Klarna logo
- Change image when select card swatch
- Add option Buy Together - Auto select all items
## 1.9.1 (02-18-2021)
- Fix [THEME-2054] Refactor Frequently Bought Together using GraphQL for better performance

## 1.9.0 (02-05-2021)
- Add GooglePay + Klarna payment icon
- Add Color Swatches Dropdown display type on PDP

## 1.8.3 (12-30-2020)
- New feature display custom fields on product cards
- Fix address info not display when newsletter is disabled
- Fix schema file error
- Fix Log in for Pricing not working
- Fix registerValidation function to validate on writeReview-form email field [#1585](https://github.com/bigcommerce/cornerstone/pull/1585)
- Fix [THEME-2029] products.php calls in color swatches display on product cards

## 1.8.2 (10-22-2020)
- Fix Login link not work when turn off side panel in Fashion style

## 1.8.1 (10-20-2020)
- Revert Also Bought default off
- Add global regions

## 1.8.0 (10-06-2020)
- Add hook "product-productdetails-init" for MQPO addon
- Remove click event on the card images if enable slider
- [CORNERSTONE] CHECKOUT-4828 Special characters to render properly on the cart modal pop up
- Fix special characters in product reviews on mobile
- Fix search close icon on the checkout page on mobile
- Add more widget regions on home page and blog page
- Add new features: Popup Banner + Products by Category
- Add more widget regions to sidebar
- Update static web page 100% width
- Fix Also Bought currency symbol position display wrong in some case
- [CORNERSTONE] MCU-427 Display modal before switching currencies
- [THEME-2000] Fix Faceted Filter option title wrong encoded character %

## 1.7.0 (07-29-2020)
- Support PhotoSwipe product image popup
- Fix Buy Now button should not show for pre-order
- Show View Cart button on added to cart popup
- Fix Categories Menu scroll issue occasionally on mobile
- Auto play video on iframe open
- Update stencil-cli v1.12.1
- Fix variant SKU, UPC not display if the product has no SKU, UPC
- Fix Share button not working in Quick-View
- Fix wishlist dropdown show wrong position in quickview on PDP
- Add option blog_posts_per_page
- Fix wishlist icon not working on product card
- Fix missing alt attribute in writeReview-productImage
- Show rating on related products
- Fix cannot add to wishlist on the product cards
- Correct label of container-fill-base
- Disable image zoom on iOS
- [CORNERSTONE] CATALOG-5557 Special characters are not rendered for product review
- [CORNERSTONE] STRF-3591 add return instructions in return-saved.html
- Move header_bottom region outside the sticky header
- Fix infinite products loading suddenly stop working
- Remove duplicate scripts in order-confirmation page
- Fix payment icons not show when social icons = bottom_none
- Fix stencil-cli@2 bundle validation
- Update Frequently Bought Together version 2

## 1.6.1 (2020-03-30)
- Add regions like Cornersone
- Add option to show store addres & phone in the footer
- Remove title/desc "created with sketch" in svg icons
- Add region 'page_builder_content' to page.html
-
## 1.6.0 (2020-02-26)
- Fix color of flyout menu sub items when hover.
- Fix Mobile Not Friendly when Card Image Slider is enabled.
- Fix the close button color.
- Fix categories and pages panel color when header color is dark.
- Fix custom fields start with __ still show on mobile.
- Add new option allow to turn off Login panel.
- Fix product variant image not change when click on product swatches on product card items if "Show Image Slider" is enabled.
- Fix mega menu dropdown not work on iPad iOS 13+
- Add new feature support Youtube video on Home Carousel
- Add option to disable thumbnails carousel on PDP
- Fix Call for Price should have same style as Price
- Fix Facebook box not reload on the next page when faceted search enabled
- Fix click on the search icon scroll the page to top
- Fix remove wishlist buttons not align properly on wishlist page
- [CORNERSTONE] feat(search): ES-721 fixed the issue for price filter collapse CP settings
- Fix product columns display 5 on tablet
- Fix logo center not center properly
- Fix register link show twice if top header enabled
- [CORNERSTONE] ES-97 fixed the html special chars issue in facet names
- [CORNERSTONE] ES-98 Product filters configured to not display product count show a count when you use the "More" modal
- Add translation key for "read more" blog post link
- Update @bigcommerce/stencil-utils 5.0.3
- Fix main navigation underline position
- Fix quick search box z-index overlap header
- Move Cookie Consent message to bottom of page
- Fix the main carousel dots overflow mobile screen width

## 1.5

If you're updating your theme to 1.5.x version, please check the [update note](update.md#additional-note-for-updating-14-to-15).

## 1.5.6 (2019-11-11)
- Fix flyout menu cannot click 3rd level menu item
- Fix [THEME-1892] Add new option: Heading color when having background

## 1.5.5 (2019-11-06)
- Fix subcategories not appear on the sidebar when reach to menu max depth.
- Fix Out of Stock badge not show on PDP
- Fix currency selector should hide when no additional currencies in Fashion style
- Fix the coupon form mess up on the checkout page on mobile
- Fix alert modal cannot close on mobile
- Show shipping method on order details page
- Improve payment buttons style
- Fix styling of the checkout page embed in theme
- Fix styling of newsletter form when showing first name
- Adjust the icons position on the header

## 1.5.4 (2019-09-06)
- Fix dropdown cart overflowed by the main menu when site logo set top
- Update jQuery to 3.4.1 [#1502](https://github.com/bigcommerce/cornerstone/pull/1502)

## 1.5.3 (2019-08-01)
- Fix [THEME-1833] Chiara v1.5.2 - Multi-line text field will not allow creation of new line.
- Show inline product options by default on PDP.
- Add new feature to support Buy Now button.

## 1.5.2 (2019-07-19)
- Fix categories menu error on mobile when not using mega menu.
- Fix product image not center on product card.
- Add custom CSS class to the top header links.
- Fix Price schema for Google structured data.
- Fix Add to Cart button overlap the mega menu.

## 1.5.1 (2019-06-25)
- Hide the parent menu in dropdown list on hover mode
- Fix missing desktop more panel when enabling hamburger menu

## 1.5.0 (2019-06-24)
- Fix mobile layout issue when show header/footer on checkout page.
- Add banner position for brand page.
- Fix blurry modal.
- Fix footer column break on Safari.
- Add support of the brand carousel speed.
- Enlarge logo on sticky header.
- Fix GeoTrust logo alignment.
- Optimize theme options schema.json.
- Show My Account & Logout link when customer logged in.
- Add the optimized checkout translation to en.json
- Show release date on product page.
- Fix data tags.
- Fix blog break on Edge.
- Fix mega menu issue on Safari.
- Fix Google structured data error.
- Fix unavailable option strike-through style.
- Fix brand logo size.
- Add support displaying sub pages on the navigation.
- Add class 'productView-info-bulkPricing'.
- Update carousel font size on mobile.
- Fix share url and FB like button.
- Hide Filter button when not available.
- Fix Sort button on search page.
- Add option to show category image as thumbnail.
- Add option top/bottom/hamburger for the mobile menu bar.
- Optimize performance and Google Page Speed.
- Add Lazyload for instagram photos.
- Improve lazyload of category list section's images
- Fix extra space of form field on also bought products.
- Fix review link align & increase width of user panel
- Fix footer newsletter form space
- Add support window.chiaraSettings
- Add support logo position top

## 1.4.2 (2019-05-04)
- Fix bug cannot change the quantity on the cart page
- Fix issue server error when requesting 11th banner of category list on homepage.
- Align center images when customers upload a small image
- Add setting to show different image on hover product card
- Add schema markup for MPN, GTIN
- Fix Google schema for product page.
- Add option to show properties below price or in tab.
- Lazy load image for category list on homepage.
- Declare window.chiarajQuery globally.
- Allow to show more than 10 images of the category list on homepage.
- Update footer columns.
- Show 6 thumbnails on product page.
- Allow to restore default image after select product option.
- Fix product card buttons overlapped by product image.
- Fix compare issue when change page or filter.
- Hide a custom field has special character "__" on compare table.

## 1.4.1 (2019-04-22)
- Hide card swatches if request error
- Fix related product price changed when no Also Bought
- Load async for Instagram script
- Fix duplicate price on product page when no option

## 1.4.0 (2019-03-25)
- Add extra CSS class to productView-tab
- Fix top banner text color setting
- Fix Also Bought Together product price changed
- Fix the main navigation overlapped on iPad 1024
- Fix product option value tooltip didn't show
- Fix product details wrong order on mobile after add Also Bought
- Add banner placement before product rating
- Fix price update on product card when color swatch is selected
- Fix setting of Footer Hover Link
- Fix reviews link didn't work when reviews are in tab
- Fix description tab didn't work after add Also Bought
- Add block chiara-productpage-rating
- Add option "Show Add to Cart on mobile" to show inline / popup panel
- Fix option show address on top header didn't work
- Fix z-index of add to cart button on mobile
- Fix footer newsletter box not full width on mobile
- Fix footer SSL seal CSS
- Fix a gitch of "Payment Methods" link on the right user panel
- Fix duplicate header footer scripts on checkout page if show header & footer
- Customer Also Bought get product from
- Optimize theme settings
- Fix AJAX conflicting with BigCommerce Data Tags
- Add banner position before full width description

## 1.3.0 (2019-02-15)
- Fix header sticky menu dropdown glitch on ipad 1024.
- Fix category menu (+) icon on category page.
- Update BUY button to use icon cart-add.
- Fix BUY button glitch when product description is overflow.
- Hide Specifications tabs when there is no product custom fields.
- Fix banner CSS break when BC banner content being wrapped by a div
- Show SKU on the dropdown cart & cart page.
- Auto show vertical scrollbar on the dropdown cart.
- Update Cornerstone 3.2.1.

## 1.2.0 (2019-01-09)
- Add new feature: show image sliders on product card item.
- Add new feature: Show full header & footer on the checkout pages.
- Add Also Bought (Buy Together) feature
- Improve:
  - Add more products count on homepage
  - Change loading remote banner from search page
  - Use products_per_page for all listing pages

## 1.1.1 (2018-12-27)
- Update showing qty box from theme settings.

## 1.1.0 (2018-12-27)
- Update Cornerstone 3.0.0:
  - Added defer tag to addThis and defered execution of related script [#1406](https://github.com/bigcommerce/cornerstone/pull/1406)
  - Fixed compare buttons for product list display [#1384](https://github.com/bigcommerce/cornerstone/pull/1384)
  - Remove unnecessary API call to get cookie notification status [#1380](https://github.com/bigcommerce/cornerstone/pull/1380)
  - Cart switch from quote item hash to id which is immutable [#1387](https://github.com/bigcommerce/cornerstone/pull/1387)
  - Remove extra font only used for textual store logo. [#1375](https://github.com/bigcommerce/cornerstone/pull/1375)
  - shotaK's Add context to the menu collapsible factory target elements [#1382](https://github.com/bigcommerce/cornerstone/pull/1382)
  - Added default rule for product carousel card title to break words on overflow. [#1389](https://github.com/bigcommerce/cornerstone/pull/1389)
  - Only show cookie privacy notice for EU IP addresses [#1381](https://github.com/bigcommerce/cornerstone/pull/1381)
  - Move Cart Quantity header value to a FE API call [#1379](https://github.com/bigcommerce/cornerstone/pull/1379)
  - Make display of quantity selection box on PDP configurable. [#1398](https://github.com/bigcommerce/cornerstone/pull/1398)
  - Don't load Cart resource on non-Cart pages [#1401](https://github.com/bigcommerce/cornerstone/pull/1401)
  - Remove deprecated fields - delivery and event date, and configurable fields. [#1407](https://github.com/bigcommerce/cornerstone/pull/1407)
- Update Cornerstone 2.6.0:
  - Add support for Card Management: List, Delete, Edit, Add and Default Payment Method [#1376](https://github.com/bigcommerce/cornerstone/pull/1376)
  - Add support for declarative data tag analytics. [#1377](https://github.com/bigcommerce/cornerstone/pull/1377)
- Update Cornerstone 2.5.

## 1.0.1 (2018-12-19)
- Initial release.