# Misc

## Display Big Sales section from Angels theme

You can replace `Fullwidth Banner (home-banner2)` or any banner by Big Sales section from Angels theme. Edit `Fullwidth banner`, in **Banner content** editor, click **HTML** button to open **HTML Source Editor**, replace all exist content with the content below:

```html
<div class="chiara-section angels-section--cosmeticBigsales" data-local-banner-position="chiara-home-banner2">
    <div class="angels-cosmeticBigsales wow fadeIn">
        <div class="angels-cosmeticBigsales-inner">
            <p class="angels-cosmeticBigsales-title">Big Sales</p>
            <p class="angels-cosmeticBigsales-desc">Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis.</p>
            <div class="angels-cosmeticBigsales-grid" data-products-by-category="/shop-all/?sort=newest&amp;limit=4" data-template="angels/sections/cosmetic-bigsales-grid">
                <div class="angels-cosmeticBigsales-grid-item angels-cosmeticBigsales-grid-item--deal wow fadeIn">
                    <p class="angels-cosmeticBigsales-deal-img-container"><a href="#"><img class="angels-cosmeticBigsales-deal-img lazyload" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="//chiara.mybigcommerce.com/product_images/uploaded_images/angels-cosmetic-bigsales-img.jpg" width="570" height="480" alt="570x480"></a></p>
                    <p class="angels-cosmeticBigsales-deal-title">Deal of the day</p>
                    <p class="angels-cosmeticBigsales-deal-countdown" data-countdown="2020-12-12T00:00:00Z"><span class="item"><span class="day" data-countdown-day="">00</span> <span class="label">days</span></span> <span class="item seperator">:</span> <span class="item"><span class="hour" data-countdown-hour="">00</span> <span class="label">hours</span></span> <span class="item seperator">:</span> <span class="item"><span class="min" data-countdown-min="">00</span> <span class="label">mins</span></span> <span class="item seperator">:</span> <span class="item"><span class="sec" data-countdown-sec="">00</span> <span class="label">secs</span></span></p>
                    <p class="angels-cosmeticBigsales-deal-action"><a href="#">shop now</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
```

You are freely to edit the heading, short description or product category:

- `Big Sales`: replace by your own heading.
- `Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis.`: replace by your own description.
- `/shop-all/?sort=newest&amp;limit=4` replace by your own category page link. note the url query `?sort=newest&amp;limit=4` allow you to sort products by newest added date, and limit number of products returned = 4.
- `Deal of the day`: replace by your text.
- `2020-12-12T00:00:00Z`: count-down date time in GMT.
- `//chiara.mybigcommerce.com/product_images/uploaded_images/angels-cosmetic-bigsales-img.jpg`: replace by your own banner image uploaded in **Storefront** > **Image Manager**.


