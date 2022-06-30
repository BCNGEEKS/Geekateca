---
layout: default
author: BCN Geek
date: 21th June 2022
---

# SELECTORS

## TABLE OF CONTENTS

- [TABLE OF CONTENTS](#table-of-contents)
- [INDEX](#index)
- [INTRODUCTION](#introduction)
- [SELECTOR](#selector)
- [SPECIFICITY](#specificity)
- [!IMPORTANT](#important)
- [BASIC SELECTOR](#basic-selectors)
  - [UNIVERSAL SELECTOR](#universal-selector)
  - [TYPE SELECTOR](#type-selector)
  - [CLASS SELECTOR](#class-selector)
  - [ID SELECTOR](#id-selector)
- [COMBINATION SELECTORS](#combination-selectors)
  - [DESCENDANT SELECTOR](#descendant-selector)
  - [DIRECT CHILD SELECTOR](#direct-child-selector)
  - [GENERAL SIBLING SELECTOR](#general-sibling-selector)
  - [ADJACENT SIBLING SELECTOR](#adjacent-sibling-selector)
  - [OR SELECTOR](#or-selector)
  - [AND SELECTOR](#and-selector)
- [ATTRIBUTE SELECTORS](#attribute-selectors)
  - [HAS ATTRIBUTE SELECTOR](#has-attribute-selector)
  - [EXACT ATTRIBUTE SELECTOR](#exact-attribute-selector)
  - [BEGINS WITH ATTRIBUTE SELECTOR](#begins-with-attribute-selector)
  - [ENDS WITH ATTRIBUTE SELECTOR](#end-with-attribute-selector)
  - [SUBSTRING ATTRIBUTE SELECTOR](#substring-attribute-selector)

---

## [INDEX](./index.md)

---

## INTRODUCTION

In this section we are gonna talk about the Selectors.

## SELECTOR

Selector is a CSS rule that defines which HTML elements are affected by the CSS style to apply it.

## SPECIFICITY

When an element has more than one CSS rule applied the browser will have to decide which is more specific, this rule is what is called `specificity`.

Depending of the kind of selector the specificity increments, the priority order is the next:

1. Line attributes
2. #ID
3. Class, pseudoclass or attributes
4. Element reference
5. Universal selector

There is an exception, the !important. This rule has the most priority that any element can get.

## !IMPORTANT

The `!important` rule is used to add more importance to a property or value than normal.

With !important it will override ALL previous styling rules and the only way to override an !important rule is to include another !important.

It's highly recommended that !important is only used for a particular element because using too much !important can cause problems and make CSS not work.

To indicate that an element is !important just add !important before the semicolon ; .

```CSS

.example-class
{
    color: blue !important;
}

```

## BASIC SELECTOR

A CSS selector is the code that determines which HTML elements your CSS styles will refer to.

```CSS

.class-name
{
    color: red
}

```

### UNIVERSAL SELECTOR

It is an `universal selector` that selects everything.

You just need to write *.

```CSS

*
{
    margin: 0;
}

```

### TYPE SELECTOR

The `type selector` allows you to select all elements of a particular type.

You just need to write the name of the element you want to select.

```CSS

div
{
    background-color: blue;
}

```

### CLASS SELECTOR

Classes are attributes that can be added to HTML elements that are used with CSS or JavaScript.

With the `class selector` it allows to specify which elements are the ones to be applied the style in HTML, it can be shared between multiple elements.

```CSS

.btn
{
    border: 1px solid black;
    text-align: center;
}

```

### ID SELECTOR

Similar to class selectors, with the `id selectors` you can define ids on HTML elements and reference them in CSS.

Remember that id selectors cannot be shared between elements on the same page.

To write an id selector write an # and then the id name.

```CSS

#firstname
{
    background-color: red;
}

```

## COMBINATION SELECTORS

Selectors can be combined in order to select the exact element wanted every time.

There are 6 combinations selectors.

### DESCENDANT SELECTOR

`Descendant selector` allows to select any element that matches a specific selector which is a descendant of an element.

To write a descendant selectors you need to separate the two selectors by space, the first one being the parent selector and the second the descendant.

```CSS

div span
{
    background-color: blue;
}

```

### DIRECT CHILD SELECTOR

Similar to descendant selectors, the `direct child selector` can be used to select all elements that are direct child of the first parent selector.

To use a direct child selector you just need to put > the selectors.

```CSS

div > span 
{
    background-color: plum;
}

```

### GENERAL SIBLING SELECTOR

`General sibling selector` selects all sibling elements that come after the first selector.

To write a general sibling selector put a ~ between the selectors.

```CSS

div ~ a 
{
    color: blue;
}

```

### ADJACENT SIBLING SELECTOR

`Adjacent sibling selector` is used to select an element that immediately follows the first element. The sibling element must have the same parent element.

To write an adjacent sibling selector put a + between the two selectors.

```CSS

div + a
{
    color: red;
}

```

### OR SELECTOR

`Or selector` it's a CSS selector that will select elements that match at least one of the selectors. This allows multiple selectors do the same thing.

To use the or selector separate the selectors by a comma.

```CSS

div, span 
{
    color: red;
}

```

### AND SELECTOR

`And selector` is used to select the specified element with the specified class indicated.

To use the and selector write the element then . and the class affected.

```CSS

div.redclass
{
    color: red;
}

```

## ATTRIBUTE SELECTORS

Defined with square brackets [ ] , `attribute selectors` allows you to select any element based on the attribute it has.

### HAS ATTRIBUTE SELECTOR

This selector just checks to see if an element has the specified attribute.

It doesn't care what the value of the attribute is, it only cares if there is an attribute in the HTML that matches the specified attribute.

```CSS

a[attribute]
{
    background-color: yellow;
}

```

### EXACT ATTRIBUTE SELECTOR

With the `exact attribute selector` you can check for a specific value in the exact attribute. It will only match if the elements have the specified attribute with the exact value.

To write and exact attribute selector you just need to write the equal sign, = , between the attribute name and the value.

```CSS

[attribute="true"]
{
    color: red;
}

```

### BEGINS WITH ATTRIBUTE SELECTOR

A selector to select elements with the specified attribute, whose values starts with the specified value.

To write a `begins with attribute` write ^ followed by an equal sign = between the attribute name and the value.

```CSS

[attribute^="t"]
{
    color: green;
}

```

### END WITH ATTRIBUTE SELECTOR

Identical to the previous selector but in this case the attribute s checking the end of the value.

To write an `end with attribute` write the dollar sign $ followed by an equal sign = between the attribute name and the value.

```CSS

[attribute$="e"]
{
    color: red;
}

```

### SUBSTRING ATTRIBUTE SELECTOR

Similar to the two previous selectors, `substring attribute selector`checks that the string passed to it appears anywhere in the attribute value.

To write a substring attribute selector write an asterisk sign * followed by an equal sign between the attribute name and the value.

```CSS

[attribute*="e"]
{
    color: green;
}

```
