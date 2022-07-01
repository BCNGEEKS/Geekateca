---
layout: default
author: BCNGeeks
date: date
---

# TEXT PROPERTIES

## TABLE OF CONTENTS

- [TEXT PROPERTIES](#text-properties)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INTRODUCTION](#introduction)
  - [DIRECTION](#direction)
    - [PROPERTY VALUES](#property-values)
    - [EXAMPLE](#example)
    - [BROWSER SUPPORT](#browser-support)
  - [LETTER-SPACING](#letter-spacing)
    - [PROPERTY VALUES](#property-values-1)
    - [EXAMPLE](#example-1)
    - [BROWSER SUPPORT](#browser-support-1)
  - [LINE-HEIGHT](#line-height)
    - [PROPERTY VALUES](#property-values-2)
    - [EXAMPLE](#example-2)
    - [BROWSER SUPPORT](#browser-support-2)
  - [TEXT-JUSTIFY](#text-justify)
    - [PROPERTY VALUES](#property-values-3)
    - [EXAMPLE](#example-3)
    - [BROWSER SUPPORT](#browser-support-3)

---

## [INDEX](./index.md)

---

## INTRODUCTION

## DIRECTION

The `direction` property specifies the text direction/writing direction within a block-level element.

### PROPERTY VALUES

| Value       | Description                                             | Demo |
|:-----------:|:------------------------------------                    | :---: |
| ltr         | Text direction goes from left-to-right. This is default	| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_direction) |
| rtl         | Text direction goes from right-to-left	                | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_direction&preval=rtl) |
| initial     | Sets this property to its default value.                |  
| inherit     | Inherits this property from its parent element.         |  

> ### CSS SYNTAX 
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

### PROPERTY VALUES

| Value       | Description                                             | Demo |
|:-----------:|:------------------------------------                    | :---: |
| normal      | Defines normal space between characters. This is default | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_letter-spacing) |
| length      | Defines a length that is used as the space between characters (negative values are also allowed). | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_letter-spacing&preval=3px) |
| initial     | Sets this property to its default value.                |  
| inherit     | Inherits this property from its parent element.         |  

> ### CSS SYNTAX 
> letter-spacing: normal | length | initial | inherit;

### EXAMPLE

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

### BROWSER SUPPORT
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

### PROPERTY VALUES

| Value       | Description                                             | Demo |
|:-----------:|:------------------------------------                    | :---: |
| normal      | Text direction goes from left-to-right. This is default	| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_line-height) |
| number      | Text direction goes from right-to-left	                | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_line-height&preval=2)   |
| length      | Sets this property to its default value.                |  [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_line-height&preval=25px) |
| %           | Inherits this property from its parent element.         |  [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_line-height&preval=150%25) |
| initial     | Inherits this property from its parent element.         |  
| inherit     | Inherits this property from its parent element.         |  

> ### CSS SYNTAX 
> line-height: normal | number | length | initial | inherit;


### EXAMPLE

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

### BROWSER SUPPORT
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

### PROPERTY VALUES

| Value           |         Description                                             | Demo |
|:-----------:    |:------------------------------------                    | :---: |
| auto            | The browser determines the justification algorithm	| [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-justify) |
| inter-word      | Increases/Decreases the space between words	        | [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-justify&preval=inter-word)   
| inter-character | Increases/Decreases the space between characters    | [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-justify&preval=inter-character) |
| none            | Disables justification methods	                    | [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-justify&preval=none) |
| initial         | Sets this property to its default value.            | [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_text-justify&preval=initial) |   
| inherit         | Inherits this property from its parent element.     |  

> ### CSS SYNTAX 
> text-justify: auto | inter-word | inter-character | none | initial | inherit;

### EXAMPLE

Set the justification method to "inter-word" when text-align is set to "justify"

```CSS
div {
  text-align: justify;
  text-justify: inter-word;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_text-justify)

### BROWSER SUPPORT
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