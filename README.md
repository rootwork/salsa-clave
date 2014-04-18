# The purpose of Salsa Clave

Working with the frontend of forms output by 
[Salsa Labs](https://www.salsalabs.com/) suite of hosted tools for advocacy, 
donations and more is hard. The default web forms often have usability problems 
that hinder your supporters, leading to fewer donations and fewer actions. 
There's misleading or unnecessary text that's hardcoded into the form; there's 
HTML tags with no classes (and sometimes text with no HTML tags); there are 
buttons or important information in hard-to-find places.

Salsa Clave is a small set of JavaScript files (primarily jQuery) that refines 
the Salsa forms' frontend. Its primary purpose is to allow you to reorder, 
reword and retheme pieces of the web forms Salsa outputs to suit your needs. 
Its method for most of this work is to rewrite output in semantic, classed 
elements, and to provide the code for you to change hardcoded text when 
necessary.

Salsa Clave allows you to create sophisticated, customized forms for donations, 
advocacy, etc. without resorting to custom pages or embedded code -- meaning 
non-technical staff will be able to easily update them within the Salsa 
interface they already know.

# Examples

* Salsa Clave assigns semantic class names to all fields, allowing you to 
target them specifically. Want to highlight the zip code field on a signup 
page, the "personal message" field on an action page, or the preferred donation 
amount field on your donation form? By default, many of these fields have 
no class name, and are contained in identically-named <div> elements with 
the class name "formRow". Salsa Clave gives them semantic names like "zip", 
"comment", and "donation_amount--50".

* Salsa Clave's donation component allows you to move the donation amount 
fields above the other fields, an emerging best practice.

* Salsa Clave's profile component allows you to modify the "profile" and 
"unsubscribe" pages supporters see when they modify their records with you. It 
enables you to alter the hardcoded welcome text, remove tabs to packages you 
may not use (like local events) or want supporters to have access to (like 
all past donation transactions), and clarify the meaning of "Group Membership" 
in the context of Salsa's email list signups.

* Salsa Clave's advocacy component rewrites the list of signatures from a 
table into <div> elements that can be positioned (for instance, responsively).

* And because Salsa Clave is modular, you only use and enable the packages and 
the features you need.

# Caveats

Salsa Clave is a set of JavaScript files that act on code output from Salsa. 
This means that they can't (and don't) act on the page until the page loads. In 
some cases, this means elements might "jump around" in front of your eyes as 
the page is loaded, the scripts are loaded, and the scripts perform their 
functions.

This can be mitigated to some extent by minifying your files (see 
"Installation"). Additionally, for many users the form elements that are being 
acted on will be "below the fold" -- that is, off the screen below introductory 
text or images at the top of your form -- and will thus not be noticeable.

Salsa Clave is designed to increase usability and beauty in your Salsa pages. 
However, it does not ship with any defined CSS styles -- it simply gives you 
the tools to more easily apply your own.

# How to use these files

Salsa Clave has code that's designed to be read. Each script file is heavily 
commented, and includes functions that you can comment in or out to suit your 
needs.

Perhaps most importantly, because Salsa Clave allows you to rewrite the wording 
on the forms, you'll want to determine what wording works for you, and change 
the code.

Each script file corresponds to a different package in Salsa's suite. 
Currently, this includes:

* **clave-advocacy.js**, for use with petitions and targeted actions
* **clave-fundraising.js**, for use with donations and storefronts
* **clave-profile.js**, for use with the profile manager and unsubscribe form

Currently there is not a script file for the events or chapter Salsa packages. 
The email package has no frontend display (outside of email) and therefore has 
no script file.

**clave-core.js** is required for any use, and is a good place to start 
reading.

# Installation

Details TK

1. selecting the files for the packages you use
2. commenting in the portions you need
3. optionally concatenating the files
4. minifying the file(s)
5. uploading the file(s) to Salsa
6. updating your templates

Unfortunately, because Salsa exists in a hosted environment, there's no way to 
effectively pull in git updates. We therefore recommend that when you upload 
your minified versions of the scripts, you add the latest version number from 
the top of the script to the filename, e.g. **clave_1.0.js**.

# The name

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

# License

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
