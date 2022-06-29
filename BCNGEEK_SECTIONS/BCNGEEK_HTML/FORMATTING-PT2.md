---
layout: default
author: BCNGeeks
date: 21th June 2022
---

# HTML FORMATTING PT2

## TABLE OF CONTENTS

- [HTML FORMATTING PT2](#html-formatting-pt2)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INDEX](#index)
  - [CITE TAG](#cite-tag)
    - [EXAMPLE](#example)
  - [CODE TAG](#code-tag)
    - [EXAMPLE](#example-1)
  - [ABBREVIATION TAG](#abbreviation-tag)
    - [EXAMPLE](#example-2)
  - [QUOTATION TAG](#quotation-tag)
    - [EXAMPLE](#example-3)
  - [TIME TAG](#time-tag)
    - [EXAMPLE](#example-4)
  - [BLOCKQUOTE](#blockquote)
    - [EXAMPLE](#example-5)
  - [DIV TAG](#div-tag)
    - [EXAMPLE](#example-6)
  - [SPAN TAG](#span-tag)
    - [EXAMPLE](#example-7)
  - [PRE TAG](#pre-tag)
    - [EXAMPLE](#example-8)

---

## [INDEX](./INDEX.md)

---

## CITE TAG

The `<cite>` tag defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.).

**Note:** A person's name is not the title of a work.

The text in the `<cite>` element usually renders in italic.

### EXAMPLE

    <cite>The Scream</cite>

Here we are showing how the cite tag works. The display shoul be something like:
<cite>The Scream</cite>

---

## CODE TAG

The HTML `<code>` tag defines a fragment of computer code in the HTML document. Browsers traditionally render the text found within the `<code>` tag in monospace font. This tag is also commonly referred to as the `<code>` element.

### EXAMPLE

    <code>Computer code goes here</code>

---

## ABBREVIATION TAG

The `<abbr>` element is used along with a title attribute to associate a full-text explanation with an abbreviation or acronym. Website visitors do not see the text in the title attribute, but browsers, search engines, and assistive technologies do use this information.

### EXAMPLE

    The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.

In this example it is shown how the abbr tag works. You define the title inside the tag and then in the display result it appears underlined so that you know where the abbreviation is. 

The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.

---

## QUOTATION TAG

The `<q>` tag defines a short quotation.
Browsers normally insert quotation marks around the quotation.

### EXAMPLE

    <q>Build a future where people live in harmony with nature.</q>

---

## TIME TAG

The `<time>` tag defines a specific time (or datetime).

The datetime attribute of this element is used translate the time into a machine-readable format so that browsers can offer to add date reminders through the user's calendar, and search engines can produce smarter search results.

### EXAMPLE

    <time datetime="2008-02-14 20:00">Valentines day</time>

This tag is used as the abbreviation tag. You define the date inside the general tag.

<time datetime="2008-02-14 20:00">Valentines day</time>

---

## BLOCKQUOTE

The `<blockquote>` tag specifies a section that is quoted from another source.

Browsers usually indent `<blockquote>` elements (look at example below to see how to remove the indentation).

### EXAMPLE

    <blockquote cite="http://www.worldwildlife.org/who/index.html">
    For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization...
    </blockquote>

<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
</blockquote>

---

## DIV TAG

The `<div>` tag is an empty container that is used to define a division or a section. It does not affect the content or layout and is used to group HTML elements to be styled with CSS or manipulated with scripts.  Div tag has both open(`<div>`) and closing (`</div>`) tag and it is mandatory to close the tag.

### EXAMPLE
        <div style="background-color:#8ebf42">
            <p>This is a div example</p>
        </div>

<div style="background-color:#8ebf42">
      <p>This is a div example</p>
</div>

In this example we can see that the div tag is used to create "containers" where we can change the background color, the text color...

---

## SPAN TAG

The `<span>` tag is an inline container used to mark up a part of a text, or a part of a document. Is easily styled by CSS or manipulated with JavaScript using the class or id attribute.

The `<span>` tag is much like the `<div>` element, but `<div>` is a block-level element and `<span>` is an inline element.

### EXAMPLE

    <span style="color:blue;font-weight:bold">blue</span> eyes and my father has <span style="color:darkolivegreen;font-weight:bold">dark green</span>

<span style="color:blue;font-weight:bold">blue</span> eyes and my father has <span style="color:darkolivegreen;font-weight:bold">dark green</span>

---
## PRE TAG

The `<pre>` tag defines preformatted text.

Text in a `<pre>` element is displayed in a fixed-width font, and the text preserves both spaces and line breaks. The text will be displayed exactly as written in the HTML source code.

### EXAMPLE

    <pre>
    Text in a pre element
    is displayed in a fixed-width
    font, and it preserves
    both      spaces and
    line breaks
    </pre>

In this example we can observe that with this tag, if we have line breaks and spaces, it is conserved in the display result.

<pre>
Text in a pre element
is displayed in a fixed-width
font, and it preserves
both      spaces and
line breaks
</pre>
