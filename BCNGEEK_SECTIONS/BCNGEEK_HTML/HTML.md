---
layout: default
author: BCNGeeks
date: 21th June 2022
---

# HTML

## TABLE OF CONTENTS

- [HTML](#html)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INTRODUCTION](#introduction)
    - [ABOUT HTML](#about-html)
  - [HOW TO](#how-to)
    - [GETTING STARTED WITH HTML](#getting-started-with-html)
      - [THE ANATOMY OF AN ELEMENT](#the-anatomy-of-an-element)
      - [AN EXAMPLE](#an-example)
      - [NESTING ELEMENTS](#nesting-elements)
      - [COMMENTS](#comments)
  - [HTML EDITORS](#html-editors)
    - [HTML USING NOTEPAD OR TEXEDIT](#html-using-notepad-or-texedit)
    - [TOP HTML IDES:](#top-html-ides)
  - [ELEMENTS TYPES](#elements-types)
    - [INTRODUCTION](#introduction-1)
    - [SEMANTIC ELEMENTS](#semantic-elements)
    - [NON-SEMANTIC ELEMENTS](#non-semantic-elements)
    - [EXAMPLES](#examples)

## INTRODUCTION

- HTML *(HyperText Markup Language)* is the standard markup language for Web pages.

- You can create your own Website. This markup language is used to give an estructure to a web page and tells web browsers how to structure the web pages you visit, is like the skeleton, and the css it's the make up.

- HTML uses “markup” to annotate text, images, and other content for display in a Web browser. HTML markup includes special “elements”.

---

### ABOUT HTML

This is a standard page of html

    <!DOCTYPE html>
    <html>
    <head>
    <title>Page Title</title>
    </head>
    <body>

    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>

    </body>
    </html>

**Also, you can check mozilla dev documentation**

[Mozilla DOCS](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML).

---

## HOW TO

### GETTING STARTED WITH HTML

Every element on HMTL has open content and closing structure.

#### THE ANATOMY OF AN ELEMENT

- The opening tag: This consists of the name of the element (in this example, p for paragraph), wrapped in opening and closing angle brackets. This opening tag marks where the element begins or starts to take effect. In this example, it precedes the start of the paragraph text.
- The content: This is the content of the element. In this example, it is the paragraph text.
- The closing tag: This is the same as the opening tag, except that it includes a forward slash before the element name. This marks where the element ends. Failing to include a closing tag is a common beginner error that can produce peculiar results.

<!-- end of the list -->

#### AN EXAMPLE

    <!DOCTYPE html>
    <html>
    <head>
    <title>Page Title</title>
    </head>
    <body>

    <h1>My First Heading</h1>
    <p>My first paragraph.</p>

    </body>
    </html>

What's mean's the tags?

- The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document.
- The `<html>` element is the root element of an HTML page.
- The `<head>` element contains meta information about the HTML page.
- The `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab).
- The `<body>` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
- The `<h1>` element defines a large heading.
- The `<p>` element defines a paragraph.

<!-- end of the list -->
---

#### NESTING ELEMENTS

Elements can be placed within other elements. This is called nesting. If we wanted to state that our cat is very grumpy, we could wrap the word very in a `<strong>` element, which means that the word is to have stronger text formatting:

    <p>My cat is <strong>very</strong> grumpy.</p>
You will get this:
<p>My cat is <strong>very</strong> grumpy.</p>

There is a right and wrong way to do nesting. In the example above, we opened the p element first, then opened the strong element. For proper nesting, we should close the strong element first, before closing the p.

The following is an example of the wrong way to do nesting:

    <p>My cat is <strong>very grumpy.</p></strong>

 You will get this: <p>My cat is <strong>very grumpy.</p></strong>

The tags have to open and close in a way that they are inside or outside one another. With the kind of overlap in the example above, the browser has to guess at your intent. This kind of guessing can result in unexpected results.

---

#### COMMENTS

HTML has a mechanism to write comments in the code. Browsers ignore comments, effectively making comments invisible to the user. The purpose of comments is to allow you to include notes in the code to explain your logic or coding. This is very useful if you return to a code base after being away for long enough that you don't completely remember it. Likewise, comments are invaluable as different people are making changes and updates.

EXAMPLE:

    <!-- Here you can write what you want to comment -->
---

## HTML EDITORS

Only a simple text editor is needed to write an HTML document.

### HTML USING NOTEPAD OR TEXEDIT

Web pages can be created and modified by using professional HTML editors. However, for learning HTML you can use a simple text editor like Notepad (PC) or TextEdit (Mac). Using a simple text editor is also good way to learn HTML.

### TOP HTML IDES:

- Visual Studio Code

  - Is one of the best and most demanding IDE on the market. This is a free open-source HTML editor from Microsoft that is compatible with Windows, Mac, and Linux. Users are able to use HTML, CSS, and JavaScript to create projects across different operating systems.
- Notepad++
  - Among the most popular HTML editors, Notepad + + is fast, time-tested, and foolproof. With its straightforward and clean user interface, Notepad++ has long been a top open-source HTML editor. Despite the fact that this HTML editor is exclusive to the Windows platform, Linux users can work with this program via Wine.
- Komodo Edit
  - The Komodo editor and the Komodo IDE are the two versions of Komodo. The editor is open-source and can be downloaded for free. It is a simplified version of IDE. Komodo Edit is an extremely powerful HTML IDE that supports Python, Perl, Ruby, HTML/CSS, JavaScript, as well as other programming languages. Windows, Linux, and Mac OS systems are supported by Komodo Edit. 
- Brackets
  - Bracket is undeniably one of the best HTML IDEs developed by Adobe Systems. As a powerful, lightweight editor, Brackets offers a number of great visual tools and preprocessor support that make designing in the browser easy.
- Sublime Text 3
  - Sublime Text 3 is an excellent option if you’re searching for one of the best HTML IDEs that’s also highly customizable. This IDE is fast and flexible, and will do everything a website developer would expect. It promises high performance and is extremely powerful. There is a paid version of Sublime, but the free version comes with all the features you need to begin coding.
- Atom
  - Is one of the most popular open-source HTML IDEs on the market that offers premium tools for free. It was developed and maintained by the GitHub community. It also provides access to open-source packages. Atom allows developers to add, modify, and share source code to improve its functionality.

<!-- end of the list -->
---
## ELEMENTS TYPES

### INTRODUCTION

In HTML there are two diferent types, Block Level or Semantic and Inline Level or non-Semantic elements.

---

![EXAMPLE](https://aws1.discourse-cdn.com/codecademy/original/5X/3/9/4/5/394533cfe910e89b6436e572576f3f3c751bdfa0.png)

### SEMANTIC ELEMENTS

A semantic element clearly describes its meaning to both the browser and the developer. Block elements are meant to structure the main parts of your page, by dividing your content in coherent blocks wth full width.

---

### NON-SEMANTIC ELEMENTS

Inline elements are meant to differentiate part of a text, to give it a particular function or meaning. Inline elements usually comprise a single or few words.

---

### EXAMPLES

**Semantic** elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

- paragraphs `<p>`
- lists: UL and LI
- headings `<h1>` to `<h6>`, articles `<article>`
- sections `<section>`
- long quotes `<blockquote>`
- Division `<div>`
- Form `<form>`
- Table `<table>`

**non-Semantic** elements: `<div>` and `<span>` - Tells nothing about its content.

- links `<a>`
- image `<img>`
- span `<span>`
- button `<button>`
- input `<input>`
- label `<label>`
- textarea `<textarea>`
- emphasised words `<em>`
- important words `<strong>`
- short quotes `<q>`
- Strong `<strong>`
