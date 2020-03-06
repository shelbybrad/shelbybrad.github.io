/**
 * @file
 * For figure elements with the class present, toggle a lightbox on clicks.
 */

'use strict';

if (Element.prototype.closest) {
  document.addEventListener('click', function (event) {
    if (event.target.closest('.js--figure--lightbox')) {
      console.log('Registered a bubbled click on the figure.');
      let figure = event.target.closest('.js--figure--lightbox');
      figure.classList.toggle('js--figure--lightbox--open');
    }
  }, false);
}