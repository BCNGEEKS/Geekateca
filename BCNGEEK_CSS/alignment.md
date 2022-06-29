---
layout: default
author: BCNGeeks
date: 22th June 2022
--- 

# ALIGNMENT

## TABLE OF CONTENTS

- [ALIGNMENT](#alignment)
  - [ALIGN CONTENT](#align-content)
  - [ALIGN ITEMS](#align-items)
  - [ALIGN SELF](#align-self)
  - [JUSTIFY CONTENT](#justify-content)
  - [TEXT ALIGN](#text-align)
  - [TEXT ALIGN LAST](#text-align-last)
  - [VERTICAL ALIGN](#vertical-align)
  
---

## [INDEX](./INDEX.md)

---

## INTRODUCTION

The CSS `alignment` properties are used to align items or text itself.

## ALIGN-CONTENT

The `align-content` property modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines.

### ALIGN-CONTENT PROPERTY VALUES

|    Value     |                      Description                                                        | Demo |
|:-----------: |                      :-----------                                                       | :---: |
| stretch      | Default value. Lines stretch to take up the remaining space.                            | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-content&preval=stretch)     |
| center       | Lines are packed toward the center of the flex container.                               | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-content&preval=center)     |
| flex-start   | Lines are packed toward the start of the flex container.                                | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-content&preval=flex-start)     |
| flex-end     | Lines are packed toward the end of the flex container.                                  | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-content&preval=flex-end)     |
| space-between| Lines are evenly distributed in the flex container.                                     | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-content&preval=space-between)     |
| space-around | Lines are evenly distributed in the flex container, with half-size spaces on either end.| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-content&preval=space-around)     |
| space-evenly | Lines are evenly distributed in the flex container, with equal space around them.       | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-content&preval=space-evenly)     |
| initial      | Sets this property to its default value.                                                |
| inherit      | Inherits this property from its parent element.                                         |

### CSS SYNTAX FOR ALIGN-CONTENT

align-content: stretch | center | flex-start | flex-end | space-between | space-around | initial | inherit;

### ALIGN-CONTENT EXAMPLE

Pack lines toward the center of the flex container

```CSS
div {
  width: 70px;
  height: 300px;
  border: 1px solid #c3c3c3;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_align-content)

### BROWSER SUPPORT FOR ALIGN-CONTENT

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- specify the first version that worked with a prefix.

|   Property    |     align-content     |
| :-----------: |     :-----------      |
|   Chrome      |     21.0              |
|   Explorer    |     11.0              |
|   Firefox     |     28.0              |
|   Safari      |     9.0 7.0 -webkit-  |
|   Opera       |     12.1              |

---

## ALIGN-ITEMS

The `align-items` property specifies the default alignment for items inside the flexible container.

### ALIGN-ITEMS PROPERTY VALUES

|    Value     |                      Description                                                        |                                               Demo                                                    |
|:-----------: |                      :-----------                                                       |                                     :---------------------:                                           |
| stretch      | Default. Items are stretched to fit the container.                                      | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-items&preval=stretch)     |
| center       | Items are positioned at the center of the container.                                    | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-items&preval=center)      |
| flex-start   | Items are positioned at the beginning of the container                                  | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-items&preval=flex-start)  |
| flex-end     | Items are positioned at the end of the container.                                       | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-items&preval=flex-end)    |
| baseline     | Items are positioned at the baseline of the container.                                  | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-items&preval=baseline)    |
| initial      | Sets this property to its default value.                                                |
| inherit      | Inherits this property from its parent element.                                         |

### CSS SYNTAX FOR ALIGN-ITEMS

align-items: stretch | center | flex-start | flex-end | baseline | initial | inherit;

### ALIGN-ITEMS EXAMPLE

Center the alignments for all the items of the flexible **div** element

```CSS
div {
  display: flex;
  align-items: center;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_align-items)

---

Items are positioned at the beginning of the container

```CSS
div {
  display: flex;
  align-items: flex-start;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_align-items2)

### BROWSER SUPPORT FOR ALIGN-ITEMS

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- specify the first version that worked with a prefix.

|   Property    |     align-content     |
| :-----------: |     :-----------      |
|   Chrome      |     21.0              |
|   Explorer    |     11.0              |
|   Firefox     |     20.0              |
|   Safari      |     9.0 7.0 -webkit-  |
|   Opera       |     12.1              |

---

## ALIGN-SELF

The `align-self` property specifies the alignment for the selected item inside the flexible container.

### ALIGN-SELF PROPERTY VALUES

|    Value     |                      Description                                   | Demo |
|:-----------: |                      :-----------                                  | :---: |
| auto         |    Default. The element inherits its parent container's align-items property, or "stretch" if it has no parent container| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-self&preval=auto)      |
| stretch      | The element is positioned to fit the container.                    | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-self&preval=stretch)    |
| center       | The element is positioned at the center of the container.          | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-self&preval=center)     |
| flex-start   | The element is positioned at the beginning of the container.       | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-self&preval=flex-start) |
| flex-end     | The element is positioned at the end of the container.             | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-self&preval=flex-end)   |
| baseline     | The element is positioned at the baseline of the container.        | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_align-self&preval=baseline)   |
| initial      | Sets this property to its default value.                           |
| inherit      | Inherits this property from its parent element.                    |

### CSS SYNTAX FOR ALIGN-SELF

align-self: auto |stretch | center | flex-start | flex-end | baseline | initial | inherit;

### ALIGN-SELF EXAMPLE

Center the alignments for one of the items inside a flexible element

```CSS
#myBlueDiv {
  align-self: center;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_align-self)

