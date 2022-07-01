---
layout: default
author: BCNGeeks
date: 23th June 2022
---

# LISTS

## TABLE OF CONTENTS

- [LISTS](#lists)
  - [TABLE OF CONTENTS](#table-of-contents)
  - [INDEX](#index)
  - [INTRODUCTION](#introduction)
  - [UNORDERED LIST](#unordered-list)
    - [EXAMPLE](#example)
  - [ORDERED LIST](#ordered-list)
    - [EXAMPLE](#example-1)
  - [DESCRIPTION LIST](#description-list)
    - [DL TAG](#dl-tag)
    - [DD TAG](#dd-tag)
    - [EXAMPLE](#example-2)

---

## [INDEX](./index.md)

---

## INTRODUCTION

HTML Lists are used to specify lists of information.

All lists may contain one or more list elements. 

There are three different types of HTML lists: 

- Ordered List or Numbered List (ol) 
- Unordered List or Bulleted List (ul)
- Description List (dl, dt, dd)

---

## UNORDERED LIST

An unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag.

### EXAMPLE

    <ul>
      <li>Luchito</li>
      <li>Javi</li>
      <li>Maria</li>
    </ul>

This example shows an unordered list.

---

## ORDERED LIST 

An ordered list starts with the `<ol>` tag. Each list item starts with the `<li>` tag.

### EXAMPLE

    <ol>
      <li>Luchito</li>
      <li>Javi</li>
      <li>Maria</li>
    </ol>

This example shows an ordered list.

---

## DESCRIPTION LIST 

A description list starts with the `<dl>` tag.

Each description list have two kind of tags, `<dl>` tag and `<dd>` tag.

### DL TAG

Describes a term in a description list.

### DD TAG

Describes each term in the description list.

### EXAMPLE

    <dl>
      <dt>Coffee</dt>
      <dd>- black hot drink</dd>
      <dt>Milk</dt>
      <dd>- white cold drink</dd>
    </dl>

This example shows a description list with 2 terms and 2 dd describing the term.

---

