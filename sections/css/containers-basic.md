---
layout: default
author: BCNGeeks
date: date
---

# CONTAINERS BASIC

## TABLE OF CONTENTS

- [CONTAINERS BASIC](#containers-basic)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INDEX](#index)
  - [INTRODUCTION](#introduction)
  - [BOX-SHADOW](#box-shadow)
    - [PROPERTY VALUES](#property-values)
    - [CSS SYNTAX](#css-syntax)
    - [EXAMPLE](#example)
    - [BROWSER SUPPORT](#browser-support)
  - [BOX-SIZING](#box-sizing)
    - [PROPERTY VALUES FOR BOX-SIZING](#property-values-for-box-sizing)
    - [CSS SYNTAX FOR BOX-SIZING](#css-syntax-for-box-sizing)
    - [EXAMPLE FOR BOX-SIZING](#example-for-box-sizing)
    - [BROWSER SUPPORT FOR BOX-SIZING](#browser-support-for-box-sizing)
  - [VISIBILITY](#visibility)
    - [PROPERTY VALUES FOR VISIBILITY](#property-values-for-visibility)
    - [CSS SYNTAX FOR VISIBILITY](#css-syntax-for-visibility)
    - [EXAMPLE FOR VISIBILITY](#example-for-visibility)
    - [BROWSER SUPPORT FOR VISIBILITY](#browser-support-for-visibility)

---

## [INDEX](./index.md)

---

## INTRODUCTION

In this article we're gonna talk about the basic topics of containers.

## BOX-SHADOW

The `box-shadow` property attaches one or more shadows to an element.

### PROPERTY VALUES

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|    none     | Default value. No shadow is displayed | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_box-shadow&preval=none) |
|   h-offset    | Required. The horizontal offset of the shadow. A positive value puts the shadow on the right side of the box, a negative value puts the shadow on the left side of the box | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_box-shadow) |
|      v-offset      | Required. The vertical offset of the shadow. A positive value puts the shadow below the box, a negative value puts the shadow above the box | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_box-shadow) |
|   blur   | Optional. The blur radius. The higher the number, the more blurred the shadow will be | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_box-shadow&preval=20px%2020px%2010px%20grey) |
|   spread   | Optional. The spread radius. A positive value increases the size of the shadow, a negative value decreases the size of the shadow | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_box-shadow&preval=20px%2020px%2050px%2015px%20grey) |
|   color   | Optional. The color of the shadow. The default value is the text color. Look at CSS Color Values for a complete list of possible color values.| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_box-shadow&preval=20px%2020px%2020px%2010px%20red) |
|   inset   | Optional. Changes the shadow from an outer shadow (outset) to an inner shadow| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_box-shadow&preval=20px%2020px%2050px%2010px%20pink%20inset) |
|   initial   | Sets this property to its default value.  |
|   inherit   | Inherits this property from its parent element. |

### CSS SYNTAX

> box-shadow: none | h-offset v-offset blur spread color | inset | initial | inherit;

### EXAMPLE

Add shadows to different **div** elements:

```CSS
#example1 {
  box-shadow: 5px 10px;
}

#example2 {
  box-shadow: 5px 10px #888888;
}

```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_box-shadow)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

|   Property    |   box-shadow   |
| :-----------: | :----------- |
|   Chrome      |     10.0 4.0 -webkit-      |
|   Explorer    |     9.0      |
|   Firefox     |     4.0 3.5 -moz-      |
|   Safari      |     5.1 3.1 -webkit-      |
|   Opera       |     10.5      |

---

## BOX-SIZING

The `box-sizing` property defines how the width and height of an element are calculated: should they include padding and borders, or not.

### PROPERTY VALUES FOR BOX-SIZING

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|    content-box     | Default. The width and height properties (and min/max properties) includes only the content. Border and padding are not included | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_box-sizing&preval=content-box) |
|   border-box    | The width and height properties (and min/max properties) includes content, padding and border | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_box-sizing&preval=border-box) |
|   initial   | Sets this property to its default value.  |
|   inherit   | Inherits this property from its parent element. |

### CSS SYNTAX FOR BOX-SIZING

> box-sizing: content-box | border-box | initial | inherit;

### EXAMPLE FOR BOX-SIZING

Include padding and border in the element's total width and height

```CSS
#example1 {
  box-sizing: border-box;
}

```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_box-sizing)

Specify two bordered boxes side by side

```CSS
div {
  box-sizing: border-box;
  width: 50%;
  border: 5px solid red;
  float: left;
}

```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_box-sizing2)

### BROWSER SUPPORT FOR BOX-SIZING

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

|   Property    |   box-sizing   |
| :-----------: | :----------- |
|   Chrome      |     10.0 4.0 -webkit-      |
|   Explorer    |     8.0      |
|   Firefox     |     29.0 2.0 -moz-      |
|   Safari      |     5.1 3.2 -webkit-      |
|   Opera       |     9.5      |

---

## VISIBILITY

The `visibility` property specifies whether or not an element is visible.

### PROPERTY VALUES FOR VISIBILITY

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|    visible     | Default value. The element is visible | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_visibility) |
|   hidden    | The element is hidden (but still takes up space) | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_visibility&preval=hidden) |
|   collapse   | Only for table rows (**tr**), row groups (**tbody**), columns (**col**), column groups (**colgroup**). This value removes a row or column, but it does not affect the table layout.  |
|   initial   | Sets this property to its default value. |
|   inherit   | Inherits this property from its parent element. |

### CSS SYNTAX FOR VISIBILITY

> visibility: visible | hidden | collapse | initial | inherit;

### EXAMPLE FOR VISIBILITY

Make **h2** elements visible and hidden

```CSS
h2.a {
  visibility: visible;
}

h2.b {
  visibility: hidden;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_visibility)

### BROWSER SUPPORT FOR VISIBILITY

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

|   Property    |   visibility |
| :-----------: | :----------- |
|   Chrome      |     1.0      |
|   Explorer    |     4.0      |
|   Firefox     |     1.0      |
|   Safari      |     1.0      |
|   Opera       |     4.0      |
