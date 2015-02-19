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
* A HELPFUL NOTE ON APPLYING YOUR TEMPLATES TO UNSUBSCRIBE AND PROFILE PAGES
*
* Salsa weirdly won't give you any options to access, change, or supply a
* different template for your primary unsubscribe page -- the one you get if
* you click "insert an unsubscribe link" in an email template creation form --
* it will simply use your default template. Similarly, the default link in
* emails to "update your profile" will use your default template.
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
* Similarly, if the default link to "update your profile" is:
*
* [Salsa URL]/o/[org ID]/profile/login.jsp
*
* then you'll want to change it to:
*
* [Salsa URL]/o/[org ID]/t/[template key]/profile/login.jsp
*
* Since the Salsa Clave settings for unsubscribe pages and profile pages are
* separate values but both contained in this script, I find it easiest to simply
* use the same template for both unsubscribe and profile pages.
*
* The final step for both unsubscribe pages and profile pages is to update your
* email template with the correct links. Otherwise, supporters who click those
* links will continue to be taken to your default pages without Salsa Clave
* settings in place.
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
* Additionally, we add a class of .profile to profile pages so you can target
* them specifically, and the following classes which should be self-evident:
*
*   .profile-login-title
*   .profile-login-intro
*   .profile-login-remember
*   .profile-login-wrap
*   .profile-login-section
*   .profile-login-form
*
* This is required for the rest of the script's functionality and enabled
* automatically.
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

// Replace the unsubscribe page title with custom text
$clave_profiles_unsub_title = '';

// Wrap the unsubscribe page title in an <h1> instead of an <h3>
$clave_profiles_unsub_header = false;

/*
* 2. REPLACE INTRODUCTORY TEXT ON UNSUBSCRIBE PAGE #1
*
* The default introduction to the first unsubscribe page (see "unsubscribe page
* basics" above) is:
*
* "Please verify your e-mail address to unsubscribe:"
*
* Insert custom text to replace this default text on the first unsubscribe page
* only.
*/

$clave_profiles_unsub_intro_replace = ''

/*
* 3. ADDITIONAL CUSTOM INTRO FOR PAGES #1, 2 AND 3
*
* By default, the complete unsubscribe page (see #3 in "unsubscribe page
* basics", above) has no introductory text. You can insert custom text using the
* first setting below. This will appear on the first page above the introductory
* text (either the default text or custom text set in Salsa Clave option 2
* above) and above Salsa's "header" text (see Salsa Clave option 4 below), if
* set, on the second and third unsubscribe pages.
*
* This will be wrapped in a <div> element with the class "header". You may use
* HTML in this text; if you do so you should be sure to set Salsa Clave option 4
* below to "true".
*/

// Set custom unsubscribe page intro (HTML will be interpreted)
$clave_profiles_unsub_intro_custom = '';

/*
* 4. REMOVE SALSA'S DEFAULT H4 TAG AROUND INTRODUCTORY TEXT
*
* Within Salsa's interface, you can create a custom unsubscribe page and include
* introductory text as a "header", which Salsa wraps in an <h4> element. Since
* this often looks strange with existing styles, you can use this setting to
* wrap the header in a <div> element instead. If you are setting custom text
* intro with HTML in Salsa Clave option 3 above, you should definitely set this
* to "true" to avoid it being wrapped in an <h4>.
*/

// Wrap the unsubscribe page intro in a <div>
$clave_profiles_unsub_intro_div = false;

/*
* 5a. CUSTOMIZE COMPLETELY UNSUBSCRIBED PAGE
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
* 5b. CUSTOMIZE PARTIALLY UNSUBSCRIBED PAGE
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
* 5c. CUSTOMIZE UNSUBSCRIBE CANCEL PAGE
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
* *****************
* PROFILE PAGES
* *****************
*/

/*
* PROFILE PAGE BASICS
*
* "User profiles" are Salsa's way of allowing supporters to manage their email
* subscriptions (if you have multiple lists, or groups), as well as view some
* information about their participation in the past, such as donations, actions
* and events.
*
* In order to access this section, your supporters have to log in at the profile
* login page, which is where they are taken if they click the "update your
* profile" link at the bottom of an email message.
*
* Note that you can only use a template for profile pages if you alter the
* default URL inserted into your emails -- see "a helpful note" at the very top
* of this file.
*/

/*
* 6. MODIFYING TEXT ON THE PROFILE LOGIN PAGE
*
* By default, the Salsa profile login page displays some pretty unengaging text
* (listed below), so you may wish to alter it to custom values.
*
* You may also enable the header setting to change the <h2> wrapped around the
* title to a semantically correct <h1> -- which is also more likely to match
* your existing styles.
*/

