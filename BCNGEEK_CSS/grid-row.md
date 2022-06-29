---
layout: default
author: BCNGeeks
date: 28th June 2022
--- 

# GRID

## TABLE OF CONTENT

- [GRID-ROW](#grid-row)
- [GRID-ROW-START](#grid-row-start)
- [GRID-ROW-END](#grid-row-end)
- [ROW-GAP](#row-gap)

---

## [INDEX](./index.md)

---

## GRID-ROW

The `grid-row` property specifies a grid item's size and location in a grid layout, and is a shorthand property for the following properties::

`grid-row-start`

`grid-row-end`

### PROPERTY VALUES (GRID-ROW)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   grid-row-start  |   Specifies on which row to start displaying the item.    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-row-start)   |
|   grid-row-end    |   Specifies on which row-line to stop displaying the item, or how many rows to span.  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-row-end) |

> ### CSS SYNTAX (GRID-ROW)
>
> grid-row: grid-row-start / grid-row-end;

### EXAMPLE (GRID-ROW)

Make "item1" start on row 1 and span 2 rows:

```CSS
.item1 {
  grid-row: 1 / span 2;
}
```

### BROWSER SUPPORT (GRID-ROW)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     57.0      |
|   Explorer    |     16.0      |
|   Firefox     |     52.0      |
|   Safari      |     10.0      |
|   Opera       |     44.0      |

---

## GRID-ROW-START

The grid-row-start property defines on which row-line the item will start.

### PROPERTY VALUES (GRID-ROW-START)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   auto    |   Default value. The item will be placed by following the flow.   |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-row-start)    |
|   row-line    |   Specifies on which row to start the display of the item.    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-row-start&preval=3)    |

> ### CSS SYNTAX (GRID-ROW-START)
>
> grid-row-start: auto|row-line;

### EXAMPLE (GRID-ROW-START)

Make "item1" start on row 2:

```CSS
.item1 {
  grid-row-start: 2;
}
```

### BROWSER SUPPORT (GRID-ROW-START)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     57.0      |
|   Explorer    |     16.0      |
|   Firefox     |     52.0      |
|   Safari      |     10.0      |
|   Opera       |     44.0      |

---

## GRID-ROW-END

The grid-row-end property defines how many rows an item will span, or on which row-line the item will end.

### PROPERTY VALUES (GRID-ROW-END)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   auto    |   Default value. The item will span one row.  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-row-end)    |
|   span    |   Specifies the number of rows the item will span.    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-row-end&preval=span%203)    |
|   row-line    |   Specifies on which row to end the display of the item.  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-row-end&preval=5)    |

> ### CSS SYNTAX (GRID-ROW-END)
>
> grid-row-end: auto|row-line|span n;

### EXAMPLE (GRID-ROW-END)

Make "item1" span 3 rows:

```CSS
.item1 {
  grid-row-end: span 3;
}
```

### BROWSER SUPPORT (GRID-ROW-END)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     57.0      |
|   Explorer    |     16.0      |
|   Firefox     |     52.0      |
|   Safari      |     10.0      |
|   Opera       |     44.0      |

---

## ROW-GAP

The row-gap property defines the size of the gap between the rows in a grid layout.

### PROPERTY VALUES (ROW-GAP)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   length  |   Any legal length value, like px or %. 0 is the default value    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-row-gap) |

> ### CSS SYNTAX (ROW-GAP)
>
> row-gap: length;

### EXAMPLE (ROW-GAP)

Set the gap between rows to 50px:

```CSS
.grid-container {
  grid-row-gap: 50px;
}
```

### BROWSER SUPPORT (ROW-GAP)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     57.0      |
|   Explorer    |     16.0      |
|   Firefox     |     52.0      |
|   Safari      |     10.0      |
|   Opera       |     44.0      |
