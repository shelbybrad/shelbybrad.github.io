/**
 * @file
 * Enable and manage dismissible classed elements.
 */

/**
 * Enable and manage dismissible classed elements.
 * @type {NodeListOf<Element>}
 */
const dismissibles = document.querySelectorAll('.js--dismissible');
if (dismissibles.length) {
  Array.prototype.forEach.call(dismissibles, (dismissible) => {
    if (dismissible.hasAttribute('id')) {
      let storedInfo = localStorage.getItem('js--dismissible--' + dismissible.getAttribute('id'));
      if (storedInfo === 'hidden') {
        dismissible.classList.add('display--none', 'js--dismissible--closed');
        dismissible.parentNode.removeChild(dismissible);
      }
    }

    dismissible.insertAdjacentHTML('afterBegin', `
      <button type="button" class="js--dismissible--close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    `);
  });

  document.addEventListener('click', function (event) {
    let dismissible;

    if (event.target !== document
      && event.target.closest('.js--dismissible--close')
      && event.target.closest('.js--dismissible')
    ) {
      dismissible = event.target.closest('.js--dismissible');

      dismissible.classList.add('display--none', 'js--dismissible--closed');
      dismissible.parentNode.removeChild(dismissible);

      if (dismissible.hasAttribute('id')) {
        localStorage.setItem('js--dismissible--' + dismissible.getAttribute('id'), 'hidden');
      }
    }
  }, false);
}
