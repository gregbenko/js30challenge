window.addEventListener("keydown", playSound);
function playSound (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  audio.play();
  audio.currentTime = 0;

  // key.classList.add(".playing");
};

const keys = document.querySelectorAll(".key");
