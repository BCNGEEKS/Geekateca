---
layout: default
author: BCNGeeks
date: 29th June 2022
--- 

# GRID

## TABLE OF CONTENT

- [GRID-COLUMN](#grid-column)
- [GRID-COLUMN-GAP](#grid-column-gap)
- [GRID-COLUMN-START](#grid-column-start)
- [GRID-COLUMN-END](#grid-column-end)

---

## [INDEX](./index.md)

---

## GRID-COLUMN

The grid-column property specifies a grid item's size and location in a grid layout, and is a shorthand property for the following properties:

`grid-column-start`

`grid-column-end`

### PROPERTY VALUES (GRID-COLUMN)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   grid-column-start   |   Specifies on which column to start displaying the item. |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-column-start)    |
|   grid-column-end |   Specifies on which column-line to stop displaying the item, or how many columns to span.    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-column-end)  |

> ### CSS SYNTAX (GRID-COLUMN)
>
> grid-column: grid-column-start / grid-column-end;

### EXAMPLE (GRID-COLUMN)

Make "item1" start on column 1 and span 2 columns:

```CSS
.item1 {
  grid-column: 1 / span 2;
}
```

### BROWSER SUPPORT (GRID-COLUMN)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     57.0      |
|   Explorer    |     16.0      |
|   Firefox     |     52.0      |
|   Safari      |     10.0      |
|   Opera       |     44.0      |

---

## GRID-COLUMN-GAP

The grid-column-gap property defines the size of the gap between the columns in a grid layout.

***Note:** This property was renamed to `column-gap` in CSS3.*

### PROPERTY VALUES (GRID-COLUMN-GAP)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   length  |   Any legal length value, like px or %. 0 is the default value. Read about length units   |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-column-gap)  |

> ### CSS SYNTAX (GRID-COLUMN-GAP)
>
> grid-column-gap: length;

### EXAMPLE (GRID-COLUMN-GAP)

Set the gap between columns to 50px:

```CSS
.grid-container {
  grid-column-gap: 50px;
}
```

### BROWSER SUPPORT (GRID-COLUMN-GAP)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     57.0      |
|   Explorer    |     16.0      |
|   Firefox     |     52.0      |
|   Safari      |     10.0      |
|   Opera       |     44.0      |

---

## GRID-COLUMN-START

The grid-column-start property defines on which column-line the item will start.

### PROPERTY VALUES (GRID-COLUMN-START)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   auto    |   Default value. The item will be placed following the flow   |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-column-start)    |
|   span    |   Specifies the number of columns the item will span  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-column-start&preval=span%203)    |
|   column-line |   Specifies on which column to start the display of the item  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-column-start&preval=3)    |

> ### CSS SYNTAX (GRID-COLUMN-START)
>
> grid-column-start: auto|span n|column-line;

### EXAMPLE (GRID-COLUMN-START)

Make "item1" start on column 2:

```CSS
.item1 {
  grid-column-start: 2;
}
```

### BROWSER SUPPORT (GRID-COLUMN-START)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     57.0      |
|   Explorer    |     16.0      |
|   Firefox     |     52.0      |
|   Safari      |     10.0      |
|   Opera       |     44.0      |

---

## GRID-COLUMN-END

The grid-column-end property defines how many columns an item will span, or on which column-line the item will end.

### PROPERTY VALUES (GRID-COLUMN-END)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   auto    |   Default value. The item will span one column    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-column-end)    |
|   span    |   Specifies the number of columns the item will span  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-column-end&preval=span%203)    |
|   column-line |   Specifies on which column to end the display of the item    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_grid-column-end&preval=5)    |

> ### CSS SYNTAX (GRID-COLUMN-END)
>
> grid-column-end: auto|span n|column-line;

### EXAMPLE (GRID-COLUMN-END)

Make "item1" span 3 columns:

```CSS
.item1 {
  grid-column-end: span 3;
}
```

### BROWSER SUPPORT (GRID-COLUMN-END)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     57.0      |
|   Explorer    |     16.0      |
|   Firefox     |     52.0      |
|   Safari      |     10.0      |
|   Opera       |     44.0      |
