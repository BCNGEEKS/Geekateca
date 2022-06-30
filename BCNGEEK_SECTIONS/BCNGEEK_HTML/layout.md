---
layout: default
author: BCNGeeks
date: 20th June 2022
---

# LAYOUT

## TABLE OF CONTENTS

- [LAYOUT](#layout)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INDEX](#index)
    - [INTRODUCTION](#introduction)
    - [HEADER](#header)
      - [EXAMPLE](#example)
    - [NAV](#nav)
      - [EXAMPLE](#example-1)
    - [SECTION](#section)
      - [EXAMPLE](#example-2)
    - [ASIDE](#aside)
      - [EXAMPLE](#example-3)
    - [MAIN](#main)
      - [EXAMPLE](#example-4)
    - [ARTICLE](#article)
      - [EXAMPLE](#example-5)
    - [FOOTER](#footer)
      - [EXAMPLE](#example-6)
    - [DETAILS](#details)
      - [SUMMARY](#summary)
      - [EXAMPLE](#example-7)

---

## [INDEX](./index.md)

---

### INTRODUCTION 

HTML has several semantic elements that define the different parts of a web page.

There are different types inside the HTML Layout:

- `<header>` - Defines a header for a document or a section

- `<nav>` - Defines a set of navigation links

- `<section>` - Defines a section in a document

- `<article>` - Defines an independent, self-contained content

- `<aside>` - Defines content aside from the content (like a sidebar)

- `<footer>` - Defines a footer for a document or a section

- `<details>` - Defines additional details that the user can open and close on demand

- `<summary>` - Defines a heading for the `<details>` element

---

### HEADER

The `<header>` element represents a container for introductory content or a set of navigational links.

A `<header>` element typically contains:

- One or more heading elements (`<h1>` - `<h6>`)
- Logo or icon
- Authorship information

#### EXAMPLE

    <header>
        <h1>A heading here</h1>
        <p>Posted by John Doe</p>
        <p>Some additional information here</p>
    </header>
    <p>Lorem Ipsum dolor set amet....</p>
    
This example shows a header before the paragraphs attributes to show the first title in this document.

---

### NAV

The `<nav>` tag defines a set of navigation links.

Notice that NOT all links of a document should be inside a `<nav>` element.  

#### EXAMPLE

    <nav>
      <a href="/html/">HTML</a> 
      <a href="/css/">CSS</a> 
      <a href="/js/">JavaScript</a> 
      <a href="/python/">Python</a>
    </nav>

This example shows a nav with differents links to show.

---

### SECTION

The `<section>` tag defines a section in a document.

#### EXAMPLE

    <section>
    <h2>WWF History</h2>
    <p>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
    </section>

    <section>
    <h2>WWF's Symbol</h2>
    <p>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
    </section>

This example shows the different sections it could be in a document.

---

### ASIDE

The `<aside>` tag defines some content aside from the content it is placed in and should be indirectly related to the surrounding content.

#### EXAMPLE
    <p>My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together with my family!</p>

    <aside>
    <h4>Epcot Center</h4>
    <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
    </aside>

This example shows how to put the aside tag, and how it can be after a paragraph or have a paragraph inside.

---

### MAIN

The `<main>` tag specifies the main content of a document and its completely unique, the elements inside should be unique in the document.

Also should be only one `<main>` tag in a whole document.

#### EXAMPLE

    <main>
    <h1>Most Popular Browsers</h1>
    <p>Chrome, Firefox, and Edge are the most used browsers today.</p>
    <article>
        <h2>Google Chrome</h2>
        <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
    </article>
    <article>
    <h2>Mozilla Firefox</h2>
    <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
    </article>
    </main>

This example shows how's everything indise the main tag.

---

### ARTICLE

The `<article>` tag specifies independent, self-contained content.

An article should make sense on its own and it should be possible to distribute it independently from the rest of the site.

Potential sources for the `<article>` element:

- Forum post
- Blog post
- News story

#### EXAMPLE

    <article>
    <h2>Google Chrome</h2>
    <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
    </article>

    <article>
    <h2>Mozilla Firefox</h2>
    <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
    </article>

This example shows how every article is independent and it cointains different information

---

### FOOTER

The `<footer>` tag defines a footer for a document or section.

A `<footer>` element typically contains:

- Authorship information
- Copyright information
- Contact information
- Sitemap
- Back to top links
- Related documents

#### EXAMPLE

    <footer>
    <p>Author: Hege Refsnes</p>
    <p><a href="mailto:hege@example.com">hege@example.com</a></p>
    <p><a href="twitter.com">Twitter</a></p>
    </footer>

This example shows a footer with an Author and 2 links.

---

### DETAILS

The `<details>` tag specifies additional details that the user can open and close on demand.

The `<details>` tag is often used to create an interactive widget that the user can open and close. By default, the widget is closed. When open, it expands, and displays the content within.

#### SUMMARY

The `<summary>` tag defines a visible heading for the `<details>` element. The heading can be clicked to view/hide the details. 

`<summary>` element should be the first child element of `<details>`.

#### EXAMPLE

    <details>
      <summary>Epcot Center</summary>
      <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
    </details>

This example shows the details widget with Epcot Center as a summary name.

---
