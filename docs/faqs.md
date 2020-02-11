# FAQs

## Change text of BUY button on the product page on mobile

Add this custom code below into your **Storefront** > **Footer Scripts**:

```html
<style>
.productView-options-toggle { width: 110px; border-radius: 3px; }
.productView-options-toggle .on { font-size: 0; }
.productView-options-toggle .on:before { font-size: 12px; content: 'Customize'; }
</style>
```

Where `Customize` is an example text to change.


## Display the product options on the product page on mobile

To display the product options on the product page on mobile instead of having to click BUY button, add the code below into **Storefont** > **Footer Scripts**:

```html
<style>
@media (max-width: 800px) {
.productView-options-toggle { display: none }
.productView-options-content { position: static; right: 0; opacity: 1; box-shadow: none; border-top: 1px solid #ddd}
.productView-options-panel-body { position: static; padding-bottom: 0px; }
.productView-options-panel-heading ~ .mobile-panel-close { display: none; }
.productView-options-content .form-action { position: static; right: auto; }
.productView-options-panel-heading { display: none }
.productView-options { order: 6; }
}
</style>
```

## Hide the "Home" link on the main menu

Add the custom code below into **Storefront** > **Footer Scripts**:

```html
<style>
#navPages-main > .navPages-item:first-child { display: none }
</style>
```



## Fix Products Bought Together stop working after BigCommerce API changed

If you suddenly get a problem that the products also bought together stop working on your product pages. 
That is because BigCommerce has changed the content type of product ajax request.

To workaround this issue while waiting for the fix from BigCommerce or the theme update, please follow
this instruction.

Login to your store admin panel, go to **Storefront** > **Script Manager** > click on the button **Create a Script**.

Input:

- **Name of Script**: `Fix Also Bought Products stop working after BC API changed` or whatever.
- **Location of page**: `Footer`
- **Select pages where script will be added**: `Store pages`.
- **Script type**: `Script`.
- **Script contents**:

```html
<script>
window.chiarajQuery(document).ajaxSend((event, xhr, settings) => {
	if (settings.url.match(/\/products\.php/)) {
		xhr.setRequestHeader('x-requested-with', '');
	}
});
</script>
```

Then click **Save** button.

Your script should look like this screenshot:

![Fix products also bought together](img/fix-products-bought-together-api-changed.png)



## Add custom text on the orders page

![add custom text on the orders page](img/add-custom-text-on-orders-page.png)

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `All pages`
- **Script type** = `Script`

Enter the script below to **Scripts contents**: 

```html
<script>
(function($) {
    if ($('body').is('.page-type-account_orderstatus, .papaSupermarket-pageType--account-orderstatus')) {
        $('.account').before('<p style="font-size:large;text-align:center">Click on the Order # to go to your download links</p>');
    }
})(window.jQuerySupermarket || window.chiarajQuery || window.jQuery);
</script>
```

Choose location = **Footer**.


## Collapse product description tab by default on product pages

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `Store pages`
- **Script type** = `Script`

Enter the script below to **Scripts contents**: 

```html
<script>
(function($) {
    $('.productView-tab--description.is-active, .productView-desc.is-active').removeClass('is-active');
})(window.chiarajQuery || window.$);
</script>
```


## Make responsive top banner

![responsive top banner](img/responsive-top-banner.png)

Add the custom CSS below to **Storefront** > **Footer Scripts** or add to file `assets/scss/_chiara-custom.scss` if you prefer to edit theme files:

```html
<style>
.list-unstyled { display: block; list-style: none; margin: 0; padding: 0; }
.font-size-larger { font-size: larger }

@media (min-width: 801px) {
    .flex-desktop { display: flex }
    .flex-desktop > * { flex: 1 }
    .display-inline-desktop { display: inline }
    .ml-2-desktop { margin-left: 2rem }
}

@media (max-width: 550px) {
    .hide-mobile { display: none }
}

@media (min-width: 551px) and (max-width: 800px) {
    .hide-tablet { display: none }
}
</style>
```


### Banner 1

Create a new banner, open HTML source editor and add the code below:

```html
<ul class="list-unstyled flex-desktop">
    <li class="hide-mobile hide-tablet">EAST COAST STORES NOW OPEN</li>
    <li>FREE SHIPPING WITH ORDERS OVER $100</li>
    <li class="hide-mobile hide-tablet">FREE RETURNS ON ALL ORDERS</li>
</ul>
```

