$(document).ready(function () {
  $('.slider').bxSlider();
});

// Scroll Effect
function isElementUnderBottom(elem, triggerDiff) {
  const {
    top
  } = elem.getBoundingClientRect();
  const {
    innerHeight
  } = window;
  return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
  const elems = document.querySelectorAll('.up_on_scroll');
  elems.forEach(elem => {
    if (isElementUnderBottom(elem, -20)) {
      elem.style.opacity = "0";
      elem.style.transform = 'translateY(70px)';
    } else {
      elem.style.opacity = "1";
      elem.style.transform = 'translateY(0px)';
    }
  })
}

window.addEventListener('scroll', handleScroll);
// Scroll Effect
