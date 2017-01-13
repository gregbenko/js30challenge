const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const seconds = document.querySelector(".seconds");

function setDate () {
  const now = new Date();

  const secondsTic = now.getSeconds();
  const secondsTicDegrees = ((secondsTic / 60) * 360) + 90;
  seconds.style.transform = `rotate(${secondsTicDegrees}deg)`;

  const minuteTic = now.getMinutes();
  const minuteTicDegrees = ((minuteTic / 60) * 360) + 90;
  minute.style.transform = `rotate(${minuteTicDegrees}deg)`;

  const hourTic = now.getHours();
  const hourTicDegrees = ((hourTic / 12) * 360) + 90;
  hour.style.transform = `rotate(${hourTicDegrees}deg)`;
};

setInterval(setDate, 1000);

setDate();
