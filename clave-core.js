/*!
* Salsa Clave 0.2
* https://github.com/rootwork/salsa-clave
*
* Copyright (C) 2014  Ivan Boothe
* Licensed under GPLv3
* https://github.com/rootwork/salsa-clave/blob/master/LICENSE.txt
*/

/*
* CLAVE CORE
*
* See README.md for complete installation instructions.
*
* This file is required for any use.
*/

/*
* USAGE
*
* Most of the features in Salsa Clave are intentionally turned off by default.
*
* Each feature is heavily commented to explain its purpose, so you can choose 
* whether or not to enable it.
* 
* To enable a feature, change its value to 'true'.
*
* To disable a feature that has been enabled, change its value to 'false'.
*/

/*
* 1. SEMANTIC CLASSES
*
* This adds basic semantic classes to all form rows <div>s, which by default 
* have only the class "formRow". The classes that are added are derived from 
* the name of the input field, select object, textarea, or checkbox/radio 
* options contained by the <div>.
*
* For instance, the zip/postal code input field has the name attribute of 
* "Zip", so the wrapper <div> will be assigned a class of "zip" in addition to 
* "formRow".
*
* This is the only section that is enabled by default, because many of the 
* other components of Salsa Clave depend on these semantic names. It's designed 
* not to impact your existing display (all it does is add classes) and so it's 
* recommended you leave this feature enabled.
*/

$clave_semantic_classes = true;

/*
* 2. REMOVING FORCED CLEARING
*
* Salsa inserts a bunch of empty <div> fields with the class "clear" as well 
* as numerous stray <br> tags. Since form field rows are block-level, clearing 
* elements anyway, this is mostly an annoyance and can create unwanted space 
* in between or inside elements.
*
* Enable this setting to remove these forced clears.
*/

$clave_remove_clears = true;

/*
* 3. ADDRESS FIELDS DESIGNED FOR YOUR COUNTRY
*
* In the first section, you can enable setting the country to alter the display 
* of corresponding labels -- for instance choosing "United States" will result 
* in fields labeled "State" and "Zip code" whereas choosing "Canada" will 
* cause those same fields to be labeled "Province" and "Postal code" instead. 
* Since Salsa doesn't support state/province values for any other country, when 
* any other country is selected, that field is automatically set to "other" and 
* hidden.
* 
* In the second section, you can set the default country to the United States 
* or Canada, pre-selecting it for your visitors, while allowing them to choose 
* other countries.
*
* Note that these will only engage if you have a country field present, which 
* isn't enabled by default on some forms. (And be sure not to mistake the 
* "Country" field with the "County" field.) You will probably want to place 
* this field before the "State" and "Zip" fields for usability, since it will 
* alter those field labels.
*/

/*
* 3a. Country-specific labels for address fields
*
* Alter the display of state/province and zip/postal code fields to match the 
* terminology of particular countries, and hide the useless state/province 
* field for any countries other than the United States and Canada.
*
* Enable this setting to relabel these fields based on the selected country.
*/

$clave_countrified_labels = true;

/*
* 3b. Pre-select a country
*
* Set a country to be automatically selected when the page loads. Visitors can 
* still change the country if they need to.
*
* If the United States is selected, the labels "State" and "Zip code" will 
* replace the default "State/Province" and "Zip/Postal Code". Canada will also  
* be placed underneath the United States, with other countries following 
* alphabetically.
*
* If Canada is selected, the labels "Province" and "Postal code" will replace 
* the defaults. Canada will also be placed at the top of the list, with the
* United States and then other countries following alphabetically.
*
* If any other country is selected, the label "Postal code" will replace the 
* default, and the "State/Province" field will be set to "other" and hidden. 
* Salsa does not support any state/province values for countries other than the 
* United States and Canada, so there's no reason to confuse people.
*
* The default setting ('') leaves the selection form as it is.
*
* Enter the two-letter country code for the country you'd like to be selected. 
* For instance, to select the United States, change the value to 'US'; for 
* France, change the value to 'FR'.
*/

