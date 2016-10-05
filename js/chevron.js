// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

var last_known_scroll_position = 0;
var ticking = false;

function revealChevron() {
    var chevron = document.getElementById("chevron");
    if (window.scrollY < 200) {
      chevron.style.display = "none";
    } else {
    chevron.style.display = "inline-block";
    }
}

window.addEventListener('scroll', function() {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      revealChevron(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});