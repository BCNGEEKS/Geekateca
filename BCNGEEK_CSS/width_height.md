---
layout: default
author: BCNGeeks
date: 20th June 2022
--- 

# Width & Height

## TABLE OF CONTENTS

- [WIDTH & HEIGHT](#width--height)
  - [HEIGHT](#height)
  - [MAX HEIGHT](#max-height)
  - [WIDTH](#width)
  - [MAX WIDTH](#max-width)

---

## [INDEX](./INDEX.md)

---

## INTRODUCTION

The `height` and `width` properties are used to set the height and width of an element.

The height and width properties do not include padding, borders, or margins. It sets the height/width of the area inside the padding, border, and margin of the element.

## HEIGHT

The `height` property sets the height of an element.

The height of an element does not include padding, borders, or margins.

### HEIGHT PROPERTY VALUES

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|    auto     | The browser calculates the height. This is default    | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_height) |
|   length    | Defines the height in px, cm, etc                     | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_height&preval=200px) |
|      %      | Defines the height in percent of the containing block | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_height&preval=50%25) |
|   initial   | Sets this property to its default value.              |
|   inherit   | Inherits this property from its parent element.       |

### CSS SYNTAX FOR HEIGHT

height: auto | length | initial | inherit;

### HEIGHT EXAMPLE

Set the height of two **div** elements

```CSS
div.a {
  height: auto;
  border: 1px solid black;
}

div.b {
  height: 50px;
  border: 1px solid black;
}

```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_dim_height)

### BROWSER SUPPORT FOR HEIGHT

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     1.0      |
|   Explorer    |     4.0      |
|   Firefox     |     1.0      |
|   Safari      |     1.0      |
|   Opera       |     7.0      |

---

## MAX-HEIGHT

The `max-height` property defines the maximum height of an element.

If the content is larger than the maximum height, it will overflow.

If the content is smaller than the maximum height, the max-height property has no effect.

### MAX-HEIGHT PROPERTY VALUES

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :---: |
|    none     | No maximum height. This is default                    | [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_max-height) |
|   length    | Defines the height in px, cm, etc                     | [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_max-height&preval=50px) |
|      %      | Defines the height in percent of the containing block |
|   initial   | Sets this property to its default value.              |
|   inherit   | Inherits this property from its parent element.       |

### CSS SYNTAX FOR MAX-HEIGHT

max-height: none | length | initial | inherit;

### MAX-HEIGHT EXAMPLE

Set the maximum height of a **p** element to 50 pixels

```CSS
p.ex1 {
  max-height: 50px;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_dim_max-height)

### BROWSER SUPPORT FOR MAX-HEIGHT

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     1.0      |
|   Explorer    |     7.0      |
|   Firefox     |     1.0      |
|   Safari      |     2.0.2    |
|   Opera       |     7.0      |

---

## WIDTH

The `width` property sets the width of an element.

The width of an element does not include padding, borders, or margins.

### WIDTH PROPERTY VALUES

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :---: |
|    auto     | Default value. The browser calculates the width       | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_width&preval=auto) |
|   length    | Defines the height in px, cm, etc                     | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_width&preval=100px) |
|      %      | Defines the height in percent of the containing block | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_width&preval=50%25) |
|   initial   | Sets this property to its default value.              |
|   inherit   | Inherits this property from its parent element.       |

### CSS SYNTAX FOR WIDTH

width: auto | value | initial | inherit;

### WIDTH EXAMPLE

Set the width of three **div** elements

```CSS
div.a {
  width: auto;
  border: 1px solid black;
}

div.b {
  width: 150px;
  border: 1px solid black;
}

div.c {
  width: 50%;
  border: 1px solid black;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_dim_width)

### BROWSER SUPPORT FOR WIDTH

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height     |
| :-----------: |  :----------- |
|   Chrome      |     1.0       |
|   Explorer    |     4.0       |
|   Firefox     |     1.0       |
|   Safari      |     1.0       |
|   Opera       |     3.5       |

---

## MAX-WIDTH

The `max-width` property defines the maximum width of an element.

If the content is larger than the maximum width, it will automatically change the height of the element.

If the content is smaller than the maximum width, the max-width property has no effect.

### MAX-WIDTH PROPERTY VALUES

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :---: |
|    none     | No maximum width. This is default                     | [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_max-width) |
|   length    | Defines the height in px, cm, etc                     | [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_max-width&preval=50px) |
|      %      | Defines the height in percent of the containing block | [Demo](https://www.w3schools.com/cssref/playit.asp?filename=playcss_max-width&preval=50%25) |
|   initial   | Sets this property to its default value.              |
|   inherit   | Inherits this property from its parent element.       |

### CSS SYNTAX MAX-WIDTH

max-width: none | length | initial | inherit;

### MAX-WIDTH EXAMPLE

Set the maximum width of a **p** element to 150 pixels

```CSS
p.ex1 {
  max-width: 150px;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_dim_max-width)

### BROWSER SUPPORT FOR MAX-WIDTH

The numbers in the table specify the first browser version that fully supports the property.

|   Property    |   height    |
| :-----------: |:----------- |
|   Chrome      |    1.0      |
|   Explorer    |    7.0      |
|   Firefox     |    1.0      |
|   Safari      |    2.0.2    |
|   Opera       |    7.0      |