// Replace the profile login page title with custom text.
//
// Default text:
//   Manage Your Subscriptions
$clave_profiles_login_title = '';

// Wrap the profile login page title in an <h1> instead of an <h2>
$clave_profiles_login_header = false;

// Replace the profile login page introduction with custom text. HTML will be
// interpreted.
//
// Default text:
//    Please login below to do any of the following: unsubscribe from our email
//    lists, add subscriptions, edit your contact information, etc.
$clave_profiles_login_intro = '';

// Replace the profile login page section header with custom text.
//
// Default text:
//    Login now
$clave_profiles_login_section_title = '';


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

// Unsubscribe page helper classes
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

// Profile login page helper classes
if ($('#title:contains("Manage Your Subscriptions")').length) {
  $('body').addClass('profile');
  $('#title').addClass('profile-login-title');
  $('#desc').wrap('<div class="profile-login-intro"/>');
  $('.profile .login').addClass('profile-login-form');
  $('.profile .login h3:contains("Login now")').addClass('profile-login-section-title');
  $("#forgotpassword").contents().filter(function() { return this.nodeType != 1; }).wrap("<p class='profile-login-forgot-intro'></p>");
}

// Profile login page table removal
if ($('#title:contains("Manage Your Subscriptions")').length) {
  $('.profile .login > table').replaceWith('<p class="profile-login-remember"><input class="checkbox" type="checkbox" checked="checked" name="Remember_Me"> Keep me signed in for 2 weeks unless I sign out.</p>');
  $('.profile .salsa > table').each(function (){
    $(this).replaceWith( $(this).html()
      .replace(/<tbody/gi, "<div class='profile-login-wrap'")
      .replace(/<tr>/gi, "")
      .replace(/<\/tr>/gi, "")
      .replace(/<td/gi, "<div class='profile-login-section'")
      .replace(/<\/td>/gi, "</div>")
      .replace(/<\/tbody/gi, "<\/div")
    );
  });
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
* 2. REPLACE INTRODUCTORY TEXT ON UNSUBSCRIBE PAGE #1
*/

if($clave_profiles_unsub_intro_replace.length) {
  $('.unsubscribe p:contains("Please verify your e-mail address to unsubscribe:")').text($clave_profiles_unsub_intro_replace);
}

/*
* 3. ADDITIONAL CUSTOM INTRO FOR PAGES #1, 2 AND 3
*/

if($clave_profiles_unsub_intro_custom.length) {
  $('.unsubscribe .title').after('<div class="header">' + $clave_profiles_unsub_intro_custom + '</div>');
}

/*
* 4. REMOVE SALSA'S DEFAULT H4 TAG AROUND INTRODUCTORY TEXT
*/

if($clave_profiles_unsub_intro_div) {
  $('.unsubscribe h4.header').each(function() {
    $(this).replaceWith( '<div class="header">' + $(this).html() + '</div>' );
  });
}

/*
* 5a. CUSTOMIZE COMPLETELY UNSUBSCRIBED PAGE
*/

if($clave_profiles_unsub_complete_content.length) {
  $('.unsubscribe--complete div:contains("You were successfully removed from all future emails.")').replaceWith($clave_profiles_unsub_complete_content);
}

/*
* 5b. CUSTOMIZE PARTIALLY UNSUBSCRIBED PAGE
*/

if($clave_profiles_unsub_partial_content.length) {
  $('.unsubscribe--partial div:contains("You were successfully removed from the specified lists.")').replaceWith($clave_profiles_unsub_partial_content);
}

/*
* 5c. CUSTOMIZE UNSUBSCRIBE CANCEL PAGE
*/

if($clave_profiles_unsub_cancel_content.length) {
  $('.unsubscribe--cancel div:contains("Your subscription preferences are unchanged.")').replaceWith($clave_profiles_unsub_cancel_content);
}

/*
* 6. MODIFYING TEXT ON THE PROFILE LOGIN PAGE
*/

// Replace the profile login page title with custom text.
if($clave_profiles_login_title.length) {
  $('.profile-login-title').text($clave_profiles_login_title);
}

// Wrap the profile login page title in an <h1>
if($clave_profiles_login_header) {
  $('.profile-login-title').each(function() {
    $(this).replaceWith( '<h1 id="title" class="profile-login-title">' + $(this).html() + '</h1>' );
  });
}

// Replace the profile login page introduction with custom text.
if($clave_profiles_login_intro.length) {
  $('#desc').replaceWith($clave_profiles_login_intro);
}

// Replace the profile login page section header with custom text.
if($clave_profiles_login_section_title.length) {
  $('.profile-login-section-title').text($clave_profiles_login_section_title);
}

}); // End of document ready
