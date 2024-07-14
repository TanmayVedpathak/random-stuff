// setInterval(() => {
//   d = new Date();
//   hr = d.getHours();
//   min = d.getMinutes();
//   sec = d.getSeconds();
//   hr_rotation = 30 * hr + min / 2;
//   min_rotation = 6 * min;
//   sec_rotation = 6 * sec;

//   hour.style.transform = `rotate(${hr_rotation}deg)`;
//   minute.style.transform = `rotate(${min_rotation}deg)`;
//   second.style.transform = `rotate(${sec_rotation}deg)`;
// }, 1000);

const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
