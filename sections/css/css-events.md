---
layout: default
author: BCNGeeks
date: 29th June 2022
---

# CSS EVENTS

## TABLE OF CONTENTS

- [CSS EVENTS](#css-events)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INDEX](#index)
  - [POINTER-EVENTS](#pointer-events)
    - [EXAMPLES FOR POINTER-EVENTS](#examples-for-pointer-events)
  - [PSEUDO-CLASSES](#pseudo-classes)
    - [SYNTAX FOR PSEUDO-CLASSES](#syntax-for-pseudo-classes)
    - [EXAMPLE FOR PSEUDO-CLASSES](#example-for-pseudo-classes)

---

## [INDEX](./index.md)

---

## POINTER-EVENTS

`Pointer-events` is a property that sets wether or not an elements should react to pointer events:

### EXAMPLES FOR POINTER-EVENTS

```CSS
div.ex1 {
  pointer-events: none;
}

div.ex2 {
  pointer-events: auto;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_pointer-events)

## PSEUDO-CLASSES

A `Pseudo-class` is used to define a special state of an element.

This means that you can change the CSS style after a certain event, normally a `hover`.

### SYNTAX FOR PSEUDO-CLASSES 

```CSS
    selector:pseudo-class {
        property: value;
    }
```

### EXAMPLE FOR PSEUDO-CLASSES

Pseudo-classes can be combined with HTML classes:

When you hover over the link in the example, it will change color:

```CSS
a.highlight:hover {
    color: #ff0000;
}
```

[Try it yourself](https://www.w3schools.com/css/tryit.asp?filename=trycss_pseudo-class)

Hover on `<div>`

An example of using the :hover pseudo-class on a `<div>` element:

```CSS
div:hover {
  background-color: blue;
}
```

[Try it yourself](https://www.w3schools.com/css/tryit.asp?filename=trycss_pseudo-class_hover_div)

The :first-child Pseudo-class:

In the following example, the selector matches any `<p>` element that is the first child of any element:

```CSS
p:first-child {
  color: blue;
}
```

[Try it yourself](https://www.w3schools.com/css/tryit.asp?filename=trycss_first-child1)
