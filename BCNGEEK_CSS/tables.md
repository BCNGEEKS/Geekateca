---
layout: default
author: BCNGeeks
date: date
---

# TABLES

## TABLE OF CONTENTS

- [TABLES](#tables)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INTRODUCTION](#introduction)
  - [TABLE-LAYOUT](#table-layout)
    - [PROPERTY VALUES](#property-values)
    - [EXAMPLE](#example)
    - [BROWSER SUPPORT](#browser-support)
  - [EMPTY-CELLS](#empty-cells)
    - [PROPERTY VALUES](#property-values-1)
    - [EXAMPLE](#example-1)
    - [BROWSER SUPPORT](#browser-support-1)
  - [BORDER-COLLAPSE](#border-collapse)
    - [PROPERTY VALUES](#property-values-2)
    - [EXAMPLE](#example-2)
    - [BROWSER SUPPORT](#browser-support-2)
    
---

## [INDEX](./index.md)

---

## INTRODUCTION

Tables in CSS are used to apply the various styling properties to the HTML Table elements to arrange the data in rows and columns, or possibly in a more complex structure in a properly organized manner.

## TABLE-LAYOUT

The `table-layout` property defines the algorithm used to lay out table cells, rows, and columns.

### PROPERTY VALUES

|    Value    |                      Description                     | Demo |
|:-----------:|                      :-----------                    | :--: |
|    auto     | Browsers use an automatic table layout algorithm. The column width is set by the widest unbreakable content in the cells. The content will dictate the layout  | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_table-layout) |
|   fixed    | Sets a fixed table layout algorithm. The table and column widths are set by the widths of table and col or by the width of the first row of cells. Cells in other rows do not affect column widths | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_table-layout&preval=fixed) |
|   initial   | Sets this property to its default value.             |
|   inherit   | Inherits this property from its parent element.      |

> ### CSS SYNTAX
> table-layout: auto | fixed | initial | inherit;

### EXAMPLE

Set different table layout algorithms

```CSS
table.a {
  table-layout: auto;
  width: 180px;
}

table.b {
  table-layout: fixed;
  width: 180px;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_table_table-layout)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|   Property    |   table-layout       |
| :-----------: |    :-----------      |
|   Chrome      |     14.0             |
|   Explorer    |     5.0              |
|   Firefox     |     1.0              |
|   Safari      |     1.0              |
|   Opera       |     7.0              |

---

## EMPTY-CELLS

The `empty-cells` property sets whether or not to display borders on empty cells in a table.

### PROPERTY VALUES

|    Value    |                      Description                     | Demo |
|:-----------:|                      :-----------                    | :--: |
|    show     | Display borders on empty cells. This is default	| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_empty-cells&preval=show) |
|   hide    | Hide borders on empty cells | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_empty-cells&preval=hide) |
|   initial   | Sets this property to its default value.             |
|   inherit   | Inherits this property from its parent element.      |

> ### CSS SYNTAX
> empty-cells: show | hide | initial | inherit;

### EXAMPLE

Display no borders on empty cells in a table

```CSS
table {
  empty-cells: hide;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_empty-cells)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|   Property    |   empty-cells       |
| :-----------: |    :-----------      |
|   Chrome      |     1.0              |
|   Explorer    |     8.0              |
|   Firefox     |     1.0              |
|   Safari      |     1.2              |
|   Opera       |     4.0              |

---

## BORDER-COLLAPSE

The `border-collapse` property sets whether table borders should collapse into a single border or be separated as in standard HTML.

### PROPERTY VALUES

|    Value    |                      Description                     | Demo |
|:-----------:|                      :-----------                    | :--: |
|    separate     | Borders are separated; each cell will display its own borders. This is default.| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_border-collapse&preval=separate) |
|   collapse    | Borders are collapsed into a single border when possible (border-spacing and empty-cells properties have no effect) | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_border-collapse&preval=collapse) |
|   initial   | Sets this property to its default value.             |
|   inherit   | Inherits this property from its parent element.      |

> ### CSS SYNTAX
> border-collapse: separate | collapse | initial | inherit;

### EXAMPLE

Set the collapsing borders model for two tables

```CSS
#table1 {
  border-collapse: separate;
}

#table2 {
  border-collapse: collapse;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_border-collapse)

When using "border-collapse: separate", the border-spacing property can be used to set the space between the cells:

```CSS
#table1 {
  border-collapse: separate;
  border-spacing: 10px;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_border-collapse2)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|   Property    |   border-collapse    |
| :-----------: |    :-----------      |
|   Chrome      |     1.0              |
|   Explorer    |     5.0              |
|   Firefox     |     1.0              |
|   Safari      |     1.2              |
|   Opera       |     4.0              |
