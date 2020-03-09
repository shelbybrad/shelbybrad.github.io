/**
 * @file
 * Enable and manage dismissible classed elements.
 */

/**
 * Enable and manage dismissible classed elements.
 * @type {NodeListOf<Element>}
 */
document.addEventListener('click', function (event) {
  let toggleBelow, ariaExpanded;

  if (event.target !== document && event.target.closest('.js--toggle-below')) {
    toggleBelow = event.target.closest('.js--toggle-below');

    /* Add or toggle the aria-expanded attribute. */
    ariaExpanded = toggleBelow.getAttribute('aria-expanded');
    toggleBelow.textContent = (!ariaExpanded || ariaExpanded === "false") ? "Close below" : "Open below";
    ariaExpanded = (!ariaExpanded || ariaExpanded === "false") ? "true" : "false";
    toggleBelow.setAttribute('aria-expanded');

    /* Explicitly toggle classes on the next element, in case this is the first time. */
    if (ariaExpanded === "true") {
      toggleBelow.nextElementSibling.classList.add('js--toggle-below--open');
      toggleBelow.nextElementSibling.classList.remove('js--toggle-below--closed');
    }
    else {
      toggleBelow.nextElementSibling.classList.add('js--toggle-below--closed');
      toggleBelow.nextElementSibling.classList.remove('js--toggle-below--open');
    }
  }
}, false);
