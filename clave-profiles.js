/*
* CLAVE PROFILES
* Salsa Clave 0.8
* https://github.com/rootwork/salsa-clave
*
* Purpose: Modifications to the email unsubscribe forms and the Salsa profile
* manager.
*
* See README.md for complete installation instructions. This file must be used
* with clave-core.js.
*/

/*
* USAGE
*
* Most of the features in Salsa Clave are intentionally turned off by default.
*
* Each feature is heavily commented to explain its purpose, so you can choose
* whether or not to enable it.
*
* To enable a feature, change its value to "true".
*
* To disable a feature that has been enabled, change its value to "false".
*/

/*
* *****************
* UNSUBSCRIBE PAGES
* *****************
*/

/*
* UNSUBSCRIBE PAGE BASICS
*
* "The unsubscribe page" is actually a series of four pages:
*
* 1. The initial "verify your email" page that subscribers see if they're not
*    logged in to Salsa.
*
* 2. The subsequent "check your email" page that instructs subscribers to
*    follow a link in an email message to fully unsubscribe.
*
* 3. The complete unsubscribe page that subscribers see once they click that
*    link, or if they're already logged in. This has your public lists that
*    subscribers can opt in or out of.
*
* 4. The result page, which can be one of three:
*
*    - a confirmation that a subscriber has been completely unsubscribed
*    - a confirmation that a subscriber has been unsubscribed from one list
*    - a confirmation that a subscriber has canceled the unsubscribe process
*
* There are settings for each of these pages below.
*/

/*
* A HELPFUL NOTE ON APPLYING YOUR TEMPLATE UNSUBSCRIBE PAGES
*
* Salsa weirdly won't give you any options to access, change, or supply a
* different template for your primary unsubscribe page -- the one you get if
* you click "insert an unsubscribe link" in an email template creation form),
* it will simply use your default template.
*
* If you want to create a new unsubscribe page, you can do so in the "email"
* package, at the very bottom of the menu, "Create an Unsubscribe Page". You
* can also list your unsubscribe pages, but note that the built-in default page
* won't be among those listed.
*
* Alternatively, you can apply the template to your default form by adding its
* ID to the URL. If your unsubscribe link looks something like:
*
* [Salsa URL]/o/[org ID]/p/salsa/supporter/unsubscribe/public/[email tags]
*
* insert the template key after the organization ID and a "/t/" like so:
*
* [Salsa URL]/o/[org ID]/t/[template key]/p/salsa/supporter/unsubscribe/public/[email tags]
*
* You can find the ID of a template by going to the templates page and
* clicking edit (or inspecting the link); the key will be a number at the end
* of the URL.
*
* So if you use the standard Salsa domain, your organization ID is 99999, and
* your template key is 00000, the full URL for your email templates would be:
*
* https://org.salsalabs.com/o/99999/t/00000/p/salsa/supporter/unsubscribe/public/?Email=[[Email]]&email_blast_KEY=[[email_blast_KEY]]
*
* Note that whether you choose to create a new template or alter the URL of the
* default one, you'll need to update your email templates to point to the new
* link, or no one will ever see it!
*/

/*
* 0. HELPER CLASSES
*
* Salsa doesn't provide any way for us to target unsubscribe pages in
* particular, so this script does two things:
*
* - It creates a wrapper <div> with the class of .salsa and the id of #salsa,
*   an element that exists on every other Salsa page but not on these. This
*   might help trigger some of your styles automatically.
*
* - It adds a second class of .unsubscribe to that <div> so you can target
*   styles specifically to the unsubscribe pages.
*
* - It adds a third class to the three result pages (see #4 in "unsubscribe page
*   basics", above) with one of the following values:
*     .unsubscribe--complete
*     .unsubscribe--partial
*     .unsubscribe--cancel
*
* This is required for the rest of the script's functionality and enabled
* automatically.
*/

/*
* 1. UNSUBSCRIBE PAGE TITLE
*
* By default, the unsubscribe page has a title of "Unsubscribe". Insert an
* optional custom title below. Note this will override the title on all
* unsubscribe pages on which this script is used, so if you've created multiple
* unsubscribe pages, it will be easier to simply use Salsa's interface to give
* them different titles.
*
* Separately, enable the header setting to change the <h3> wrapped around the
* title to a semantically correct <h1> -- which is also more likely to match
* your existing styles.
*/

// Set the unsubscribe page title
$clave_profiles_unsub_title = '';

// Wrap the unsubscribe page title in an <h1>
$clave_profiles_unsub_header = false;

/*
* 2. UNSUBSCRIBE PAGE #1 INTRO
*
* The default introduction to the first unsubscribe page (see "unsubscribe page
* basics" above) is:
*
* "Please verify your e-mail address to unsubscribe:"
*
* Insert an optional custom introduction below.
*/

$clave_profiles_unsub_intro_1 = ''

