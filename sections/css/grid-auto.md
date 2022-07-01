---
layout: default
author: BCNGeeks
date: 29 June 2022
---

# GRID-AUTO PROPERTIES

## TABLE OF CONTENT

- [GRID-AUTO PROPERTIES](#grid-auto-properties)
  - [TABLE OF CONTENT](#table-of-content)
  - [INDEX](#index)
  - [INTRODUCCTION](#introducction)
  - [GRID-AUTO-COLUMNS PROPERTY](#grid-auto-columns-property)
    - [PROPERTY VALUES](#property-values)
    - [EXAMPLE](#example)
    - [BROWSER SUPPORT](#browser-support)
  - [GRID-AUTO-ROWS PROPERTY](#grid-auto-rows-property)
    - [PROPERTY VALUES](#property-values-1)
    - [EXAMPLE](#example-1)
    - [BORWSER SUPPORT](#borwser-support)
  - [GRID-AUTO-FLOW PROPERTY](#grid-auto-flow-property)
    - [PROPERTY VALUES](#property-values-2)
    - [EXAMPLE](#example-2)
    - [BROWSER SUPPORT](#browser-support-1)

---

## [INDEX](./index.md)

---

## INTRODUCCTION

The grid-auto can be considered another shorthand, this property is for specify a size for the elements, and once put the size that can be in px, percent, em, etc, the elements will be take the same size.

## GRID-AUTO-COLUMNS PROPERTY

This property sets a size for the columns in a grid container.

> This property affects only columns with size not set.

### PROPERTY VALUES

|      Value       | Description                                                                                       |
| :--------------: | :------------------------------------------------------------------------------------------------ |
|       auto       | Is the default value, and the size of the columns will be determined by the size of the container |
|   max-content    | Specifies the size of each column depending of the largest item in the column                     |
|   min-content    | Specifies the size of each column depending of the smallest item in the columns                   |
| minmax(min, max) | Sets a size range greater than or equal to min and less than or equal to max                      |
|      lenght      | Specifies the size of the columns using a lenght value as px, em, etc                             |
|        %         | Specifies the size using a percent value                                                          |

### EXAMPLE

Set the grid-auto-columns with the value `auto`

```CSS
.grid-container{
    grid-auto-columns: auto;
}
```

RESULT

![Example grid-auto-column with the value `auto`](./images/example-auto-columns.png)

Set the grid-auto-columns with the value `max-content`

```CSS
.grid-container{
    grid-auto-columns: max-content;
}
```

RESULT

![Example grid-auto-column with the value `max-content`](./images/example-max-content-columns.png)

Set the grid-auto-columns with the `length` value

```CSS
.grid-container{
    grid-auto-columns: 50px;
}
```

RESULT

![Example grid-auto-column with the lenght value](./images/example-auto-columns-length.png)

Set the grid-auto-columns with `percent` value

```CSS
.grid-container{
    grid-auto-columns: 50px;
}
```

RESULT

![Example grid-auto-columns with percent value](./images/example-auto-columns-percent.png)

### BROWSER SUPPORT

| Browser | Version |
| :-----: | :------ |
| Chrome  | 57      |
|  Edge   | 16      |
| Firefox | 52      |
| Safari  | 10      |
|  Opera  | 44      |

## GRID-AUTO-ROWS PROPERTY

This property sets a size for the rows in a grid container.

> This property affects only rows with size not set.

### PROPERTY VALUES

|    Value    | Description                                                                                        |
| :---------: | :------------------------------------------------------------------------------------------------- |
|    auto     | Is the value for default, and the size of the rows will be determined by the size of the container |
| max-content | Specifies the size of each row depending of the largest item in the column                         |
| min-content | Specifies the size of each row depending of the largest item in the columns                        |
|   lenght    | Specifies the size of the rows using a lenght value as px, em, etc                                 |

### EXAMPLE

Set the grid-auto-rows with the value `auto`.

```CSS
.grid-container{
    grid-auto-rows: auto;
}
```

RESULT

![Example grid-auto-rows with the auto value](./images/example-auto-rows-auto.png)

Set the grid-auto-rows with the value `max-content`

```CSS
.grid-container{
    grid-auto-rows: max-content;
}
```

RESULT

![Example grid-auto-rows with the value max-content](./images/example-auto-rows-max-content.png)

Set the grid-auto-rows with a `lenght` value

```CSS
.grid-container{
    grid-auto-rows: 50px;
}
```

RESULT

![Example grid-auto-rows with a length value](./images/example-auto-columns-length.png)

Set the grid-auto-rows with a `percent` value

```CSS
.grid-container{
    grid-auto-rows: 30%;
}
```

RESULT

![Example grid-auto-rows with percent value](./images/example-auto-columns-percent.png)

### BORWSER SUPPORT

| Browser | Version |
| :-----: | :------ |
| Chrome  | 57      |
|  Edge   | 16      |
| Firefox | 52      |
| Safari  | 10      |
|  Opera  | 44      |

## GRID-AUTO-FLOW PROPERTY

This property specifies how the elements would be inserted the elements in the grid.

### PROPERTY VALUES

|    Value     | Description                                                            |
| :----------: | :--------------------------------------------------------------------- |
|     row      | Places the elements filling each row                                   |
|    column    | Places the elements filling each column                                |
|    dense     | Places the elements necessary for filling the holes in the grid        |
|  row dense   | Places the element by filling each row, and fill any holes in the grid |
| column dense | Places the element by filling each column, and fill any holes in the grid |

### EXAMPLE

Set the grid-auto-flow with the value `row`

```CSS
.grid-container{
    grid-auto-flow: row;
}
```

RESULT

![Example grid-auto-flow with the value row](./images/example-auto-flow-row.png)

Set the grid-auto-flow with the value `column`

```CSS
.grid-container{
    grid-auto-flow: column;
}
```

RESULT

![Example grid-auto-flow with the value column](./images/example-auto-flow-column.png)

Set the grid-auto-flow with the value `dense`

```CSS
.grid-container{
    grid-auto-flow: dense;
}
```

RESULT

![Example grid-auto-flow with the value dense](./images/example-auto-flow-dense.png)

Set the grid-auto-flow with the value `row dense`

```CSS
.grid-container{
    grid-auto-flow: row dense;
}
```

RESULT

![Example grid-auto-flow with the value dense](./images/example-auto-flow-rowdense.png)

Set the grid-auto-flow with the value `columnd dense`

```CSS
.grid-container{
    grid-auto-flow: column dense;
}
```

RESULT

![Example grid-auto-flow with the value dense](./images/example-auto-flow-columndense.png)

### BROWSER SUPPORT

| Browser | Version |
| :-----: | :------ |
| Chrome  | 57      |
|  Edge   | 16      |
| Firefox | 52      |
| Safari  | 10      |
|  Opera  | 44      |
