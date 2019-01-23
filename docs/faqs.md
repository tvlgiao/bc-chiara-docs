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