### BROWSER SUPPORT FOR ALIGN-SELF

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- specify the first version that worked with a prefix.

|   Property    |     align-self        |
| :-----------: |     :-----------      |
|   Chrome      |     21.0              |
|   Explorer    |     11.0              |
|   Firefox     |     20.0              |
|   Safari      |     9.0 7.0 -webkit-  |
|   Opera       |     12.1              |

---

## JUSTIFY-CONTENT

The `justify-content` property aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally).

### JUSTIFY-CONTENT PROPERTY VALUES

|    Value      |                      Description                                       | Demo |
|:-----------:  |                      :-----------                                      | :----: |
| flex-start    | Default value. Items are positioned at the beginning of the container. |[Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_justify-content&preval=flex-start)|
| flex-end      | Items are positioned at the end of the container.                      |[Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_justify-content&preval=flex-end)|
| center        | Items are positioned in the center of the container.                   |[Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_justify-content&preval=center)|
| space-between | Items will have space between them.                                    |[Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_justify-content&preval=space-between)|
| space-around  | Items will have space before, between, and after them.                 |[Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_justify-content&preval=space-around)|
| space-evenly  | Items will have equal space around them.                               |[Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_justify-content&preval=space-evenly)|
| initial       | Sets this property to its default value.                               |
| inherit       | Inherits this property from its parent element.                        |

### CSS SYNTAX FOR JUSTIFY-CONTENT

justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | initial | inherit;

### JUSTIFY-CONTENT EXAMPLE

Align the flex items at the center of the container

```CSS
div {
  display: flex;
  justify-content: center;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_justify-content)

---

Align the flex items at the beginning of the container (this is default):

```CSS
div {
  display: flex;
  justify-content: flex-start;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_justify-content3)

### BROWSER SUPPORT FOR JUSTIFY-CONTENT

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

|   Property    |     justify-content    |
| :-----------: |     :-----------       |
|   Chrome      |     29.0 21.0 -webkit- |
|   Explorer    |     11.0               |
|   Firefox     |     28.0 18.0 -moz-    |
|   Safari      |     9.0 6.1 -webkit-   |
|   Opera       |     17.0               |

---

## TEXT-ALIGN

The `text-align` property specifies the horizontal alignment of text in an element.

### TEXT-ALIGN PROPERTY VALUES

|    Value      |                      Description                          |                                               Demo                                               |
|:-----------:  |                      :-----------                         |                               :--------------------------------------:                           |
| left          | Aligns the text to the left                               | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-align)                |
| right         | Aligns the text to the right                              | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-align&preval=right)   |
| center        | Centers the text                                          | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-align&preval=center)  |
| justify       | Stretches the lines so that each line has equal width     | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-align&preval=justify) |
| initial       | Sets this property to its default value.                  |
| inherit       | Inherits this property from its parent element.           |

### CSS SYNTAX FOR TEXT-ALIGN

text-align: left | right | center | justify | initial | inherit;

### TEXT-ALIGN EXAMPLE

Set the text alignment for different **div** elements:

