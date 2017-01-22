const audio = document.querySelector("audio");
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');
const stopButton = document.getElementById('stop');
const trackSelection = document.getElementsByClassName('track');

for (let i = 0; i < trackSelection.length; i++) {
  trackSelection[i].addEventListener("mouseover", () => {
    trackSelection[i].style.backgroundColor = "yellow";
  });
  trackSelection[i].addEventListener("mouseout", () => {
    trackSelection[i].style.backgroundColor = "white";
  });
  trackSelection[i].addEventListener("click", () => {
    trackSelection[i].style.backgroundColor = "red";
  });
  trackSelection[i].addEventListener("dblclick", () => {
    trackSelection[i].style.backgroundColor = "white";
  });
};