/*
* 3. CUSTOM INTRO FOR PAGES #1, 2 AND 3
*
* By default, the complete unsubscribe page (see #3 in "unsubscribe page
* basics", above) has no introductory text. You can insert custom text using the
* first setting below. This will be wrapped in a <div> element with the class
* "header". You may use HTML in this text; if you do so you should be sure to
* set the second setting below to "true".
*
* This text will be prepended to the introductory text on the first unsubscribe
* page (Salsa Clave option 2 above).
*
* You can also create an unsubscribe page in Salsa's interface and include
* introductory text as a "header", which Salsa wraps in an <h4> element. Since
* this often looks strange with existing styles, you can use the second setting
* to wrap the header in a <div> element instead. If you are setting a custom
* intro with HTML in Salsa Clave option 2 above, you should definitely set this
* to "true" to avoid it being wrapped in an <h4>.
*/

// Set custom unsubscribe page #3 intro (HTML will be interpreted)
$clave_profiles_unsub_intro_3 = '';

// Wrap the unsubscribe page #3 intro in an <div>
$clave_profiles_unsub_intro_3_div = false;

/*
* 4a. CUSTOMIZE COMPLETELY UNSUBSCRIBED PAGE
*
* If a visitor is completely unsubscribed from all lists (see #4 in
* "unsubscribe page basics", above), they are shown a page with the notice "You
* were successfully removed from all future emails." styled like an error
* message.
*
* Replace the error-style <div> with new content. HTML will be interpreted.
*/

$clave_profiles_unsub_complete_content = '';

/*
* 4b. CUSTOMIZE PARTIALLY UNSUBSCRIBED PAGE
*
* If a visitor chooses only some lists from which to be unsubscribed (see #4 in
* "unsubscribe page basics", above), they are shown a page with the notice "You
* were successfully removed from the specified lists." styled like an error
* message.
*
* Replace the error-style <div> with new content. HTML will be interpreted.
*/

$clave_profiles_unsub_partial_content = '';

/*
* 4c. CUSTOMIZE UNSUBSCRIBE CANCEL PAGE
*
* If a visitor cancels the unsubscribe process (see #4 in "unsubscribe page
* basics", above), they are shown a page with the words "Your subscription
* preferences are unchanged" in an unstyled <div>.
*
* Customize the content of this page, which will be wrapped in a <div> with a
* class of "unsubscribe--cancel". HTML will be interpreted.
*/

$clave_profiles_unsub_cancel_content = '';


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

if ($('#salsa-unsubscribe-form').length) {
  $('body').wrapInner('<div class="salsa unsubscribe" id="salsa" />');
}

// If visitor is completely unsubscribed
if ($('div:contains("You were successfully removed from all future emails.")').length) {
  $('body').wrapInner('<div class="salsa unsubscribe unsubscribe--complete" id="salsa" />');
}

// If visitor is partially unsubscribed
if ($('div:contains("You were successfully removed from the specified lists.")').length) {
  $('body').wrapInner('<div class="salsa unsubscribe unsubscribe--partial" id="salsa" />');
}

// If visitor cancels unsubscribe process
if ($('div:contains("Your subscription preferences are unchanged.")').length) {
  $('body').wrapInner('<div class="salsa unsubscribe unsubscribe--cancel" id="salsa" />');
}

/*
* 1. UNSUBSCRIBE PAGE TITLE
*/

// Set the unsubscribe page title
if($clave_profiles_unsub_title.length) {
  $('.unsubscribe h3.title').text($clave_profiles_unsub_title);
}

// Wrap the unsubscribe page title in an <h1>
if($clave_profiles_unsub_header) {
  $('.unsubscribe h3.title').each(function() {
    $(this).replaceWith( '<h1 class="title">' + $(this).html() + '</h1>' );
  });
}

/*
* 2. UNSUBSCRIBE PAGE #1 INTRO
*/

if($clave_profiles_unsub_intro_1.length) {
  $('.unsubscribe p:contains("Please verify your e-mail address to unsubscribe:")').text($clave_profiles_unsub_intro_1);
}

/*
* 3. CUSTOM INTRO FOR PAGES #1, 2 AND 3
*/

// Set custom introductory text
if($clave_profiles_unsub_intro_3.length) {
  $('.unsubscribe .title').after('<div class="header">' + $clave_profiles_unsub_intro_3 + '</div>');
}

// Wrap the Salsa-provided introductory text in a <div> element
if($clave_profiles_unsub_intro_3_div) {
  $('.unsubscribe h4.header').each(function() {
    $(this).replaceWith( '<div class="header">' + $(this).html() + '</div>' );
  });
}

/*
* 4a. CUSTOMIZE PARTIALLY UNSUBSCRIBED PAGE
*/

if($clave_profiles_unsub_complete_content.length) {
  $('.unsubscribe--complete div:contains("You were successfully removed from all future emails.")').replaceWith($clave_profiles_unsub_complete_content);
}

/*
* 4b. CUSTOMIZE PARTIALLY UNSUBSCRIBED PAGE
*/

if($clave_profiles_unsub_partial_content.length) {
  $('.unsubscribe--partial div:contains("You were successfully removed from the specified lists.")').replaceWith($clave_profiles_unsub_partial_content);
}

/*
* 4c. CUSTOMIZE UNSUBSCRIBE CANCEL PAGE
*/

if($clave_profiles_unsub_cancel_content.length) {
  $('.unsubscribe--cancel div:contains("Your subscription preferences are unchanged.")').replaceWith($clave_profiles_unsub_cancel_content);
}

}); // End of document ready
