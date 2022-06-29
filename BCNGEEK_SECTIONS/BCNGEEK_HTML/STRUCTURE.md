---
layout: default
author: BCNGeeks
date: 21th June 2022
---

# STRUCTURE

## TABLE OF CONTENTS

- [STRUCTURE](#structure)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [HTML - !DOCTYPE](#html---doctype)
    - [BROWSER SUPPORT](#browser-support)
  - [BODY](#body)
    - [BROWSER SUPPORT](#browser-support-1)
    - [EXAMPLE](#example)
  - [HEAD](#head)
    - [TITLE](#title)
      - [EXAMPLE](#example-1)
    - [LINK](#link)
      - [EXAMPLE](#example-2)
    - [META](#meta)
      - [EXAMPLES](#examples)
      - [EXAMPLE](#example-3)
    - [BASE](#base)
      - [EXAMPLE](#example-4)

## HTML - !DOCTYPE
All HTML documents must start with a `<!DOCTYPE>` declaration.
The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect.
In HTML 5, the declaration is simple:

    <!DOCTYPE html>

In older HTML documents, the declaration is more complicated because the declaration must refer to a DTD(Document Type Definition).

HTML 4.01:

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    


### BROWSER SUPPORT 
| Browser  | `<!DOCTYPE html>`|
|:---------|:--------|
| Chrome   | Yes |
| Explorer/Edge  | Yes |
| Firefox  | Yes |
| Safary   | Yes |
| Opera    | Yes |

---

## BODY
The `<body>` tag defines the document's body.

The `<body>` element contains all the contents of an HTML document, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

Note: There can only be one `<body>` element in an HTML document.

### BROWSER SUPPORT
| Browser  | `<body>`|
|:---------|:--------|
| Chrome   | Yes |
| Explorer/Edge  | Yes |
| Firefox  | Yes |
| Safary   | Yes |
| Opera    | Yes |

### EXAMPLE
    <html>
    <head>
    <title>Title of the document</title>
    </head>

    <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
    </body>

    </html>

## HEAD
The HTML `<head>` element is a container for several elements. In this point the following elements will be treated: `<title>`, `<link>`, `<meta>`, `<base>` and `<lang>`.

### TITLE
The `<title>` element defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.

The `<title>` element is required in HTML documents!

The contents of a page title is very important for search engine optimization (SEO)! The page title is used by search engine algorithms to decide the order when listing pages in search results.

The `<title>` element:
- defines a title in the browser toolbar
- provides a title for the page when it is added to favorites
- displays a title for the page in search engine-results

#### EXAMPLE
    <!DOCTYPE html>
    <html>
    <head>
        <title>A Meaningful Page Title</title>
    </head>
    <body>

    The content of the document......

    </body>
    </html>

---

### LINK
The `<link>` element defines the relationship between the current document and an external resource.

The `<link>` tag is most often used to link to external style sheets:

#### EXAMPLE
    <link rel="stylesheet" href="mystyle.css">

---

### META
The `<meta>` element is typically used to specify the character set, page description, keywords, author of the document, and viewport settings.

The metadata will not be displayed on the page, but are used by browsers (how to display content or reload page), by search engines (keywords), and other web services.
#### EXAMPLES
Define the character set used:
    
    <meta charset="UTF-8">

Define keywords for search engines:

    <meta name="keywords" content="HTML, CSS, JavaScript">

Define a description of your web page:

    <meta name="description" content="Free Web tutorials">

Define the author of a page:

    <meta name="author" content="John Doe">

Refresh document every 30 seconds:

    <meta http-equiv="refresh" content="30">

Setting the viewport to make your website look good on all devices:

    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 

#### EXAMPLE
    <meta charset="UTF-8">
    <meta name="description" content="Free Web tutorials">
    <meta name="keywords" content="HTML, CSS, JavaScript">
    <meta name="author" content="John Doe">
    
---

### BASE
The `<base>` element specifies the base URL and/or target for all relative URLs in a page.

The `<base>` tag must have either an href or a target attribute present, or both.

There can only be one single `<base>` element in a document!

#### EXAMPLE
    <head>
    <base href="https://www.w3schools.com/" target="_blank">
    </head>

    <body>
    <img src="images/stickman.gif" width="24" height="39" alt="Stickman">
    <a href="tags/tag_base.asp">HTML base Tag</a>
    </body>
