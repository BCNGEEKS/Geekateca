---
layout: default
author: BCNGeeks
date: 22th June 2022
--- 

# PADDING

## TABLE OF CONTENT

- [PADDING](#introduction)
- [PADDING-BOTTOM](#padding-bottom)
- [PADDING-LEFT](#padding-left)
- [PADDING-RIGHT](#padding-right)
- [PADDING-TOP](#padding-top)

---

## [INDEX](./INDEX.md)

---

## INTRODUCTION

The CSS `padding` properties are used to generate space around an element's content, inside of any defined borders.

### PROPERTY VALUES

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   length    | specifies a padding in px, pt, cm, etc. Default value is 0.     | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_padding) |
|      %      | specifies a padding in % of the width of the containing element | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_padding&preval=5%25) |
|   inherit   | specifies that the padding should be inherited from the parent element       |  |
|   initial   | Sets this property to its default value     |

> ### CSS SYNTAX
>
> padding: length | initial | inherit;

### EXAMPLE

If the padding property has four values. Top padding is 10px, right padding is 5px, bottom padding is 15px, left padding is 20px.

```CSS
p {
  padding: 10px 5px 15px 20px;
}
```

If the padding property has three values. Top padding is 10px, right padding is 5px, bottom padding is 15px.

```CSS
p {
  padding: 10px 5px 15px;
}
```

If the padding property has two values. Top and bottom padding are 10px, right and left padding are 5px.

```CSS
p {
  padding: 10px 5px;
}
```

If the padding property has one value. All four paddings are 10px

```CSS
p {
  padding: 10px;
}
```

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     1.0      |
|   Explorer    |     4.0      |
|   Firefox     |     1.0      |
|   Safari      |     1.0      |
|   Opera       |     3.5      |

---

## PADDING-BOTTOM

The padding-bottom property sets the bottom padding (space) of an element.

### PROPERTY VALUES (PADDING-BOTTOM)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   length    | specifies a fixed bottom padding in px, pt, cm, etc. Default value is 0.     | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_padding-bottom) |
|      %      | specifies a bottom padding in % of the width of the containing element | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_padding-bottom&preval=20%25) |
|   inherit   | Inherits this property from its parent element.       |  |
|   initial   | Sets this property to its default value     |

### EXAMPLE (PADDING-BOTTOM)

Set the bottom padding for the element to 25 pixels:

```CSS
p.ex1 {
  padding-bottom: 25px;
}
```

### BROWSER SUPPORT (PADDING-BOTTOM)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     1.0      |
|   Explorer    |     4.0      |
|   Firefox     |     1.0      |
|   Safari      |     1.0      |
|   Opera       |     3.5      |

---

## PADDING-LEFT

The padding-left property sets the left padding (space) of an element.

### PROPERTY VALUES (PADDING-LEFT)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   length    | specifies a fixed left padding in px, pt, cm, etc. Default value is 0.     | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_padding-left) |
|      %      | specifies a left padding in % of the width of the containing element | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_padding-left&preval=20%25) |
|   inherit   | Inherits this property from its parent element.       |  |
|   initial   | Sets this property to its default value     |

### EXAMPLE (PADDING-LEFT)

Set the left padding for the element to 50 pixels:

```CSS
p.ex1 {
  padding-left: 50px;
}
```

### BROWSER SUPPORT (PADDING-LEFT)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     1.0      |
|   Explorer    |     4.0      |
|   Firefox     |     1.0      |
|   Safari      |     1.0      |
|   Opera       |     3.5      |

---

## PADDING-RIGHT

The padding-right property sets the right padding (space) of an element.

### PROPERTY VALUES (PADDING-RIGHT)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   length    | specifies a fixed right padding in px, pt, cm, etc. Default value is 0.     | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_padding-right) |
|      %      | specifies a right padding in % of the width of the containing element | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_padding-right&preval=20%25) |
|   inherit   | Inherits this property from its parent element.       |  |
|   initial   | Sets this property to its default value     |

### EXAMPLE (PADDING-RIGHT)

Set the right padding for the element to 150 pixels:

```CSS
p.ex1 {
  padding-right: 150px;
}
```

### BROWSER SUPPORT (PADDING-RIGHT)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     1.0      |
|   Explorer    |     4.0      |
|   Firefox     |     1.0      |
|   Safari      |     1.0      |
|   Opera       |     3.5      |

---

## PADDING-TOP

The padding-top property sets the top padding (space) of an element.

### PROPERTY VALUES (PADDING-TOP)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   length    | specifies a fixed top padding in px, pt, cm, etc. Default value is 0.     | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_padding-top) |
|      %      | specifies a top padding in % of the width of the containing element | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_padding-top&preval=20%25) |
|   inherit   | Inherits this property from its parent element.       |  |
|   initial   | Sets this property to its default value     |

### EXAMPLE (PADDING-TOP)

Set the top padding for the element to 25 pixels:

```CSS
p.ex1 {
  padding-top: 25px;
}
```

### BROWSER SUPPORT (PADDING-TOP)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     1.0      |
|   Explorer    |     4.0      |
|   Firefox     |     1.0      |
|   Safari      |     1.0      |
|   Opera       |     3.5      |
