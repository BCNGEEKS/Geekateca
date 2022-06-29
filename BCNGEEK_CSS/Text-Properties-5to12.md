---
layout: default
author: BCNGeeks
date: 28th June 2022
--- 

# TEXT PROPERTIES

## TABLE OF CONTENT

- [TEXT-TRANSFORMS](#text-transforms)
- [TEXT-INDENT](#text-indent)
- [TEXT-EMPHASIS](#text-emphasis)
- [TEXT-SHADOW](#text-shadow)
- [TEXT-OVERFLOW](#text-overflow)
- [QUOTE](#quote)
- [HYPHENS](#hyphens)

---

## [INDEX](./index.md)

---

## TEXT-TRANSFORMS

The text-transform property controls the capitalization of text.

### PROPERTY VALUES (TEXT-TRANSFORMS)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   none    |   No capitalization. The text renders as it is. This is default   |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-transform)    |
|   capitalize  |   Transforms the first character of each word to uppercase    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-transform&preval=capitalize)    |
|   uppercase   |   Transforms all characters to uppercase  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-transform&preval=uppercase)    |
|   lowercase   |   Transforms all characters to lowercase  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-transform&preval=lowercase)    |
|   initial |   Sets this property to its default value. Read about initial |   |
|   inherit |   Inherits this property from its parent element. Read about inherit  |   |

> ### CSS SYNTAX (TEXT-TRANSFORMS)
>
> text-transform: none|capitalize|uppercase|lowercase|initial|inherit;

### EXAMPLE (TEXT-TRANSFORMS)

Transform text in different `<div>` elements:

```CSS
div.a {
  text-transform: uppercase;
}

div.b {
  text-transform: lowercase;
}

div.c {
  text-transform: capitalize;
}
```

### BROWSER SUPPORT (TEXT-TRANSFORMS)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     1.0      |
|   Explorer    |     4.0      |
|   Firefox     |     1.0      |
|   Safari      |     1.0      |
|   Opera       |     7.0      |

---

## TEXT-INDENT

The text-indent property specifies the indentation of the first line in a text-block.

### PROPERTY VALUES (TEXT-INDENT)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   length  |   Defines a fixed indentation in px, pt, cm, em, etc. Default value is 0. Read about length units |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-indent)    |
|   %   |   Defines the indentation in % of the width of the parent element |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-indent&preval=10%25)    |
|   initial |   Sets this property to its default value. Read about initial |   |
|   inherit |   Inherits this property from its parent element. Read about inherit  |   |

> ### CSS SYNTAX (TEXT-INDENT)
>
>text-indent: length|initial|inherit;

### EXAMPLE (TEXT-INDENT)

Indent the first line of text with different values:

```CSS
div.a {
  text-indent: 50px;
}

div.b {
  text-indent: -2em;
}

div.c {
  text-indent: 30%;
}
```

### BROWSER SUPPORT (TEXT-INDENT)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     1.0      |
|   Explorer    |     3.0      |
|   Firefox     |     1.0      |
|   Safari      |     1.0      |
|   Opera       |     3.5      |

---

## TEXT-EMPHASIS

The text-emphasis property is used to apply emphasis marks to text.

The `text-emphasis` property is a shorthand for setting `text-emphasis-style` and `text-emphasis-color` in one declaration.

### PROPERTY VALUES (TEXT-EMPHASIS)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|  none |   No emphasis marks are applied   |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-emphasis&preval=none)    |
|   filled  |   The emphasis marks are filled with a solid color    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-emphasis&preval=filled)    |
|   open    |   The emphasis marks are hollow   |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-emphasis&preval=open)    |
|   dot |   The emphasis marks are small circles    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-emphasis&preval=dot)    |
|   circle  |   The emphasis marks are circles  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-emphasis&preval=circle)    |
|   double-circle   |   The emphasis marks are double circles   |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-emphasis&preval=double-circle)    |
|   triangle    |   The emphasis marks are triangles    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-emphasis&preval=triangle)    |
|   sesame  |   The emphasis marks are sesames  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-emphasis&preval=sesame)    |
|   string  |   The emphasis marks are the given string (one character) |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-emphasis&preval=%27*%27)    |
|   color   |   Sets the color of the emphasis marks    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-emphasis&preval=triangle%20green)    |

> ### CSS SYNTAX (TEXT-EMPHASIS)
>
> text-emphasis: none|filled|open|dot|circle|double-circle|triangle|sesame|string|color;

### EXAMPLE (TEXT-EMPHASIS)

Use of the text-emphasis property:

```CSS
p.ex1 {
  text-emphasis: filled;
}

p.ex2 {
  text-emphasis: open;
}

p.ex3 {
  text-emphasis: double-circle red;
}

p.ex4 {
  text-emphasis: triangle blue;
}
```

### BROWSER SUPPORT (TEXT-EMPHASIS)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     99.0      |
|   Explorer    |     99.0      |
|   Firefox     |     46.0      |
|   Safari      |     7.0      |
|   Opera       |     15.0 -webkit-      |

---

## TEXT-SHADOW

The text-shadow property adds shadow to text.

This property accepts a comma-separated list of shadows to be applied to the text.

