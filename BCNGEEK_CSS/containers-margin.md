---
layout: default
author: BCNGeeks
date: 21th June 2022
---

# CONTAINERS-MARGIN

## TABLE OF CONTENTS

- [CONTAINERS-MARGIN](#containers-margin)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INTRODUCTION](#introduction)
  - [MARGIN-TOP](#margin-top)
    - [PROPERTY VALUES](#property-values)
    - [EXAMPLES](#examples)
    - [BROWSER SUPPORT](#browser-support)
  - [MARGIN-BOTTOM](#margin-bottom)
    - [PROPERTY VALUES](#property-values-1)
    - [EXAMPLES](#examples-1)
    - [BROWSER SUPPORT](#browser-support-1)
  - [MARGIN-RIGHT](#margin-right)
    - [PROPERTY VALUES](#property-values-2)
    - [EXAMPLES](#examples-2)
    - [BROWSER SUPPORT](#browser-support-2)
  - [MARGIN-LEFT](#margin-left)
    - [PROPERTY VALUES](#property-values-3)
    - [EXAMPLES](#examples-3)
    - [BROWSER SUPPORT](#browser-support-3)
  - [MARGIN](#margin)
    - [PROPERTY VALUES](#property-values-4)
    - [EXAMPLES](#examples-4)
    - [BROWSER SUPPORT](#browser-support-4)
  - [MARGIN-COLLAPSE](#margin-collapse)
    - [EXAMPLES](#examples-5)

---

## [INDEX](./INDEX.md)

---

## INTRODUCTION

The `margin` properties are used to create space around elements, outside of any defined borders.

With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).

## MARGIN-TOP

`margin-top` sets the top margin of an element.

### PROPERTY VALUES

| Value   | Description                                     |
|:-------:|:------------------------------------------------|
| Length  | Specifies a fixed top margin in px, pt, cm, etc. Default value is 0px. Negative values are allowed.                  |
| %       | Specifies a top margin in percent of the width of the containing element.                                         |
| Auto    | The browser calculates a top margin.            |
| Initial | Sets the property to its default value.         |
| Inherit | Inherits this property from its parent element. |

### EXAMPLES

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

| Browser        | Version |
|:---------------|:-------:|
| Chrome         | 1.0     |
| Explorer/Edge  | 6.0     |
| Firefox        | 1.0     |
| Safari         | 1.0     |
| Opera          | 3.5     |

## MARGIN-BOTTOM

`margin-bottom` sets the bottom margin of an element.

### PROPERTY VALUES

| Value   | Description                                     |
|:-------:|:------------------------------------------------|
| Length  | Specifies a fixed bottom margin in px, pt, cm, etc. Default value is 0px. Negative values are allowed.          |
| %       | Specifies a bottom margin in percent of the width of the containing element.                                         |
| Auto    | The browser calculates a bottom margin.         |
| Initial | Sets the property to its default value.         |
| Inherit | Inherits this property from its parent element. |

### EXAMPLES

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

| Browser        | Version |
|:---------------|:-------:|
| Chrome         | 1.0     |
| Explorer/Edge  | 6.0     |
| Firefox        | 1.0     |
| Safari         | 1.0     |
| Opera          | 3.5     |

## MARGIN-RIGHT

`margin-right` sets the right margin of an element.

### PROPERTY VALUES

| Value   | Description                                     |
|:-------:|:------------------------------------------------|
| Length  | Specifies a fixed right margin in px, pt, cm, etc. Default value is 0px. Negative values are allowed.          |
| %       | Specifies a right margin in percent of the width of the containing element.                                         |
| Auto    | The browser calculates a right margin.          |
| Initial | Sets the property to its default value.         |
| Inherit | Inherits this property from its parent element. |

### EXAMPLES

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

| Browser        | Version |
|:---------------|:-------:|
| Chrome         | 1.0     |
| Explorer/Edge  | 6.0     |
| Firefox        | 1.0     |
| Safari         | 1.0     |
| Opera          | 3.5     |

## MARGIN-LEFT

`margin-left` sets the left margin of an element.

### PROPERTY VALUES

| Value   | Description                                     |
|:-------:|:------------------------------------------------|
| Length  | Specifies a fixed left margin in px, pt, cm, etc. Default value is 0px. Negative values are allowed.                  |
| %       | Specifies a left margin in percent of the width of the containing element.                                         |
| Auto    | The browser calculates a left margin.           |
| Initial | Sets the property to its default value.         |
| Inherit | Inherits this property from its parent element. |

### EXAMPLES

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

| Browser        | Version |
|:---------------|:-------:|
| Chrome         | 1.0     |
| Explorer/Edge  | 6.0     |
| Firefox        | 1.0     |
| Safari         | 1.0     |
| Opera          | 3.5     |

## MARGIN

The `margin` property sets the margins for an element, and is a shorthand property for the previous properties.

Depending on the values introduced `margin` performs in different ways.

### PROPERTY VALUES

| Value   | Description                                     |
|:-------:|:------------------------------------------------|
| Length  | Specifies a margin in px, pt, cm, etc. Default value is 0px. Negative values are allowed.                           |
| %       | Specifies a margin in percent of the width of the containing element.                                         |
| Auto    | The browser calculates a margin.                |
| Initial | Sets the property to its default value.         |
| Inherit | Inherits this property from its parent element. |

### EXAMPLES

```CSS
#example1{
  margin: 20px;
}
#example2{
  margin: 20px 12%;
}
#example3{
  margin: 20px 12% auto;
}
#example4{
  margin: 20px 12% 10rem auto;
}
```

The margin property allows introducing up to 4 values, varying it's effect.

In the first example, having 1 value, all four margins are the same.

Having 2 values, the top and bottom margin use the first value, and right and left margin use the second.

Example3 shows a 3 value example, where the top and bottom use the first and last value, respectively. And the right and left margin use the middle one.

At last, having 4 values each margin uses one, going top, right, bottom and left.

> Note that each value can be any of the possible values, except inherit and initial.

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

| Browser        | Version |
|:---------------|:-------:|
| Chrome         | 1.0     |
| Explorer/Edge  | 6.0     |
| Firefox        | 1.0     |
| Safari         | 1.0     |
| Opera          | 3.5     |

## MARGIN-COLLAPSE

Margin Collapse is a quality applied to the vertical margins of succeding elements where they collapse into a single margin equal to the largest of the two margins.

### EXAMPLES

```HTML
<!DOCTYPE html>
<html>
<head>
<style>
p.a {
  margin: 30px 0;
}

p.b {
  margin: 20px 0;
}
</style>
</head>
<body>

<p class="a">A paragraph with a top and bottom margin of 30 pixels.</p>
<p class="b">A paragraph with a top and bottom margin of 20 pixels.</p>

</body>
</html>
```

The vertical margin between the two paragraphs above should be 50px (30px + 20px). But due to margin collapse, the actual margin ends up being 30px!
