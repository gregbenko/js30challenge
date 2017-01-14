const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate () {
  const now = new Date;

  const secondRotate = now.getSeconds();
  const secondRotateDeg = ((secondRotate / 60) * 360);
  second.style.transform = `rotate(${secondRotateDeg}deg)`;

  const minuteRotate = now.getMinutes();
  const minuteRotateDeg = ((minuteRotate / 60) * 360) + (secondRotateDeg / 360);
  minute.style.transform = `rotate(${minuteRotateDeg}deg)`;

  const hourRotate = now.getHours();
  const hourRotateDeg = ((hourRotate / 12) * 360) + (minuteRotateDeg / 12);
  hour.style.transform = `rotate(${hourRotateDeg}deg)`;
}

setInterval(setDate, 1000);

setDate();