The banner will shows 3 column on desktop. On mobile and tablet, only "FREE SHIPPING WITH ORDERS OVER $100" is displayed.

CSS class explanation:

- `list-unstyled`: use to reset the UL element.
- `flex-desktop`: allow UL show as flex layout (columns) on desktop.
- `hide-mobile`: hide the element on mobile.
- `hide-mobile`: hide the element on tablet.


### Banner 2

Create a new banner, open HTML source editor and add the code below:

```html
<div>
    <p class="display-inline-desktop">One Day Only! Online Only</p>
    <p class="display-inline-desktop font-size-larger ml-2-desktop"><strong>HAPPY FRIDAY THE 13TH! · TAKE 13% OFF YOUR ENTIRE ORDER</strong></p>
</div>
```
The banner will shows 2 rows on mobile and tablet, but 1 row on desktop. Text "HAPPY FRIDAY THE 13TH! · TAKE 13% OFF YOUR ENTIRE ORDER" will have larger font size.

CSS class explanation:

- `display-inline-desktop`: display inline (same row) on desktop.
- `font-size-larger`: allow font size larger.
- `ml-2-desktop`: have a margin left 2rem on desktop.



## Show all the main navigation's items without (...) icon

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `All pages`
- **Script type** = `Script`

Enter the script below to **Scripts contents**: 

```html
<script>
if (!window.chiaraSettings) window.chiaraSettings = {};
window.chiaraSettings.disableAutoSizeNavPages = true;
</script>
```



## Move product properties to show before Add to Cart button on PDP

![move product properties position](img/move-product-properties-position.png)

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `Store pages`
- **Script type** = `Script`

Enter the script below to **Scripts contents**: 

```html
<script>
(function($) {
    var $el = $('.productView-info--desktopOnly').css('margin-top', '1rem');
    $('.productView-options-content .form-action-group').before($el);
})(window.chiarajQuery || window.$);
</script>
```


## Show your site logo on all pages on mobile

According to our design intent, the site logo will be hidden on some pages and the main title of that page will appear in the header on mobile. If you want your logo to appear on every page, you can use the following custom code snippet.

Insert the code below to **Storefront** > **Footer Scripts**:

```html
<style>
@media (max-width: 800px) {
  .page-type-account_addressbook .page-heading-logo, .page-type-account_addressbook h1.page-heading, .page-type-account_inbox .page-heading-logo, .page-type-account_inbox h1.page-heading, .page-type-account_order .page-heading-logo, .page-type-account_order h1.page-heading, .page-type-account_orderstatus .page-heading-logo, .page-type-account_orderstatus h1.page-heading, .page-type-account_recentitems .page-heading-logo, .page-type-account_recentitems h1.page-heading, .page-type-account_returns .page-heading-logo, .page-type-account_returns h1.page-heading, .page-type-accountcreated .page-heading-logo, .page-type-accountcreated h1.page-heading, .page-type-blog .page-heading-logo, .page-type-blog h1.page-heading, .page-type-brand .page-heading-logo, .page-type-brand h1.page-heading, .page-type-brands .page-heading-logo, .page-type-brands h1.page-heading, .page-type-cart .page-heading-logo, .page-type-cart h1.page-heading, .page-type-category .page-heading-logo, .page-type-category h1.page-heading, .page-type-createaccount .page-heading-logo, .page-type-createaccount h1.page-heading, .page-type-editaccount .page-heading-logo, .page-type-editaccount h1.page-heading, .page-type-forgotpassword .page-heading-logo, .page-type-forgotpassword h1.page-heading, .page-type-giftcertificates .page-heading-logo, .page-type-giftcertificates h1.page-heading, .page-type-giftcertificates_balance .page-heading-logo, .page-type-giftcertificates_balance h1.page-heading, .page-type-giftcertificates_redeem .page-heading-logo, .page-type-giftcertificates_redeem h1.page-heading, .page-type-login .page-heading-logo, .page-type-login h1.page-heading, .page-type-newpassword .page-heading-logo, .page-type-newpassword h1.page-heading, .page-type-page_contact_form .page-heading-logo, .page-type-page_contact_form h1.page-heading, .page-type-wishlists .page-heading-logo, .page-type-wishlists h1.page-heading { display: none }
  .page-type-account_addressbook .header-logo, .page-type-account_inbox .header-logo, .page-type-account_order .header-logo, .page-type-account_orderstatus .header-logo, .page-type-account_recentitems .header-logo, .page-type-account_returns .header-logo, .page-type-accountcreated .header-logo, .page-type-blog .header-logo, .page-type-brand .header-logo, .page-type-brands .header-logo, .page-type-cart .header-logo, .page-type-category .header-logo, .page-type-createaccount .header-logo, .page-type-editaccount .header-logo, .page-type-forgotpassword .header-logo, .page-type-giftcertificates .header-logo, .page-type-giftcertificates_balance .header-logo, .page-type-giftcertificates_redeem .header-logo, .page-type-login .header-logo, .page-type-newpassword .header-logo, .page-type-page_contact_form .header-logo, .page-type-wishlists .header-logo { display: block }
}
</style>
```

