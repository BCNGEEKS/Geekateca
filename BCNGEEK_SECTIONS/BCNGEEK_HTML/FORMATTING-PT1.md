---
layout: default
author: BCNGeeks
date: 21th June 2022
---

# HTML FORMATTING

## TABLE OF CONTENTS

- [HTML FORMATTING](#html-formatting)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INDEX](#index)
  - [FORMATTING INTRODUCTION](#formatting-introduction)
  - [HEADINGS](#headings)
    - [EXAMPLE](#example)
    - [IMPORTANCE OF HEADINGS](#importance-of-headings)
  - [PARAGRAPHS](#paragraphs)
    - [EXAMPLE](#example-1)
    - [DISPLAY](#display)
      - [EXAMPLE](#example-2)
  - [LINE BREAKS](#line-breaks)
    - [EXAMPLE](#example-3)
  - [TYPOGRAPHY](#typography)
    - [BOLD TEXT](#bold-text)
      - [EXAMPLE](#example-4)
    - [EMPHASIZED ELEMENTS](#emphasized-elements)
      - [EXAMPLE](#example-5)
    - [ITALIC TEXT](#italic-text)
      - [EXAMPLE](#example-6)
    - [SMALL TEXT](#small-text)
      - [EXAMPLE](#example-7)
    - [STRONG TAG](#strong-tag)
      - [EXAMPLE](#example-8)
    - [SUBSCRIPT TEXT](#subscript-text)
      - [EXAMPLE](#example-9)
    - [SUPERSCRIPT TEXT](#superscript-text)
      - [EXAMPLE](#example-10)
    - [INSERT TAG](#insert-tag)
      - [EXAMPLE](#example-11)
    - [MARK TAG](#mark-tag)
      - [EXAMPLE](#example-12)

---

## [INDEX](./index.md)

---

## FORMATTING INTRODUCTION

HTML Formatting is a process of formatting text for better look and feel. HTML provides us ability to format text without using CSS. There are many formatting tags in HTML. These tags are used to make text bold, italicized, or underlined.

---

## HEADINGS

A HTML heading or HTML h tag can be defined as a title or a subtitle which you want to display on the webpage. When you place the text within the heading tags `<h1>`.........`</h1>`, it is displayed on the browser in the bold format and size of the text depends on the number of heading.

There are six different HTML headings which are defined with the `<h1>` to `<h6>` tags, from highest level h1 (main heading) to the least level h6 (least important heading).

`<h1>` is the largest heading tag and h6 is the smallest one. So `<h1>` is used for most important heading and `<h6>` is used for least important.

### EXAMPLE

    <h1>Heading 1</h1>

    <h2>Heading 2</h2>

    <h3>Heading 3</h3>

    <h4>Heading 4</h4>

    <h5>Heading 5</h5>

    <h6>Heading 6</h6>

Here we are showing how to the heading tag works.

### IMPORTANCE OF HEADINGS

Search engines use the headings to index the structure and content of your web pages.
Users often skim a page by its headings.

It is important to use headings to show the document structure.
`<h1>` headings should be used for main headings, followed by `<h2>` headings, then the less important `<h3>`, and so on.

---

## PARAGRAPHS

The HTML `<p>` element defines a paragraph.

A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.

### EXAMPLE

    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>

Here, we are using de `<p>` tag to create 2 different paragraphs.

### DISPLAY

You cannot be sure how HTML will be displayed.
LarGe or small screens, and resized windows will create different results.

With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.
The browser will automatically remove any extra spaces and lines when the page is displayed:

#### EXAMPLE

    <p>
    This paragraph
    contains         a lot of spaces
    in the source         code,
    but the        browser
    ignores it.
    </p>
In this example, we are showing that even if you write everything inside the tag with spaces, the display is gonna be a simple paragraph without the added spaces.

---

## LINE BREAKS

The HTML `<br>` element defines a line break.

Use `<br>` if you want a line break (a new line) without starting a new paragraph.
This tag is empty, which means that it has no end tag.

### EXAMPLE

    This is <br> a sentence <br> with line breaks

In this example we are showing how the tag `<br>` works and that the output is gonna be like this:

This is <br> a sentence <br> with line breaks.

---

## TYPOGRAPHY

### BOLD TEXT

The HTML `<b>` element defines bold text, without any extra importance.

#### EXAMPLE

    <b>This text is bold</b>

In this example is shown how the `<b>`tag works, the output should show something like:

<b>This text is bold</b>

---

### EMPHASIZED ELEMENTS

The HTML `<em>` element defines emphasized text. The content inside is typically displayed in italic.

#### EXAMPLE

    <em>This text is emphasized</em>

In this example we are showing how the tag works, it displays the text in italics:

<em>This text is emphasized</em>

---

### ITALIC TEXT

The HTML `<i>` element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.

**Tip:** The `<i>` tag is often used to indicate a technical term, a phrase from another language, a thought, a ship name, etc.

#### EXAMPLE

    <i>This text is italic</i>

<i>This text is italic</i>

---

### SMALL TEXT

If you want to put your font size smaller than the rest of the text then put the content within `<small>`.........`</small>` tag. It reduces one font size than the previous one.

#### EXAMPLE

    <small>Write the paragraph in smaller font.</small>

In this example we can see how the tag is used. The output should be something like the text below:

<small>Write the paragraph in smaller font.</small>

---

### STRONG TAG

The HTML `<strong>` tag is a logical tag, which displays the content in bold font and informs the browser about its logical importance. If you write anything between `<strong>`........ `</strong>`, is shown important text.

#### EXAMPLE

    <strong>This is an important content</strong>

<strong>This is an important content</strong>

---

### SUBSCRIPT TEXT

If you put the content within `<sub>`..............`</sub>` element, is shown in subscript ; means it is displayed half a character's height below the other characters.

#### EXAMPLE

    <sub>Write Your First Paragraph in subscript.</sub>

<sub>Write Your First Paragraph in subscript.</sub>

---

### SUPERSCRIPT TEXT

The `<sup>` tag defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font. Superscript text can be used for footnotes.

#### EXAMPLE

This text contains `<sup>`superscript`</sup>` text.

In this example we can see that what we have to do is write the text that we want to see smaller. Once we have it we should see something like:

This text contains <sup>superscript</sup> text.

---

### INSERT TAG

The `<ins>` element is used to identify text that has been inserted into a document. It is often paired with a `<del>` element which identifies deleted text replaced by the text contained in the `<ins>` element.

#### EXAMPLE

    My favorite color is <del>blue</del> <ins>red</ins>!

 My favorite color is <del>blue</del> <ins>red</ins>!

In this example we can see how the 2 tags are used.

---

### MARK TAG

The `<mark>` tag defines text that should be marked or highlighted.

#### EXAMPLE

    Do not forget to buy <mark>milk</mark> today.

Do not forget to buy <mark>milk</mark> today.
