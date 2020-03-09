/**
 * @file
 * Bubbling and manipulation of elements based on their children.
 */

/**
 * Cards with links inside them should be clickable, and take cursor/hover.
 *
 * @see https://inclusive-components.design/cards/
 * @type {NodeListOf<Element>}
 */
const cards = document.querySelectorAll('.js--child--link');
Array.prototype.forEach.call(cards, card => {
  let down, up, link = card.querySelector('h3 a');

  if (link && link.href && link.href.length >= 1) {
    card.classList.add('card--hover', 'cursor--pointer');

    card.onmousedown = () => down = +new Date();
    card.onmouseup = () => {
      up = +new Date();
      if ((up - down) < 200) {
        link.click();
      }
    }
  }
});
