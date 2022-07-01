---
layout: default
author: BCNGeeks
date: 27 June 2022
---

# OUTLINE

## TABLE OF CONTENT

- [OUTLINE](#outline)
  - [TABLE OF CONTENT](#table-of-content)
  - [INDEX](#index)
  - [INTRODUCTION](#introduction)
  - [OUTLINE PROPERTY](#outline-property)
    - [PROPERTY VALUES FOR OUTLINE PROPERTY](#property-values-for-outline-property)
    - [EXAMPLE FOR OUTLINE PROPERTY](#example-for-outline-property)
    - [BROWSER SUPPORT FOR OUTLINE PROPERTY](#browser-support-for-outline-property)
  - [OUTLINE STYLE](#outline-style)
    - [PROPERTY VALUES FOR OUTLINE STYLE](#property-values-for-outline-style)
    - [EXAMPLE FOR OUTLINE STYLE](#example-for-outline-style)
    - [BROWSER SUPPORT OUTLINE STYLE](#browser-support-outline-style)
  - [OUTLINE WIDTH](#outline-width)
    - [PROPERTY VALUES FOR OUTLINE WIDTH](#property-values-for-outline-width)
    - [EXAMPLE FOR OUTLINE WIDTH](#example-for-outline-width)
    - [BROWSER SUPPORT FOR OUTLINE WIDTH](#browser-support-for-outline-width)
  - [OUTLINE COLOR](#outline-color)
    - [PROPERTY VALUES FOR OUTLINE COLOR](#property-values-for-outline-color)
    - [EXAMPLE FOR OUTLINE COLOR](#example-for-outline-color)
    - [BROWSER SUPPORT FOR OUTLINE COLOR](#browser-support-for-outline-color)
  - [OUTLINE OFFSET](#outline-offset)
    - [PROPERTY VALUES FOR OUTLINE OFFSET](#property-values-for-outline-offset)
    - [EXAMPLE FOR OUTLINE OFFSET](#example-for-outline-offset)
    - [BROWSER SUPPORT FOR OUTLINE OFFSET](#browser-support-for-outline-offset)

---

## [INDEX](./index.md)

---

## INTRODUCTION

For this article will be explain about how to the property `outline` works. This property is for define the border that is outside of an element.

## OUTLINE PROPERTY

This property is used for drawn outside the elements a border, this is for to make that the element stand out, and also have to say that the `outline` property is a shorthand for another properties.

### PROPERTY VALUES FOR OUTLINE PROPERTY

|     Value      | Description                                                                 |
| :------------: | :-------------------------------------------------------------------------- |
| outline-width  | Specifies the width of the outline                                          |
| outline-style  | Specifies the style of the outline                                          |
| outline-color  | Specifies the color of the outline                                          |
| outline-offset | Specifies the space between an outline and the edge or border of an element |
|    Initial     | Sets the property to its default value.                                     |
|    Inherit     | Inherits this property from its parent element.                             |

### EXAMPLE FOR OUTLINE PROPERTY

In this example there are 3 values, the first define the width of the outline, the second value is the style of the outline, and the last value is for set a color

```CSS
h2{
  outline: 5px dotted green;
}
```

### BROWSER SUPPORT FOR OUTLINE PROPERTY

| Browser | Version |
| :-----: | :------ |
| Chrome  | 1.0     |
|  Edge   | 8.0     |
| Firefox | 1.5     |
| Safari  | 1.2     |
|  Opera  | 7.0     |

## OUTLINE STYLE

This property specifies the style of the outline.

### PROPERTY VALUES FOR OUTLINE STYLE

|  Value  | Description                                                              |
| :-----: | :----------------------------------------------------------------------- |
|  none   | The outline will be not displayed                                        |
| hidden  | Specifies a hidden outline                                               |
| dotted  | Specifies a dotted outline                                               |
| dashed  | Specifies a dashed outline                                               |
|  solid  | Specifies a solid outline                                                |
| double  | Specifies a double outline                                               |
| groove  | Display a affect as 3D grooved, the effects depends of the outline color |
|  ridge  | Display a effect as 3D ridge, the effects depends of the outline color   |
| outset  | Display a effect as 3D outset, the effects depends of the outline color  |
| Initial | Sets the property to its default value.                                  |
| Inherit | Inherits this property from its parent element.                          |

### EXAMPLE FOR OUTLINE STYLE

Set a dashed outline

```CSS
div{
  outline-style: dashed;
}
```

Set a solid outline

```CSS
div{
  outline-style: solid;
}
```

Set a double outline

```CSS
div{
  outline-style: double;
}
```

### BROWSER SUPPORT OUTLINE STYLE

| Browser | Version |
| :-----: | :------ |
| Chrome  | 1.0     |
|  Edge   | 8.0     |
| Firefox | 1.5     |
| Safari  | 1.2     |
|  Opera  | 7.0     |

## OUTLINE WIDTH

This property is for define the width of an outline of the element

> Note before to use the `outline-width` property there are declare the `outline-style` property, this is because an element must have an outline before change the width

### PROPERTY VALUES FOR OUTLINE WIDTH

|  Value  | Description                                                                        |
| :-----: | :--------------------------------------------------------------------------------- |
| medium  | Specifies a medium outline, the size is 3px                                        |
|  thin   | Specifies a thin outline, the size is 1px                                          |
|  thick  | Specifies a thick outline, the size is 5px                                         |
| length  | Specifies the thickness of the outline, this can be defined in px, pt, cm, em, etc |
| Initial | Sets the property to its default value.                                            |
| Inherit | Inherits this property from its parent element.                                    |

### EXAMPLE FOR OUTLINE WIDTH

Set the width of the outline to medium

```CSS
div{
   outline-style: solid;
   outline-width: medium; 
}
```

Set the width of the outline to thin

```CSS
div{
  outline-style: solid;
  outline-width: thin;
}
```

Set the width of the outline to thick

```CSS
div{
  outline-style: solid;
  outline-width: thick;
}
```

Set the width in px

```CSS
div{
  outline-style: solid;
  outline-width: 12px;
}
```

### BROWSER SUPPORT FOR OUTLINE WIDTH

| Browser | Version |
| :-----: | :------ |
| Chrome  | 1.0     |
|  Edge   | 8.0     |
| Firefox | 1.5     |
| Safari  | 1.2     |
|  Opera  | 7.0     |

## OUTLINE COLOR

This property is for define the color of the outline

The color can be defined by the name, HEX, RGB, HSL, and invert that is used for a color inversion

### PROPERTY VALUES FOR OUTLINE COLOR

|  Value  | Description                                                                       |
| :-----: | :-------------------------------------------------------------------------------- |
| invert  | Performs a color inversion                                                        |
|  color  | Specifies the color of the outline, the values can be for the name, HEX, RGB, HSL |
| Initial | Sets the property to its default value.                                           |
| Inherit | Inherits this property from its parent element.                                   |

### EXAMPLE FOR OUTLINE COLOR

Set the color in HEX

```CSS
div{
  outline-color: #FFFFFF;
}
```

Set the color in RGB(red, green, blue)

```CSS
div{
  outline-color: rgb(201, 5, 60);
}
```

Set the color in HSL

```CSS
div{
  outline-color: hsl(80, 45%, 65%);
}
```

### BROWSER SUPPORT FOR OUTLINE COLOR

| Browser | Version |
| :-----: | :------ |
| Chrome  | 1.0     |
|  Edge   | 8.0     |
| Firefox | 1.5     |
| Safari  | 1.2     |
|  Opera  | 7.0     |

## OUTLINE OFFSET

This property is for add space between the outline and the border of the container, the space that leave the `outline-offset` is transparent

### PROPERTY VALUES FOR OUTLINE OFFSET

|  Value  | Description                                                                                              |
| :-----: | :------------------------------------------------------------------------------------------------------- |
| length  | Specifies the space between the outline and the border of the element or the container, for default is 0 |
| Initial | Sets the property to its default value.                                                                  |
| Inherit | Inherits this property from its parent element.                                                          |

### EXAMPLE FOR OUTLINE OFFSET

```CSS
div {
  outline: 4px solid red;
  outline-offset: 15px;
}
```

### BROWSER SUPPORT FOR OUTLINE OFFSET

| Browser | Version |
| :-----: | :------ |
| Chrome  | 4.0     |
|  Edge   | 15.0    |
| Firefox | 3.5     |
| Safari  | 3.1     |
|  Opera  | 10.5    |
