---
layout: default
author: BCNGeeks
date: 27 June 2022
---

# GRID PROPERTIES

## TABLE OF CONTENT

- [GRID PROPERTIES](#grid-properties)
  - [TABLE OF CONTENT](#table-of-content)
  - [INTRODUCTION](#introduction)
  - [GRID PROPERTY](#grid-property)
    - [PROPERTY VALUES](#property-values)
    - [EXAMPLE](#example)
    - [BROWSER SUPPORT](#browser-support)
  - [GRID-GAP PROPERTY](#grid-gap-property)
    - [PROPERTY VALUES](#property-values-1)
    - [EXAMPLE](#example-1)
    - [BROWSER SUPPORT](#browser-support-1)
  - [GRID-AREA PROPERTY](#grid-area-property)
    - [EXAMPLE](#example-2)
    - [BROWSER SUPPORT](#browser-support-2)

---

## [INDEX](./index.md)

---

## INTRODUCTION

This article is for explain how to works the **grid** properties, this property give the total control for place the elements where want to in the cells, because when its display grid, its become a matrix of two dimensions.

## GRID PROPERTY

The grid property is a shorthand for the follow properties

- grid-template-rows
- grid-template-columns
- grid-template-areas
- grid-auto-rows
- grid-auto-flow

Also used with the `display` property, this property sets the inner and outer display types of an element

### PROPERTY VALUES

|                         Value                         | Description                                                                      |
| :---------------------------------------------------: | :------------------------------------------------------------------------------- |
|                         none                          | No specifies the size of the columns or rows                                     |
|      grid-template-rows / grid-template-columns       | Specifies the size of the columns and rows                                       |
|                  grid-template-areas                  | Specifies the grid layout using named items                                      |
|        grid-template-rows / grid-auto-columns         | Specifies the height of the rows, and the auto size of the columns               |
|        grid-auto-rows / grid-template-columns         | Specifies the auto size of the rows, and sets the grid-template-columns property |
| grid-template-rows / grid-auto-flow grid-auto-columns |
| grid-auto-flow grid-auto-rows / grid-template-columns |
|                        Initial                        | Sets the property to its default value.                                          |
|                        Inherit                        | Inherits this property from its parent element.                                  |

### EXAMPLE

This is an example where can see the property `display`  and `grid`

In the follow example, the property will be display a grid, and then its used the grid property for display 3 columns, and the first row will be have 150px high

```CSS
.grid-container {
  display: grid;

  /*first row will be have 15px high and 3 columns*/
  grid: 150px / auto auto auto;
}
```

### BROWSER SUPPORT

| Browser | Version |
| :-----: | :------ |
| Chrome  | 57      |
|  Edge   | 16      |
| Firefox | 52      |
| Safari  | 10      |
|  Opera  | 44      |

## GRID-GAP PROPERTY

This property define the space between the columns and rows in the grid layout, when its used this property the space created is uniform, but if don't want to define a uniform space can be used the folling values.

- grid-row-gap
- grid-column-gap

### PROPERTY VALUES

|      Value      | Description                                                                              |
| :-------------: | :--------------------------------------------------------------------------------------- |
|  grid-row-gap   | Specifies the size of space between the rows in a grid layout, the default value is 0    |
| grid-column-gap | Specifies the size of space between the columns in a grid layout, the default value is 0 |

### EXAMPLE

In this example can be see that the property `grid-gap` have two values, the first values is for define the space between rows, and the second is for the columns.

```CSS
.grid-container {
  grid-gap: 20px 50px;
}
```

### BROWSER SUPPORT

|  Value  | Description |
| :-----: | :---------- |
| Chorme  | 57          |
|  Edge   | 16          |
| Firefox | 52          |
| Safari  | 10          |
|  Opera  | 44          |


## GRID-AREA PROPERTY

This property is for specifies a grid's item's size and location in a grid layout.

Also the property `grid-area` can be used to assing a name to a grid item, this is possible when make a reference using the property `grid-template-areas` in the main container.

### EXAMPLE

In the following example, it is defined in the grid container how the elements will be positioned on the page, in this case the header will go first, the menu will be located on the right, main on the left and the footer at the end.

```CSS
.grid {
	  display: grid;
	  grid-template-areas: "head head"
	                       "menu main"
	                       "foot foot";
}

.a { grid-area: head; background: #1297FF }
.b { grid-area: menu; background: #FF7E79 }
.c { grid-area: main; background: #009193 }
.d { grid-area: foot; background: #929292 }
```

```HTML
<!-- container -->
<section class="grid-template">
		<!-- ítems grid -->
	  <article class="a">Item 1</article>
	  <article class="b">Item 2</article>
	  <article class="c">Item 3</article>
	  <article class="d">Item 4</article>
</section>
```

### BROWSER SUPPORT

| Browser | Version |
| :-----: | :------ |
| Chrome  | 57      |
|  Edge   | 16      |
| Firefox | 52      |
| Safari  | 10      |
|  Opera  | 44      |
