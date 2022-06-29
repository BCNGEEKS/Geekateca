---
layout: default
author: BCNGeeks
date: 18th June 2022
---
# How To

## TABLE OF CONTENTS

- [WAYS TO INSERT CSS](#ways-to-insert-css)
  - [EXTERNAL CSS](#external-css)
  - [INTERNAL CSS](#internal-css)
  - [INLINE CSS](#inline-css)
- [CASCADING ORDER](#cascading-order)

---

## [INDEX](./index.md)

---

When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.

Before adding the CSS page you'll need a HTML page where to add it, after that you have 3 diferents ways to insert it:


## Ways to insert CSS:
- External CSS
- Internal CSS
- Inline CSS

&nbsp;

### External CSS

External CSS means having a CSS page where you can change the look of the website just by changing one file.

Each HTML page must include a reference to the external style sheet file inside the < link > element, inside the head section.


 ### Example
External styles are defined within the `<link>` element, inside the `<head>` section of an HTML page:
```HTML
    <!DOCTYPE html>
    <html>
    <head>
    <link rel="stylesheet" href="mystyle.css">
    </head>
    </html>
```
An external style sheet can be written in any text editor, and must be saved with a .css extension.

&nbsp;


### Internal CSS

Internal CSS means creating a `<style>` element, inside the head section.

This method is only used when a page has a unique style.

### Example
```HTML
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    body {
        background-color: linen;
    }

    h1 {
        color: maroon;
        margin-left: 40px;
    }
    </style>
    </head>
    </html>
```

&nbsp;

### Inline CSS

The use of inline CSS is limited to the element it is inside.

To use inline styles, add the style attribute to the relevant element.
The style attribute can contain any CSS property.

### Example
Inline styles are defined within the "style" attribute of the relevant element:
```HTML
    <!DOCTYPE html>
    <html>
    <body>

    <h1 style="color:blue;text-align:center;">This is a heading</h1>
    <p style="color:red;">This is a paragraph.</p>

    </body>
    </html>
```

## Cascading Order

There is a order that dictates which way of inserting CSS is going to be used, here is a list with the highest priority first to last:

1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default
