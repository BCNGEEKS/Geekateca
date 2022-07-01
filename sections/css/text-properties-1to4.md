---
layout: default
author: BCNGeeks
date: date
---

# TEXT PROPERTIES

## TABLE OF CONTENTS

- [TEXT PROPERTIES](#text-properties)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INDEX](#index)
  - [INTRODUCTION](#introduction)
  - [DIRECTION](#direction)
    - [PROPERTY VALUES](#property-values)
    - [CSS SYNTAX](#css-syntax)
    - [EXAMPLE](#example)
    - [BROWSER SUPPORT](#browser-support)
  - [LETTER-SPACING](#letter-spacing)
    - [PROPERTY VALUES FOR LETTER-SPACING](#property-values-for-letter-spacing)
    - [CSS SYNTAX FOR LETTER-SPACING](#css-syntax-for-letter-spacing)
    - [EXAMPLE FOR LETTER-SPACING](#example-for-letter-spacing)
    - [BROWSER SUPPORT FOR LETTER-SPACING](#browser-support-for-letter-spacing)
  - [LINE-HEIGHT](#line-height)
    - [PROPERTY VALUES FOR LINE-HEIGHT](#property-values-for-line-height)
    - [CSS SYNTAX FOR LINE-HEIGHT](#css-syntax-for-line-height)
    - [EXAMPLE FOR LINE-HEIGHT](#example-for-line-height)
    - [BROWSER SUPPORT FOR LINE-HEIGHT](#browser-support-for-line-height)
  - [TEXT-JUSTIFY](#text-justify)
    - [PROPERTY VALUES FOR TEXT-JUSTIFY](#property-values-for-text-justify)
    - [CSS SYNTAX FOR TEXT-JUSTIFY](#css-syntax-for-text-justify)
    - [EXAMPLE FOR TEXT-JUSTIFY](#example-for-text-justify)
    - [BROWSER SUPPORT FOR TEXT-JUSTIFY](#browser-support-for-text-justify)

---

## [INDEX](./index.md)

---

## INTRODUCTION

## DIRECTION

The `direction` property specifies the text direction/writing direction within a block-level element.

### PROPERTY VALUES

| Value       | Description                                             | Demo |
|:-----------:|:------------------------------------                    | :---: |
| ltr         | Text direction goes from left-to-right. This is default| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_direction) |
| rtl         | Text direction goes from right-to-left                | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_direction&preval=rtl) |
| initial     | Sets this property to its default value.                |  
| inherit     | Inherits this property from its parent element.         |  

### CSS SYNTAX

> direction: ltr | rtl | initial | inherit;

### EXAMPLE

Set the text direction to "right-to-left"

```CSS
p.rtl {
  direction: rtl;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_text_direction)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

| Browser        | Version            |
|:---------      |:-------------------|
| Chrome         | 2.0                |
| Explorer/Edge  | 5.5                |
| Firefox        | 1.0                |
| Safary         | 1.3                |
| Opera          | 9.2                |

---

## LETTER-SPACING

The `letter-spacing` property increases or decreases the space between characters in a text.

### PROPERTY VALUES FOR LETTER-SPACING

| Value       | Description                                             | Demo |
|:-----------:|:------------------------------------                    | :---: |
| normal      | Defines normal space between characters. This is default | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_letter-spacing) |
| length      | Defines a length that is used as the space between characters (negative values are also allowed). | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_letter-spacing&preval=3px) |
| initial     | Sets this property to its default value.                |  
| inherit     | Inherits this property from its parent element.         |  

### CSS SYNTAX FOR LETTER-SPACING

> letter-spacing: normal | length | initial | inherit;

### EXAMPLE FOR LETTER-SPACING

Set the letter spacing for **h1**, **h2**, and **h3** elements

```CSS
h1 {
  letter-spacing: 3px;
}

h2 {
  letter-spacing: 2px;
}

h3 {
  letter-spacing: -1px;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_letter-spacing)

### BROWSER SUPPORT FOR LETTER-SPACING

The numbers in the table specify the first browser version that fully supports the property.

| Browser  | Version            |
|:---------|:-------------------|
| Chrome   | 1.0 |
| Explorer/Edge  | 4.0 |
| Firefox  | 1.0 |
| Safary   | 1.0 |
| Opera    | 3.5 |

---

## LINE-HEIGHT

The `line-height` property specifies the height of a line.

### PROPERTY VALUES FOR LINE-HEIGHT

| Value       | Description                                             | Demo |
|:-----------:|:------------------------------------                    | :---: |
| normal      | Text direction goes from left-to-right. This is default| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_line-height) |
| number      | Text direction goes from right-to-left                | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_line-height&preval=2)   |
| length      | Sets this property to its default value.                |  [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_line-height&preval=25px) |
| %           | Inherits this property from its parent element.         |  [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_line-height&preval=150%25) |
| initial     | Inherits this property from its parent element.         |  
| inherit     | Inherits this property from its parent element.         |  

### CSS SYNTAX FOR LINE-HEIGHT

> line-height: normal | number | length | initial | inherit;

### EXAMPLE FOR LINE-HEIGHT

Set the line height for different **div** elements:

```CSS
div.a {
  line-height: normal;
}

div.b {
  line-height: 1.6;
}

div.c {
  line-height: 80%;
}

div.d {
  line-height: 200%;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_line-height)

### BROWSER SUPPORT FOR LINE-HEIGHT

The numbers in the table specify the first browser version that fully supports the property.

| Browser  | Version            |
|:---------|:-------------------|
| Chrome   | 1.0 |
| Explorer/Edge  | 4.0 |
| Firefox  | 1.0 |
| Safary   | 1.0 |
| Opera    | 7.0 |

---

## TEXT-JUSTIFY

The `text-justify` property specifies the justification method of text when text-align is set to "justify".

### PROPERTY VALUES FOR TEXT-JUSTIFY

| Value           |         Description                                             | Demo |
|:-----------:    |:------------------------------------                    | :---: |
| auto            | The browser determines the justification algorithm| [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-justify) |
| inter-word      | Increases/Decreases the space between words       | [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-justify&preval=inter-word)
| inter-character | Increases/Decreases the space between characters    | [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-justify&preval=inter-character) |
| none            | Disables justification methods                    | [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-justify&preval=none) |
| initial         | Sets this property to its default value.            | [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-justify&preval=initial) |
| inherit         | Inherits this property from its parent element.     |  

### CSS SYNTAX FOR TEXT-JUSTIFY

> text-justify: auto | inter-word | inter-character | none | initial | inherit;

### EXAMPLE FOR TEXT-JUSTIFY

Set the justification method to "inter-word" when text-align is set to "justify"

```CSS
div {
  text-align: justify;
  text-justify: inter-word;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_text-justify)

### BROWSER SUPPORT FOR TEXT-JUSTIFY

The numbers in the table specify the first browser version that fully supports the property.

| Browser  | Version            |
|:---------|:-------------------|
| Chrome   | Yes* |
| Explorer/Edge  | 11.0 |
| Firefox  | 55.0 |
| Safary   | 10.0.3 |
| Opera    | Yes* |

> *This feature is behind the Enable Experimental Web Platform Features preference (needs to be set to Enabled). To change preferences in Chrome: type in "chrome://flags" in the Chrome browser. To change preferences in Opera: type in "flags" in the Opera browser.

---
