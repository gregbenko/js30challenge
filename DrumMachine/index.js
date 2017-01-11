window.addEventListener("keydown", playSound);

function playSound (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) {
      console.log("Please play the right keys!");
      return;
    }
    audio.play(); //play sample
    audio.currentTime = 0; // rewind sample for multi key touch
    key.classList.add('playing'); //adding the hit style when key pressed
};

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function removeTransition (e) {
  this.classList.remove('playing');
};
