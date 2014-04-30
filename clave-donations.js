/*
* CLAVE DONATIONS
* Salsa Clave 0.5
* https://github.com/rootwork/salsa-clave
*
* Purpose: Modifications to Salsa donation pages.
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
* To enable a feature, change its value to 'true'.
*
* To disable a feature that has been enabled, change its value to 'false'.
*
* Remember, this file must be used in conjunction with clave-core.js in order 
* to properly function.
*/

/*
* 1. REMOVING 'REQUIRED' NOTATION
*
* On a donation form, virtually everything is required, so these asterisks make 
* the form look just a tiny bit more intimidating.
*
* Enable this setting to remove these required-field notations.
*/

$clave_donations_remove_required = false;

/*
* 2. PLACING DONATION AMOUNTS AT THE BEGINNING
*
* An emerging best practice of donation forms is to have the donation amount 
* at the top, before visitors are asked to start filling out their personal 
* information.
*
* Even in single column format, Salsa gives the first set of fields the id 
* "left_container" and the second set of fields "right_container". In 
* two-column format, you may want to apply some CSS styles to these <div> 
* elements to position and space them correctly when reordered.
*
* Note that enabling this feature will cause the form to "jump around" as the 
* page loads while things are being reordered. This is mitigated if the form 
* fields are below the bottom of the browser window, in which case visitors 
* won't see it happen before they scroll down. If the movement is visible, 
* you'll have to balance the appearance of this movement with the advantages 
* to having the donation amounts first.
*
* Enable this setting to place the donation amounts at the beginning of the 
* form.
*/

$clave_donations_prepend_amounts = false;

/*
* 3. PLACING TERMS OF SERVICE NOTICE AT THE END
*
* If you use Democracy Engine as your donation processor, Salsa will insert a 
* mandatory terms of service to your form. This usually appears above the 
* submit button, and if you move the donation amounts to the beginning (above), 
* this will end up in the middle of your form.
*
* Enable this setting to move the Democracy Engine TOS notice to the end of the 
* form.
*/

$clave_donations_append_tos = false;

/*
* 4. ADD SEMANTIC CLASSES TO DONATION AMOUNTS
*
* Want to pre-select a donation amount? Want to add pop-up text to that amount? 
* Want to emphasize amounts with particular images or CSS styles? You'll need 
* to take this step first, so you can target those amounts fields specifically, 
* because by default they all have the same classes, "formRow" and "amount".
*
* The classes that are added are of the form "donation_amount--x", where "x" is 
* the numerical amount.
*
* Enable this setting to add semantic classes to the donation amount fields.
*/

$clave_donations_semantic_classes = false;

/*
* 5. PRE-SELECTING A DONATION AMOUNT
*
* Choose any of your existing donation amounts to be pre-selected when a 
* visitor loads the page. They can still choose other donation amounts if they 
* wish.
*
* Note that the previous section (adding semantic classes to donation amounts) 
* must be enabled in order for this to take effect.
* 
* The default setting ('') leaves the donation amounts as they are, with none 
* pre-selected.
*
* Enter the donation amount you wish to pre-select (e.g. '50' for $50.00).
*/

$clave_donations_preselect_amount = '';

/*
* 6. SET HTML5 INPUT FIELD TYPES
*
* For mobile visitors in particular, setting HTML5 types on your input fields 
* will speed their donation process, as their keyboard will automatically 
* change to the correct type (for instance, to a numerical keyboard when 
* entering the phone number).
*
* Enable the settings for the fields to which you want to apply HTML5 types. 
* If you don't have a particular field in your form, you should leave its 
* setting on "false".
*/

// Email field
$clave_donations_html5_email = false;

// Phone number field
$clave_donations_html5_phone = false;

