---
layout: default
author: BCNGeeks
date: 21 June 2022
---

# POSITION ELEMENTS

## TABLE OF CONTENTS

- [POSITION ELEMENTS](#position-elements)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INDEX](#index)
  - [INTRODUCTION](#introduction)
  - [PROPERTY POSITION](#property-position)
    - [POSITION VALUES](#position-values)
    - [EXAMPLES](#examples)
      - [STATIC VALUE](#static-value)
      - [RELATIVE VALUE](#relative-value)
      - [ABSOLUTE VALUE](#absolute-value)
      - [FIXED VALUE](#fixed-value)
      - [STICKY VALUE](#sticky-value)
    - [BROWSER SUPPORT](#browser-support)
  - [POSITIONING PROPERTIES](#positioning-properties)
    - [PROPERTY VALUES](#property-values)
  - [TOP PROPERTY](#top-property)
    - [EXAMPLE](#example)
  - [BOTTOM PROPERTY](#bottom-property)
    - [EXAMPLE](#example-1)
  - [RIGHT PROPERTY](#right-property)
    - [EXAMPLE](#example-2)
  - [LEFT PROPERTY](#left-property)
    - [EXAMPLE](#example-3)
    - [BROWSER SUPPORT](#browser-support-1)
  - [PROPERTY Z-INDEX](#property-z-index)
    - [PROPERTY VALUES](#property-values-1)
    - [EXAMPLE](#example-4)
    - [BROWSER SUPOORT](#browser-supoort)
  - [PROPERTY OBJECT-POSITION](#property-object-position)
    - [PROPERTY VALUES](#property-values-2)
    - [EXAMPLE](#example-5)
    - [BROWSER SUPPOORT](#browser-suppoort)
  - [PROPERTY ORDER](#property-order)
    - [PROPERTY VALUES](#property-values-3)
    - [EXAMPLE](#example-6)
    - [BROWSER SUPOORT](#browser-supoort-1)

---

## [INDEX](./index.md)

---

## INTRODUCTION

In this article be talk about how to use the `property` position and its values that have

## PROPERTY POSITION

The property position is used for define the positioning at the elements in the HTML document, and the properties top, bottom, right, left, have effects if its use the follow values

### POSITION VALUES

|    Value     | Description                                                                                                                                                                                                         |
| :----------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  **static**  | The static value is the default value for positioning the elements in the HTML, the element will be positioning respecting the flow of the HTML                                                                     |
| **relative** | With this value could can to position an element respect to the flow of the HTML                                                                                                                                    |
| **absolute** | if is use this value the elment don't be inside at the flow HTML and will take how a reference the browser window or another element that have the position property, except when the element is defined how static |
|  **fixed**   | This value also don't be inside at the flow at the HTML, but don't there confuse with absolute value, because if do scrolling the element will stay in fixed                                                        |
|  **sticky**  | This value would be considrered how a hibrid between fixed and relative, because when it reaches the displacement threshold it becomes fixed                                                                        |

### EXAMPLES

Now its will seen some examples for each property, this examples will be acompanied with HTML syntax

#### STATIC VALUE

When will want to a element static in the HTML, normally not have to put the property `position`

```CSS
.red{
  height: 100px;
  width: 100px;
  background-color: red;
  border: 2px green solid;
}

#moved{
  left: 100px;
}
```

```HTML
<div class="red"></div>
<div id="moved" class="red"></div>
<div class="red"></div>
```

So whether want to put some value for determine the positioning how for example, top, bottom, rigth, left, will haven't effects in the element

---

#### RELATIVE VALUE

If is put values how top, bottom, left, right, can be used because the element is defined how relative, and can manipulate the position

```CSS
.red{
  height: 100px;
  width: 100px;
  background-color: red;
  border: 2px green solid;
}

#moved{
  position: relative;
  left: 100px;
}
```

```HTML
<div class="red"></div>
<div id="moved" class="red"></div>
<div class="red"></div>
```

---

#### ABSOLUTE VALUE

Also the propierties top, left, bottom, right, have effects when the element is positioned how absolute.

In this case will take how a reference the browser windows and the div with `id="moved"` will moved 40px to top, and 50px to the left.

Since that the element div with `id="moved"` isn't inside the HTML flow, it will not affect the rest of the elements, and therefore the rest of the elements will positioned together

```CSS
.red{
  height: 100px;
  width: 100px;
  background-color: red;
  border: 2px green solid;
}

#moved{
  position: absolute;
  top: 40px;
  left: 50px;
}
```

```HTML
<div class="red"></div>
<div id="moved" class="red"></div>
<div class="red"></div>
```

Now another example, in this time its taking a reference the element parent with the value `position: relative` more near

```CSS
.red{
  height: 100px;
  width: 100px;
  background-color: red;
  border: 2px green solid;
}

#element-parent{
  position: relative;
}

#moved{
  position: absolute;
  top: 40px;
  left: 50px;
}
```

```HTML
<div class="red"></div>
<div id="element-parent" class="red">
  <div id="moved" class="red"></div>
</div>
```

---

#### FIXED VALUE

When a element is defined how a `fixed`, this means that the element always stay in the same position even if the page is scrolled

```CSS
.red{
  height: 100px;
  width: 100px;
  background-color: red;
  border: 2px green solid;
}

#first-container{
  height: 2000px
}

#container-relative{
  position: relative;
}

#moved{
  position: fixed;
  top: 40px;
  left: 50px;
}
```

```HTML
<div id="first-container" class="red"></div>
<div id="container-relative" class="red">
  <div id="moved" class="red"></div>
</div>
```

---

#### STICKY VALUE

When this value is used the element acts as if it were positioned relative until the page scroll reaches the element, and this element will remain fixed

```CSS
#marca{
  height: 50px;
  width: 100%;
  background-color: green;
  text-align: center;
}

#marca img{
  height: 100%;
}

#menu{
   position: sticky;
   top: 0; 
   height: 100px;
   width: 100%;
   background-color: red;
}

#contenido{
   height: 1200px;
   width: 100%;
   background-color: yellow;
}
```

```HTML
<div id="marca">
  <img src="" alt="test">
</div>

<div id="menu"></div>
<div id="contenido">CONTENIDO</div>
```

---

### BROWSER SUPPORT

| Browser | Version |
| :-----: | :------ |
| Chrome  | 1.0     |
|  Edge   | 7.0     |
| Firefox | 1.0     |
| Safari  | 1.0     |
|  Opera  | 4.0     |

## POSITIONING PROPERTIES

The positioning properties **top,** **bottom,** **left** and **right** are used for posiotining only the elements that not are static, and these properties are applicated when a elemenet have the property `position`

### PROPERTY VALUES

|  Value  | Description                                                                 |
| :-----: | :-------------------------------------------------------------------------- |
|  auto   | The browser calculate the position. This is the default                     |
| length  | Specifies the position in  px, pt, cm, etc, the negative values are allowed |
|    %    | Specifies the position in % of containing element                           |
| initial | Set the property to its default value                                       |
| inherit | Inherits the property  from its parent element                              |

## TOP PROPERTY

The top property affects the vertical position of a posiotioned element.

### EXAMPLE

```CSS
div {
  position: absolute;
  top: 50px;
  border: 3px solid green;
}
```

---

## BOTTOM PROPERTY

### EXAMPLE

The bottom property affects the vertical position of a posiotione element.

```CSS
div {
  position: absolute;
  bottom: 50px;
  border: 3px solid green;
}
```

---

## RIGHT PROPERTY

The right position affects the horizontal position of a positioned element.

### EXAMPLE

```CSS
div {
  position: absolute;
  right: 150px;
  width: 200px;
  height: 120px;
  border: 3px solid green;
} 
```

---

## LEFT PROPERTY

The left position affects the horizontal position of a positioned element.

### EXAMPLE

```CSS
div {
  position: absolute;
  left: 150px;
  width: 200px;
  height: 120px;
  border: 3px solid green;
}
```

### BROWSER SUPPORT

| Browser | Version |
| :------ | :------ |
| Chrome  | 1.0     |
| Edge    | 5.0     |
| Firefox | 1.0     |
| Safari  | 1.0     |
| Opera   | 6.0     |

## PROPERTY Z-INDEX

The **z-index** property is for indicate the order of a element, when a element have higher z-index value cover the elements that have lower value.

### PROPERTY VALUES

|  Value  | Descriptin                                     |
| :-----: | :--------------------------------------------- |
|  auto   | Specifies the order equal to its parents       |
| number  | Specifies the order of a element               |
| initial | Set the property to its deafault value         |
| inherit | Inherits the property  from its parent element |

### EXAMPLE

```CSS
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```

### BROWSER SUPOORT

| Browser | Version |
| :-----: | :------ |
| Chrome  | 1.0     |
|  Edge   | 4.0     |
| Firefox | 3.0     |
| Safari  | 1.0     |
|  Opera  | 4.0     |

## PROPERTY OBJECT-POSITION

The property **object-position** is used together with the property **object-fit** to specify how an `<img>` or `<video>` should be positioned with x/y coodinates.

### PROPERTY VALUES

|  Value   | Description                                                                                                                                                                                                                                              |
| :------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| position | Specifies the position of the image or video inside a box, the first value is for define the x-axis and the second value is for define the y-axis, This value can be a String (left, center or right), or number for example using units sizes(px or %). |
| initial  | Set the property to its default value.                                                                                                                                                                                                                   |
| inherit  | Inhertis the property from its parent element                                                                                                                                                                                                            |

### EXAMPLE

```CSS
img {
  width: 200px;
  height: 400px;
  object-fit: none;
  object-position: 5px 10%;
  border: 5px solid red;
}
```

### BROWSER SUPPOORT

| Browser | Version |
| :-----: | :------ |
| Chrome  | 31.0    |
|  Edge   | 16.0    |
| Firefox | 36.0    |
| Safari  | 10.0    |
|  Opera  | 19.0    |

## PROPERTY ORDER

This property is used when a element is defined how flexible, si if the element isn't a flexible, the **order** property has not effect

### PROPERTY VALUES

|  VALUE  | Description                                                 |
| :-----: | :---------------------------------------------------------- |
| number  | Specifies the order for the flexible item, for default is 0 |
| initial | Set the property to its default value.                      |
| inherit | Inhertis the property from its parent element               |

### EXAMPLE

```CSS
#main {
  width: 400px;
  height: 150px;
  border: 1px solid #c3c3c3;
  display: flex;
}

#main div {
  width: 70px;
  height: 70px;
}

div#myRedDIV {
   order: 2;
}

div#myBlueDIV {
   order: 4;
}

div#myGreenDIV {
   order: 3;
}

div#myPinkDIV {
   order: 1;
}
```

```HTML
<div id="main">
  <div style="background-color:coral;" id="myRedDIV"></div>
  <div style="background-color:lightblue;" id="myBlueDIV"></div>
  <div style="background-color:lightgreen;" id="myGreenDIV"></div>
  <div style="background-color:pink;" id="myPinkDIV"></div>
</div>
```

For use this property first  need to define the elements as flexible, and then possibly use the order property to set the positioning

### BROWSER SUPOORT

| Browser | Description |
| :-----: | :---------- |
| Chrome  | 29.0        |
|  Edge   | 11.0        |
| Firefox | 28.0        |
| Safari  | 9.0         |
|  Opera  | 17.0        |
