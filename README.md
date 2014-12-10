# Salsa Clave

Salsa Clave allows you to create sophisticated, customized forms hosted in
the [Salsa Labs](https://www.salsalabs.com/) platform without resorting to
custom pages or embedded code -- meaning non-technical staff will be able to
more easily update them within the Salsa interface they already know.

## The purpose of Salsa Clave

Working with the frontend of forms output by the Salsa suite of hosted tools
for advocacy, donations and more is hard. The default web forms often have
usability problems that hinder your supporters, leading to fewer donations
and fewer actions. There's misleading or unnecessary text that's hardcoded
into the form; there's HTML tags with no classes (and sometimes text with no
HTML tags); there are buttons or important information in hard-to-find places.

Salsa Clave is a small set of JavaScript files (primarily jQuery) that refines
the Salsa forms' frontend.

Its primary purpose is to allow you to reorder, reword and retheme pieces of
the web forms Salsa outputs to suit your needs. Its method for most of this
work is to rewrite output in semantic, classed elements, and to provide the
ability for you to change hardcoded text in forms.

## How to use these files

Salsa Clave has code that's designed to be read. Each script file is heavily
commented, and includes features that you can enable or disable to suit your
needs.

Perhaps most importantly, because Salsa Clave allows you to rewrite the wording
on the forms, you'll want to determine what wording works for you, and set that
in the code.

## Features (version 0.5)

Salsa Clave is modular. The features listed below are optional, and are turned
off by default -- you only use and enable the features you need.

Each script file corresponds to a different package in Salsa's suite.
Currently, this includes:

* **clave-core.js** is required for any use, and is a good place to start
reading
* **clave-advocacy.js (in development)**, for use with petitions and targeted actions
* **clave-donations.js**, for use with the donations package
* **clave-profiles.js**, for use with the profile manager and unsubscribe pages
* **clave-storefronts.js**, for use with the storefronts package

Currently there is not a script file for the events or chapter Salsa packages.
The email package has no frontend display (outside of email) and therefore has
no script file.

### Core

Salsa Clave assigns semantic class names to all fields, allowing you to target
them specifically.

Want to highlight the zip code field on a signup page, the "personal message"
field on an action page, or the preferred donation amount field on your
donation form? By default, many of these fields have no class name, and are
contained in identically-named &lt;div&gt; elements with the class name
"formRow".

Salsa Clave gives them semantic names like "zip", "comment", and
"donation_amount--50". You can then easily target them with CSS rules or
further jQuery manipulation.

Additional features in core you can enable:

* Remove forced clearing (empty &lt;div&gt; elements and &lt;br&gt; tags).

* Add accessibility attributes to required form fields and error messages
(specifically, the HTML5 "required" attribute and the "aria-required"
attribute on required fields, and the WAI-ARIA role "alert" on error messages).

* Set a default country for all country fields.

* Change corresponding address labels based on the country selected -- e.g.
when "United States" is selected, "State" and "Zip code" are labels; when other
countries are selected, these are changed to "Province" and "Postal code".

### Donations

* Remove the "required" notation on donation form fields, since nearly every
field on a donation form is required.

* Move the donation amount fields before the other fields, an emerging best
practice.

* Add semantic classes to each of the donation amounts, so you can target
and style them specifically as necessary.

* Pre-select a donation amount.

* Pre-fill a donation amount based on a variable in a URL. This is particularly
useful in combination with Salsa's [dynamic merge fields](https://help.salsalabs.com/entries/22535062-Dynamic-Content-and-Merge-Fields-for-Email-Blasts#3),
allowing you to pre-fill a donation form based on a supporter's previous
donation.

* Set HTML5 field types on numerical fields to trigger a number keypad for
mobile users.

* Improve the "in honor of" and "in memory of" sections with true headers,
and optionally make them collapsible.

* Place the terms of service agreement at the end of the form, out of the
way.

### Advocacy

