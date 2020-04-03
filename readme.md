
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub top language](https://img.shields.io/github/languages/top/shelbybrad/shelbybrad.github.io)
![GitHub language count](https://img.shields.io/github/languages/count/shelbybrad/shelbybrad.github.io)

This is a great codebase to clone or fork if you want a full-fledged site **completely free** out of the box on day one,
that you can then customize and extend to suit your needs.

All the repetitive stuff for content, performance, SEO, accessibility, etc. is done, so you can focus on what makes your
site special.

## Features

The base version of this codebase gets four 100s in Lighthouse testing, has valid HTML per the w3 validator, and has zero
errors per the WAVE tool. Also the following:

  * Most configuration in a single `_config.yml` file, for easy start-up
  * Google Analytics (disabled for privacy by default), social link, and other basic support ready to go in the config
  * All the trappings of Jekyll on GitHub Pages: markdown for authoring, YAML front matter, Liquid templates, git revision tracking
  * Generous built-in documentation your team can use: style guide, components, UX, instructions
  * Print, `prefers-reduced-motion`, and dark mode styles already in place that you'll never need to touch
  * Atomic design implemented as consistent, templated includes, using [inclusive components](https://inclusive-components.design/)
    patterns where possible
  * Skip links and plenty of other accessibility (a11y) optimizations
  * Dismissible alerts, both site-wide and reusable in content
  * Site works without JavaScript, with all features failing safe and progressive enhancement
  * Easy-to-reuse call-to-action (CTA) and other sections on any page
  * JAMstack as can be, with one-click Netlify compatibility (below)
  * SVG icons embedded as components. Octicons and social icons included out of the box
  * Zero front-end dependencies and clever **vanilla JavaScript** so you have to write less code
  * Utility-_first_ CSS using a syntax everyone on your team can learn in less than five minutes
  * "Vanilla CSS": full embrace of CSS custom properties that makes Sass unnecessary. Very flat specificity graph
  * webp next-generation image format support for free via scripts and components
  * Baked-in free site search single-page app (SPA) with title boosts, highlighted excerpts, and History API
  * 'Collections' (AKA "content types") with semantic value: docs, events, forms, people, posts, products, pages
  * Automatic hierarchical listing of documentation content
  * Service worker with offline capability. Installable progressive web app (PWA) on day one
  * Configuration for the Forestry.io static-site content management system (CMS) ready to go
  * Snipcart static e-commerce ready to go, with performance and privacy optimizations and an easy fetcher JSON file
  * Example forms for formsubmit.co and mailchimp that make customization easy
  * Variable fonts included and prefetched to optimize payload
  * Lazy-loading images and stylesheets, async scripts, HTTP prefetch support, minification, and other performance optimizations
  * RSS and JSONfeed serialization for blog posts and events
  * `<meta>` tags of all kinds, for search engine optimization (SEO), social (open graph, twitter, _et al_), and web standard interoperability
  * robots.txt and auto-generated XML sitemap. Also a neat, sectioned HTML sitemap for humans browsing
  * Social share "floating action button" for browsers with native compatibility.
  * Some schema.org support already implemented
  * Humans.txt automated from configs so you don't have to worry about it
  * Optional CSS and JS optimization via nodejs
  * Entire codebase in one place -- no opaque "Jekyll themes" or build-breaking plugins
  * Browser support list `.browserslistrc` used for both testing and documentation
  * GitHub Action for the Percy visual-regression-testing web service included
  * JSON Design tokens (compatible with [style-dictionary](https://github.com/amzn/style-dictionary)?) populate both the
    design system's CSS decisions and the automatic documentation
  * "Micro-animations" of many kinds provided by the utility CSS library and vanilla JS
  * All documentation written generically so you don't have to customize it: Terms, Privacy Policy, Content Guide, everything
  * All .github and open-source files written generically so you don't have to worry about them
  * Cookie consent sticky footer to aid GDPR and CCPA compliance
  * Copious code comments throughout, for the right information when you need it
  * Every feature of Jekyll plus some new ones already implemented, most as reusable components
  * JSON files of site content and settings available for the front end
  * Four typical menus: utility, main, footer, copyright
  * Editor configs and linters in place for consistent code styles
  * **Test coverage**: behavioral-like "user story" test definitions for both human and automated verification

## Installation

  1. Fork the repository (button at top of repo page)
  2. On your forked repository page, go to 'Settings' and rename the repository to match your desired behavior
    * Most of the time you will want `user/organization-name`.github.io
    * It can also be any name, typically using the `gh-pages` branch
  3. Edit to your heart's content

If you want to use netlify,
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/shelbybrad/shelbybrad.github.io)

### Creating a local version for development

  1. Clone the repository to your local machine
  2. `cd` into it
  3. Run the command `bundle install` in the root of the project to get the Jekyll standard items
  4. Run `npm install` in the root of the project for non-required build dependencies
  5. Run `bundle exec jekyll serve --verbose` to build and serve your site

Optionally you can look at the comments in the `.scripts` directory for any image (optipng, pngcrush, jpegoptim, webp) and
other dependencies for optimizing assets on the back end. This helps improve front-end performance if you can manage it.

## Customizing

sdfsf

## Credits

@todo
