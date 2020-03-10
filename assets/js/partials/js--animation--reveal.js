/**
 * @file
 * Class the body with scroll state.
 */

if ('IntersectionObserver' in window) {
  document.body.classList.add('js--animation');

  let animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.5) {
        entry.target.classList.add('js--animation--observed');
      }
    });
  }, {
    threshold: 0.5
  });

  var animationInitializationFunction = function(initType) {
    animationObserver.observe(this);
  };
  utilityInitializer('js--animation--reveal', 'animationInitializationFunction');
}
