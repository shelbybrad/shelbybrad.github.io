---
authors:
  - brad-czerniak
#categories: ["one", "two"]
#date: 2020-03-03 02:02:02
#hero_classes: "background-color--main-dark color--white"
meta:
  description: "Instructions for making layouts."
#  image:
#    alt: "Shelby and Brad among the stars" # It's okay for this to be empty if the image is decorative
#    src: required/meta-image--default.jpg
  robots: "noindex,follow"
#  title: "Overrides the tab title and social titles"
#permalink: docs/path/page-title/
#published: true
#tags: ["three", "four"]
title: "Layouts"
---

Any page on the site can use the layout utilities included in the CSS to make beautiful, responsive layouts.

## Basic example

```html
<div class="layout--row display--flex">
  <aside class="layout--column flex--1 display--flex flex-direction--column justify-content--center padding-horizontal--4 padding-horizontal--collapse">
    <p>Left column content.</p>
  </aside>

  <aside class="layout--column flex--1 display--flex flex-direction--column justify-content--center padding-horizontal--4 padding-horizontal--collapse">
    <p>Right column content.</p>
  </aside>
</div>
```

The above HTML renders out as:

<div class="layout--row display--flex">
  <aside class="layout--column flex--1 display--flex flex-direction--column justify-content--center padding-horizontal--4 padding-horizontal--collapse">
    <p>Left column content.</p>
  </aside>

  <aside class="layout--column flex--1 display--flex flex-direction--column justify-content--center padding-horizontal--4 padding-horizontal--collapse">
    <p>Right column content.</p>
  </aside>
</div>

{% include atoms/spacer.html size="4" %}

Let's break down the markup and classes for all this. The above code can be copied as the starter for a layout, but having
an appreciation of _why_ a layout looks the way it does will help ensure you don't have to refer to this page all the time.

### Div and aside

The wrapper for any row containing columns should be a semantically-appropriate or meaningless element. In most cases a
`<div>` will do nicely.

Each column, even if it is the bigger column, is an aside, so using `<aside>` is at least not semantically out of bounds.

## Sections/stripes

As is customary on websites in the 2020s, each page consists of horizontal stripes sectioning content from the header all
the way to the footer. Many pages have one big stripe for content, such as blog posts or documentation, whereas full-fledged
pages with storytelling or sales purposes may have additional stripes for calls to action and other uses.

## Classes

The site's CSS contains a bunch of utility-first classes for constructing layouts. Some of them follow the property--value
convention for CSS relating to flexbox, so a mastery of flexbox and knowledge of the property--value convention for the site's
utility classes will get you most of the way. We'll document the flexbox classes below, nevertheless.

### layout--row

