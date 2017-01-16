const seconds = document.querySelector(".second");
const minutes = document.querySelector(".minute");
const hours = document.querySelector(".hour");

function setDate () {
  const now = new Date;

  const secondsNow = now.getSeconds();
  const secondsNowDeg = (secondsNow / 60) * 360;
  seconds.style.transform = `rotate(${secondsNowDeg}deg)`;

  const minuteNow = now.getMinutes();
  const minuteNowDeg = (minuteNow / 60) * 360;
  minutes.style.transform = `rotate(${minuteNowDeg}deg)`;

  const hourNow = now.getHours();
  const hourNowDeg = (hourNow / 12) * 360;
  hours.style.transform = `rotate(${hourNowDeg}deg)`;
}

setInterval (setDate, 1000);
