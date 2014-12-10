/*
* CLAVE STOREFRONTS
* Salsa Clave 0.5
* https://github.com/rootwork/salsa-clave
*
* Purpose: Modifications to Salsa storefront pages, items and checkout forms.
*
* See README.md for complete installation instructions. This file must be used
* with clave-core.js.
*/

/*
* USAGE
*
* The features below are intentionally turned off by default.
*
* Each feature is heavily commented to explain its purpose, so you can choose
* whether or not to enable it.
*
* To enable a feature, change its value to "true".
*
* To disable a feature that has been enabled, change its value to "false".
*
* Remember, this file must be used in conjunction with clave-core.js in order
* to properly function.
*/

/*
* 0. HELPER CLASSES
*
* Salsa doesn't provide any way for us to target storefront pages in
* particular, so this script adds three helper classes to the main content
* <div> (which already has a .salsa class and #salsa id):
*
* .storefront, to primary storefront (catalog) pages
* .storefront--item, to individual item (detail) pages
* .storefront--checkout, to the checkout page
*
* These are required for the rest of the script's functionality and enabled
* automatically. You may find them helpful in your own CSS styling.
*/

/*
* 1. AUTOMATICALLY SET THE PAGE TITLE BASED ON HEADERS
*
* By default, all your pages will have the same page <title> (what appears in
* the browser window and on bookmarks) as whatever template you are using.
*
* This setting allows you to grab the contents of the first <h1> tag in the
* content of the page and set that as the page title. If there is no <h1> tag
* on the page, the page title will remain unchanged.
*
* Note that this is cosmetic only -- parsers such as feed readers, search
* indexes, and social media sites (e.g. Facebook) will never execute this
* script and therefore won't get the updated page title. For pages you expect
* to be shared a lot (like action pages), you should go the tedious route of
* creating a template just for that page, so you can set the page title and
* other metadata that can be correctly parsed.
*
* For this reason, this function is probably only useful on storefronts, where
* you're not likely to create a template for every single item.
*
* Enable this setting to replace the page <title> element with the contents of
* the first <h1> tag. Optionally enable settings to preserve any text in the
* <title> after a vertical pipe "|" or append custom text.
*/

// Replace the page <title> with the contents of the first <h1> tag
$clave_storefronts_title = false;

// Preserve text in the page <title> after the first vertical pipe "|"
$clave_storefronts_title_preserve = false;

// Append custom text to the contents of the first <h1> tag in the page <title>
// (enter between the '' marks)
$clave_storefronts_title_append = '';

/*
* 2. ADD SEMANTIC CLASSES TO STOREFRONT ITEMS
*
* By default, storefront items have ambiguous class names ("items", "item",
* "price", etc.) or no class name (in the case of the title and image), making
* them tedious to target with CSS.
*
* The classes added are:
* .storefront__items (set of all items)
* .storefront__item (each individual item)
* .storefront__title
* .storefront__image
* .storefront__description
* .storefront__price
* .storefront__purchase
*
* And on the individual product pages:
* .storefront__item--detail (the item container)
* .storefront__title--detail
* .storefront__image--detail
* .storefront__description--detail
* .storefront__description_detail--detail (the "detailed description" field)
* .storefront__price--detail
* .storefront__quantity--detail
* .storefront__purchase--detail (the "add to cart" button)
*
* Enable this setting to add the above classes to storefront items.
*/

$clave_storefronts_semantic_classes = false;

/*
* 3. LINK ITEM TITLES AND IMAGES TO PURCHASE PAGE
*
* By default, visitors have to click on "Show Details & Purchase" in order to
* complete checkout.
*
* Enable these settings to link the title and/or image of each storefront item
* to the detail and purchase page.
*/

$clave_storefronts_link_title = false;

$clave_storefronts_link_image = false;

/*
* 4. CONVERT CHECKOUT PAGE <TABLE> ELEMENTS TO <DIV>S
*
* The storefront checkout page includes several tables, which can break
* layouts, scroll off the page in mobile viewing, and make positioning
* challenging.
*
* This setting creates simple block-level <div>s and floats them to replicate
* tabular display. At desktop sizes, this will look similar to Salsa's default
* layout, but at narrow sizes, some of these <div>s will overlap. You'll want
* to set CSS media queries to stack (unfloat) them at narrow widths. This
* function is just meant to help you get 90% of the way there by handing you
* classed <div> elements instead of inflexible tables.
*
* Enable this setting to convert these tables to normal block-level <div>
* elements.
*/

$clave_storefronts_table_convert = false;



/*
*  *************************************************************************
*  End of user-configurable options. Do not modify anything below this line.
*  *************************************************************************
*/