/*
* 6b. Zip code field
*
* If you ONLY have transactions from U.S. addresses, setting this field will 
* speed those transactions. Non-U.S. addresses, however, have letters as well 
* as numbers, so if you accept donations from outside the United States, you 
* should not enable these settings.
*
* Enable this setting to give the zip code field a numerical field type and 
* ONLY allow numerical postal codes.
*/

$clave_donations_html5_zip = false;

/*
* 6c. Credit card fields
*
* Set the two credit card fields (number and security code) to a numerical 
* pattern or a number format.
*
* Options:
*
* '' (no value, default) = Leaves the fields as they are.
*
* 'safe' = These fields will be given a numerical pattern. In many mobile 
* devices, but not all, this will trigger a number pad keyboard to appear.
*
* 'edge' = These fields will be given a number format, which will trigger a 
* number pad keyboard to appear in all mobile devices. Hower, in older versions 
* of Safari desktop and older versions of Safari mobile (e.g. older iPads), 
* Safari will auto-insert commas into these numbers, invalidating them when the 
* visitor attempts to submit the form. Unfortunately, there's no reliable way 
* to disable the auto-insertion of commas in these older browsers. Only set  
* 'edge' if you're confident you don't have visitors using these browsers, or 
* have ways for correcting it.
*
* Enable this setting with 'safe' or 'edge' to set the credit card fields to a 
* numerical pattern or number, respectively.
*/

$clave_donations_html5_cc = '';

/*
* 6d. 'Other' donation amount
*
* Set the "other" donation amount field to a numerical pattern or a number 
* format. Similar to the credit card fields (see above), the purpose of this 
* change is to cause a number pad keyboard to appear for mobile users.
*
* Options:
*
* '' (no value, default) = Leaves this field as it is.
*
* 'safe' = These fields will be given a numerical pattern. In many mobile 
* devices, but not all, this will trigger a number pad keyboard to appear.
*
* 'edge' = These fields will be given a number format, which will trigger a 
* number pad keyboard to appear in all mobile devices. Hower, in older versions 
* of Safari desktop and older versions of Safari mobile (e.g. older iPads), 
* Safari will auto-insert commas into these numbers, invalidating them when the 
* visitor attempts to submit the form. Unfortunately, there's no reliable way 
* to disable the auto-insertion of commas in these older browsers. Only set  
* 'edge' if you're confident you don't have visitors using these browsers, or 
* have ways for correcting it.
*
* Enable this setting with 'safe' or 'edge' to set the "other" donation amount 
* field to a numerical pattern or number, respectively.
*/

$clave_donations_html5_donation_other = '';

/*
* 7. IMPROVING THE 'IN HONOR OF' AND 'IN MEMORY OF' SECTIONS
*
* By default, this fieldset is poorly formed, with nonsemantic tags meant to 
* replicate headers, and few classes. Additionally, the fieldset takes up quite 
* a bit of space, despite the fact that many visitors won't be using it.
*
* Enable the settings below to add true headers to these sections, and make the 
* sections collapsible.
*/

// Add a true header to the "in honor of" section
$clave_donations_honorof_header = false;

// Add a true header to the "in memory of" section
$clave_donations_memoryof_header = false;

// Make this section collapsible
$clave_donations_honorof_collapsible = false;



/* 
*  *************************************************************************
*  End of user-configurable options. Do not modify anything below this line. 
*  *************************************************************************
*/