$clave_country_default = 'US';



/* 
*  *************************************************************************
*  End of user-configurable options. Do not modify anything below this line. 
*  *************************************************************************
*/



// Setting up reuseable variables.
var states_us = '<option value="">Select a state</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AS">American Samoa</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">D.C.</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="GU">Guam</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana</option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="MP">Northern Mariana Islands</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PA">Pennsylvania</option><option value="PR">Puerto Rico</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VI">Virgin Islands</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option><option value="AA">Armed Forces (the) Americas</option><option value="AE">Armed Forces Europe</option><option value="AP">Armed Forces Pacific</option><option value="ot">Other</option>';
var states_can = '<option value="">Select a province</option><option value="AB">Alberta</option><option value="BC">British Columbia</option><option value="MB">Manitoba</option><option value="NF">Newfoundland</option><option value="NB">New Brunswick</option><option value="NS">Nova Scotia</option><option value="NT">Northwest Territories</option><option value="NU">Nunavut</option><option value="ON">Ontario</option><option value="PE">Prince Edward Island</option><option value="QC">Quebec</option><option value="SK">Saskatchewan</option><option value="YT">Yukon Territory</option><option value="ot">Other</option>';

// Document ready
$(document).ready(function() {

/*
* 1. SEMANTIC CLASSES
*/

if($clave_semantic_classes) {
  $('.formRow input').each(function(){
    var inputname = $(this).attr("name");
    inputname = inputname.toLowerCase();
    $(this).parents('.formRow').addClass(inputname);
  });
  $('.formRow select').each(function(){
    var selectname = $(this).attr("name");
    selectname = selectname.toLowerCase();
    $(this).parents('.formRow').addClass(selectname);
  });
  $('.formRow textarea').each(function(){
    var textareaname = $(this).attr("name");
    textareaname = textareaname.toLowerCase();
    $(this).parents('.formRow').addClass(textareaname);
  });
}

/*
* 2. REMOVING FORCED CLEARING
*/

if($clave_remove_clears) {
  $('.salsa .clear').remove();
  $('.salsa .clearall').remove();
  $('.salsa br').remove();
}

/*
* 3. ADDRESS FIELDS DESIGNED FOR YOUR COUNTRY
*/

/*
* 3a. Country-specific labels for address fields
*/

if($clave_countrified_labels) {
  $('.country select').change(function() {
    if($(this).val() == 'US') {
      $('.zip label').text('Zip code');
      $('.state label').text('State');
      $('.state select').html(states_us);
      $('.state').slideDown(500);
    } else if($(this).val() == 'CA') {
      $('.zip label').text('Postal code');
      $('.state label').text('Province');
      $('.state select').html(states_can);
      $('.state').slideDown(500);
    } else {
      $('.zip label').text('Postal code');
      $('.state').slideUp(500);
      $('.state select option[value="ot"]').attr('selected','selected');
    }
  });
}

/*
* 3b. Pre-select a country
*/

// Ensure the value is uppercase.
$clave_country_sel = $clave_country_default.toUpperCase();

// Set the country
$('.country select option[value="' + $clave_country_sel + '"]').attr('selected','selected');

// United States-specific settings
if($clave_country_sel == 'US') {
  $('.zip label').text('Zip code');
  $('.state label').text('State');
  $('.state select').html(states_us);
  $('.country select option[value="CA"]').insertAfter($('.country select option[value="US"]'));
}

// Canada-specific settings
if($clave_country_sel == 'CA') {
  $('.zip label').text('Postal code');
  $('.state label').text('Province');
  $('.state select').html(states_can);
  $('.country select option[value="CA"]').insertAfter($('.country select option[value=""]'));
  $('.country select option[value="US"]').insertAfter($('.country select option[value="CA"]'));
}

}); // End of document ready
