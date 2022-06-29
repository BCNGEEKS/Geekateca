---
layout: default
author: BCNGeeks
date: date
---

# MEDIA QUERIES

## TABLE OF CONTENTS

- [MEDIA QUERIES](#media-queries)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INTRODUCTION](#introduction)
  - [@MEDIA](#media)
    - [PROPERTY VALUES](#property-values)
    - [EXAMPLE](#example)
    - [BROWSER SUPPORT](#browser-support)

---

## [INDEX](./index.md)

---

## INTRODUCTION

A media query consists of a media type and can contain one or more expressions, which resolve to either true or false.

## @MEDIA

The `@media` rule is used in media queries to apply different styles for different media types/devices.

Media queries can be used to check many things, such as:

- width and height of the viewport
- width and height of the device
- orientation (is the tablet/phone in landscape or portrait mode?)
- resolution

Using media queries are a popular technique for delivering a tailored style sheet (responsive web design) to desktops, laptops, tablets, and mobile phones.

You can also use media queries to specify that certain styles are only for printed documents or for screen readers (mediatype: print, screen, or speech).

### PROPERTY VALUES

| Value | Description                                            |
| :----:| :------                                                |
| all   | Default. Used for all media type devices               |
| print | Used for printers                                      |
|screen | Used for computer screens, tablets, smart-phones etc.  |
|speech | Used for screenreaders that "reads" the page out loud  |

> ### CSS SYNTAX
> @media not | only mediatype and (mediafeature and | or | not mediafeature) {
  CSS-Code;
}

### EXAMPLE

Change the background color of the **body** element to "lightblue" when the browser window is 600px wide or less

```CSS
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_media_bg)

Hide an element when the browser's width is 600px wide or less

```CSS
@media screen and (max-width: 600px) {
  div.example {
    display: none;
  }
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_media_hide)

Create a responsive navigation menu (displayed horizontally on large screens and vertically on small screens)

```CSS
@media screen and (max-width: 600px) {
  .topnav a {
    float: none;
    width: 100%;
  }
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_media_menu)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

|   Property    |   @media         |
| :-----------: |    :-----------  |
|   Chrome      |     21           |
|   Explorer    |     9            |
|   Firefox     |     3.5          |
|   Safari      |     4.0          |
|   Opera       |     9            |
