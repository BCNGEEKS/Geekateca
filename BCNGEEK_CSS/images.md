---
layout: default
author: BCNGeeks
date: 27th June 2022
---

# IMAGES

## TABLE OF CONTENTS

- [TABLE OF CONTENTS](#table-of-contents)
- [INDEX](#index)
- [IMAGES](#images)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INDEX](#index)
  - [CSS MASKING](#css-masking)
    - [CSS MASK-IMAGE PROPERTY](#css-mask-image-property)
    - [EXAMPLE](#example)
    - [CSS MASK-SIZE PROPERTY](#css-mask-size-property)
    - [EXAMPLE](#example-1)
    - [BROWSER SUPPORT](#browser-support)

---

## [INDEX](./index.md)

---

## CSS MASKING

With css masking you can usa an image as a layer to place over partially or fully hide portions of another element.

### CSS MASK-IMAGE PROPERTY

This property as the name says is specific for a layer for images.

Tha mask layer itself need to be a PNG, SVG image, a CSS gradient or an SVG `<mask>` element.

### EXAMPLE

Explanation:

The `mask-image` property specifies the image that will be the mask layer.

The `mask-repeat` property specifies if or how a mask image will be repeated.

```CSS
.mask1 {
  -webkit-mask-image: url(w3logo.png);
  mask-image: url(w3logo.png);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
```

[Try it yourself](https://www.w3schools.com/css/tryit.asp?filename=trycss3_mask-image)

---

### CSS MASK-SIZE PROPERTY

The `mask-size` property specifies the size of the mask layer image.

| Value | Description |
|:----:|:-------------|
| auto  | This is default |
| size  | Specifies the size of the mask image in px, em, etc, or in % |
| contain | Scales the mask image in a way that both its width and its height fit inside the container |
| cover | Scales the mask image in a way that both its width and its height cover the container |
| initial | Sets this property to its default value.|
| inherit | Inherits this property from its parent element. |

### EXAMPLE

```CSS
.mask1 {
  -webkit-mask-image: url(w3logo.png);
  mask-image: url(w3logo.png);
  -webkit-mask-size: 200px 200px;
  mask-size: 200px 200px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
```

[Try it yourself](https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_mask-size2)

### BROWSER SUPPORT

| Browser | Version |
|:----:|:-------------|
| Chrome  | 4.0 |
| Explorer  | 79.0 |
| Firefox | 53.0 |
| Safari | 4.0 |
| Opera | 15.0 |