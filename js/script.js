// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

var last_known_scroll_position = 0;
var ticking = false;

function revealUpButton(scroll_pos) {
    document.getElementById("up-button").style.display = "inline-block";
}

function hideUpButton(scroll_pos) {
    document.getElementById("up-button").style.display = "none";

}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      revealUpButton(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});