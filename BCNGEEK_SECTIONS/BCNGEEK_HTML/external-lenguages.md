---
layout: default
author: BCNGeeks
date: 21th June 2022
---

# HTML EXTERNAL LANGUAGES

## TABLE OF CONTENT

- [HTML EXTERNAL LANGUAGES](#html-external-languages)
  - [TABLE OF CONTENT](#table-of-content)
  - [INDEX](#index)
  - [CSS](#css)
    - [INTRODUCTION](#introduction)
    - [ID](#id)
    - [EXAMPLES](#examples)
    - [CLASS](#class)
    - [EXAMPLE](#example)
    - [USING CSS](#using-css)
      - [INLINE CSS](#inline-css)
      - [EXAMPLE](#example-1)
      - [INTERNAL CSS](#internal-css)
      - [EXAMPLE](#example-2)
      - [EXTERNAL CSS](#external-css)
      - [EXAMPLE](#example-3)
  - [JAVASCRIPT](#javascript)
    - [SCRIPT](#script)
    - [EXAMPLE](#example-4)
    
---

## [INDEX](./index.md)

---

## CSS

### INTRODUCTION

Cascading Style Sheets (CSS) is used to format the layout of a webpage.

With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!

<br>

---

### ID

HTML id Attribute: The id attribute is a unique identifier which is used to specify the document. It is used by CSS and [JavaScript](#JAVASCRIPT) to perform a certain task for a unique element. In CSS, the id attribute is written using `#` symbol followed by id.

### EXAMPLES
 
    <!DOCTYPE html>
    <html>
    
    <head>
        <title>
            HTML id attribute
        </title>
        
        <style>
            #geeks{
                color:green;
                font-size:25px;
            }
        </style>
    </head>
    
    <body style="text-align:center">
        <h1>Geeks for Geeks</h1>
        <p id="geeks">Welcome to Geeks for Geeks</p>
    
        
    <p>A Computer Science portal for geeks</p>
    
    </body>
    
    </html> 

<br>

---

### CLASS

HTML class Attribute: The class attribute is used to specify one or more class names for an HTML element. The class attribute can be used on any HTML element. The class name can be used by CSS and [JavaScript](#JAVASCRIPT) to perform certain tasks for elements with the specified class name. The class name in CSS stylesheet using “.” symbol.

### EXAMPLE

    <!DOCTYPE html>
    <html>
    <head>
        <style>
            .geeks{
                color:green;
                font-size:25px;
            }
        </style>
    </head>
    
    <body style="text-align:center;">
        <h1>Geeks for Geeks</h1>
        
    <p> Welcome to Geeks for Geeks</p>
    
        <p class="geeks">
            A Computer Science portal for geeks
        </p>
    
    </body>
    
    </html> 
<br>

---

### USING CSS

CSS can be added to HTML documents in 3 ways:

- **Inline** - by using the `style` attribute inside HTML elements
- **Internal** - by using a `<style>` element in the `<head>` section
- **External** - by using a `<link>` element to link to an external CSS file

The most common for with apply css in html is the external CSS files, using the `<link>` tag

#### INLINE CSS

An inline CSS is used to apply a unique style to a single HTML element.

An inline CSS uses the style attribute of an HTML element.

#### EXAMPLE

    <h1 style="color:blue;">A Blue Heading</h1>

    <p style="color:red;">A red paragraph.</p>

In the example sets the text color of the ``<h1>`` element to blue, and the text color of the ``<p>`` element to red:

#### INTERNAL CSS

An internal CSS is used to define a style for a single HTML page.

An internal CSS is defined in the ``<head>`` section of an HTML page, within a ``<style>`` element.

#### EXAMPLE

    <!DOCTYPE html>
    <html>
    <head>
    <style>
    body {background-color: powderblue;}
    h1   {color: blue;}
    p    {color: red;}
    </style>
    </head>
    <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

    </body>
    </html>

The following example sets the text color of ALL the ``<h1>`` elements (on that page) to blue, and the text color of ALL the ``<p>`` elements to red. In addition, the page will be displayed with a "powderblue" background color:

#### EXTERNAL CSS

An external style sheet is used to define the style for many HTML pages.

To use an external style sheet, add a link to it in the <head> section of each HTML page:

#### EXAMPLE

    <!DOCTYPE html>
        <html>
            <head>
                <link rel="stylesheet" href="styles.css">
            </head>
            <body>
                <h1>This is a heading</h1>
                <p>This is a paragraph.</p>
            </body>
        </html>

Here is what the "styles.css" file looks like:

    body {
    background-color: powderblue;
    }
    h1 {
    color: blue;
    }
    p {
    color: red;
    }

---

## JAVASCRIPT

<br>

### SCRIPT

The `<script>` tag in HTML is used to define the client-side script. The `<script>` tag contains the scripting statements, or it points to an external script file. The JavaScript is mainly used in form validation, dynamic changes of content, image manipulation, etc.

### EXAMPLE

    <!DOCTYPE html>
        <html>
            <body>
                <h2>Use JavaScript to Change Text</h2>
                <p>This example writes "Hello JavaScript!" into an HTML element with id="demo":</p>
                <p id="demo"></p>
                <script>
                    document.getElementById("demo").innerHTML = "Hello JavaScript!";
                </script> 
            </body>
        </html>

This JavaScript example writes "Hello World!" into an HTML element with id="demo":