## Add item units behind prices (i.e $19.95 lb)

Yes, it is possible. Simply add the custom code below to **Storefront** > **Footer Scripts**:

```html
<style>
.price:after { content: ' lb'; }
</style>
```


## Move Compare button to under Add to Cart button on product card items

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `All pages`
- **Script type** = `Script`

Enter the script below to **Scripts contents**: 

```html
<script>
(function($) {
    function throttle(callback, wait, immediate = false) {
      let timeout = null 
      let initialCall = true

      return function() {
        const callNow = immediate && initialCall
        const next = () => {
          callback.apply(this, arguments)
          timeout = null
        }

        if (callNow) { 
          initialCall = false
          next()
        }

        if (!timeout) {
          timeout = setTimeout(next, wait)
        }
      }
    }

    function main() {
        $('.card').not('[data-compare-button-moved]').each(function(i, el) {
            var $card = $(el);
            var $btn = $card.find('.card-figcaption-body-alt .card-figcaption-button.compare');

            $btn.appendTo($card.find('.card-figcaption-body'))
                .addClass('button--small')
                .attr('data-compare-button-moved', true);

            $btn.find('span').removeClass('is-srOnly');
            $btn.find('.icon').remove();

        });
    }

    $(window).on('scroll resize load', throttle(main, 300, true));
})(window.chiarajQuery || window.jQuery);
</script>
```


## Rename related products tab

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `Store pages`
- **Script type** = `Script`


Enter the script below to **Scripts contents**: 

```html
<script>
(function($) {
    $('.productView-productsList--related .productView-productsList-heading').text('RELATED PRODUCTS TITLE');
})(window.chiarajQuery || window.jQuery);
</script>
```

Replace `RELATED PRODUCTS TITLE` with your real title.



## Rename the tabs on product pages

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `Store pages`
- **Script type** = `Script`

Enter the script below to **Scripts contents**: 

```html
<script>
(function($) {
    function update() {
        $('.productView-tab--desc .productView-tab-title, .productView-desc-heading').html('YOUR DESCRIPTION TITLE');
        $('.productView-tab--warranty .productView-tab-title, .productView-warranty-heading, .productView-warranty-panel-heading').html('YOUR WARRANTEY TITLE');
        $('.productView-tab--properties .productView-tab-title, .productView-properties-heading, .productView-properties-panel-heading').html('YOUR INFO TITLE');
        $('.productView-tab--addition .productView-tab-title, .productView-addition-heading, .productView-addition-panel-heading').html('YOUR FEATURES TITLE');
    }

    $(document).ajaxComplete(function(event, xhr, options) {
       if (options.headers['stencil-options'].match(/quick-view/)) {
            setTimeout(update, 500);
       }
    });
    update();
})(window.chiarajQuery || window.jQuery);
</script>
```

Replace `YOUR DESCRIPTION TITLE`, `YOUR INFO TITLE`, `YOUR FEATURES TITLE` as you wish.



## Tweak the checkout with PayPal buttons and other additional buttons on the cart page

Add the custom CSS below to **Storefront** > **Footer Scripts**:

