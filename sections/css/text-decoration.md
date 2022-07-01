---
layout: default
author: BCNGeeks
date: 27th June 2022
--- 

# TEXT-DECORATION

## TABLE OF CONTENT

- [TEXT-DECORATION](#text-decoration)
  - [TABLE OF CONTENT](#table-of-content)
  - [INDEX](#index)
  - [INTRODUCTION](#introduction)
    - [PROPERTY VALUES](#property-values)
    - [EXAMPLE](#example)
    - [BROWSER SUPPORT](#browser-support)
  - [TEXT-DECORATION-LINE](#text-decoration-line)
    - [PROPERTY VALUES (TEXT-DECORATION-LINE)](#property-values-text-decoration-line)
    - [EXAMPLE (TEXT-DECORATION-LINE)](#example-text-decoration-line)
    - [BROWSER SUPPORT (TEXT-DECORATION-LINE)](#browser-support-text-decoration-line)
  - [TEXT-DECORATION-STYLE](#text-decoration-style)
    - [PROPERTY VALUES (TEXT-DECORATION-STYLE)](#property-values-text-decoration-style)
    - [EXAMPLE (TEXT-DECORATION-STYLE)](#example-text-decoration-style)
    - [BROWSER SUPPORT (TEXT-DECORATION-STYLE)](#browser-support-text-decoration-style)
  - [TEXT-DECORATION-COLOR](#text-decoration-color)
    - [PROPERTY VALUES (TEXT-DECORATION-COLOR)](#property-values-text-decoration-color)
    - [EXAMPLE (TEXT-DECORATION-COLOR)](#example-text-decoration-color)
    - [BROWSER SUPPORT (TEXT-DECORATION-COLOR)](#browser-support-text-decoration-color)
  - [TEXT-DECORATION-THICKNESS](#text-decoration-thickness)
    - [PROPERTY VALUES (TEXT-DECORATION-THICKNESS)](#property-values-text-decoration-thickness)
    - [EXAMPLE (TEXT-DECORATION-THICKNESS)](#example-text-decoration-thickness)
    - [BROWSER SUPPORT (TEXT-DECORATION-THICKNESS)](#browser-support-text-decoration-thickness)

---

## [INDEX](./index.md)

---

## INTRODUCTION

The text-decoration property specifies the decoration added to text, and is a shorthand property for:

-- `text-decoration-line (required)`, `text-decoration-color`, `text-decoration-style`, `text-decoration-thickness`.

### PROPERTY VALUES

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   text-decoration-line    |   Sets the kind of text decoration to use (like underline, overline, line-through)    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-decoration-line)    |
|   text-decoration-color   |   Sets the color of the text decoration    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-decoration-color)    |
|   text-decoration-style   |   Sets the style of the text decoration (like solid, wavy, dotted, dashed, double)    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-decoration-style)    |
|   text-decoration-thickness   |   Sets the thickness of the decoration line   |   |
|   initial |   Sets this property to its default value. Read about initial |   |
|   inherit |   Inherits this property from its parent element. Read about inherit  |   |

> ### CSS SYNTAX
>
>text-decoration: text-decoration-line text-decoration-color text-decoration-style text-decoration-thickness|initial|inherit;

### EXAMPLE

Set different text decorations for `<h1>`, `<h2>`,`<h3>` and `<h4>` elements:

```CSS
h1 {
  text-decoration: overline;
}

h2 {
  text-decoration: line-through;
}

h3 {
  text-decoration: underline;
}

h4 {
  text-decoration: underline overline;
}
```

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     1.0      |
|   Explorer    |     3.0      |
|   Firefox     |     1.0      |
|   Safari      |     1.0      |
|   Opera       |     3.5      |

---

## TEXT-DECORATION-LINE

The text-decoration-line property sets the kind of text decoration to use (like underline, overline, line-through).

### PROPERTY VALUES (TEXT-DECORATION-LINE)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   none    |   Default value. Specifies no line for the text-decoration    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-decoration-line&preval=none)    |
|   underline   |   Specifies that a line will be displayed under the text  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-decoration-line&preval=underline)    |
|   overline    |   Specifies that a line will be displayed over the text    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-decoration-line&preval=overline)    |
|   line-through   |   Specifies that a line will be displayed through the text |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-decoration-line&preval=line-through)    |
|   initial   |   Sets this property to its default value. Read about initial |   |
|   inherit   |   Inherits this property from its parent element. Read about inherit  |   |

> ### CSS SYNTAX (TEXT-DECORATION-LINE)
>
>text-decoration-line: none|underline|overline|line-through|initial|inherit;

### EXAMPLE (TEXT-DECORATION-LINE)

Set different types of text-decoration lines:

```CSS
div.a {
  text-decoration-line: overline;
}

div.b {
  text-decoration-line: underline;
}

div.c {
  text-decoration-line: line-through;
}

div.d {
  text-decoration-line: overline underline;
}
```

### BROWSER SUPPORT (TEXT-DECORATION-LINE)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     57.0      |
|   Explorer    |     79.0      |
|   Firefox     |     36.0; 6.0 -moz-    |
|   Safari      |     12.1; 7.1 -webkit-      |
|   Opera       |     44.0      |

---

## TEXT-DECORATION-STYLE

The text-decoration-style property sets the style of the text decoration (like solid, wavy, dotted, dashed, double).

### PROPERTY VALUES (TEXT-DECORATION-STYLE)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   solid   |   Default value. The line will display as a single line   |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-decoration-style&preval=solid)    |
|   double   |   The line will display as a double line   |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-decoration-style&preval=double)    |
|   dotted   |   The line will display as a dotted line   |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-decoration-style&preval=dotted)    |
|   dashed   |   The line will display as a dashed line   |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-decoration-style&preval=dashed)    |
|   wavy   |   The line will display as a wavy line   |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-decoration-style&preval=wavy)    |
|   initial   |   Sets this property to its default value. Read about initial   |    |
|   inherit   |   Inherits this property from its parent element. Read about inherit       |    |

> ### CSS SYNTAX (TEXT-DECORATION-STYLE)
>
>text-decoration-style: solid|double|dotted|dashed|wavy|initial|inherit;

### EXAMPLE (TEXT-DECORATION-STYLE)

Set different types of text-decoration styles:

```CSS
div.a {
  text-decoration-line: underline;
  text-decoration-style: solid;
}

div.b {
  text-decoration-line: underline;
  text-decoration-style: wavy;
}

div.c {
  text-decoration-line: underline;
  text-decoration-style: double;
}

div.d {
  text-decoration-line: overline underline;
  text-decoration-style: wavy;
}
```

### BROWSER SUPPORT (TEXT-DECORATION-STYLE)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     57.0      |
|   Explorer    |     79.0      |
|   Firefox     |     36.0; 6.0 -moz-      |
|   Safari      |     12.1      |
|   Opera       |     44.0      |

---

## TEXT-DECORATION-COLOR

The text-decoration-color property specifies the color of the text-decoration (underlines, overlines, linethroughs).

### PROPERTY VALUES (TEXT-DECORATION-COLOR)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   color   |   Specifies the color of the text-decoration  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-decoration-color&preval=red)    |
|   initial |   Sets this property to its default value. Read about initial |   |
|   inherit |   Inherits this property from its parent element. Read about inherit| |

> ### CSS SYNTAX (TEXT-DECORATION-COLOR)
>
>text-decoration-color: color|initial|inherit;

### EXAMPLE (TEXT-DECORATION-COLOR)

Set the color of the text-decoration to red:

```CSS
p {
  text-decoration: underline;
  text-decoration-color: red;
}
```

### BROWSER SUPPORT (TEXT-DECORATION-COLOR)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     57.0      |
|   Explorer    |     79.0      |
|   Firefox     |     36.0; 6.0 -moz-      |
|   Safari      |     12.1; 7.1 -webkit-      |
|   Opera       |     44.0      |

---

## TEXT-DECORATION-THICKNESS

The text-decoration-thickness property specifies the thickness of the decoration line.

### PROPERTY VALUES (TEXT-DECORATION-THICKNESS)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   auto    |   The browser chooses the thickness of the decoration line    |   [Demo](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_text-decoration-thickness)    |
|   from-font   |   If a font file contains information about a preferred thickness, use that value. If not, behave as auto |   |
|   length/percentage   |   Specifies the thickness as a length or %    |   [Demo](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_text-decoration-thickness)    |
|   initial |   Sets this property to its default value. Read about initial |   |
|   inherit |   Inherits this property from its parent element. Read about inherit  |   |

> ### CSS SYNTAX (TEXT-DECORATION-THICKNESS)
>
>text-decoration-thickness: auto|from-font|length/percentage|initial|inherit;

### EXAMPLE (TEXT-DECORATION-THICKNESS)

Set different thickness of the decoration line for `<h1>`, `<h2>`, and `<h3>` elements:

```CSS
h1 {
  text-decoration: underline;
  text-decoration-thickness: auto;
}

h2 {
  text-decoration: underline;
  text-decoration-thickness: 5px;
}

h3 {
  text-decoration: underline;
  text-decoration-thickness: 50%;
}
```

### BROWSER SUPPORT (TEXT-DECORATION-THICKNESS)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     89.0      |
|   Explorer    |     89.0      |
|   Firefox     |     70.0      |
|   Safari      |     12.1      |
|   Opera       |     75.0      |
