---
layout: compress
sitemap: false
---

/**
 * @file
 * Scripts necessary for search page operation.
 */

/* 5. Parse the GET parameters on the page, and if there's q, set the inputs to that and trigger the event */

let searchIndex = [], searchDebounce = Date.now();
const qInputs = document.querySelectorAll('input[name="q"]');
const resultsElements = document.querySelectorAll('.search--results-container');
const urlParams = new URLSearchParams(window.location.search);

let filterResults = (searchQuery) => {
  let results = [];
  const excerptPad = 20 - searchQuery.length;
  const qRegex = new RegExp(searchQuery, 'gi');

  Array.prototype.forEach.call(searchIndex, (result) => {
    let score = 0;
    result.excerpt = "(Query matches title)";

    score += (result.title.match(qRegex)) ? (2 * result.title.match(qRegex).length) : 0;
    if (result.content.match(qRegex)) {
      score += result.content.match(qRegex).length;
      matchIndex = result.content.search(qRegex);
      result.excerpt = "..." + result.content.substr((matchIndex - excerptPad), excerptPad)
        +  "<strong>" + searchQuery + "</strong>" + result.content.substr((matchIndex + searchQuery.length), excerptPad) + "...";
    }

    if (score) {
      result.score = score;
      results.push(result);
    }
  });

  results.sort((a, b) => (a.score < b.score) ? 1 : -1);

  return results;
};

let renderResults = (results) => {
  let output = `
    <div class="alert position--relative js--dismissible alert--warning" role="alert">
      <p>No results found.</p>
    </div>
  `;

  if (results.length) {
    output = `<ol class="list-style--none layout--multiple--horizontal">`;

    Array.prototype.forEach.call(results, (result) => {
      output += `
        <li class="card js--child--link display--flex flex-direction--column">
          <div class="card--text padding-horizontal--4 padding-vertical--4">
            <h3 class="card--title font-size--1p25em">
              <a href="${result.url}">${result.title}</a>
            </h3>

            <p class="card--description font-size--p75em">${result.excerpt}</p>
          </div>

          <figure class="figure figure--image figure--card--image order--neg1 box-shadow--lifted-edges">
            <picture class="picture" itemprop="image">
              <img src="/assets/images/${result.image.src}" alt="${result.image.alt}" />
            </picture>
          </figure>
        </li>
      `;
    });

    output += `</ol>`;
  }

  return output;
};

let qListener = (event) => {
  if (event.target.name === 'q') {
    Array.prototype.forEach.call(qInputs, (elem) => {
      if (elem !== event.target) {
        elem.value = event.target.value;
      }
    });

    if (event.target.value.length >= 1) {
      if (resultsElements.length) {
        if ((Date.now() - searchDebounce) > 100) {
          const results = renderResults(filterResults(event.target.value));
          Array.prototype.forEach.call(resultsElements, (elem) => {
            elem.innerHTML = results;
          });

          searchDebounce = Date.now();
        }
      }
    }
  }
};

fetch('/assets/data/search-index.json')
  .then((blob) => {
    return blob.json();
  })
  .then((data) => {
    searchIndex = data;
    delete data;

    document.addEventListener('change', qListener, false);
    document.addEventListener('keyup', qListener, false);

    if (urlParams.has("q")) {
      Array.prototype.forEach.call(qInputs, (elem) => {
        elem.value = urlParams.get("q");
        qListener({
          'target': elem
        });
      });
    }
  })
  .catch((err)=>  {
    console.warn('Something went wrong.', err);
  });
