---
layout: default
author: BCNGeeks
date: date
---

# BACKGROUND

## TABLE OF CONTENTS

- [BACKGROUND](#background)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INDEX](#index)
  - [INTRODUCTION](#introduction)
  - [BACKGROUND-COLOR](#background-color)
    - [PROPERTY VALUES](#property-values)
    - [CSS SYNTAX](#css-syntax)
    - [EXAMPLE](#example)
    - [BROWSER SUPPORT](#browser-support)
  - [BACKGROUND-IMAGE](#background-image)
    - [PROPERTY VALUES](#property-values-1)
    - [CSS SYNTAX](#css-syntax-1)
    - [EXAMPLE](#example-1)
    - [BROWSER SUPPORT](#browser-support-1)
  - [BACKGROUND-POSITION](#background-position)
    - [PROPERTY VALUES](#property-values-2)
    - [CSS SYNTAX](#css-syntax-2)
    - [EXAMPLE](#example-2)
    - [BROWSER SUPPORT](#browser-support-2)
  - [BACKGROUND-SIZE](#background-size)
    - [PROPERTY VALUES](#property-values-3)
    - [CSS SYNTAX](#css-syntax-3)
    - [EXAMPLE](#example-3)
    - [BROWSER SUPPORT](#browser-support-3)
  - [BACKGROUND-REPEAT](#background-repeat)
    - [PROPERTY VALUES](#property-values-4)
    - [CSS SYNTAX](#css-syntax-4)
    - [EXAMPLE](#example-4)
    - [BROWSER SUPPORT](#browser-support-4)
  - [BACKGROUND-ORIGIN](#background-origin)
    - [PROPERTY VALUES](#property-values-5)
    - [CSS SYNTAX](#css-syntax-5)
    - [EXAMPLE](#example-5)
    - [BROWSER SUPPORT](#browser-support-5)
  - [BACKGROUND-ATTACHMENT](#background-attachment)
    - [PROPERTY VALUES](#property-values-6)
    - [CSS SYNTAX](#css-syntax-6)
    - [EXAMPLE](#example-6)
    - [BROWSER SUPPORT](#browser-support-6)

---

## [INDEX](./index.md)

---

## INTRODUCTION

The CSS background properties are used to add background effects for elements.

## BACKGROUND-COLOR

The `background-color` property sets the background color of an element.

The background of an element is the total size of the element, including padding and border (but not the margin).

### PROPERTY VALUES

|    Value    |                      Description                     | Demo |
|:-----------:|                      :-----------                    | :--: |
|    color     | The browser calculates the height. This is default  | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-color) |
|   transparent    | Defines the height in px, cm, etc               | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-color&preval=transparent) |
|   initial   | Sets this property to its default value.             |
|   inherit   | Inherits this property from its parent element.      |

### CSS SYNTAX

> background-color: color | transparent | initial | inherit;

### EXAMPLE

Set the background color for a page:

```CSS
body {
    background-color: coral;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_background-color)

Specify the background color with an RGB value:

```CSS
body {
    background-color: rgb(201, 76, 76);
    }

```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_background-color3)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|   Property    |   background-color   |
| :-----------: |    :-----------      |
|   Chrome      |     1.0              |
|   Explorer    |     4.0              |
|   Firefox     |     1.0              |
|   Safari      |     1.0              |
|   Opera       |     3.5              |

---

## BACKGROUND-IMAGE

The `background-image` property sets one or more background images for an element.

By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.

### PROPERTY VALUES

|    Value    |                      Description                     | Demo |
|:-----------:|                      :-----------                    | :--: |
|    url('URL')     | The URL to the image. To specify more than one image, separate the URLs with a comma | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-image&preval=url(%27paper.gif%27)) |
|   none    | No background image will be displayed. This is default |
|   conic-gradient()   | Sets a conic gradient as the background image. Define at least two colors| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-image&preval=conic-gradient(red,%20yellow,%20green)) |
|   linear-gradient()   | Sets a linear gradient as the background image. Define at least two colors (top to bottom) | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-image&preval=repeating-conic-gradient(red%2010%25,%20yellow%2020%25)) |
|   radial-gradient()   | Sets a radial gradient as the background image. Define at least two colors (center to edges) | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-image&preval=radial-gradient(red,%20green,%20blue)) |
|   repeating-conic-gradient()   | Repeats a conic gradient | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-image&preval=repeating-conic-gradient(red%2010%25,%20yellow%2020%25)) |
|   repeating-linear-gradient()   | Repeats a linear gradient | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-image&preval=repeating-conic-gradient(red%2010%25,%20yellow%2020%25)) |
|   repeating-radial-gradient()   | Repeats a radial gradient | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-image&preval=repeating-conic-gradient(red%2010%25,%20yellow%2020%25)) |
|   initial   | Sets this property to its default value. |
|   inherit   | Inherits this property from its parent element. |

### CSS SYNTAX

> background-image: url | none | initial | inherit;

### EXAMPLE

Set a background-image for the **body** element

```CSS
body {
 background-image: url("paper.gif");
 background-color: #cccccc;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_background-image)

Set two background images for the **body** element:

```CSS
body {
  background-image: url("img_tree.gif"), url("paper.gif");
  background-color: #cccccc;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_background_multiple)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|   Property    |   background-image   |
| :-----------: |    :-----------      |
|   Chrome      |     1.0              |
|   Explorer    |     4.0              |
|   Firefox     |     1.0              |
|   Safari      |     1.0              |
|   Opera       |     3.5              |

---

## BACKGROUND-POSITION

The `background-position` property sets the starting position of a background image.

### PROPERTY VALUES

|    Value    |                      Description                     | Demo |
|:-----------:|                      :-----------                    | :--: |
|    left top, left center, left bottom, right top, right center, right bottom, center top, center center, center bottom  | If you only specify one keyword, the other value will be "center" | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-position) |
|   x%, y%    | The first value is the horizontal position and the second value is the vertical.| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-position&preval=10%25%2040%25) |
|   xpos, ypos   | The first value is the horizontal position and the second value is the vertical. | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-position&preval=50px%20100px) |
|   initial   | Sets this property to its default value.      |
|   inherit   | Inherits this property from its parent element.      |

### CSS SYNTAX

> background-position: value;

### EXAMPLE

How to position a background-image

```CSS
body {
  background-image: url('w3css.gif');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_background-position)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|   Property    |  background-position |
| :-----------: |    :-----------      |
|   Chrome      |     1.0              |
|   Explorer    |     4.0              |
|   Firefox     |     1.0              |
|   Safari      |     1.0              |
|   Opera       |     3.5              |

---

## BACKGROUND-SIZE

The `background-size` property specifies the size of the background images.

### PROPERTY VALUES

|    Value    |                      Description                     | Demo |
|:-----------:|                      :-----------                    | :--: |
|    auto     | Default value. The background image is displayed in its original size | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-size&preval=auto) |
|   length    | Sets the width and height of the background image. The first value sets the width, the second value sets the height. | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-size&preval=30px) |
|   percentage   | Sets the width and height of the background image in percent of the parent element. The first value sets the width, the second value sets the height. | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-size&preval=50%25) |
|   cover   | Resize the background image to cover the entire container, even if it has to stretch the image or cut a little bit off one of the edges | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-size&preval=cover) |
|   contain   | Resize the background image to make sure the image is fully visible | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-size&preval=contain) |
|   initial   | Sets this property to its default value.  |
|   inherit   | Inherits this property from its parent element.      |

### CSS SYNTAX

> background-size: auto | length | cover | contain | initial | inherit;

### EXAMPLE

Specify the size of a background-image with "auto" and in pixels

```CSS
#example1 {
  background: url(mountain.jpg);
  background-repeat: no-repeat;
  background-size: auto;
}

#example2 {
  background: url(mountain.jpg);
  background-repeat: no-repeat;
  background-size: 300px 100px;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_background-size)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit-, -moz-, or -o- specify the first version that worked with a prefix.

|   Property    |  background-size     |
| :-----------: |    :-----------      |
|   Chrome      |     4.0 1.0 -webkit- |
|   Explorer    |     9.0              |
|   Firefox     |     4.0 3.6 -moz-    |
|   Safari      |     4.1 3.0 -webkit- |
|   Opera       |     10.5 10.0 -o-    |

---

## BACKGROUND-REPEAT

The `background-repeat` property sets if/how a background image will be repeated.

By default, a background-image is repeated both vertically and horizontally.

### PROPERTY VALUES

|    Value    |                      Description                     | Demo |
|:-----------:|                      :-----------                    | :--: |
|    repeat     | The browser calculates the height. This is default  | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-repeat) |
|   repeat-x    | Defines the height in px, cm, etc               | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-repeat&preval=repeat-x) |
|   repeat-y   | Sets this property to its default value.             | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-repeat&preval=repeat-y) |
|   no-repeat   | Inherits this property from its parent element.      | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-repeat&preval=no-repeat) |
|   space      | Inherits this property from its parent element.      | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-repeat&preval=space) |
|   round   | Inherits this property from its parent element.      | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-repeat&preval=round) |
|   initial   | Inherits this property from its parent element.      |
|   inherit   | Inherits this property from its parent element.      |

### CSS SYNTAX

> background-repeat: repeat | repeat-x | repeat-y | no-repeat | initial | inherit;

### EXAMPLE

Repeat a background-image only vertically

```CSS
body {
  background-image: url("paper.gif");
  background-repeat: repeat-y;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_background-repeaty)

Repeat a background image both vertically and horizontally (this is default):

```CSS
body {
  background-image: url("paper.gif");
  background-repeat: repeat-x;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_background-repeatx)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|   Property    |  background-repeat  |
| :-----------: |    :-----------     |
|   Chrome      |     1.0             |
|   Explorer    |     4.0             |
|   Firefox     |     1.0             |
|   Safari      |     1.0             |
|   Opera       |     3.5             |

---

## BACKGROUND-ORIGIN

The `background-origin` property specifies the origin position (the background positioning area) of a background image.

### PROPERTY VALUES

|    Value    |                      Description                     | Demo |
|:-----------:|                      :-----------                    | :--: |
|    padding-box     | Default value. The background image starts from the upper left corner of the padding edge | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-origin) |
|   border-box    | The background image starts from the upper left corner of the border | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-origin&preval=border-box) |
|   content-box   | The background image starts from the upper left corner of the content |  [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_background-origin&preval=content-box) |
|   initial   | Sets this property to its default value      |
|   inherit   | Inherits this property from its parent element. |

### CSS SYNTAX

> background-origin: padding-box | border-box | content-box | initial | inherit;

### EXAMPLE

Let the background-image start from the upper left corner of the content

```CSS
#example1 {
  border: 10px dashed black;
  padding: 25px;
  background: url(paper.gif);
  background-repeat: no-repeat;
  background-origin: content-box;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_background-origin)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|   Property    |  background-origin  |
| :-----------: |    :-----------     |
|   Chrome      |     4.0             |
|   Explorer    |     9.0             |
|   Firefox     |     4.0             |
|   Safari      |     3.0             |
|   Opera       |     10.5            |

---

## BACKGROUND-ATTACHMENT

The `background-attachment` property sets whether a background image scrolls with the rest of the page, or is fixed.

### PROPERTY VALUES

|    Value    |                      Description                                |
|:-----------:|                      :-----------                               |
|    scroll   | The background image will scroll with the page. This is default |
|   fixed     | The background image will not scroll with the page              |
|   local     | The background image will scroll with the element's contents    |
|   initial   | Sets this property to its default value.                        |
|   inherit   | Inherits this property from its parent element.                 |

### CSS SYNTAX

> background-attachment: scroll | fixed | local | initial | inherit;

### EXAMPLE

A background-image that will not scroll with the page (fixed).

```CSS
body {
  background-image: url("img_tree.gif");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_background-attachment)

A background-image that will scroll with the page (scroll). This is default.

```CSS
body {
  background-image: url("img_tree.gif");
  background-repeat: no-repeat;
  background-attachment: scroll;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_background-attachment2)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|   Property    | background-attachment |
| :-----------: |    :-----------       |
|   Chrome      |     1.0               |
|   Explorer    |     4.0               |
|   Firefox     |     1.0               |
|   Safari      |     1.0               |
|   Opera       |     3.5               |
