# Markdown Guidelines

The title will also appear in the index, so make it descriptive while brief! Use only one h1!

## First section

You can use as many h2 as you want. They indicate a general section in your content.

## Examples

Use code snippets for your examples! For that indent 4 spaces:

    The <a> tag should only by used for hyperlinks.

You can also do small code snippets using the ` character. 

For example: The `<a>` tag should only be used for hyperlinks.

## Lists

There are two kind of lists: ordered or unordered. Please use them accordingly, sorting only a series of consecutive steps causally connected.

Sometimes lists like to misbehave so adding a `<!-- end of the list -->` at the end of them prevents any problems.

### Unordered Lists

    There are different kind of selectors in HTML:

    - id: must be unique
    - name: must be unique
        - id and name have different properties in <form>
    - class: can be repeated

    <!-- end of the list -->

There are different kind of selectors in HTML:

- id: must be unique
- name: must be unique
    - id and name have different properties in <form>
- class: can be repeated

<!-- end of the list -->

Please take into account that both `-` and `*` will result in the same list but `*` is also reserved for **bold** and *italics*.

### Ordered Lists

    To do a tortilla de patatas you will need both potatoes, eggs and onion.

    1. First peel the potatoes and fry them.
    2. Then fry the onion.
    3. Finally merge everything with the eggs.

    <!-- end of the list -->

To do a tortilla de patatas you will need both potatoes, eggs and onion.

1. First peel the potatoes and fry them.
2. Then fry the onion.
3. Finally merge everything with the eggs.

<!-- end of the list -->

## Hyperlinks

If you do any reference to external concepts please use hyperlinks for easier navigation. For that use a relative path to your same folder AND make the extension an .html since your markdowns will be converted to that.

    [This same page](./MarkdownGuidelines.html)

[This same page](./MarkdownGuidelines.html)