```html
<style>
@media (max-width: 550px) {
    .cart-additionalCheckoutButtons { margin-top: 1.5rem }
    .cart-additionalCheckoutButtons .FloatRight div { float: none; text-align: center }
    .cart-additionalCheckoutButtons .FloatRight .or-use-label { display: none }
    .paypal-smart-buttons { margin-top: 0; margin-bottom: 0; }
}

@media (min-width: 501px) and (max-width: 800px) {
    .cart-totals { float: none; margin: 0 auto; }
    .cart-actions { text-align: center }
    .cart-actions .button { float: none; min-width: 400px }
    .cart-additionalCheckoutButtons { margin-top: 1.5rem }
    .cart-additionalCheckoutButtons .CheckoutButton { text-align: center }
    .cart-additionalCheckoutButtons .FloatRight div { float: none; margin: 0; }
    .cart-additionalCheckoutButtons .FloatRight .or-use-label { display: none }
}

@media (min-width: 801px) {
    .cart-actions .button { min-width: 400px }
    .paypal-smart-buttons { margin: 0 }
    .cart-additionalCheckoutButtons { margin-top: 1.5rem }
    .cart-additionalCheckoutButtons .FloatRight .or-use-label { display: none }
}
</style>
```

## Always show Add to Cart button on desktop screens

Add the custom CSS below to **Storefront** > **Footer Scripts**:

```html
<style>
@media (min-width: 801px) {
.card-img-container { position: relative }
.card-figcaption { position: static; display: block; opacity: 1; margin-top: .42857rem; overflow: visible }
.card-figcaption-body { position: static; transform: none; display: block }
.card-figcaption-body-alt { z-index: 2; display: none }
.card-figure:hover .card-figcaption-body-alt { display: block }
}
</style>
```

## Fix product variant image not change when click on product swatches on product card items if "Show Image Slider" is enabled

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `All pages`
- **Script type** = `Script`

Enter the script below to **Scripts contents**: 


```html
<script>
(function($) {
    $('body').on('click', '.productCard-colorSwatch', function() {
        var $img = $(event.target).closest('.card').find('.card-image.first');
        if ($img.length > 0) {
            $img.siblings('.is-active').removeClass('is-active');
            $img.addClass('is-active');
        }
    });
})(window.chiarajQuery);
</script>
```


## Change "Already have an account? Sign in now" in Checkout page

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `Checkout`
- **Script type** = `Script`

Enter the script below to **Scripts contents**:

```html
<script>
(function($) {
    var CREATE_ACCOUNT_HTML = '<a href="/login.php">Login</a> to your account or <a href="/login.php?action=create_account">Create an account</a> for faster checkout in the future';

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    function main() {
        var $orgSignin = $('.customerEmail-container + p');
        var $newSignin = $orgSignin.next('.customerEmail-signin');

        if ($orgSignin.length > 0 && $newSignin.length === 0) {
            $newSignin = $('<p class="customerEmail-signin">' + CREATE_ACCOUNT_HTML + '</p>');
            $orgSignin.hide().after($newSignin);
        }
    }

    var debounceMain = debounce(main, 200);

    (new MutationObserver(debounceMain)).observe(document.getElementById('checkout-app'), { childList: true, subtree: true });
})(window.chiarajQuery);
</script>
```

## Show all image thumbnails and display videos at third position on PDP

Add the custom CSS below to **Storefront** > **Footer Scripts**:

```html
<style>
.productView-imageCarousel-nav { height: auto !important; max-height: none !important }
.productView-imageCarousel-nav .slick-track { width: auto !important; transform: none !important; display: flex; flex-wrap: wrap }
.productView-imageCarousel-nav-item { margin: 0.1875rem !important; max-width: 100px !important; order: 5 }
.productView-imageCarousel-nav .productView-imageCarousel-nav-item:nth-child(1) { order: 1 }
.productView-imageCarousel-nav .productView-imageCarousel-nav-item:nth-child(2) { order: 2 }
.productView-imageCarousel-nav .productView-imageCarousel-nav-item--video { order: 3 }
</style>
```


## How to make the custom footer links open in the new window

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `All Pages`
- **Script type** = `Script`

Enter the script below to **Scripts contents**:

```html
<script>
(function() {
   var links = document.querySelectorAll('#footer-info-list-custom1 a, #footer-info-list-custom2 a, #footer-info-list-custom3 a');
   for (var i in links) {
       links[i].target = '_blank';
   }
})();
</script>
```


## Fix Main Navigation dropdown error on Safari

This bug seems to appear on version 1.5.6 and lower.

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `All Pages`
- **Script type** = `Script`

Enter the script below to **Scripts contents**:

```html
<script>
    (function() {
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (!isSafari) return;
		
        function main($) {
            var $nav = $('.navPages-container, .navPages-container .navPages');
            $(window).on('resize load', function() {
                $nav.css('overflow', '');
                setTimeout(function() {
                    $nav.css('overflow', 'visible');
                }, 500);
            });
        }
        
        var ti = setInterval(function() {
            if (typeof window.chiarajQuery !== 'undefined') {
            	clearInterval(ti);
                main(window.chiarajQuery);
            }
        }, 200);
    })();
</script>
```


