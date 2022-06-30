---
layout: default
author: BCN Geek
date: 23th June 2022
---

# PSEUDO-ELEMENTS

## TABLE OF CONTENTS

- [TABLE OF CONTENTS](#table-of-contents)
- [INDEX](#index)
- [INTRODUCTION](#introduction)
  - [CSS SYNTAX FOR PSEUDO-ELEMENTS](#css-syntax-for-pseudo-elements)
- [PSEUDO-ELEMENTS IN CSS](#pseudo-elements-in-css)
  - [::FIRST-LINE PSEUDO-ELEMENT](#first-line-pseudo-element)
  - [::FIRST-LETTER PSEUDO-ELEMENT](#first-letter-pseudo-element)
  - [::BEFORE PSEUDO-ELEMENT](#before-pseudo-element)
  - [::AFTER PSEUDO-ELEMENT](#after-pseudo-element)
  - [::MARKER PSEUDO-ELEMENT](#marker-pseudo-element)
  - [::SELECTION PSEUDO-ELEMENT](#selection-pseudo-element)
- [BROWSER SUPPORT FOR PSEUDO-ELEMENTS](#browser-support-for-pseudo-elements)

---

## [INDEX](./index.md)

---

## INTRODUCTION

`Pseudo-elements` is a keyword added to a selector that lets you style a specific part of the selected element.

For example:

- Style the first letter of an element
- Insert content before or after the content of an element

## CSS SYNTAX FOR PSEUDO-ELEMENTS

```CSS

selector::pseudo-element
{
    property:value;
}

```

## PSEUDO-ELEMENTS IN CSS

### ::FIRST-LINE PSEUDO-ELEMENT

Applies styles to the first line of a block-level element.

The properties that can be applied to the ::first-letter pseudo-element:

- font properties
- color properties
- background properties
- word-spacing
- letter-spacing
- text-decoration
- vertical-align
- text-transform
- line-height
- clear

```CSS

p::first-line 
{
  color: #ff0000;
  font-variant: small-caps;
}

```

### ::FIRST-LETTER PSEUDO-ELEMENT

Applies style to the first letter of the first line of a block-level element, but only when is not preceded by other content.

The properties that can be applied to the ::first-letter pseudo-element:

- font properties
- color properties
- background properties
- margin properties
- padding properties
- border properties
- text-decoration
- vertical-align
- line-height
- float
- clear

```CSS

p::first-letter 
{
  color: #ff0000;
  font-size: xx-large;
}

```

### ::BEFORE PSEUDO-ELEMENT

Creates a pseudo-element that is the first-child of the selected element, used to insert content before the content of an element.

Commonly used to add cosmetic content to an element. It is inline by default.

```CSS

h1::before 
{
  content: url(smiley.gif);
}

```

### ::AFTER PSEUDO-ELEMENT

A pseudo-element used to add content after the content of the element, it creates a pseudo-element that is the last child of the selected element.

Commonly used to add cosmetic content to an element. It is inline by default.

```CSS

h1::after 
{
  content: url(smiley.gif);
}

```

### ::MARKER PSEUDO-ELEMENT

A pseudo-element that selects the marker box of a list item.

```CSS

::marker 
{
  color: red;
  font-size: 23px;
}

```

### ::SELECTION PSEUDO-ELEMENT

This pseudo-selector applies styles to the part of the document that is highlighted by the user like clicking or dragging the mouse across the text.

The properties that can be applied to the ::selection pseudo-element:

- color
- background
- cursor
- outline

```CSS

::selection 
{
  color: red;
  background: yellow;
}

```

## BROWSER SUPPORT FOR PSEUDO-ELEMENTS

| Browser | Version |
|:----:|:-------------|
| Chrome  | 1.0 |
| Explorer  | 9.0 |
| Firefox | 1.0 |
| Safary | 1.4 |
| Opera | 7.0 |
