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
const childLinks = document.querySelectorAll('.js--child--link');
Array.prototype.forEach.call(childLinks, (childLink) => {
  let down, up, link = childLink.querySelector('a[href]');

  if (link && link.href && link.href.length >= 1) {
    childLink.classList.add('card--hover', 'cursor--pointer');

    childLink.onmousedown = () => down = +new Date();
    childLink.onmouseup = () => {
      up = +new Date();
      if ((up - down) < 200) {
        link.click();
      }
    }
  }
});
