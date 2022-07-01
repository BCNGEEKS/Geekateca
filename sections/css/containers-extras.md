---
layout: default
author: BCNGeeks
date: 20th June 2022
---

# CONTAINERS-EXTRAS

## TABLE OF CONTENT

- [CONTAINERS-EXTRAS](#containers-extras)
  - [TABLE OF CONTENT](#table-of-content)
  - [BOX SIZING](#box-sizing)
    - [PROPERTY VALUES](#property-values)
    - [EXAMPLES](#examples)
    - [BROWSER SUPPORT](#browser-support)
  - [BOX SHADOW](#box-shadow)
    - [PROPERTY VALUES](#property-values-1)
    - [EXAMPLES](#examples-1)
    - [BROWSER SUPPORT](#browser-support-1)
  - [VISIBILITY](#visibility)
    - [PROPERTY VALUES](#property-values-2)
    - [EXAMPLES](#examples-2)
    - [BROWSER SUPPORT](#browser-support-2)

---

## [INDEX](./index.md)

---

## BOX SIZING

The `box-sizing` property determines if the element includes the padding and border in the width and height or if otherwise, the width and height doesn't include padding and border.

### PROPERTY VALUES

| Value       | Description                         |
|:-----------:|:------------------------------------|
| Content-box | Default value. The width and height properties includes only the content. Border and padding are not included.  |
| Border-box  | The width and height properties includes content, padding and border. |
| Initial     | Sets the property to its default value. |
| Inherit     | Inherits this property from its parent element. |

### EXAMPLES

```CSS
#example1 {
  box-sizing: content-box;  
  width: 300px;
  height: 100px;
  padding: 30px;  
  border: 10px solid blue;
}

#example2 {
  box-sizing: border-box;
  width: 300px;
  height: 100px;
  padding: 30px;  
  border: 10px solid blue;
}
```

The first example has a width of 300px. But the full width is 300px + 20px (left and right border) + 60px (left and right padding) = 380px!

The second example has a full width of 300px, no matter what!

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

| Browser | Version |
|:---------|:------|
| Chrome   | 10.0, 4.0 -webkit- |
| Explorer/Edge  | 8.0 |
| Firefox  | 29.0, 2.0 -moz- |
| Safari   | 5.1, 3.2-webkit- |
| Opera    | 9.5 |

## BOX SHADOW

The `box-shadow` property adds shadows to different elements.

To attach more than one shadow to an element, add a comma-separated list of shadows.

### PROPERTY VALUES

| Value    | Description                            |
|:--------:|:---------------------------------------|
| None     | Default value. No shadow is displayed. |
| H-offset | Required. The horizontal offset of the shadow. A positive value puts the shadow on the right side of the box, a negative value puts the shadow on the left side of the box. |
| V-offset | Required. The vertical offset of the shadow. A positive value puts the shadow below the box, a negative value puts the shadow above the box |
| Blur     | Optional. The blur radius. The higher the number, the more blurred the shadow will be. |
| Spread   | Optional. The spread radius. A positive value increases the size of the shadow, a negative value decreases the size of the shadow. |
| Color    | Optional. The color of the shadow. The default value is the text color. |
| Inset    | Optional. Changes the shadow from an outer shadow, to an inner shadow. |
| Initial  | Sets the property to its default value. |
| Inherit  | Inherits this property from its parent element. |

> In Safari the color is required. If not specified the shadow is not displayed.

### EXAMPLES

```CSS
#example1 {
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px;
}

#example2 {
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px #888888;
}

#example3 {
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px 18px red;
}

#example4 {
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px 8px 10px #888888;
}

#example5 {
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px 20px red inset;
}

#example6 {
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 5px blue, 10px 10px red, 15px 15px green;
}
```

From example 1 to 5, it shows the different values being added. The first one introduces the minimum needed, the h-offset and the v-offset. The second example adds the color value, example 3 and 4 shows blur and spread values,being the blur needed to show spread. Example 5 shows the inset value.

Example 6 shows how a list of shadows is added.

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

| Browser | Version |
|:---------|:------|
| Chrome   | 10.0, 4.0 -webkit- |
| Explorer/Edge  | 9.0 |
| Firefox  | 4.0, 3.5 -moz- |
| Safari   | 5.1, 3.1 -webkit- |
| Opera    | 10.5 |

## VISIBILITY

The `visibility` property specifies whether or not an element is visible.

### PROPERTY VALUES

| Value    | Description                         |
|:--------:|:------------------------------------|
| Visible  | Default value. The element is visible.  |
| Hidden   | The element is hidden (but still takes up space) |
| Collapse | Only for table rows, row groups, columns, column groups. This value removes a row or column, but it does not affect the table layout. The space taken up by the row or column will be available for other content.|
| Initial  | Sets the property to its default value. |
| Inherit  | Inherits this property from its parent element. |

> If collapse is used on other elements, it renders as "hidden"

### EXAMPLES

```CSS
h2.example1 {
  visibility: visible;
}

h2.example2 {
  visibility: hidden;
}
```

The heading with class example1 is visible.

The heading with class example2 is hidden but still takes up space on the page.

### BROWSER SUPPORT

The numbers in the table specify the first browser version that fully supports the property.

Numbers followed by -webkit- or -moz- specify the first version that worked with a prefix.

| Browser | Version |
|:---------|:------|
| Chrome   | 1.0 |
| Explorer/Edge  | 4.0 |
| Firefox  | 1.0 |
| Safari   | 1.0 |
| Opera    | 4.0 |
