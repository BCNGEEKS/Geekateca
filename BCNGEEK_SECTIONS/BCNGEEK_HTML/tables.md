---
layout: default
author: BCNGeeks
date: 21th June 2022
---

# TABLES

## TABLE OF CONTENT

- [TABLES](#tables)
  - [TABLE OF CONTENT](#table-of-content)
  - [INDEX](#index)
  - [INTRODUCCION](#introduccion)
  - [BASIC STRUCTURE](#basic-structure)
    - [TABLE](#table)
      - [PROPERTY EXPLANATION](#property-explanation)
    - [TABLE CELLS](#table-cells)
      - [PROPERTY EXPLANATION](#property-explanation-1)
    - [TABLE ROWS](#table-rows)
      - [PROPERTY EXPLANATION](#property-explanation-2)
    - [TABLE HEADERS](#table-headers)
      - [PROPERTY EXPLANATION](#property-explanation-3)
    - [BASIC STRUCTURE EXAMPLE](#basic-structure-example)
  - [CAPTION](#caption)
    - [PROPERTY EXPLANATION](#property-explanation-4)
    - [EXAMPLE](#example)
  - [COLGROUP](#colgroup)
    - [COLGROUP](#colgroup-1)
      - [PROPERTY EXPLANATION](#property-explanation-5)
    - [COL](#col)
      - [PROPERTY EXPLANATION](#property-explanation-6)
    - [COLGOROUP EXAMPLE](#colgoroup-example)
  - [TABLES PARTS](#tables-parts)
    - [THEAD](#thead)
      - [PROPERTY EXPLANATION](#property-explanation-7)
    - [TBODY](#tbody)
      - [PROPERTY EXPLANATION](#property-explanation-8)
    - [TFOOT](#tfoot)
      - [PROPERTY EXPLANATION](#property-explanation-9)
    - [TABLES PARTS EXAMPLE](#tables-parts-example)

---

## [INDEX](./index.md)

---

## INTRODUCCION

HTML tables allow web developers to arrange data into rows and columns.

| Day        | Number       | Presenciality |
|:-----------|:------------:|------------:|
| Monday     |      20      |       Online|
| Tuesday    |      21      |       Online|
| Wednesday  |      22      |       Online|
| Thursday   |      23      |       Office|
| Friday     |      24      |      No work|

---

## BASIC STRUCTURE

The basic structure of a table contains cells, rows, and headers.

---

### TABLE

#### PROPERTY EXPLANATION

To create a table in HTML we must use the tag `<table> <\table>`

---

### TABLE CELLS

#### PROPERTY EXPLANATION

Each table cell is defined by a `<td>` and a `</td>` tag (td means table data).Everithing between this two tags are the content of the table cell.

---

### TABLE ROWS

#### PROPERTY EXPLANATION

Each table row starts with a `<tr>` and end with a `</tr>` tag (tr means table row).

---

### TABLE HEADERS

#### PROPERTY EXPLANATION

Sometimes you want your cells to be headers, in those cases use the `<th>` tag instead of the `<td>` tag.

---

### BASIC STRUCTURE EXAMPLE

This is an example of a basic table structure.

    <table>           <----------------- Example of table
        <tr>           <----------------- Example of row
            <th>Day</th>
            <th>Number</th>     
            <th>Presenciality</th>   <----- Example of header
        </tr>
        <tr>
            <td>Monday </td>    <----- Example of cell
            <td>Tuesday</td>
            <td>Wednesday </td>
        </tr>
        <tr>
            <td>20</td>
            <td>21</td>
            <td>22</td>
        </tr>
    </table>

This example shows an example of a simple table.

---

## CAPTION

The caption tag is used to add a caption around the table.The position can be modified with the use of css.

<table>
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>100€</td>
  </tr>
</table>

### PROPERTY EXPLANATION

The `<caption>` tag defines a table caption.

The `<caption>` tag must be inserted immediately after the `<table>` tag.

### EXAMPLE

    <table>
      <caption>Monthly savings</caption>
      <tr>
        <th>Month</th>
        <th>Savings</th>
      </tr>
      <tr>
        <td>January</td>
        <td>100€</td>
      </tr>
    </table>

This example shows the HTML code used to create the table of the first example úsing the `<caption>` tag.

---

## COLGROUP

colgroup is a property that allows us to apply css atributes using the style tag to a group of columns.
<table>
  <colgroup>
    <col span="2" style="background-color:#404976">
    <col style="background-color:#2F3761">
  </colgroup>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
</table>

### COLGROUP

#### PROPERTY EXPLANATION

The `<colgroup>` tag specifies a group of one or more columns in a table for formatting.
<br>
The `<colgroup>` tag must be a child of a `<table>` element, after any `<caption>` elements and before any `<thead>`, `<tbody>`, `<tfoot>` and `<tr>` elements.
<br>
To define different properties to a column within a `<colgroup>`, use the `<col>` tag within the `<colgroup>` tag.

---

### COL

#### PROPERTY EXPLANATION

The `<col>` tag specifies column properties for each column within a `<colgroup>` element.
<BR>
The `<col>` tag is useful for applying styles to entire columns, instead of repeating the styles for each cell, for each row.

### COLGOROUP EXAMPLE

    <table>
      <colgroup>                 <-------------------------------- Example Colgroup 
        <col span="2" style="background-color:#404976"> 
        <col style="background-color:#2F3761">          <---------------Example Col
      </colgroup>
      <tr>
        <th>ISBN</th>
        <th>Title</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>3476896</td>
        <td>My first HTML</td>
        <td>$53</td>
      </tr>
    </table>
This example shows how the `<col>` tag is inside the `<colgroup>` tag and how it apply a style in a group of columns.

---

## TABLES PARTS

A table can be splited in three parts: head (thead), body (tbody), foot (tfoot).

<table>
  <thead style="color: green;">
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody style="color: yellow;">
    <tr>
      <td>January</td>
      <td>100€</td>
    </tr>
    <tr>
      <td>February</td>
      <td>80€</td>
    </tr>
  </tbody>
  <tfoot style="color: red;">
    <tr>
      <td>Sum</td>
      <td>180€</td>
    </tr>
  </tfoot>
</table>
</body>

---

### THEAD

#### PROPERTY EXPLANATION

The `<thead>` tag is used to group header content in an HTML table.

The `<thead>` element is used in conjunction with the `<tbody>` and `<tfoot>` elements to specify each part of a table (header, body, footer).

Browsers can use these elements to enable scrolling of the table body independently of the header and footer. Also, when printing a large table that spans multiple pages, these elements can enable the table header and footer to be printed at the top and bottom of each page.

The `<thead>` element must have one or more `<tr>` tags inside.

The `<thead>` tag must be used in the following context: As a child of a `<table>` element, after any `<caption>` and `<colgroup>` elements, and before any `<tbody>`, `<tfoot>`, and `<tr>` elements.

---

### TBODY

#### PROPERTY EXPLANATION

The `<tbody>` tag is used to group the body content in an HTML table.

The `<tbody>` element is used in conjunction with the `<thead>` and `<tfoot>`elements to specify each part of a table (body, header, footer).

Browsers can use these elements to enable scrolling of the table body independently of the header and footer. Also, when printing a large table that spans multiple pages, these elements can enable the table header and footer to be printed at the top and bottom of each page.

The `<tbody>` element must have one or more `<tr>` tags inside.

The `<tbody>` tag must be used in the following context: As a child of a `<table>` element, after any `<caption>`, `<colgroup>`, and `<thead>` elements.

---

### TFOOT

#### PROPERTY EXPLANATION

The `<tfoot>`tag is used to group footer content in an HTML table.

The `<tfoot>` element is used in conjunction with the `<thead>` and `<tbody>` elements to specify each part of a table (footer, header, body).

Browsers can use these elements to enable scrolling of the table body independently of the header and footer. Also, when printing a large table that spans multiple pages, these elements can enable the table header and footer to be printed at the top and bottom of each page.

The `<tfoot>` element must have one or more `<tr>` tags inside.

The `<tfoot>` tag must be used in the following context: As a child of a `<table>` element, after any `<caption>`, `<colgroup>`, `<thead>`, and `<tbody>` elements.

---

### TABLES PARTS EXAMPLE

    <table style="
    thead {color: green;}
    tbody {color: yellow;}
    tfoot {color: red;}">
      <thead>
        <tr>
          <th>Month</th>
          <th>Savings</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>January</td>
          <td>100€</td>
        </tr>
        <tr>
          <td>February</td>
          <td>80€</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Sum</td>
          <td>180€</td>
        </tr>
      </tfoot>
    </table>
    </body>
This example shows how to apply the diferents parts of a table to output the visual example of this section.