## Remove `imbypass=on` on PDP

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `Store Pages`
- **Script type** = `Script`

Enter the script below to **Scripts contents**:

```html
<script>
(function($) {
    $('a[data-zoom-image]').each(function(i, el) {
        var $el = $(el);
        var href = $el.attr('href'),
            zoom = $el.attr('data-zoom-image');
        $el.attr('href', href.replace(/[?&]imbypass=on/g, ''))
            .attr('data-zoom-image', zoom.replace(/[?&]imbypass=on/g, ''));
    });
})(window.chiarajQuery || window.jQuery);
</script>
```


## Display Add to Cart button inline on PDP on mobile

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `Store Pages`
- **Script type** = `Script`

Enter the script below to **Scripts contents**: 

```html
<script>
(function() {
    var css = document.createElement('style');
    css.innerHTML = '@media (max-width: 800px) {'
        + '.productView-options .form-action-group { position: static; border-top: 0; padding-left: 0; padding-right: 0; margin: 0 -5px }'
        + '.productView-options { display: block !important; height: auto }'
        + '.productView-options-panel-heading { display: none }'
        + '}';
    document.head.appendChild(css);
})();
</script>
```


## Hide Info section on PDP on mobile when it is empty

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `Store Pages`
- **Script type** = `Script`

Enter the script below to **Scripts contents**: 

```html
<script>
(function() {
    if (document.querySelector('.productView-info').innerText.trim() === '') {
        document.querySelector('.productView-properties').style += ';display:none;';
    }
})();
</script>
```

## Display full warranty content on PDP on mobile

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `Store Pages`
- **Script type** = `Script`

Enter the script below to **Scripts contents**: 

```html
<script>
(function() {
    var css = document.createElement('style');
    css.innerHTML = ''
        + '.productView-warranty-heading-toggle > .icon { display: none }'
        + '.productView-warranty-summary { display: none }'
        + '.productView-warranty-content { position: static; opacity: 1; background-color: transparent; box-shadow: none }'
        + '.productView-warranty-panel-body { position: static; }'
        + '.productView-warranty-panel-heading { display: none }';
    document.head.appendChild(css);
})();
</script>
```

## Display full product info and custom fields on mobile


Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `Store Pages`
- **Script type** = `Script`

Enter the script below to **Scripts contents**: 

```html
<script>
(function() {
    var css = document.createElement('style');
    css.innerHTML = ''
        + '.productView-properties-subheading { display: none }'
        + '.productView-properties-heading-toggle > .icon { display: none }'
        + '.productView-properties-summary { display: none }'
        + '.productView-properties-content { position: static; opacity: 1; background-color: transparent; box-shadow: none }'
        + '.productView-properties-panel-body { position: static; }'
        + '.productView-properties-panel-heading { display: none }';
    document.head.appendChild(css);
})();
</script>
```

## Display selected swatch option name on PDP

Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `Store Pages`
- **Script type** = `Script`

Enter the script below to **Scripts contents**: 

```html
<script>
(function() {
    var css = document.createElement('style');
    css.innerHTML = ''
        + '[data-product-attribute="swatch"] { position: relative; }'
        + '[data-product-attribute="swatch"] .form-option { position: static; }'
        + '[data-product-attribute="swatch"] .form-option-expanded { left: auto; top: auto; margin-top: 25px; margin-left: 30px; }'
        + '[data-product-attribute="swatch"] .form-radio:checked+.form-option .form-option-variant:after { content: attr(title); position: absolute; top: 0; left: 120px; }';
    document.head.appendChild(css);
})();  
</script>
```

You can adjust `left: 120px` if the option label is longer.

## Fix cart popup display overlapped by the main menu on Firefox


Go to **Storefront** > **Script Manager**, click **Create a Script**, choose:

- **Location on page** = `Footer`
- **Select pages where script will be added** = `All Pages`
- **Script type** = `Script`

Enter the script below to **Scripts contents**: 

```html
<script>
(function() {
    var css = document.createElement('style');
    css.innerHTML = ''
        + '@media (min-width: 801px) {'
        + '.navUser { z-index: 55 }'
        + '}';
    document.head.appendChild(css);
})();
</script>
```
