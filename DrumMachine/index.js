window.addEventListener("keydown", playSound)

function playSound (e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

  if (!audio) {
    alert("Please play the right keys!")
    return;
  }

  audio.play();
  audio.currentTime = 0;

  key.classList.add('playing');
};

const keys = Array.from(document.querySelectorAll(".key"));

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition (e) {
  this.classList.remove('playing')
};
