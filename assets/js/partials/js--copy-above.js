/**
 * @file
 * Enable and manage classed elements (<button>s) that make a copy of
 * the above element when pressed.
 *
 * Any id, for, name, etc. attributes are incremented numerically (and appended
 * if no number is there yet) so forms continue to work.
 *
 * Uses the DOM initializer pattern in partials/utility--initializer.js
 */

var copyaboveInitializationFunction = function(initType) {
  this.classList.add('js--event--click');
};
utilityInitializer('js--copy-above', 'copyaboveInitializationFunction');

/* Use event delegation for any dynamically-added dismiss events. */
document.addEventListener('click', function (event) {
  if (event.target !== document
    && event.target.closest('.js--copy-above')
  ) {
    let copyabove = event.target.closest('.js--copy-above');
    let aboveElem = copyabove.previousElementSibling.cloneNode(true); /* Since it is a deep clone, we assume child elements are initiated. */
    aboveElem.classList.add('js--dismissible');

    /* Traverse the aboveElem and change unique attributes
    * (original then a number of colons indicating depth then an elemnent-wide incrementer. */

    copyabove.insertAdjacentElement("beforeBegin", aboveElem);
  }
}, false);