// Document ready
$(document).ready(function() {

/*
* 0. HELPER CLASSES
*/

if ($('input[name=storefront_KEY]').length) {
  $('#salsa').addClass('storefront');
}
if ($('input[name=store_item_KEY]').length) {
  $('#salsa').addClass('storefront storefront--item');
}
if ($('#billingInformationHeader').length) {
  $('#salsa').addClass('storefront--checkout').removeClass('storefront--item');
}

// Set up reuseable selector variables based on the helper classes
var storefront_item = $('.storefront > .items > .item');
var storefront_item_detail = $('.storefront--item .product');

/*
* 1. AUTOMATICALLY SET THE PAGE TITLE BASED ON HEADERS
*/

if($clave_storefronts_title) {

  // Get the header to use as the page <title>
  var clave_title_replace = $('.storefront h1:first').text().replace('.','');

  // If the existing page title includes a vertical pipe, grab everything after it
  if(document.title.split('|')[1]) {
    var clave_title_suffix = document.title.split('|')[1];
  }

  // Determine the new page title
  if(clave_title_replace.length) {
    clave_title = clave_title_replace;
  }

  if(clave_title_replace.length && $clave_storefronts_title_append.length) {
    clave_title = clave_title + $clave_storefronts_title_append;
  }

  if(clave_title_replace.length && clave_title_suffix && $clave_storefronts_title_preserve) {
    clave_title = clave_title + ' | ' + clave_title_suffix;
  }

  // Set the new page title
  document.title = clave_title;

}

/*
* 2. ADD SEMANTIC CLASSES TO STOREFRONT ITEMS
*/

if($clave_storefronts_semantic_classes) {
  // .storefront__items
  $('.storefront > .items').addClass('storefront__items');

  // .storefront__item
  $.each(storefront_item, function(count, item) {
    $(this).addClass('storefront__item');
    $(this).children('h2').addClass('storefront__title');
    $(this).children('img').addClass('storefront__image');
    $(this).children('.description').addClass('storefront__description');
    $(this).children('.price').addClass('storefront__price');
    $(this).children('.purchase').addClass('storefront__purchase');
  });

  // .storefront__item--detail
  $.each(storefront_item_detail, function(count, item) {
    $(this).addClass('storefront__item--detail');
    $(this).children('h2').addClass('storefront__title--detail');
    $(this).children('img').addClass('storefront__image--detail');
    $(this).children('.description').addClass('storefront__description--detail');
    $(this).children('.detailed_description').addClass('storefront__description_detail--detail');
  });
  $('.product-details-wrapper .content .price').addClass('storefront__price--detail');
  $('.product-details-wrapper .content .quantity').addClass('storefront__quantity--detail');
  $('.product-details-wrapper .content .form-submit').wrap('<div class="storefront__purchase--detail"/>');
}

/*
* 3. LINK ITEM TITLES AND IMAGES TO PURCHASE PAGE
*/

if($clave_storefronts_link_title || $clave_storefronts_link_image) {

  $.each(storefront_item, function(count, item) {
    var storefront_link = $(this).find('.purchase a').attr("href");

    // Link titles
    if($clave_storefronts_link_title) {
      $(this).children('h2').wrapInner('<a href="' + storefront_link + '"/>');
    }

    // Link images
    if($clave_storefronts_link_image) {
      $(this).children('img').wrap('<a href="' + storefront_link + '"/>');
    }

  });

}

/*
* 4. CONVERT CHECKOUT PAGE <TABLE> ELEMENTS TO <DIV>S
*/

if ($clave_storefronts_table_convert) {

  // Find the order table
  $('.storefront h3:contains("Your order") + table').addClass('storefront__order');
  // Rewrite it in <div> elements
  $('.storefront__order').each(function (){
      $(this).replaceWith( $(this).html()
        .replace(/<tbody/gi, '<div class="storefront__order"')
        .replace(/<tr/gi, '<div class="storefront__order_row"')
        .replace(/<\/tr>/gi, '</div>')
        .replace(/<td/gi, '<span class="storefront__order_item"')
        .replace(/<\/td>/gi, "</span>")
        .replace(/<\/tbody/gi, "<\/div")
        );
    });
  // Replicate tabular layout with floats
  $('.storefront__order_row:first').addClass('storefront__order_header');
  $('.storefront__order_item').css('display', 'block').css('float', 'left').css('width', '16%');
  $('.storefront__order_row, #cardInfo').css('clear', 'left');

  // Replace the mailing address table with row <div>s
  $('.storefront #mailing > table').each(function (){
    $(this).replaceWith( $(this).html()
      .replace(/<tbody>/gi, '')
      .replace(/<tr>/gi, '')
      .replace(/<\/tr>/gi, '')
      .replace(/<td/gi, '<div class="formRow mailing__row"')
      .replace(/<\/td>/gi, "</div>")
      .replace(/<\/tbody>/gi, "")
      );
  });
  $('.mailing__row').removeAttr('align').removeAttr('style');

  // Replace the credit card table with row <div>s
  $('.storefront #cardInfo > table').each(function (){
    $(this).replaceWith( $(this).html()
      .replace(/<tbody>/gi, '')
      .replace(/<tr>/gi, '')
      .replace(/<\/tr>/gi, '')
      .replace(/<td/gi, '<div class="formRow cardInfo__row"')
      .replace(/<\/td>/gi, "</div>")
      .replace(/<\/tbody>/gi, "")
      );
  });
  $('.cardInfo__row').removeAttr('align').removeAttr('style');
  $('.storefront #cardInfo').css('border', 'none').css('padding', '1em 0 0 0').css('margin', '0');
  $('.storefront #cardtypes').css('list-style-type', 'none').css('padding', '0');

  // Replace the main wrapping table with a single <div>
  $('.storefront--checkout > form > table').each(function (){
    $(this).replaceWith( $(this).html()
      .replace(/<tbody/gi, '<div class="storefront_container"')
      .replace(/<tr>/gi, "")
      .replace(/<\/tr>/gi, "")
      .replace(/<td>/gi, "")
      .replace(/<td valign="top">/gi, "")
      .replace(/<\/td>/gi, "")
      .replace(/<\/tbody/gi, "<\/div")
      );
  });

}

}); // End of document ready
