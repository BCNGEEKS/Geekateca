---
layout: default
author: BCNGeeks
date: 23th June 2022
--- 

# CONTAINERS OVERFLOW

## TABLE OF CONTENTS

- [CONTAINERS OVERFLOW](#containers-overflow)
  - [OVERFLOW](#overflow)
  - [OVERFLOW-WRAP](#overflow-wrap)
  
---

## [INDEX](./index.md)

---

## INTRODUCTION

The CSS `overflow` property controls what happens to content that is too big to fit into an area.

## OVERFLOW

The `overflow` property specifies what should happen if content overflows an element's box.

This property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.

### PROPERTY VALUES

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|    visible  | The overflow is not clipped. It renders outside the element's box. This is default| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_overflow) |
|   hidden    | The overflow is clipped, and the rest of the content will be invisible. Content can be scrolled programmatically | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_overflow&preval=hidden) |
|    clip     | The overflow is clipped, and the rest of the content will be invisible. Forbids scrolling, including programmatic scrolling. | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_overflow&preval=clip) |
|   scroll    | The overflow is clipped, but a scroll-bar is added to see the rest of the content| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_overflow&preval=scroll) |
|   auto      | If overflow is clipped, a scroll-bar should be added to see the rest of the content| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_overflow&preval=auto) |
|   initial   | Sets this property to its default value.      |
|   inherit   | Inherits this property from its parent element      |

### CSS SYNTAX

> overflow: visible | hidden | clip | scroll | auto | initial | inherit;

### EXAMPLE

Show different overflow property values

```CSS
div.ex1 {
  overflow: scroll;
}

div.ex2 {
  overflow: hidden;
}

div.ex3 {
  overflow: auto;
}

div.ex4 {
  overflow: clip;
}

div.ex5 {
  overflow: visible;
}

```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_overflow)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|   Property    |   overflow   |
| :-----------: | :----------- |
|   Chrome      |     1.0      |
|   Explorer    |     4.0      |
|   Firefox     |     1.0      |
|   Safari      |     1.0      |
|   Opera       |     7.0      |

---

## OVERFLOW-WRAP

The `overflow-wrap` property specifies whether or not the browser can break lines with long words, if they overflow the container.

### PROPERTY VALUES

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :---: |
|    normal   |Long words will not break, even if they overflow the container. This is default | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_overflow-wrap) |
|   anywhere  | Long words will break if they overflow the container  | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_overflow-wrap&preval=anywhere)|
|  break-word | Long words will break if they overflow the container  | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_overflow-wrap&preval=break-word)|
|   initial   | Sets this property to its default value.              |
|   inherit   | Inherits this property from its parent element.       |

### CSS SYNTAX 

> overflow-wrap: normal | anywhere | break-word | initial | inherit;

### EXAMPLE

Let the browser be allowed to break lines with long words, if they overflow the container

```CSS
div {
  overflow-wrap: break-word;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_overflow-wrap)

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |  overflow-wrap |
| :-----------: | :-----------   |
|   Chrome      |     23.0       |
|   Explorer    |     18.0       |
|   Firefox     |     49.0       |
|   Safari      |     6.1        |
|   Opera       |     12.1       |
