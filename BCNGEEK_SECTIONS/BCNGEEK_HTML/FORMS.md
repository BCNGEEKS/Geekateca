---
layout: default
author: BCNGeeks
date: 21th June 2022
---

# FORMS

## TABLE OF CONTENTS

- [FORMS](#forms)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INTRODUCTION](#introduction)
  - [FORM](#form)
    - [EXAMPLE](#example)
  - [SELECT](#select)
    - [EXAMPLE](#example-1)
  - [OPTION](#option)
    - [EXAMPLE](#example-2)
    - [VISIBLE VALUES](#visible-values)
      - [EXAMPLE](#example-3)
    - [ALLOW MULTIPLE SELECTIONS](#allow-multiple-selections)
      - [EXAMPLE](#example-4)
  - [INPUT](#input)
    - [INPUT TYPE BUTTON](#input-type-button)
      - [EXAMPLE](#example-5)
    - [INPUT TYPE CHECKBOX](#input-type-checkbox)
      - [EXAMPLE](#example-6)
    - [INPUT TYPE COLOR](#input-type-color)
      - [EXAMPLE](#example-7)
    - [INPUT TYPE DATE](#input-type-date)
      - [EXAMPLE](#example-8)
    - [INPUT TYPE DATETIME](#input-type-datetime)
      - [EXAMPLE](#example-9)
    - [INPUT TYPE EMAIL](#input-type-email)
      - [EXAMPLE](#example-10)
    - [INPUT TYPE FILE](#input-type-file)
    - [EXAMPLE](#example-11)
    - [INPUT TYPE HIDDEN](#input-type-hidden)
      - [EXAMPLE](#example-12)
    - [INPUT TYPE IMAGE](#input-type-image)
      - [EXAMPLE](#example-13)
    - [INPUT TYPE MONTH](#input-type-month)
      - [EXAMPLE](#example-14)
    - [INPUT TYPE NUMBER](#input-type-number)
      - [EXAMPLE](#example-15)
    - [INPUT TYPE PASSWORD](#input-type-password)
      - [EXAMPLE](#example-16)
    - [INPUT TYPE RADIO](#input-type-radio)
      - [EXAMPLE](#example-17)
    - [INPUT TYPE RANGE](#input-type-range)
      - [EXAMPLE](#example-18)
    - [INPUT TYPE RESET](#input-type-reset)
      - [EXAMPLE](#example-19)
    - [INPUT TYPE SEARCH](#input-type-search)
      - [EXAMPLE](#example-20)
    - [INPUT TYPE SUBMIT](#input-type-submit)
      - [EXAMPLE](#example-21)
    - [INPUT TYPE TEL](#input-type-tel)
      - [EXAMPLE](#example-22)
    - [INPUT TYPE TEXT](#input-type-text)
      - [EXAMPLE](#example-23)
    - [INPUT TYPE TIME](#input-type-time)
      - [EXAMPLE](#example-24)
    - [INPUT TYPE URL](#input-type-url)
      - [EXAMPLE](#example-25)
    - [INPUT TYPE WEEK](#input-type-week)
      - [EXAMPLE](#example-26)
  - [BUTTON](#button)
    - [EXAMPLE](#example-27)
  - [FIELDSET AND LEGEND](#fieldset-and-legend)
    - [EXAMPLE](#example-28)
  - [TEXTAREA](#textarea)
    - [EXAMPLE](#example-29)
  - [OUTPUT](#output)
    - [EXAMPLE](#example-30)

---

## INTRODUCTION

Web forms are one of the main points of interaction between a user and a website or application. Forms allow users to input data, which is usually sent to a web server for processing and storage.

---

## FORM

The HTML `<form>` element is used to create an HTML form for user input:

### EXAMPLE
    <form>
    
    form elements
    
    </form>
---

In this example shows "form" structure

## SELECT

The `<select>` element defines a drop-down list:

### EXAMPLE
    <label for="countries">Choose a country:</label>
    <select id="countries" name="countries">
    <option value="spain">Spain</option>
    <option value="germany">Germany</option>
    <option value="finland">Finland</option>
    <option value="italy">Italy</option>
    </select>

In this example  shows a selection table with different options that are countries

## OPTION

The `<option>` elements defines an option that can be selected.

By default, the first item in the drop-down list is selected.

To define a pre-selected option, add the selected attribute to the option:

### EXAMPLE
    <option value="finland" selected>Finland</option>

In this example  shows an option selected with value Finland.

### VISIBLE VALUES

Use the size attribute to specify the number of visible values:

#### EXAMPLE
    <label for="countries">Choose a country:</label>
    <select id="countries" name="countries" size="3">
    <option value="spain">Spain</option>
    <option value="germany">Germany</option>
    <option value="finland">Finland</option>
    <option value="italy">Italy</option>
    </select>

In this example  shows a selection table with different options that are countries, which is limited to 3 options

### ALLOW MULTIPLE SELECTIONS

Use the multiple attribute to allow the user to select more than one value:

#### EXAMPLE
    <label for="countries">Choose a country:</label>
    <select id="countries" name="countries" size="3" multiple>
    <option value="spain">Spain</option>
    <option value="germany">Germany</option>
    <option value="finland">Finland</option>
    <option value="italy">Italy</option>
    </select>

In this example shows a selection table with different options that are countries, that is limited to 3 options and that you can select more than one option.

---

## INPUT

The `<input>` element can be displayed in several ways, depending on the type attribute.

Here are the different input types you can use in HTML:

- `<input type="button">`
- `<input type="checkbox">`
- `<input type="color">`
- `<input type="date">`
- `<input type="datetime-local">`
- `<input type="email">`
- `<input type="file">`
- `<input type="hidden">`
- `<input type="image">`
- `<input type="month">`
- `<input type="number">`
- `<input type="password">`
- `<input type="radio">`
- `<input type="range">`
- `<input type="reset">`
- `<input type="search">`
- `<input type="submit">`
- `<input type="tel">`
- `<input type="text">`
- `<input type="time">`
- `<input type="url">`
- `<input type="week">`

### INPUT TYPE BUTTON

The HTML `<input type="button">` element is a specific version of the `<input>` element, which is used to create a clickable button without any default value, i.e. it does not have a default behavior like for example `<input type="reset">` . In HTML5 it has been replaced by the `<button>` element.

#### EXAMPLE
    <input type="button" value="Click me">

In this example shows a one button  with value  "click me"

### INPUT TYPE CHECKBOX

The HTML `<input type="checkbox">` element is an input element that allows you to insert a vector or array of values. The value attribute is used to define the value sent by the checkbox.

#### EXAMPLE
    <label><input type="checkbox" id="cbox1" value="first_checkbox">This is my first checkbox</label><br>

    <input type="checkbox" id="cbox2" value="second_checkbox"> <label for="cbox2">This is my second checkbox</label>

In this example two checkboxes are created with the first called first_checkbox and the second called second_checkbox.

### INPUT TYPE COLOR

Input elements of type "color" provide a user interface element that allows users to specify a color, either through a visual selection interface, or through a text box where they can enter a hexadecimal value in the format "#rrggbb."

#### EXAMPLE
    <input type="color" value="#ff0000">

In this example shows an input  type calor with the value calor red.

### INPUT TYPE DATE

The `<input>` elements of type="date" create an input field that allows the user to enter a date, which can be either a text box to validate the field or a special interface that allows the user to choose a date.

#### EXAMPLE
    <form>
    <div class="nativeDatePicker">
        <label for="bday">Enter your birthday:</label>
        <input type="date" id="bday" name="bday">
        <span class="validity"></span>
    </div>
    <p class="fallbackLabel">Enter your birthday:</p>
    <div class="fallbackDatePicker">
        <span>
        <label for="day">Day:</label>
        <select id="day" name="day">
        </select>
        </span>
        <span>
        <label for="month">Month:</label>
        <select id="month" name="month">
            <option selected>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
        </select>
        </span>
        <span>
        <label for="year">Year:</label>
        <select id="year" name="year">
        </select>
        </span>
    </div>
    </form>

In this example shows 2 sets of UI elements for choosing dates: a native `<input type="date">` picker and a set of 3 `<select>` elements for older browsers that don't support the native date input.

### INPUT TYPE DATETIME

The HTML `<input type="datetime">` is a control for entering time and date (hour, minute, second and fraction of a second) based on the UTC timezone.

#### EXAMPLE
    <form>
    <div class="nativeDateTimePicker">
        <label for="party">Choose a date and time for your party:</label>
        <input type="datetime-local" id="party" name="bday">
        <span class="validity"></span>
    </div>
    <p class="fallbackLabel">Choose a date and time for your party:</p>
    <div class="fallbackDateTimePicker">
        <div>
        <span>
            <label for="day">Day:</label>
            <select id="day" name="day">
            </select>
        </span>
        <span>
            <label for="month">Month:</label>
            <select id="month" name="month">
            <option selected>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
            </select>
        </span>
        <span>
            <label for="year">Year:</label>
            <select id="year" name="year">
            </select>
        </span>
        </div>
        <div>
        <span>
            <label for="hour">Hour:</label>
            <select id="hour" name="hour">
            </select>
        </span>
        <span>
            <label for="minute">Minute:</label>
            <select id="minute" name="minute">
            </select>
        </span>
        </div>
    </div>
    </form>

In this example shows  two sets of UI elements for choosing datetimes — a native `<input type="datetime-local">` picker, and a set of five `<select>` elements for choosing dates and times in older browsers that don't support the native input.

### INPUT TYPE EMAIL

The `<input>` elements of type email are used to allow the user to enter and edit an email address or, if the multiple attribute is specified, a list of email addresses.

#### EXAMPLE
    <label for="gmail">Enter your gmail.com gmail:</label>

    <input type="gmail" id="gmail"
        pattern=".+@gmail\.com" size="30" required>

In this example shows a form the user enter a email with direction "gmail" and size is thirty.

### INPUT TYPE FILE

The `<input>` elements with type="file" let the user choose one or more files from their device storage. Once chosen, the files can be uploaded to a server using form submission, or manipulated using JavaScript code and the File API.

### EXAMPLE
    <form method="post" enctype="multipart/form-data">
    <div>
    <label for="image_uploads">Choose images to upload (PNG, JPG)</label>
    <input type="file" id="image_uploads" name="image_uploads" accept=".jpg, .jpeg, .png" multiple>
    </div>
    <div class="preview">
    <p>No files currently selected for upload</p>
    </div>
    <div>
    <button>Submit</button>
    </div>
    </form>

In this example will show present a slightly more advanced file chooser that takes advantage of the file information available in the HTMLInputElement.files property, as well as showing off a few clever tricks.

### INPUT TYPE HIDDEN

The `<input>` elements of type hidden let web developers include data that cannot be seen or modified by users when a form is submitted. 

#### EXAMPLE
     <input type="hidden" id="custId" name="custId" value="3487">

In this example shows a input type hidden with value 3487.

### INPUT TYPE IMAGE

The `<input>` elements of type image are used to create graphical submit buttons, i.e. submit buttons that take the form of an image rather than text.

#### EXAMPLE
    <p>Sign in to your account:</p>

    <div>
    <label for="userId">User ID</label>
    <input type="text" id="userId" name="userId">
    </div>

    <input type="image" id="image" alt="Login"
        src="/media/examples/login-button.png">

In this example shows how to  user sign in his  account and required a  image.

### INPUT TYPE MONTH

The `<input>` elements of type month create input fields that let the user enter a month and year allowing a month and year to be easily entered. The value is a string whose value is in the format "YYYY-MM", where YYYY is the four-digit year and MM is the month number.

#### EXAMPLE
    <label for="start">Start month:</label>

    <input type="month" id="start" name="start"
        min="2018-07" max="2019-05">

In this example shows how to  user need introduce a month and it is necessary date between July of 2018 and May of 2019.

### INPUT TYPE NUMBER

The `<input>` elements of type number are used to let the user enter a number. They include built-in validation to reject non-numerical entries.

#### EXAMPLE
    <label for="apples">Number of apples (10-100):</label>

    <input type="apples" id="apples" name="apples"
        min="10" max="100">

In this example shows how to user need introduce  a number of apples between 10 and 100.

### INPUT TYPE PASSWORD

The `<input>` elements of type password provide a way for the user to securely enter a password.

#### EXAMPLE
    <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">
    </div>

    <div>
        <label for="pass">Password (8 characters minimum):</label>
        <input type="password" id="pass" name="password"
            minlength="8" required>
    </div>

    <input type="submit" value="Sign in">

In this example shows how to user need introduce a password with 8 characters minimum.

### INPUT TYPE RADIO

The `<input>` elements of type radio are generally used in radio groups—collections of radio buttons describing a set of related options.

#### EXAMPLE
    <fieldset>
        <legend>Select a maintenance drone:</legend>

        <div>
        <input type="radio" id="huey" name="drone" value="huey"
                checked>
        <label for="huey">Huey</label>
        </div>

        <div>
        <input type="radio" id="dewey" name="drone" value="dewey">
        <label for="dewey">Dewey</label>
        </div>

        <div>
        <input type="radio" id="louie" name="drone" value="louie">
        <label for="louie">Louie</label>
        </div>
    </fieldset>

In this example shows how to user only need  select with three options huey,dewey and louie.

### INPUT TYPE RANGE

The `<input>` elements of type range let the user specify a numeric value which must be no less than a given value, and no more than another given value.

#### EXAMPLE
    <p>Audio settings:</p>

    <div>
    <input type="range" id="volume" name="volume"
            min="0" max="11">
    <label for="volume">Volume</label>
    </div>

In this example shows how to user move a volum between 0 and 11.

### INPUT TYPE RESET

The `<input>` elements of type reset are rendered as buttons, with a default click event handler that resets all of the inputs in the form to their initial values.

#### EXAMPLE
    <form>
        <div class="controls">

            <label for="id">User ID:</label>
            <input type="text" id="id" name="id" />

            <input type="reset" value="Reset">
            <input type="submit" value="Submit">

        </div>
    </form>

In this example shows how to user can reset the user ID.

### INPUT TYPE SEARCH

The `<input>` elements of type search are text fields designed for the user to enter search queries into. These are functionally identical to text inputs, but may be styled differently by the user agent.

#### EXAMPLE
    <label for="site-search">Search the site:</label>
    <input type="search" id="site-search" name="q">

    <button>Search</button>

In this example shows a nav bar and how to user can search information.

### INPUT TYPE SUBMIT

The `<input>` elements of type submit are rendered as buttons. When the click event occurs (typically because the user clicked the button), the user agent attempts to submit the form to the server.

#### EXAMPLE
    <form>
    <div>
        <label for="example">Let's submit some text</label>
        <input id="example" type="text" name="text">
    </div>
    <div>
        <input type="submit" value="Send">
    </div>
    </form>

In this example shows a input type submit with this can send the form.

### INPUT TYPE TEL

The `<input>` elements of type tel are used to let the user enter and edit a telephone number. Unlike `<input type="email">` and `<input type="url">` , the input value is not automatically validated to a particular format before the form can be submitted, because formats for telephone numbers vary so much around the world.

#### EXAMPLE
    <label for="phone">Enter your phone number:</label>

    <input type="tel" id="phone" name="phone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required>

    <small>Format: 123-456-7890</small>

In this example shows how to user can introduce a number phone with format(123-456-7890).

### INPUT TYPE TEXT

The `<input>` elements of type text create basic single-line text fields.

#### EXAMPLE
    <label for="name">Name (4 to 8 characters):</label>

    <input type="text" id="name" name="name" required
        minlength="4" maxlength="8" size="10">

In this example shows how to user can introduce a text with characters betweeen four and eight.

### INPUT TYPE TIME

The `<input>` elements of type time create input fields designed to let the user easily enter a time (hours and minutes, and optionally seconds).

#### EXAMPLE

    <label for="appt">Choose a time for your meeting:</label>

    <input type="time" id="appt" name="appt"
        min="09:00" max="18:00" required>

    <small>Office hours are 9am to 6pm</small>

In this example shows how to user can introduce hours betwwen 09:00 to 18:00.

### INPUT TYPE URL

The `<input>` elements of type url are used to let the user enter and edit a URL.

#### EXAMPLE

    <label for="url">Enter an https:// URL:</label>

    <input type="url" name="url" id="url"
        placeholder="https://example.com"
        pattern="https://.*" size="30"
        required>

In this example shows how to user can introduce an URL and require a pattern with "https://.*".

### INPUT TYPE WEEK

The `<input type="week">` defines a week and year control (no time zone).

#### EXAMPLE

    <label for="week">Select a week:</label>
    <input type="week" id="week" name="week">

In this example shows how to user can select a week.

---

## BUTTON

The `<button>` element defines a clickable button:

### EXAMPLE
    <form action="../../form-result.php" target="_blank">

    <p>User: <input type="text" name="user"></p>

    <p>Password: <input type="password" name="pass"></p>

    <p><button type="submit">Send</button></p>

    </form>

In this example shows a form with inputs user and password and a button to send the form.

---

## FIELDSET AND LEGEND

The fieldset element is used to group related data in a form, and the legend element defines a caption for the fieldset element.

### EXAMPLE
    <form action="/action_page.php">
    <fieldset>
        <legend>Form:</legend>
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" ><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname"><br><br>
        <input type="submit" value="Submit">
    </fieldset>
    </form>

In this example shows a fieldset element this used to group a form with dates of user and inputs are captions for the fieldset element.

---

## TEXTAREA

The `<textarea>` element defines a multi-line input field (a text area):

### EXAMPLE
    <form action="/action_page.php">
    <textarea name="message" rows="10" cols="30">Hello World</textarea>
    <br><br>
    <input type="submit">
    </form>

In this example shows a text box with ten rows(attribute specifies the visible number of lines in a text area) and thirty columns(attribute specifies the visible width of a text area).

---

## OUTPUT

The `<output>` HTML element is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.

### EXAMPLE
    <form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
    <input type="range" id="b" name="b" value="50" /> +
    <input type="number" id="a" name="a" value="10" /> =
    <output name="result" for="a b">60</output>
    </form>

In this example, the form provides a slider whose value can range between 0 and 100, and an `<input>` element into which you can enter a second number. The two numbers are added together, and the result is displayed in the `<output>` element each time the value of any of the controls changes.

---
