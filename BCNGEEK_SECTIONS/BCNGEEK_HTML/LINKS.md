---
layout: default
title: Links
author: BCNGeeks
date: 23th June 2022
---

# Links

- [Links](#links)
  - [INTRODUCTION](#introduction)
  - [`<a>` Anchor tag](#a-anchor-tag)
    - [INTRODUCTION](#introduction-1)
    - [EXAMPLES](#examples-1)
    - [HREF](#href)
    - [Examples](#examples-2)
      - [Linking to an absolute URL](#linking-to-an-absolute-url)
      - [Linking to relative URLs](#linking-to-relative-urls)
      - [Linking to an element on the same page](#linking-to-an-element-on-the-same-page)
      - [Linking to an email address](#linking-to-an-email-address)
      - [Linking to telephone numbers](#linking-to-telephone-numbers)
      - [External links and linking to non-HTML resources](#external-links-and-linking-to-non-html-resources)
    - [HTML Link Colors](#html-link-colors)
    - [Iframe](#iframe)
      - [Definition and Usage](#definition-and-usage)
      - [HTML Iframe Syntax](#html-iframe-syntax)
      - [Syntax](#syntax)
      - [Iframe - Set Height and Width](#iframe---set-height-and-width)

## INTRODUCTION

The `<link>` HTML element specifies relationships between the current document and an external resource. This element is most commonly used to link to stylesheets and scripts, but is also used to establish site icons (both “favicon” style icons and icons for the home screen and apps on mobile devices) among other things.

---

- There are a number of other common types you'll come across. For example, a link to the site's favicon:

        <link rel="icon" href="favicon.ico">

- There are a number of other icon rel values, mainly used to indicate special icon types for use on various mobile platforms, e.g.

        <link rel="apple-touch-icon-precomposed" sizes="114x114"
        href="apple-icon-114.png" type="image/png">

- The sizes attribute indicates the icon size, while the type contains the MIME (Multipurpose Internet Mail Extensions) type of the resource being linked. These provide useful hints to allow the browser to choose the most appropriate icon available.

- You can also provide a media type or query inside a media attribute; this resource will then only be loaded if the media condition is true. For example:

        <link href="print.css" rel="stylesheet" media="print">
        <link href="mobile.css" rel="stylesheet" media="screen and (max-width: 600px)">

- Some interesting new performance and security features have been added to the `<link>` element too. Take this example:

        <link rel="preload" href="myFont.woff2" as="font"
        type="font/woff2" crossorigin="anonymous">

A rel value of preload indicates that the browser should preload this resource (see Preloading content with *rel=“preload”* for more details), with the as attribute indicating the specific class of content being fetched. The crossorigin attribute indicates whether the resource should be fetched with a CORS request.

---

## `<a>` Anchor tag

### INTRODUCTION

The `<a>` HTML element (or anchor element), with its href attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.

### EXAMPLES

        <p>You can reach Michael at:</p>

        <ul>
        <li><a href="https://example.com">Website</a></li>
        <li><a href="mailto:m.bluth@example.com">Email</a></li>
        <li><a href="tel:+123456789">Phone</a></li>
        </ul>

### HREF

The URL that the hyperlink points to. Links are not restricted to HTTP-based URLs — they can use any URL scheme supported by browsers:

- Sections of a page with fragment URLs
- Pieces of media files with media fragments
- Telephone numbers with tel: URLs
- Email addresses with mailto: URLs
- While web browsers may not support other URL schemes, web sites can with registerProtocolHandler().

### EXAMPLES

#### LINKING TO AN ABSOLUTE URL

- HTML

        <a href="https://www.google.com">Google</a>

Result:

<a href="https://www.google.com">Google</a>

---

#### LINKING TO RELATIVE URLS

    <a href="//example.com">Scheme-relative URL</a>
    <a href="/en-US/docs/Web/HTML">Origin-relative URL</a>
    <a href="./p">Directory-relative URL</a>

Result

- <a href="//example.com">Scheme-relative URL</a>
- <a href="/en-US/docs/Web/HTML">Origin-relative URL</a>
- <a href="./p">Directory-relative URL</a>

#### LINKING TO AN ELEMENT ON THE SAME PAGE

        <a> element links to the section below
        <p><a href="#Section_further_down">
        Jump to the heading below
        </a></p>

        Heading to link to
        <h2 id="Section_further_down">Section further down</h2>

---

#### LINKING TO AN EMAIL ADDRESS

To create links that open in the user's email program to let them send a new message, use the mailto: scheme:

    <a href="mailto:nowhere@gmail.com">Send email to nowhere</a>

Result:

<a href="mailto:nowhere@gmail.com">Send email to nowhere</a>

---

#### LINKING TO TELEPHONE NUMBERS

        <a href="tel:+49.157.0156">+49 157 0156</a>
        <a href="tel:+1(555)5309">(555) 5309</a>
RESULT

<a href="tel:+49.157.0156">+49 157 0156</a>

<a href="tel:+1(555)5309">(555) 5309</a>

`tel`: link behavior varies with device capabilities:

- Cellular devices autodial the number.
- Most operating systems have programs that can make calls, like Skype or FaceTime.
- Websites can make phone calls with registerProtocolHandler, such as web.skype.com.
- Other behaviors include saving the number to contacts, or sending the number to another device.

---

#### EXTERNAL LINKING TO NON-HTML RESOUCES

Links that open in a new tab/window via target=“_blank”, or links that point to a download file should indicate what will happen when the link is followed.

People experiencing low vision conditions, navigating with the aid of screen reading technology, or with cognitive concerns may be confused when a new tab, window, or application opens unexpectedly. Older screen-reading software may not even announce the behavior.

- Link that opens a new tab/window

        <a target="_blank" href="https://www.wikipedia.org">
        Wikipedia (opens in new tab)
        </a>

<a target="_blank" href="https://www.wikipedia.org">
        Wikipedia (opens in new tab)
        </a>

- Link to a non-HTML resource

        <a href="2017-annual-report.ppt">2017 Annual Report (PowerPoint)</a>

        If an icon is used to signify link behavior, make sure it has alt text:
        <a target="_blank" href="https://www.wikipedia.org">
        Wikipedia
        <img alt="(opens in new tab)" src="newtab.svg">
        </a>
        <a href="2017-annual-report.ppt">
        2017 Annual Report
        <img alt="(PowerPoint file)" src="ppt-icon.svg">
        </a>

---

### HTML LINK COLORS

By default, a link will appear like this (in all browsers):

- An unvisited link is underlined and blue
- A visited link is underlined and purple
- An active link is underlined and red
  
---

### IFRAME

An HTML iframe is used to display a web page within a web page.

    <iframe src="https://www.google.com" title="Google page"></iframe>

#### DEFINITION AND USAGE

The `<iframe>` tag specifies an inline frame.

#### HTML IFRAME SYNTAX

The HTML `<iframe>` tag specifies an inline frame.

An inline frame is used to embed another document within the current HTML document.

#### SYNTAX

    <iframe src="url" title="description"></iframe>

**Tip**: It is a good practice to always include a title attribute for the `<iframe>`. This is used by screen readers to read out what the content of the iframe is.

#### IFRAME - SET HEIGHT AND WIDTH

Use the height and width attributes to specify the size of the iframe.

The height and width are specified in pixels by default:

Example

    <iframe src="demo_iframe.htm" height="200" width="300" title="Iframe Example"></iframe>

<iframe src="https://www.google.com/" title="Google"></iframe>

---