### PROPERTY VALUES (TEXT-SHADOW)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   h-shadow    |   Required. The position of the horizontal shadow. Negative values are allowed    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-shadow)    |
|   v-shadow    |   Required. The position of the vertical shadow. Negative values are allowed  |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-shadow)    |
|   blur-radius |   Optional. The blur radius. Default value is 0   |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-shadow&preval=5px%205px%205px%20red)    |
|   color   |   Optional. The color of the shadow. Look at CSS Color Values for a complete list of possible color values    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-shadow&preval=5px%205px%2010px%20blue)    |
|   none    |   Default value. No shadow    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-shadow&preval=none)    |
|   initial |   Sets this property to its default value. Read about initial |   |
|   inherit |   Inherits this property from its parent element. Read about inherit  |   |

> ### CSS SYNTAX (TEXT-SHADOW)
>
> text-shadow: h-shadow v-shadow blur-radius color|none|initial|inherit;

### EXAMPLE (TEXT-SHADOW)

Basic text-shadow:

```CSS
h1 {
  text-shadow: 2px 2px #ff0000;
}
```

### BROWSER SUPPORT (TEXT-SHADOW)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     4.0      |
|   Explorer    |     10.0      |
|   Firefox     |     3.5      |
|   Safari      |     4.0      |
|   Opera       |     9.6      |

---

## TEXT-OVERFLOW

The text-overflow property specifies how overflowed content that is not displayed should be signaled to the user. It can be clipped, display an ellipsis (...), or display a custom string.

Both of the following properties are required for `text-overflow`:

`white-space: nowrap;`

`overflow: hidden;`

### PROPERTY VALUES (TEXT-OVERFLOW)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   clip    |   Default value. The text is clipped and not accessible   |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-overflow)    |
|   ellipsis    |   Render an ellipsis ("...") to represent the clipped text    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_text-overflow&preval=ellipsis)    |
|   string  |   Render the given string to represent the clipped text   |   |
|   initial |   Sets this property to its default value. Read about initial |   |
|   inherit |   Inherits this property from its parent element. Read about inherit  |   |

> ### CSS SYNTAX (TEXT-OVERFLOW)
>
> text-overflow: clip|ellipsis|string|initial|inherit;

### EXAMPLE (TEXT-OVERFLOW)

Use of the text-overflow property:

```CSS
div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### BROWSER SUPPORT (TEXT-OVERFLOW)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     4.0      |
|   Explorer    |     6.0      |
|   Firefox     |     7.0      |
|   Safari      |     3.1      |
|   Opera       |     11.0;  9.0 -o-     |

---

## QUOTE

The quotes property sets the type of quotation marks for quotations.

### PROPERTY VALUES (QUOTE)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   none    |   Specifies that the "open-quote" and "close-quote" values of the "content" property will not produce any quotation marks |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_quotes)    |
|   string  |   Specifies which quotation marks to use. The first two values specifies the first level of quotation embedding, the next two values specifies the next level of quote embedding, etc |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_quotes)    |
|   initial |   Sets this property to its default value. Read about initial |   |
|   inherit |   Inherits this property from its parent element. Read about inherit  |   |

> ### CSS SYNTAX (QUOTE)
>
> quotes: none|string|initial|inherit;

### EXAMPLE (QUOTE)

Specify quotation marks for quotations:

```CSS
#a {
  quotes: "'" "'";
}
```

### BROWSER SUPPORT (QUOTE)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     11.0      |
|   Explorer    |     8.0      |
|   Firefox     |     1.5      |
|   Safari      |     5.1      |
|   Opera       |     4.0      |

---

## HYPHENS

The hyphens property defines whether hyphenation is allowed to create more soft wrap opportunities within a line of text.

### PROPERTY VALUES (HYPHENS)

|    Value    |                      Description                      | Demo |
|:-----------:|                      :-----------                     | :--: |
|   none    |   Words are not hyphenated    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_hyphens&preval=none)    |
|   manual  |   Default. Words are only hyphenated at &hyphen; or &shy; (if needed) |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_hyphens&preval=manual)    |
|   auto    |   Words are hyphenated where the algorithm is deciding (if needed)    |   [Demo](https://www.w3schools.com/cssref/playdemo.asp?filename=playcss_hyphens&preval=auto)    |
|   initial |   Sets this property to its default value. Read about initial |   |
|   inherit |   Inherits this property from its parent element. Read about inherit  |   |

> ### CSS SYNTAX (HYPHENS)
>
> hyphens: none|manual|auto|initial|inherit;

### EXAMPLE (HYPHENS)

Set different hyphenations:

```CSS
div.a {
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

div.b {
  -webkit-hyphens: manual;
  -ms-hyphens: manual;
  hyphens: manual;
}

div.c {
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
```

### BROWSER SUPPORT (HYPHENS)

The numbers in the table specify the first browser version that fully supports the property.

|    Property   |    height    |
| :-----------: | :----------- |
|   Chrome      |     55.0      |
|   Explorer    |     79.0; 10.0 -ms-      |
|   Firefox     |     43.0      |
|   Safari      |     5.1 -webkit-      |
|   Opera       |     44.0      |
