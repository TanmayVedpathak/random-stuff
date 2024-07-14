const hrSpan = document.getElementById("hr");
const minSpan = document.getElementById("min");
const secSpan = document.getElementById("sec");
const am = document.getElementById("am");
const pm = document.getElementById("pm");
const timeFormat = document.querySelectorAll(".timeFormat");
var formatTime = "12";
// console.log("%cconsole.log", "color: green; background: red;");
function modifyTime(format) {
  var date = new Date();
  var meridiem;

  if (formatTime == '12') {
    var time = date.toLocaleTimeString('en-IN', { timeStyle: 'medium', hourCycle: 'h12' });
    [time, meridiem] = time.split(" ");
  } else {
    var time = date.toLocaleTimeString('en-IN', { timeStyle: 'medium', hourCycle: 'h24' });
  }
  [hrCount, minCount, secCount] = time.split(":");

  hrSpan.innerText = hrCount;
  minSpan.innerText = minCount;
  secSpan.innerText = secCount;
  if (meridiem) {
    am.style.visibility = "visible";
    pm.style.visibility = "visible";
    if (meridiem == "am") {
      am.classList.add("opacity");
      pm.classList.remove("opacity");
    } else {
      am.classList.remove("opacity");
      pm.classList.add("opacity");
    }
  } else {
    am.style.visibility = "hidden";
    pm.style.visibility = "hidden";
  }
}

setInterval(() => {
  modifyTime(formatTime)
}, 1000);


timeFormat.forEach(element => {
  element.addEventListener("click", function (event) {
    const format = event.target.getAttribute("data-time-format");
    if (format == 12) {
      formatTime = '12'
      modifyTime(formatTime);
    } else {
      formatTime = '24'
      modifyTime(formatTime);
    }
  })
});

modifyTime(formatTime);