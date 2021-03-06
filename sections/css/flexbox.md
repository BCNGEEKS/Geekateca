---
layout: default
author: BCNGeeks
date: date
---

# FLEXBOX

## TABLE OF CONTENTS

- [FLEXBOX](#flexbox)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INDEX](#index)
  - [INTRODUCTION](#introduction)
  - [FLEX-BASIS](#flex-basis)
    - [PROPERTY VALUES](#property-values)
    - [CSS SYNTAX](#css-syntax)
    - [EXAMPLE](#example)
    - [BROWSER SUPPORT](#browser-support)
  - [FLEX-DIRECTION](#flex-direction)
    - [PROPERTY VALUES FOR FLEX-DIRECTION](#property-values-for-flex-direction)
    - [CSS SYNTAX FOR FLEX-DIRECTION](#css-syntax-for-flex-direction)
    - [EXAMPLE FOR FLEX-DIRECTION](#example-for-flex-direction)
    - [BROWSER SUPPORT FOR FLEX-DIRECTION](#browser-support-for-flex-direction)
  - [FLEX-GROW](#flex-grow)
    - [PROPERTY VALUES FOR FLEX-GROW](#property-values-for-flex-grow)
    - [CSS SYNTAX FOR FLEX-GROW](#css-syntax-for-flex-grow)
    - [EXAMPLE FOR FLEX-GROW](#example-for-flex-grow)
    - [BROWSER SUPPORT FOR FLEX-GROW](#browser-support-for-flex-grow)
  - [FLEX-SHRINK](#flex-shrink)
    - [PROPERTY VALUES FOR FLEX-SHRINK](#property-values-for-flex-shrink)
    - [CSS SYNTAX FOR FLEX-SHRINK](#css-syntax-for-flex-shrink)
    - [EXAMPLE FOR FLEX-SHRINK](#example-for-flex-shrink)
    - [BROWSER SUPPORT FOR FLEX-SHRINK](#browser-support-for-flex-shrink)
  - [FLEX-WRAP](#flex-wrap)
    - [PROPERTY VALUES FOR FLEX-WRAP](#property-values-for-flex-wrap)
    - [CSS SYNTAX FOR FLEX-WRAP](#css-syntax-for-flex-wrap)
    - [EXAMPLE FOR FLEX-WRAP](#example-for-flex-wrap)
    - [BROWSER SUPPORT FOR FLEX-WRAP](#browser-support-for-flex-wrap)

---

## [INDEX](./index.md)

---

## INTRODUCTION

The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.

## FLEX-BASIS

The `flex-basis` property specifies the initial length of a flexible item.

### PROPERTY VALUES

|    Value    |                      Description                     | Demo |
|:-----------:|                      :-----------                    | :--: |
|    number     | A length unit, or percentage, specifying the initial length of the flexible item(s)| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_flex-basis&preval=10px) |
|   auto    | Default value. The length is equal to the length of the flexible item. If the item has no length specified, the length will be according to its content | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_flex-basis&preval=auto) |
|   initial   | Sets this property to its default value.             |
|   inherit   | Inherits this property from its parent element.      |

### CSS SYNTAX

> flex-basis: number | auto | initial | inherit;

### EXAMPLE

Set the initial length of the second flex-item to 100 pixels

```CSS
div:nth-of-type(2) {
  flex-basis: 100px;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_flex-basis)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

|   Property    |   flex-basis           |
| :-----------: |    :-----------        |
|   Chrome      |     29.0 21.0 -webkit- |
|   Explorer    |     11.0               |
|   Firefox     |     28.0 18.0 -moz-    |
|   Safari      |     9.0 6.1 -webkit-   |
|   Opera       |     17.0               |

---

## FLEX-DIRECTION

The `flex-direction` property specifies the direction of the flexible items.

### PROPERTY VALUES FOR FLEX-DIRECTION

|    Value    |                      Description                     | Demo |
|:-----------:|                      :-----------                    | :--: |
|    row     | Default value. The flexible items are displayed horizontally, as a row | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_flex-direction&preval=row) |
|   row-reverse    | Same as row, but in reverse order | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_flex-direction&preval=row-reverse) |
|   column   | The flexible items are displayed vertically, as a column| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_flex-direction&preval=column) |
|   column-reverse   | Same as column, but in reverse order| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_flex-direction&preval=column-reverse) |
|   initial   | Sets this property to its default value. |
|   inherit   | Inherits this property from its parent element. |

### CSS SYNTAX FOR FLEX-DIRECTION

> flex-direction: row | row-reverse | column | column-reverse | initial | inherit;

### EXAMPLE FOR FLEX-DIRECTION

Set the direction of the flexible items inside the **div** element in reverse order

```CSS
div {
  display: flex;
  flex-direction: row-reverse;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_flex-direction)

### BROWSER SUPPORT FOR FLEX-DIRECTION

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

|   Property    |   flex-direction       |
| :-----------: |    :-----------        |
|   Chrome      |     29.0 21.0 -webkit- |
|   Explorer    |     11.0               |
|   Firefox     |     28.0 18.0 -moz-    |
|   Safari      |     9.0 6.1 -webkit-   |
|   Opera       |     17.0               |

---

## FLEX-GROW

The `flex-grow` property specifies how much the item will grow relative to the rest of the flexible items inside the same container.

### PROPERTY VALUES FOR FLEX-GROW

|    Value    |                      Description                     | Demo |
|:-----------:|                      :-----------                    | :--: |
|    number     | A number specifying how much the item will grow relative to the rest of the flexible items. Default value is 0 | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_flex-grow) |
|   initial   | Sets this property to its default value.             |
|   inherit   | Inherits this property from its parent element.      |

### CSS SYNTAX FOR FLEX-GROW

> flex-grow: number | initial | inherit;

### EXAMPLE FOR FLEX-GROW

Let the second flex-item grow three times wider than the rest

```CSS
div:nth-of-type(1) {flex-grow: 1;}
div:nth-of-type(2) {flex-grow: 3;}
div:nth-of-type(3) {flex-grow: 1;}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_flex-grow)

### BROWSER SUPPORT FOR FLEX-GROW

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

|   Property    |   flex-grow            |
| :-----------: |    :-----------        |
|   Chrome      |     29.0 21.0 -webkit- |
|   Explorer    |     11.0               |
|   Firefox     |     28.0 18.0 -moz-    |
|   Safari      |     9.0 6.1 -webkit-   |
|   Opera       |     17.0               |

---

## FLEX-SHRINK

The `flex-shrink` property specifies how the item will shrink relative to the rest of the flexible items inside the same container.

### PROPERTY VALUES FOR FLEX-SHRINK

|    Value    |                      Description                     | Demo |
|:-----------:|                      :-----------                    | :--: |
|    number     | A number specifying how much the item will shrink relative to the rest of the flexible items. Default value is 1 | [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_flex-shrink&preval=1) |
|   initial   | Sets this property to its default value.             | [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_flex-shrink&preval=initial) |
|   inherit   | Inherits this property from its parent element. |

### CSS SYNTAX FOR FLEX-SHRINK

> flex-shrink: number | initial | inherit;

### EXAMPLE FOR FLEX-SHRINK

Let the second flex-item shrink three times more than the rest

```CSS
div:nth-of-type(2) {
  flex-shrink: 3;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_flex-shrink)

### BROWSER SUPPORT FOR FLEX-SHRINK

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

|   Property    |   flex-shrink          |
| :-----------: |    :-----------        |
|   Chrome      |     29.0 21.0 -webkit- |
|   Explorer    |     11.0               |
|   Firefox     |     28.0 18.0 -moz-    |
|   Safari      |     9.0 6.1 -webkit-   |
|   Opera       |     17.0               |

---

## FLEX-WRAP

The `flex-wrap` property specifies whether the flexible items should wrap or not.

### PROPERTY VALUES FOR FLEX-WRAP

|    Value    |                      Description                     | Demo |
|:-----------:|                      :-----------                    | :--: |
|  nowrap     | Default value. Specifies that the flexible items will not wrap | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_flex-wrap&preval=nowrap) |
|   wrap   | Specifies that the flexible items will wrap if necessary | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_flex-wrap&preval=wrap) |
|   wrap-reverse   | Specifies that the flexible items will wrap, if necessary, in reverse order | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_flex-wrap&preval=wrap-reverse)|
|   initial   | Sets this property to its default value. |
|   inherit   | Inherits this property from its parent element. |

### CSS SYNTAX FOR FLEX-WRAP

> flex-wrap: nowrap | wrap | wrap-reverse | initial | inherit;

### EXAMPLE FOR FLEX-WRAP

Make the flexible items wrap if necessary

```CSS
div {
  display: flex;  
  flex-wrap: wrap;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_flex-wrap)

### BROWSER SUPPORT FOR FLEX-WRAP

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

|   Property    |   flex-wrap            |
| :-----------: |    :-----------        |
|   Chrome      |     29.0 21.0 -webkit- |
|   Explorer    |     11.0               |
|   Firefox     |     28.0 18.0 -moz-    |
|   Safari      |     9.0 6.1 -webkit-   |
|   Opera       |     17.0               |
