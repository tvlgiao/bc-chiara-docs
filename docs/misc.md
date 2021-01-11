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



## Hide all countries except USA in the checkout page and create account page

```html
<script>
    window.PAPATHEMES_HIDE_COUNTRY_SETTINGS = {
        supportedCountries: ['EG'],
        supportedCountryNames: ['Egypt']
    };
</script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/javascript-debounce@1.0.1/dist/javascript-debounce.min.js" integrity="sha256-yppCMizPjrL8s22FQM9X70dJSYbV39pH9VA/gc2nlUE=" crossorigin="anonymous"></script>
<script>
    (function($) {
        var conf = window.PAPATHEMES_HIDE_COUNTRY_SETTINGS;

        function checkoutPage() {
            var ob = new MutationObserver(debounce(function() {
                var $el = $('#countryCodeInput');
                var el = $el.get(0);

                if ($el.length > 0 && !$el.data('updatedCountries')) {
                    $el.data('updatedCountries', true);
                    $el.find('option').each(function(i, opt) {
                        if (conf.supportedCountries.indexOf($(opt).attr('value')) === -1) {
                            $(opt).remove();
                        }
                    });
                    $el.val(conf.supportedCountries[0]);

                    // Trigger onchange event
                    // https://stackoverflow.com/questions/23892547/what-is-the-best-way-to-trigger-onchange-event-in-react-js
                    var ev = new Event('change', { bubbles: true });
                    ev.simulated = true;
                    el.value = conf.supportedCountries[0];
                    el.dispatchEvent(ev);
                }
            }, 300));
            ob.observe(document.getElementById('checkout-app'), { childList: true, subtree: true });
        }

        function createAccountPage() {
            var $el = $('select[data-field-type=Country]');
            if ($el.length > 0 && !$el.data('updatedCountries')) {
                $el.data('updatedCountries', true);
                $el.find('option').each(function(i, opt) {
                    if (conf.supportedCountryNames.indexOf($(opt).attr('value')) === -1) {
                        $(opt).remove();
                    }
                });
                $el.val(conf.supportedCountryNames[0]).trigger('change');
            }
        }

        if (document.getElementById('checkout-app')) {
            checkoutPage();
        }

        if ($('body').hasClass('page-type-createaccount')) {
            createAccountPage();
        }
    })(window.chiarajQuery || window.jQuery);
</script>
```


## Hide Credit Card payment method when the total price exceeds a limit price

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `Checkout Page`
- **Script type** = `Script`

Enter the script below to **Scripts contents**:

```html
<script>
(function() {
    var PRICE_LIMIT = 150;

    function debounce(n,t,u){var e;return function(){var i=this,o=arguments,a=u&&!e;clearTimeout(e),e=setTimeout(function(){e=null,u||n.apply(i,o)},t),a&&n.apply(i,o)}}

    (new MutationObserver(debounce(function() {
        var priceEl = document.querySelector('.cart-priceItem--total .cart-priceItem-value');
        if (priceEl) {
            var totalPrice = Number(String(priceEl.innerText).replace(/[^0-9.]/g, ''));
            if (totalPrice >= PRICE_LIMIT) {
                var el = document.querySelector('.paymentMethod--creditCard');
                if (el) {
                    var li = el.parentNode.parentNode.parentNode;
                    var nextLi = li.nextSibling;
                    var labelEl = nextLi.querySelector('input[name=paymentProviderRadio]').nextSibling;
                    window.setTimeout(function() {
                        labelEl.dispatchEvent(new MouseEvent('click'));
                    }, 500);
                    li.parentNode.removeChild(li);
                }
            }
        }

    }, 300))).observe(document.getElementById('checkout-app'), { subtree: true, childList: true });
})();
</script>
```


Edit the limit price in line: `var PRICE_LIMIT = 150;`