// Document ready
$(document).ready(function() {

/*
* 1. REMOVING 'REQUIRED' NOTATION
*/

if($clave_donations_remove_required) {
  $('.donation .required').remove();
}

/*
* 2. PLACING DONATION AMOUNTS AT THE BEGINNING
*/

if($clave_donations_prepend_amounts) {
  $('.donation #right_container').insertBefore($('.donation #left_container'));
}

/*
* 3. PLACING TERMS OF SERVICE NOTICE AT THE END
*/

if($clave_donations_append_tos) {
  $('.donation #de_compliance').insertAfter($('#submit'));
}

/*
* 4. ADD SEMANTIC CLASSES TO DONATION AMOUNTS
*/

if($clave_donations_semantic_classes) {
  $('.donation #donation_amount > .formRow input[type="radio"]').each(function(){
    var donateamt_value = $(this).attr("value");
    var donateamt = $.trim(donateamt_value);
    $(this).parent('.formRow').addClass('donation_amount--' + donateamt);
    $(this).siblings('label').addClass('donation_amount--' + donateamt + '__label');
  });
  $('.donation #donation_amount .amountOther').addClass('donation_amount--other').removeClass('donation_amount--');
  $('.donation #donation_amount .amountOther label').addClass('donation_amount--other__label').removeClass('donation_amount--__label');
}

/*
* 5. PRE-SELECTING A DONATION AMOUNT
*/

if($clave_donations_preselect_amount) {
  $('.donation_amount--' + $clave_donations_preselect_amount + ' input').attr('checked','checked');
}

/*
* 6. SET HTML5 INPUT FIELD TYPES
*/

if($clave_donations_html5_email) {
  $('.donation .email input').get(0).type = 'email';
}

if($clave_donations_html5_phone) {
  $('.donation .phone input').get(0).type = 'tel';
}

/*
* 6b. Zip code field
*/

if($clave_donations_html5_zip) {
  $('.donation .zip input').get(0).type = 'number';
  $('.donation .zip input').attr('pattern','[0-9]*');
}

/*
* 6c. Credit card fields
*/

if($clave_donations_html5_cc == 'safe') {
  $('.donation input#cc_number').attr('pattern','[0-9]*');
  $('.donation .cvv2 input').attr('pattern','[0-9]*');
}

if($clave_donations_html5_cc == 'edge') {
  $('.donation input#cc_number').get(0).type = 'number';
  $('.donation .cvv2 input').get(0).type = 'number';
}

/*
* 6d. 'Other' donation amount
*/

if($clave_donations_html5_donation_other == 'safe') {
  $('.donation input#otheramt').attr('pattern','[0-9]*');
}

if($clave_donations_html5_donation_other == 'edge') {
  $('.donation input#otheramt').get(0).type = 'number';
}

/*
* 7. IMPROVING THE 'IN HONOR OF' AND 'IN MEMORY OF' SECTIONS
*/

if($clave_donations_honorof_header) {
  // Add a true header to the "in honor of" section
  $('.donation #honorof p:contains("in honor of")').replaceWith('<h4 class="honorof__header">In honor of...</h4>');
}

if($clave_donations_memoryof_header) {
  // Add a true header to the "in memory of" section
  $('.donation #honorof p:contains("in memory of")').replaceWith('<h4 class="honorof__header">In memory of...</h4>');
}

if($clave_donations_honorof_collapsible) {
  // Grab all of the .formRows
  var divs = $('.donation #honorof .formRow');
  // Wrap each set in a semantic section div
  for(var i = 0; i < divs.length; i+=3) {
    divs.slice(i, i+3).wrapAll('<div class="honorof__section"></div>');
  }
  // Hide each section by default
  $('.donation .honorof__section').css('display','none');
  // Apply the following to both the default and rewritten headers
  var header_sel = $('.donation .honorof__header, .donation #honorof p:contains("in honor of"), .donation #honorof p:contains("in memory of")');
  // Grab the default attributes of links and set them on the header
  $(function(){
    var linkColor = $('a:link').css('color');
    var linkCursor = $('a:link').css('cursor');
    var linkLine = $('a:link').css('text-decoration');
    header_sel.css('color', linkColor).css('cursor', linkCursor).css('text-decoration', linkLine);
  });
  // Accordionize the headers
  header_sel.click(function () {
    $header = $(this);
    // Get the next element
    $content = $header.next();
    // Open up the content needed -- toggle the slide
    // If visible slide up, if not slide down
    $content.slideToggle(500, function () {
    // Execute this after slideToggle is done
    });
  });
}

}); // End of document ready
