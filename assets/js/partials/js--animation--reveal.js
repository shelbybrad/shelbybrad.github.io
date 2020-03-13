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












document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});
