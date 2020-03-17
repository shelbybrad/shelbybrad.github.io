---
authors:
  - brad-czerniak
#categories: ["one", "two"]
#date: 2020-03-03 02:02:02
#hero_classes: "background-color--main-dark color--white"
meta:
  description: "All markdown syntax and its usage for this site."
#  image:
#    alt: "Shelby and Brad among the stars" # It's okay for this to be empty if the image is decorative
#    src: required/meta-image--default.jpg
  robots: "noindex,follow"
#  title: "Overrides the tab title and social titles"
#permalink: docs/path/page-title/
#published: true
#tags: ["three", "four"]
title: "Markdown"
---

## Table of contents
{: .no_toc}

1. TOC
{:toc}

A table of contents, based on the headings in the documents, can be added to the **top** \[only] of a markdown (.md) file
with the following code exactly:

```markdown
## Table of contents
{: .no_toc}

1. TOC
{:toc}
```

## Introduction
{: .text-shadow--second-light--solid}

On this site we use a text format called markdown for much of the content. This format is plain old text with some extra
'syntax' (symbols and spacing) to let you make things like links, headings, bold and italic text, and a bunch of other stuff,
all in a way that looks mostly natural on its own.

A big advantage of this format is that you can learn it without having to learn the nitty-gritty of HTML, and end up with
beautiful pages. Anywhere you see a file that ends in `.md` you can use this markdown stuff outlined below and spice the
heck out of your content without bugging a developer!

## All syntax
{: .text-shadow--second-light--solid}

This site renders markdown using the [kramdown engine](https://kramdown.gettalong.org/syntax.html), and as such can take
any syntax accepted by the engine as a whole. In circumstances where there are multiple ways to make an element, this
guide is prescriptive about the preferred style to use for consistency on this site.

### Plain paragraph text

Regular text can be typed as you naturally would in a word-processing program; just type out the text and then hit Enter
twice to create a new paragraph.

One thing we do as a convention on this site is hit Enter once (start a new line) when the line you're on gets to 120
letters/characters long. This makes the text readable and manageable in a plain text editor without fancy wrapping settings.

Here's an example of some plain old paragraph text in a markdown file:

```markdown
Regular text can be typed as you naturally would in a word-processing program; just type out the text and then hit Enter
twice to create a new paragraph.

One thing we do as a convention on this site is hit Enter once (start a new line) when the line you're on gets to 120
letters/characters long. This makes the text readable and manageable in a plain text editor without fancy wrapping settings.

Here's an example of some plain old paragraph text in a markdown file:
```

### Headings

Headings are a great way to split your content into meaningful, bite-size sections. Usability researchers have found time
and again that users respond very poorly to long paragraphs and big walls of text, so headings are a great solve for that.
They also give people waypoints in the document to skim, and are necessary if you want a table of contents like the one at
the top of this page.

Headings must follow a logical outline order... you can't start a page with a fourth-level heading just because you like
the way it looks. In fact, every page on the web should have just one first-level heading. That's why every markdown page
you see on the site should start with a second-level heading!

You can add a heading like this:

```markdown
### Headings
```

And here are all the heading levels available to you when writing:

```markdown
## Second-level heading

### Third-level heading

#### Fourth-level heading

##### Fifth-level heading

###### Sixth-level heading
```

You're not allowed to go beyond six levels. Typically if you get past four you're probably writing too much on one page.

### Emphasis

dassdfsd

#### Italic text

sdfsdfs

#### Bold text

sfsdfsdsfd

### Links

sdfsdfsd

### Lists

sdfsfsd

#### Bulleted lists

sdfdfsd

#### Numbered lists

sdfsfsfsdfs

### Quotes

A blockquote is started using the `>` marker followed by an optional space; all following lines that
are also started with the blockquote marker belong to the blockquote. You can use any block-level
elements inside a blockquote:

### Code

sdsdsda

#### Big blocks of code

sdfdsfsd

### Little code examples

sdfdsfsfsd

### Tables

kramdown supports a syntax for creating simple tables. A line starting with a pipe character (`|`)
starts a table row. However, if the pipe characters is immediately followed by a dash (`-`), a
separator line is created. Separator lines are used to split the table header from the table body
(and optionally align the table columns) and to split the table body into multiple parts. If the
pipe character is followed by an equal sign (`=`), the tables rows below it are part of the table
footer.

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cellA   | cellB   | cellC   |
| cell1   | cell2   | cell3   |
| cellA   | cellB   | cellC   |

```markdown
| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cellA   | cellB   | cellC   |
| cell1   | cell2   | cell3   |
| cellA   | cellB   | cellC   |
```

### Images

Images can be added in the manner shown below. Just... **don't do it this way**. Keep reading this section.

```markdown
![Default meta image](/assets/images/required/meta-image--default.jpg)
```

Since this site is obscenely high-performance, it does a bunch of things to images when the site regenerates to make images
load faster. The way of adding images above won't do it, but the way below will:

{% raw %}
```smarty
{% include atoms/image.html
  src="required/meta-image--default.jpg"
  alt="Default meta image"
  caption="Look how shareable the page is!"
%}
```
{% endraw %}

The example code above becomes:

{% include atoms/image.html
  src="required/meta-image--default.jpg"
  alt="Default meta image"
  caption="Look how shareable the page is!"
%}

## Footnotes

Footnotes can easily be used. Just set a footnote marker[^1] in the text and somewhere else the footnote definition[^2].
It looks like this:

```markdown
This is some text with a footnote[^3]. We breeze past it into the next sentence.

[^3]: And here is the definition.
```

Typically you'd put all the footnote definitions at the bottom of a heading-ed section, or perhaps the page, depending on
how much you have written.

[^1]: The bracket with the caret and 1 in the footnote example above
[^2]: The bracket-y dealie with the colon after it in the footnote example above

## Advanced
{: .text-shadow--second-light--solid}

The elements below get into murky territory, since if you're using them it's often a sign you should be using an HTML file
instead of a markdown one.

### Classes

CSS classes can be added to certain elements using the `{: .classname }` syntax. For example, here's how we made the
'Advanced' heading above:

```markdown
## Advanced
{: .text-shadow--second-light--solid}
```

### HTML elements

asdsasdas
