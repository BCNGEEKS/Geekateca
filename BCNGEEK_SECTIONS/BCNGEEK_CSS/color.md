---
layout: default
author: BCN Geek
date: 20th June 2022
---

# COLORING

## TABLE OF CONTENTS

- [TABLE OF CONTENTS](#table-of-contents)
- [INDEX](#index)
- [COLOR PROPERTY](#color-property)
  - [COLOR VALUES](#color-values)
  - [CSS SYNTAX FOR COLOR](#css-syntax-for-color)
  - [EXAMPLES](#examples)
  - [BROWSER SUPPORT FOR COLORS](#browser-support-for-colors)
- [OPACITY PROPERTY](#opacity-property)
  - [CSS SYNTAX FOR OPACITY](#css-syntax-for-opacity)
  - [EXAMPLE](#example)
- [FILTER](#filter)
  - [FILTER FUNCTIONS](#filter-functions)
  - [USING MULTIPLE FUNCTIONS](#using-multiple-functions)
- [ACCENT-COLOR](#accent-color)
  - [CSS SYNTAX FOR ACCENT-COLOR](#css-syntax-for-accent-color)
  - [BROWSER SUPPORT FOR ACCENT-COLOR](#browser-support-for-accent-color)

---

## [INDEX](./index.md)

---

## COLOR PROPERTY

`Color` is a property that allows the user to modify the text, background, border... color.

It can be added with predefined color names or by different values like: RGB, HEX, HSL, RGBA, HSLA...

### COLOR VALUES

| Color Value | Example  |
|:----:|:-------------|
|Color Name| Tomato |
| RGB  | rgb(255, 99, 71) |
| HEX  | #ff6347 |
| HSL | hsl(9, 100%, 64%) |

### CSS SYNTAX FOR COLOR

```CSS

body {color: #92a8d1;}

body {color: rgb(201, 76, 76);}

body {color: hsl(89, 43%, 51%);}

```

### EXAMPLES

| Color | Description | Try yourself |
|:----:|:-------------|:----:|
| Text Color | Applying color to Text | [Trying Text Color](https://www.w3schools.com/css/tryit.asp?filename=trycss_color_text) |
| Border Color | Applying color to Borders | [Trying Border Color](https://www.w3schools.com/css/tryit.asp?filename=trycss_color_border) |

### BROWSER SUPPORT FOR COLORS

| Property | Color |
|:----:|:-------------|
| Chrome  | 1.0 |
| Explorer  | 3.0 |
| Firefox | 1.0 |
| Safary | 1.0 |
| Opera | 3.5 |

---

## OPACITY PROPERTY

`Opacity` is the property that allows the user to modify the transparency-level for an element.

The values to specify the Opacity of an element goes from 0.0 (fully transparent) to 1.0 (fully opaque).

### CSS SYNTAX FOR OPACITY

```CSS

div 
{
  opacity: 0.5;
}

```

### EXAMPLE

| Opacity | Description | Try yourself |
|:----:|:-------------|:----:|
| Opacity Property | An example of an element with opacity | [Opacity Property](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_opacity_box) |

### Browser Support for Opacity

| Property | Opacity |
|:----:|:-------------|
| Chrome  | 4.0 |
| Explorer  | 9.0 |
| Firefox | 2.0 |
| Safary | 3.1 |
| Opera | 9.0 |

---

## FILTER

With the `Filter` property, the user can define visual effect like blur and saturation to an element.

### FILTER FUNCTIONS

|Filter Functions | Description | Try yourself |
|:----:|:-------------|:----:|
| blur(px) | Applies blur effect to the image | [Blur filter](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_filter_blur) |
| brightness(%) | Adjusts the brightness of the image | [Brightness](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_filter_brightness) |
| contrast(%) | Adjusts the contrast of the image | [Contrast](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_filter_contrast) |
| drop-shadow | Is a blurred, offset version of the input image alpha mask, drawn in a specific color and composited below the image | [Drop-shadow](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_filter_dropshadow) |
| grayscale(%) | Converts the image to grayscale | [Grayscale](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_filter_grayscale2) |
| hue-rotate(deg) | Rotates the hue, color appearance parameters, of an element and its contents | [Hue-Rotate](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_filter_huerotate) |
| invert(%) | Inverts the sample image colors | [Invert](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_filter_invert) |
| opacity(%) | Sets the opacity level for the image, the transparency-level | [Opacity](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_filter_opacity) |
| saturate(%) | Super-saturates or unsaturates the image | [Saturate](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_filter_saturate) |
| sepia(%) | Converts the image to sepia, giving a warmer, more yellow/brown appearance | [Sepia](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_filter_sepia) |
| url() | Takes the location of an XML file that specifies an SVG filter, and may include an anchor to a specific filter element |
| initial | Sets this property to default values |
| inherit | Inherits this property from parent elements |

### USING MULTIPLE FUNCTIONS

If you want to use more than one filter in one element, separate each filter with a space.

```CSS

img 
{
  filter: contrast(200%) brightness(150%);
}

```

---

## ACCENT-COLOR

With the `Accent-color` the user can set the accent color, the bright color that contrasts with more utilitarian background and foreground colors within a color scheme, for user-interface controls generated by some elements like: checkbox, radio, range, and progress.

### CSS SYNTAX FOR ACCENT-COLOR

```CSS

input[type=checkbox] 
{
  accent-color: red;
}

input[type=radio] 
{
  accent-color: green;
}

```

### BROWSER SUPPORT FOR ACCENT-COLOR

| Browser | Version |
|:----:|:-------------|
| Chrome  | 93.0 |
| Explorer  | 93.0 |
| Firefox | 92.0 |
| Safary | 15.4 |
| Opera | 79.0 |
