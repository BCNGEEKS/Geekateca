---
layout: default
author: BCNGeeks
date: date
---

# GRID ESTRUCTURATION

## TABLE OF CONTENTS

- [GRID ESTRUCTURATION](#grid-estructuration)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INTRODUCTION](#introduction)
  - [GRID-TEMPLATE](#grid-template)
    - [PROPERTY VALUES](#property-values)
    - [EXAMPLE](#example)
    - [BROWSER SUPPORT](#browser-support)
  - [GRID-TEMPLATE-AREAS](#grid-template-areas)
    - [PROPERTY VALUES](#property-values-1)
    - [EXAMPLE](#example-1)
    - [BROWSER SUPPORT](#browser-support-1)
  - [GRID-TEMPLATE-COLUMNS](#grid-template-columns)
    - [PROPERTY VALUES](#property-values-2)
    - [EXAMPLE](#example-2)
    - [BROWSER SUPPORT](#browser-support-2)
  - [GRID-TEMPLATE-ROWS](#grid-template-rows)
    - [PROPERTY VALUES](#property-values-3)
    - [EXAMPLE](#example-3)
    - [BROWSER SUPPORT](#browser-support-3)
    
---

## [INDEX](./index.md)

---
  
## INTRODUCTION

The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.

## GRID-TEMPLATE

The `grid-template` property is a shorthand property for the following properties:

- grid-template-rows
- grid-template-columns
- grid-template-areas

### PROPERTY VALUES

| Value | Description                                            | Demo |
| :----:| :------                                                | :---: |
| none   | Default value. No specific sizing of the columns or rows	| 
| grid-template rows / grid-template-columns | Specifies the size(s) of the columns and rows | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-template) |
|grid-template-areas | Specifies the grid layout using named items	| 
|initial | Sets this property to its default value.  |
|inherit | Inherits this property from its parent element.  |

> ### CSS SYNTAX
> grid-template: none | grid-template-rows / grid-template-columns | grid-template-areas | initial | inherit;

### EXAMPLE

Make a three columns grid layout where the first row is 150px high

```CSS
.grid-container {
  display: grid;
  grid-template: 150px / auto auto auto;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_grid-template)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|   Property    |   grid-template  |
| :-----------: |    :-----------  |
|   Chrome      |     57           |
|   Explorer    |     16           |
|   Firefox     |     52           |
|   Safari      |     10           |
|   Opera       |     44           |

---

## GRID-TEMPLATE-AREAS

The `grid-template-areas` property specifies areas within the grid layout.

You can name grid items by using the grid-area property, and then reference to the name in the grid-template-areas property.

### PROPERTY VALUES

| Value | Description                                            | Demo |
| :----:| :------                                                | :---: |
| none   | Default. Used for all media type devices               | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-template-areas) |
| itemnames | Used for printers                                      | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-template-areas&preval=%27myArea%20myArea%20.%27) |

> ### CSS SYNTAX
> grid-template-areas: none | itemnames;

### EXAMPLE

Make the named item "myArea" span two columns in a five columns grid layout

```CSS
.item1 {
  grid-area: myArea;
}
.grid-container {
  display: grid;
  grid-template-areas: "myArea myArea . . .";
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_grid-template-areas)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|   Property    | grid-template-areas |
| :-----------: |    :-----------     |
|   Chrome      |     57              |
|   Explorer    |     16              |
|   Firefox     |     52              |
|   Safari      |     10              |
|   Opera       |     44              |

---

## GRID-TEMPLATE-COLUMNS

The `grid-template-columns` property specifies the number (and the widths) of columns in a grid layout.

The values are a space separated list, where each value specifies the size of the respective column.

### PROPERTY VALUES

| Value      | Description                                            | Demo |
| :----:     | :------                                                | :---: |
| none       | Default value. Columns are created if needed	| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-template-columns) |
| auto       | The size of the columns is determined by the size of the container and on the size of the content of the items in the column	| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-template-columns) |
|max-content | Sets the size of each column to depend on the largest item in the column	| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-template-columns&preval=max-content%20max-content) |
|min-content | Sets the size of each column to depend on the smallest item in the column |
|length      | 	Sets the size of the columns, by using a legal length value.  | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-template-columns&preval=50px%20100px) |
|initial     | Sets this property to its default value.  |
|inherit     | Inherits this property from its parent element.  |

> ### CSS SYNTAX
> grid-template-columns: none | auto | max-content | min-content | length | initial | inherit;

### EXAMPLE

Make a 4 columns grid container

```CSS
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_grid-template-columns)

Make a 4 columns grid container, and specify a size for each column

```CSS
.grid-container {
  display: grid;
  grid-template-columns: 30px 200px auto 100px;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_grid-template-columns2)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|   Property    | grid-template-columns |
| :-----------: |    :-----------       |
|   Chrome      |     57                |
|   Explorer    |     16                |
|   Firefox     |     52                |
|   Safari      |     10                |
|   Opera       |     44                |

---

## GRID-TEMPLATE-ROWS

The `grid-template-rows` property specifies the number (and the heights) of the rows in a grid layout.

The values are a space-separated list, where each value specifies the height of the respective row.

### PROPERTY VALUES

| Value | Description                                            | Demo |
| :----:| :------                                                | :---: |
| none   | Default. Used for all media type devices               | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-template-rows) |
| auto | Used for printers                                      | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-template-rows&preval=auto) |
|max-content | Used for computer screens, tablets, smart-phones etc.  |
|min-content | Used for screenreaders that "reads" the page out loud  |
|length | Used for screenreaders that "reads" the page out loud  | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-template-rows&preval=100px%20100px) |

> ### CSS SYNTAX
> grid-template-rows: none | auto | max-content | min-content | length | initial | inherit;

### EXAMPLE

Specify the row-size (height)

```CSS
.grid-container {
  display: grid;
  grid-template-rows: 100px 300px;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_grid-template-rows)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|   Property    | grid-template-rows    |
| :-----------: |    :-----------       |
|   Chrome      |     57                |
|   Explorer    |     16                |
|   Firefox     |     52                |
|   Safari      |     10                |
|   Opera       |     44                |
