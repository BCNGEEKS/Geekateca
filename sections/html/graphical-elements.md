---
layout: default
author: BCNGeeks
date: 21th June 2022
---

# HTML GRAPHICAL ELEMENTS

## TABLE OF CONTENT

- [HTML GRAPHICAL ELEMENTS](#html-graphical-elements)
  - [TABLE OF CONTENT](#table-of-content)
  - [INDEX](#index)
    - [HR](#hr)
    - [EXAMPLES](#examples)
    - [IMG](#img)
      - [EXAMPLE](#example)
    - [AUDIO](#audio)
      - [EXAMPLE](#example-1)
    - [VIDEO](#video)
      - [EXAMPLE](#example-2)
    - [BROWSER SUPPORT](#browser-support)
    - [OBJECT](#object)
      - [EXAMPLE](#example-3)

---

## [INDEX](./index.md)

---

### HR

The `<hr>` tag defines a thematic break in an HTML page (e.g. a shift of topic).

The `<hr>` element is most often displayed as a horizontal rule that is used to separate content (or define a change) in an HTML page.

### EXAMPLES

    <h1>The Main Languages of the Web</h1>

    <p>HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page, and consists of a series of elements.
    HTML elements tell the browser how to display the content.</p>

    <hr>

    <p>CSS is a language that describes how HTML elements are to be displayed on screen, paper, or in other media. 
    CSS saves a lot of work, because it can control the layout of multiple web pages all at once.</p>

    <hr>

    <p>JavaScript is the programming language of HTML and the Web. JavaScript can change HTML content and attribute values.
    JavaScript can change CSS. JavaScript can hide and show HTML elements, and more.</p>
---

### IMG

The ``<img>`` tag is used to embed an image in an HTML page.

Images are not technically inserted into a web page; images are linked to web pages. The ``<img>`` tag creates a holding space for the referenced image.

The ``<img>`` tag has two required attributes:

src - Specifies the path to the image
alt - Specifies an alternate text for the image, if the image for some reason cannot be displayed

#### EXAMPLE

    <html>
        <body style="text-align: center;">
            <h3>GeeksforGeeks logo</h3>
            <img src=
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
            width="500" height="300" 
            alt="html logo">
        </body>
    </html>

<img src=
"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
width="500" height="300"
alt="html logo">

---

### AUDIO

The `<audio>` is one of the HTML5 elements added to allow embedding audio files to a web page. Since not all browsers support all audio formats, the audio file is encoded using special codecs.

The `<source>` tag or the src attribute is used to indicate the variations of the same audio file. The path to an audio file can contain an absolute or relative URLs

#### EXAMPLE

    <html>  
        <body>     
            <p>Audio Sample</p> 
            <!-- audio tag starts here -->
            <audio controls>
                <source src="media/audio_ascensor.mp3" type="audio/mp3">
            </audio>
            <!-- audio tag ends here -->  
        </body>
    </html>

<audio controls>
    <source src="media/audio_ascensor.mp3" type="audio/mp3">
</audio>

---

### VIDEO

The `<video>` tag is used to embed video content in a document, such as a movie clip or other video streams.

The `<video>` tag contains one or more `<source>` tags with different video sources. The browser will choose the first source it supports.

The text between the `<video>` and `</video>` tags will only be displayed in browsers that do not support the `<video>` element.

#### EXAMPLE

    <html>
        <body>  
            <p>Adding Video on my webpage </p>
            <video width="400" height="350" controls>
                <source src="media/video_prueba.mp4" type="video/mp4">
            </video>
        </body>
    </html> 
<video width="400" height="350" controls>
    <source src="media/video_prueba.mp4" type="video/mp4">
</video>

This example illustrates the use of the autoplay attribute in the HTML `<video>` tag.

### BROWSER SUPPORT

| Property | MP4 | WebM | Ogg|
|:----:|:-------------:|:-----:|:------:|
| Chrome  | YES | YES | YES|
| Explorer  | YES | YES | YES|
| Firefox | YES | YES | YES|
| Safary | YES | YES | NO|
| Opera | YES | YES | YES|

---

### OBJECT

The `<object>` tag is an HTML tag and used to display multimedia like audios, videos, images, PDFs, and Flash in web pages. It can also be used for displaying another webpage inside the HTML page.

#### EXAMPLE

    <html>
        <body>
            <h1>HTML Object Tag</h1>
            <!--HTML object tag starts here-->
            <object data=
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
            width="550px" height="150px">GeeksforGeeks
            <!--HTML object tag ends here-->
            </object>
        </body>
    </html>

<object data=
"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
width="400px" height="300px">GeeksforGeeks
</object>
