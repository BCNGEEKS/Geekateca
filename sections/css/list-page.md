---
layout: default
author: BCNGeeks
date: 27th June 2022
---

# LISTS - PROPERTIES

## TABLE OF CONTENTS

- [LISTS - PROPERTIES](#lists---properties)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INDEX](#index)
  - [INTRODUCTION](#introduction)
  - [LIST-STYLE PROPERTY](#list-style-property)
    - [PROPERTY VALUES FOR LIST-STYLE PROPERTY](#property-values-for-list-style-property)
    - [EXAMPLE FOR LIST-STYLE PROPERTY](#example-for-list-style-property)
    - [BROWSER SUPPORT FOR LIST-STYLE PROPERTY](#browser-support-for-list-style-property)
  - [LIST-STYLE-TYPE PROPERTY](#list-style-type-property)
    - [PROPERTY VALUES FOR LIST-STYLE-TYPE PROPERTY](#property-values-for-list-style-type-property)
    - [EXAMPLE FOR LIST-STYLE-TYPE PROPERTY](#example-for-list-style-type-property)
    - [BROWSER SUPPORT FOR LIST-STYLE-TYPE PROPERTY](#browser-support-for-list-style-type-property)
  - [LIST-STYLE-POSITION PROPERTY](#list-style-position-property)
    - [PROPERTY VALUES FOR LIST-STYLE-POSITION PROPERTY](#property-values-for-list-style-position-property)
    - [EXAMPLE FOR LIST-STYLE-POSITION PROPERTY](#example-for-list-style-position-property)
    - [BROWSER SUPPORT FOR LIST-STYLE-POSITION PROPERTY](#browser-support-for-list-style-position-property)
  - [LIST-STYLE-IMAGE PROPERTY](#list-style-image-property)
    - [PROPERTY VALUES FOR LIST-STYLE-IMAGE PROPERTY](#property-values-for-list-style-image-property)
    - [EXAMPLE FOR LIST-STYLE-IMAGE PROPERTY](#example-for-list-style-image-property)
    - [BROWSER SUPPORT FOR LIST-STYLE-IMAGE PROPERTY](#browser-support-for-list-style-image-property)

---

## [INDEX](./index.md)

---

## INTRODUCTION

The lists properties are used for give styling at the lists on the HTMl.

With CSS list properties allow:

- Set different list item markers for ordered list
- Set different list item markers for unordered list
- Set an image as the list item marker
- And also allow add background colors to list and list items

## LIST-STYLE PROPERTY

The `list-style` property is a property that is used how a shorthand for the following properties

- list-style-type
- list-style-position
- list-style-image

### PROPERTY VALUES FOR LIST-STYLE PROPERTY

|        Value        | Description                                                             |
| :-----------------: | :---------------------------------------------------------------------- |
|   list-style-type   | Specifies the type of list-item marker, for default is `disc`           |
| list-style-position | Specifies where to place the list-item marker, for default is `outside` |
|  list-style-image   | Specifies the type of list-item marker, for default is `none`           |
|       Initial       | Sets the property to its default value.                                 |
|       Inherit       | Inherits this property from its parent element.                         |

### EXAMPLE FOR LIST-STYLE PROPERTY

This is a example where all the values are used

```CSS
ul {
  list-style: square inside url("sqpurple.gif");
}
```

The first value is the type mark of the list, the second value is the position of the marker list, and the last value is for replace the marker list for a image

### BROWSER SUPPORT FOR LIST-STYLE PROPERTY

| Browser | Version |
| :-----: | :------ |
| Chrome  | 1.0     |
|  Edge   | 4.0     |
| Mozilla | 1.0     |
| Safari  | 1.0     |
|  Opera  | 7.0     |

## LIST-STYLE-TYPE PROPERTY

This property is used for change the mark at the lists, this property have the following value

### PROPERTY VALUES FOR LIST-STYLE-TYPE PROPERTY

|        Value         | Description                                                 |
| :------------------: | :---------------------------------------------------------- |
|         disc         | Is the value for default, and the marker is a filled circle |
|        circle        | The marker at the list is a circle                          |
|        square        | The marker at the list is square                            |
|       decimal        | The marker is a number                                      |
| decimal-leading-zero | The marker is a number with leading zeros(01, 02, etc)      |
|     lower-alpha      | The marker is a lower alpha(a, b, c, etc)                   |
|     lower-latin      | The marker is a lowe-latin(a, b, c, etc)                    |
|     lower-roman      | The marker is a lower roman(i, ii, iii, etc)                |
|     upper-alpha      | The marker is a upper-alpha(A, B, C, etc)                   |
|     upper-latin      | The marker is a upper-latin(A, B, C, etc)                   |
|     upper-roman      | The marker is a upper-roman(I, II, III, etc)                |
|         none         | The marker is not displayed                                 |
|       initial        | Set the property to its default value                       |
|       inherit        | Inherits the property  from its parent element              |

### EXAMPLE FOR LIST-STYLE-TYPE PROPERTY

```CSS
ul {list-style-type: disc;}
ul {list-style-type: circle;}
ul {list-style-type: square;}
ol {list-style-type: decimal;}
ol {list-style-type: decimal-leading-zero;}
ol {list-style-type: lower-alpha;}
ol {list-style-type: lower-latin;}
ol {list-style-type: lower-roman;}
ol {list-style-type: upper-alpha;}
ol {list-style-type: upper-latin;}
ol {list-style-type: upper-roman;}
ol {list-style-type: none;}
ol {list-style-type: inherit;}
```

### BROWSER SUPPORT FOR LIST-STYLE-TYPE PROPERTY

| Browser | Version |
| :-----: | :------ |
| Chrome  | 1.0     |
|  Edge   | 4.0     |
| Firefox | 1.0     |
| Safari  | 1.0     |
|  Opera  | 3.5     |

## LIST-STYLE-POSITION PROPERTY

The list-style-position specifies the position od the marker in the list.

### PROPERTY VALUES FOR LIST-STYLE-POSITION PROPERTY

|  Value  | Description                                     |
| :-----: | :---------------------------------------------- |
| inside  | The bullet points will be inside the list item  |
| outside | The bullet point will be outside the list items |
| initial | Set the property to its default value           |
| inherit | Inherits the property  from its parent element  |

### EXAMPLE FOR LIST-STYLE-POSITION PROPERTY

When using `list-style-position: inside;` the bullets are inside the list and this will cause the text to be pushed to the start

```CSS
ul {
  list-style-position: inside;
}
```

When using `list-style-position: outside;` the bullets are outside the list, the start of each line of a list item will be aligned vertically

```CSS
ul {
  list-style-position: outside;
}
```

### BROWSER SUPPORT FOR LIST-STYLE-POSITION PROPERTY

| Browser | Version |
| :-----: | :------ |
| Chrome  | 1.0     |
|  Edge   | 4.0     |
| Firefox | 1.0     |
| Safari  | 1.0     |
|  Opera  | 3.5     |

## LIST-STYLE-IMAGE PROPERTY

This property replaces the list-item  marker for a image

### PROPERTY VALUES FOR LIST-STYLE-IMAGE PROPERTY

|  Value  | Description                                                         |
| :-----: | :------------------------------------------------------------------ |
|  none   | The image no will be displayed, and for default was the marker disc |
|   url   | Is the path of the image to be used as a list-item marker           |
| initial | Set the property to its default value                               |
| inherit | Inherits the property  from its parent element                      |

### EXAMPLE FOR LIST-STYLE-IMAGE PROPERTY

With url value

```CSS
ul {
  list-style-image: url('sqpurple.gif');
}
```

With none value

```CSS
ul {
  list-style-image: none;
}
```

### BROWSER SUPPORT FOR LIST-STYLE-IMAGE PROPERTY

| Browser | Version |
| :-----: | :------ |
| Chrome  | 1.0     |
|  Edge   | 4.0     |
| Firefox | 1.0     |
| Safari  | 1.0     |
|  Opera  | 7.0     |