```CSS
div.a {
  text-align: center;
}

div.b {
  text-align: left;
}

div.c {
  text-align: right;
}

div.c {
  text-align: justify;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_text-align)

### BROWSER SUPPORT FOR TEXT-ALIGN

The numbers in the table specify the first browser version that fully supports the property.

|   Property    |    text-align     |
| :-----------: |    :-----------   |
|   Chrome      |      1.0          |
|   Explorer    |      3.0          |
|   Firefox     |      1.0          |
|   Safari      |      1.0          |
|   Opera       |      3.5          |

---

## TEXT-ALIGN-LAST

The `text-align-last` property specifies how to align the last line of a text.

Notice that the text-align-last property sets the alignment for all last lines within the selected element. So, if you have a **div** with three paragraphs in it, text-align-last will apply to the last line of each of the paragraphs.

### TEXT-ALIGN-LAST PROPERTY VALUES

|    Value      |                      Description                          |                                               Demo                                                    |
|:-----------:  |                      :-----------                         |                               :--------------------------------------:                                |
| auto          | Default value. The last line is justified and aligned left| [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-align-last&preval=auto)    |
| left          | The last line is aligned to the left                      | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-align-last&preval=left)    |
| right         | The last line is aligned to the right                     | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-align-last&preval=right)   |
| center        | The last line is center-aligned                           | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-align-last&preval=center)  |
| justify       | The last line is justified as the rest of the lines       | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-align-last&preval=justify) |
| start         | The last line is aligned at the beginning of the line     | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-align-last&preval=start)   |
| end           | The last line is aligned at the end of the line           | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-align-last&preval=end)     |
| initial       | Sets this property to its default value.                  |
| inherit       | Inherits this property from its parent element.           |

### CSS SYNTAX FOR TEXT-ALIGN-LAST

text-align-last: auto | left | right | center | justify | start | end | initial | inherit;

### TEXT-ALIGN-LAST EXAMPLE

Align the last line of text in three **div** elements

```CSS
div.a {
  text-align: justify;  /* For Edge */
  text-align-last: right;
}

div.b {
  text-align: justify; /* For Edge */
  text-align-last: center;
}

div.c {
  text-align: justify; /* For Edge */
  text-align-last: justify;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_text-align-last)

### BROWSER SUPPORT FOR TEXT-ALIGN-LAST

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -moz- specify the first version that worked with a prefix.

|   Property    |    text-align-last  |
| :-----------: |    :-----------     |
|   Chrome      |      47.0           |
|   Explorer    |      5.5            |
|   Firefox     |      49.0 12.0 -moz |
|   Safari      |      Not supported  |
|   Opera       |      34.0           |

---

## VERTICAL-ALIGN

The `vertical-align` property sets the vertical alignment of an element.

### VERTICAL-ALIGN PROPERTY VALUES

|    Value      |                      Description                                                                     |    Demo   |
|:-----------:  |                      :-----------                                                                    |:--------------------------------------:                                 |
| baseline      | The element is aligned with the baseline of the parent. This is default	                             | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_vertical-align&preval=baseline)    |
| length        | Raises or lower an element by the specified length. Negative values are allowed.                     | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_vertical-align&preval=25px)    |
| %             | Raises or lower an element by a percent of the "line-height" property. Negative values are allowed   | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_vertical-align&preval=50%25)   |
| sub           | The element is aligned with the subscript baseline of the parent	                                   | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_vertical-align&preval=sub)  |
| super         | The element is aligned with the superscript baseline of the parent                                 	 | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_vertical-align&preval=super)|
| top           | The element is aligned with the top of the tallest element on the line                               | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_vertical-align&preval=top)   |
| text-top      | The element is aligned with the top of the parent element's font	                                   | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_vertical-align&preval=text-top)     |
| middle        | The element is placed in the middle of the parent element	                                           | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_vertical-align&preval=middle) |
| bottom        | The element is aligned with the lowest element on the line	                                         | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_vertical-align&preval=bottom)     |
| text-bottom   | The element is aligned with the bottom of the parent element's font	                                 | [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_vertical-align&preval=text-bottom)     |
| initial       | Sets this property to its default value                                                              |
| inherit       | Inherits this property from its parent element.                                                      |

### CSS SYNTAX FOR VERTICAL-ALIGN

vertical-align: baseline | length | sub | super | top | text-top | middle | bottom |text-bottom | initial | inherit;

### VERTICAL-ALIGN EXAMPLE

Vertical align an image

```CSS
img.a {
  vertical-align: baseline;
}

img.b {
  vertical-align: text-top;
}

img.c {
  vertical-align: text-bottom;
}

img.d {
  vertical-align: sub;
}

img.e {
  vertical-align: super;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss_vertical-align)

### BROWSER SUPPORT FOR VERTICAL-ALIGN

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -moz- specify the first version that worked with a prefix.

|   Property    |    vertical-align  |
| :-----------: |    :-----------    |
|   Chrome      |      1.0           |
|   Explorer    |      4.0           |
|   Firefox     |      1.0           |
|   Safari      |      1.0           |
|   Opera       |      4.0           |

---
