---
layout: default
author: BCNGeeks
date: 23th June 2022
--- 

# UNITS & MATH

## TABLE OF CONTENTS

- [UNITS & MATH](#units--math)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INDEX](#index)
  - [UNITS](#units)
  - [TYPES](#types)
    - [ABSOLUTE LENGTHS](#absolute-lengths)
    - [RELATIVE LENGTHS](#relative-lengths)
    - [BROWSER SUPPORT](#browser-support)
  - [MATH FUNCTION](#math-function)
    - [THE calc() FUNCTION](#the-calc-function)
    - [EXAMPLE](#example)
    - [The max() Function](#the-max-function)
    - [EXAMPLE](#example-1)
    - [THE min() FUNCTION](#the-min-function)
    - [EXAMPLE](#example-2)

---

## [INDEX](./index.md)

---

## UNITS

CSS has different units for expressing length.

`Length` is a number followed by a units, for example **10px**, **5em**, etc.

## TYPES

There are two types of length units: **absolute** and **relative**.

### ABSOLUTE LENGTHS

The absolutes lengths are units expressed with numbers meaning that will appear exactly as the size you gave.

You should not use absolute lengths units while working with uses with screens that might vary.

|    **Unit**   |    **Descrption**    |           |
| :-----------: | :----------- | -----------:|
|   cm      |     centimeters      |      [Demo](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_cm)    |
|   mm    |     millimeters      |     [Demo](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_mm)       |
|   in     |     inches (1in = 96px = 2.54cm)      |   [Demo](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_in) |
|   px *      |     pixels (1px = 1/96th of 1in)      |    [Demo](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_px) |
|   pt       |     points (1pt = 1/72 of 1in)      |     [Demo](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_pt) |
|   pc       |     picas (1pc = 12 pt)      |     [Demo](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_pc)  |

`px*` Pixels (px) are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the display. For printers and high resolution screens 1px implies multiple device pixels.

### RELATIVE LENGTHS

The relative lengths are units that are relative to another length property.

They are normally used when the screen size is not known.

|    **Unit**   |    **Descrption**    |           |
| :-----------: | :----------- | -----------:|
|   em      |     Relative to the font-size of the element (2em means 2 times the size of the current font)      |      [Demo](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_em)    |
|   ex    |    Relative to the x-height of the current font (rarely used)    |     [Demo](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_ex)       |
|   ch     |     Relative to width of the "0" (zero)      |   [Demo](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_ch) |
|   rem     |     Relative to font-size of the root element      |    [Demo](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_rem) |
|   vw       |    Relative to 1% of the width of the viewport      |     [Demo](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_vw) |
|   vh       |     Relative to 1% of the height of the viewport      |     [Demo](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_vh)  |
|   vmin       |     Relative to 1% of viewport's smaller dimension      |     [Demo](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_vmin)  |
|   vmax       |     Relative to 1% of viewport's* larger dimension      |     [Demo](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_vmax)  |
|   %       |     Relative to the parent element      |     [Demo](https://www.w3schools.com/css/tryit.asp?filename=trycss_unit_percentage)  |

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|   Length Unit    |   Chrome    |   Explorer    |   Firefox    |  Safari    |   Opera    |
| :-----------: |:----------- | :-----------: |:----------- |:----------- |:----------- |
|   em, ex, %, px, cm, mm, in, pt, pc |    1.0      | 3.0  | 1.0   | 1.0 | 3.5  |
| ch |    27.0      | 9.0  | 1.0   | 7.0 | 20.0  |
| rem |    4.0      | 9.0  | 3.6   | 4.1 | 11.6  |
| vh,vw |    20.0      | 9.0  | 19.0   | 6.0 | 20.0  |
| vmin |    20.0     | 12.0  | 19.0   | 6.0 | 20.0  |
| vmax |    26.0     | 16.0  | 19.0   | 7.0 | 20.0  |

## MATH FUNCTION

The CSS math functions allow mathematical expressions to be used as property values.

### THE calc() FUNCTION

The `calc()` function performs a calculation to be used as the property value.

### EXAMPLE

Use calc() to calculate the width of a `<div>` element:

```CSS
#div1 {
  position: absolute;
  left: 50px;
  width: calc(100% - 100px);
  border: 1px solid black;
  background-color: yellow;
  padding: 5px;
}
```

[Try it yourself](https://www.w3schools.com/css/tryit.asp?filename=trycss_func_calc)

### The max() Function

The `max()` function uses the largest value, from a comma-separated list of values, as the property value.

### EXAMPLE 2

Use max() to set the width of #div1 to whichever value is largest, 50% or 300px:

```CSS
#div1 {
  position: absolute;
  left: 50px;
  width: calc(100% - 100px);
  border: 1px solid black;
  background-color: yellow;
  padding: 5px;
}
```

[Try it yourself](https://www.w3schools.com/css/tryit.asp?filename=trycss_func_max)

### THE min() FUNCTION

The `min()` function uses the smallest value, from a comma-separated list of values, as the property value.

### EXAMPLE 3

Use min() to set the width of #div1 to whichever value is smallest, 50% or 300px:

```CSS
#div1 {
  background-color: yellow;
  height: 100px;
  width: min(50%, 300px);
}
```
