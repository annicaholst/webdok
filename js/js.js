

/** Baggrund sky **/

let rellax = new Rellax ('.rellax')


// billeder med lyd

document.getElementById('play').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio').play();
});

document.getElementById('play2').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio2').play();
});

document.getElementById('play3').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio3').play();
});
