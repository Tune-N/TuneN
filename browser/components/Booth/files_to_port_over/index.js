console.log('Executing Index.js');

window.addEventListener('gamepadconnected', function(evt) {
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index, e.gamepad.id,
    e.gamepad.buttons.length, e.gamepad.axes.length);
});

var remote = document.querySelector('#remote');
var song1 = document.querySelector('#song');
var song1Text = document.querySelector('#song1Text');
var ray = document.querySelector('#ray');
var touchStartAxes;
var minScale = 0.1;
var scaleMultiplier = 1;
var newScale = currentScale = 1;
var focused = false;

// Song Color Change
song1.addEventListener('raycaster-intersected', function () {
  if (focused) return;
  focused = true;
  song1.setAttribute('color','purple');
  song1Text.setAttribute('value','Select this Song');
});
song1.addEventListener('raycaster-intersected-cleared', function () {
  focused = false;
  song1.setAttribute('color','white');
  song1Text.setAttribute('value','Song 1');
});

remote.addEventListener('axismove', function (e) {
  if (!touchStartAxes) return;
  var deltaX = e.detail.axis[0] - touchStartAxes[0];
  newScale = currentScale + deltaX*scaleMultiplier;
  if (newScale < minScale) newScale = minScale;
  box.setAttribute('scale',newScale+' '+newScale+' '+newScale);
});
remote.addEventListener('touchstart', function (e) {
  touchStartAxes = e.detail.axis;
});
remote.addEventListener('touchend', function (e) {
  touchStartAxes = null;
  currentScale = newScale;
});
remote.addEventListener('buttondown', function (e) {
  box.setAttribute('color','black');
});
remote.addEventListener('buttonup', function (e) {
  if (focused) {
    box.setAttribute('color','purple');
  } else {
    box.setAttribute('color','orange');
  }
});