* [In development] Alter the list of petition signatures from a table into
&lt;div&gt; elements that can be floated or positioned (for instance,
responsively).

* [In development] Additional improvements to come.

### Profile manager

* Customize the hard-coded text on your default unsubscribe page.

* Add custom text to each stage of the unsubscribe process (often a four-page
process). Salsa does not provide any other mechanism for changing this text.

* [In development] Customize the hard-coded welcome text that greets
supporters when they load the "profile manager" page (often encountered when
clicking "update your profile" in an email from Salsa). Salsa does not provide
any other mechanism for changing this text.

* [In development] Remove tabs for packages you may not use (like local events)
or want supporters to have access to (like all past donations and purchases).

* [In development] Clarify the meaning for your supporters of "Group
Membership," which corresponds to Salsa's supporter groups and will almost
always be interpreted as "email lists to which I'm subscribed."

### Storefronts

* Add semantic classes to storefront items and their elements to make it easier
to style their display.

* Add classes to storefront pages, item details and checkout pages, which
otherwise can't be targeted.

* Automatically set the page &lt;title&gt; element to match the contents of the
first &lt;h1&gt; element, if one exists.

* Link item titles and images to the detail/purchase page.

* Convert storefront checkout &lt;table&gt; elements to classed &lt;div&gt;s
that won't break layouts or flow off-screen at narrow widths.

## Caveats

Salsa Clave is a set of JavaScript files that act on code output from Salsa.
This means that they can't (and don't) act on the page until the page loads. In
the case of some features, this means elements might "jump around" in front of
your eyes as the page is loaded, the scripts are loaded, and the scripts
perform their functions. This will generally only be noticeable when it
involves moving large parts of a form, and these situations are noted in the
scripts.

This effect can be mitigated to some extent by minifying your files (see
"Installation"). Additionally, for many users the larger form elements that are
being acted on will be "below the fold" -- that is, off the screen below
introductory text or images at the top of your form -- and will thus not be
noticeable.

Finally, Salsa Clave is designed to increase usability and beauty in your Salsa
pages. However, it does not ship with any defined CSS styles -- it simply gives
you the tools to more easily apply your own.

## Installation

Details TK

1. selecting the files for the packages you use
2. enabling the features you need
3. optionally concatenating the files
4. minifying the file(s)
5. uploading the file(s) to Salsa
6. updating your templates

Unfortunately, because Salsa exists in a hosted environment, there's no way to
effectively pull in git updates. Instead, when you upload your minified
versions of the scripts, you should add the latest version number from the top
of the script to the filename, e.g. **clave_1.0.js**.

## The name

Most components related to Salsa are a play on salsa, the food (e.g.
[Salsa recipes](http://www.salsalabs.com/devs/recipes/),
[WordPress Jalepeno](http://www.wpjalapeno.com/)). I decided to relate it to
salsa, the music.
[According to Wikipedia](http://en.wikipedia.org/wiki/Salsa_music#Clave):

> The most fundamental rhythmic element in salsa music is a pattern and concept
> known as clave. Clave is a Spanish word meaning 'code,' 'key,' as in key to a
> mystery or puzzle, or 'keystone,' the wedge-shaped stone in the center of an
> arch that ties the other stones together.

The clave (pronounced clah-vay) is, simply, the key to making the Salsa puzzle
more beautiful.

## Credits

Salsa Clave was created by Ivan Boothe of [Rootwork.org](http://rootwork.org).
I am a frontend developer working primarily with nonprofits and social change
organizations. I've been a user of Salsa (formerly Democracy in Action) in one
form or another since 2004.

The features of Salsa Clave were initially driven and funded by the
[Fellowship of Reconciliation](http://forusa.org), an interfaith organization
working for peace, justice and nonviolence since 1915.

## License

Copyright (C) 2014  Ivan Boothe

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

Full license available at
<https://github.com/rootwork/salsa-clave/blob/master/LICENSE.txt> and
<http://www.gnu.org/licenses/>.
