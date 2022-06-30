---
layout: default
author: BCNGeeks
date: 27th June 2022
--- 

# FONT

## TABLE OF CONTENT

- [TABLE OF CONTENT](#table-of-content)
- [INDEX](#index)
- [FONT](#introduction)
- [FONT-SIZE](#font-size)
- [FONT-STYLE](#font-style)
- [FONT-WEIGHT](#font-weight)

---

## [INDEX](./index.md)

---

## INTRODUCTION

The `font` property is a shorthand property for:

-- `font-style`, `font-variant`, `font-weight`, `font-size/line-height`, `font-family`.

The `font-size` and `font-family` values are required. If one of the other values is missing, their default value are used.

### PROPERTY VALUES

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   font-style    | Specifies the font style. Default value is "normal" |    [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-style)   |
|   font-variant    | Specifies the font variant. Default value is "normal" |    [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-variant)   |
|   font-weight    | Specifies the font weight. Default value is "normal"   |    [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-weight)   |
|   font-size/line-height | Specifies the font size and the line-height. Default value is "normal"  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-size)    |
|   font-family | Specifies the font family. Default value depends on the browser |  [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-family)   |

> ### CSS SYNTAX
>
>font: font-style font-variant font-weight font-size/line-height font-family|caption|icon|menu|message-box|small-caption|status-bar|initial|inherit;

### EXAMPLE

Set some font properties with the shorthand declaration:

```CSS
p.a {
  font: 15px Arial, sans-serif;
}

p.b {
  font: italic small-caps bold 12px/30px Georgia, serif;
}
```

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     1.0      |
|   Explorer    |     4.0      |
|   Firefox     |     1.0      |
|   Safari      |     1.0      |
|   Opera       |     3.5      |

---

## FONT-SIZE

The font-size property sets the size of a font.

### PROPERTY VALUES (FONT-SIZE)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   medium |    Sets the font-size to a medium size. This is default    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-size&preval=medium)    |
|   xx-small    |   Sets the font-size to an xx-small size  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-size&preval=xx-small)    |
|   x-small |    Sets the font-size to an extra small size  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-size&preval=x-small)    |
|   small   |   Sets the font-size to a small size  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-size&preval=small)    |
|   large   |   Sets the font-size to a large size  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-size&preval=large)    |
|   x-large |    Sets the font-size to an extra large size  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-size&preval=x-large)    |
|   xx-large    |   Sets the font-size to an xx-large size  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-size&preval=xx-large)    |
|   smaller |   Sets the font-size to a smaller size than the parent element    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-size&preval=smaller)    |
|   larger  |   Sets the font-size to a larger size than the parent element |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-size&preval=larger)    |
|   length  |   Sets the font-size to a fixed size in px, cm, etc. Read about length units  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-size&preval=10px)    |
|   %       |   Sets the font-size to a percent of  the parent element's font size  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-size&preval=50%25)    |
|   initial |   Sets this property to its default value. Read about initial |   |
|   inherit |   Inherits this property from its parent element. Read about inherit  |   |

> ### CSS SYNTAX (FONT-SIZE)
>
>font-size:medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit;

### EXAMPLE (FONT-SIZE)

Set the font size for different elements:

```CSS
div.a {
  font-size: 15px;
}

div.b {
  font-size: large;
}

div.c {
  font-size: 150%;
}
```

### BROWSER SUPPORT (FONT-SIZE)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     1.0      |
|   Explorer    |     5.5      |
|   Firefox     |     1.0      |
|   Safari      |     1.0      |
|   Opera       |     7.0      |

---

## FONT-STYLE

The font-style property specifies the font style for a text.

### PROPERTY VALUES (FONT-STYLE)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   normal  |   The browser displays a normal font style. This is default   |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-style)    |
|   italic  |   The browser displays an italic font style   |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-style&preval=italic)    |
|   oblique |   The browser displays an oblique font style  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-style&preval=oblique)    |
|   initial |   Sets this property to its default value. Read about initial |   |
|   inherit |   Inherits this property from its parent element. Read about inherit  |   |

> ### CSS SYNTAX (FONT-STYLE)
>
>font-style: normal|italic|oblique|initial|inherit;

### EXAMPLE (FONT-STYLE)

Set different font styles for three paragraphs:

```CSS
p.a {
  font-style: normal;
}

p.b {
  font-style: italic;
}

p.c {
  font-style: oblique;
}
```

### BROWSER SUPPORT (FONT-STYLE)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     1.0      |
|   Explorer    |     4.0      |
|   Firefox     |     1.0      |
|   Safari      |     1.0      |
|   Opera       |     7.0      |

---

## FONT-WEIGHT

The font-weight property sets how thick or thin characters in text should be displayed.

### PROPERTY VALUES (FONT-WEIGHT)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   normal  |   Defines normal characters. This is default  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-weight)    |
|   bold    |   Defines thick characters    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-weight&preval=bold)    |
|   bolder  |   Defines thicker characters  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-weight&preval=bolder)    |
|   lighter |   Defines lighter characters  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-weight&preval=lighter)    |
|   100; 200; 300; 400; 500; 600; 700; 800; 900; |   Defines from thin to thick characters. 400 is the same as normal, and 700 is the same as bold  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_font-weight&preval=900)    |
|   initial    |   Sets this property to its default value. Read about initial  |   |
|   inherit    |   Inherits this property from its parent element. Read about inherit   |   |

> ### CSS SYNTAX (FONT-WEIGHT)
>
>font-weight: normal|bold|bolder|lighter|number|initial|inherit;

### EXAMPLE (FONT-WEIGHT)

Set different font weight for three paragraphs:

```CSS
p.normal {
  font-weight: normal;
}

p.thick {
  font-weight: bold;
}

p.thicker {
  font-weight: 900;
}
```

### BROWSER SUPPORT (FONT-WEIGHT)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     2.0      |
|   Explorer    |     4.0      |
|   Firefox     |     1.0      |
|   Safari      |     1.3      |
|   Opera       |     3.5      |
