---
layout: default
author: BCN Geek
date: 27th June 2022
---

# COLUMN PROPERTIES

## TABLE OF CONTENTS

- [COLUMN PROPERTIES](#column-properties)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INDEX](#index)
  - [COLUMNS](#columns)
  - [PROPERTIES](#properties)
    - [COLUMN-GAP](#column-gap)
    - [COLUMN-COUNT](#column-count)
    - [COLUMN-RULE-WIDTH](#column-rule-width)
    - [COLUMN-RULE-COLOR](#column-rule-color)
    - [COLUMN-RULE-STYLE](#column-rule-style)
  - [BROWSER SUPPORT FOR COLUMNS](#browser-support-for-columns)

---

## [INDEX](./index.md)

---

## COLUMNS

`Columns` property sets the number of columns to use when drawing an element's contents.

[TRY IT](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_columns)

## PROPERTIES

### COLUMN-GAP

`Column-gap` is the property that specifies the gap between the columns.

```CSS

#flexbox 
{
  display: flex;
  height: 100px;
  column-gap: 20px;
}

```

### COLUMN-COUNT

`Column-count`is the property that specifies the number of columns an element is gonna be divided.

```CSS

.content-box 
{
  column-count: 3;
}

```

### COLUMN-RULE-WIDTH

`Column-rule-width` is a property that sets the width of the line drawn between columns.

```CSS

p 
{
  column-count: 3;
  column-rule-width: thick;
}

```

### COLUMN-RULE-COLOR

`Column-rule-color`is a property that sets the color of the line drawn between columns.

```CSS

p 
{
  column-count: 3;
  column-rule-width: thick;
  column-rule-color: blue;
}

```

### COLUMN-RULE-STYLE

`Column-rule-style`is a property that specifies the type of line that is drawn between columns.

```CSS

p 
{
  column-count: 3;
  column-rule-width: thick;
  column-rule-color: blue;
  column-rule-style: dashed;
}

```

## BROWSER SUPPORT FOR COLUMNS

| Browser | Version |
|:----:|:-------------|
| Chrome  | 50.0 |
| Explorer  | 10.0 |
| Firefox | 52.0 |
| Safary | 9.4 |
| Opera | 37.0 |
