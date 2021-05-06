let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");
//let watchDisplay = document.getElementById('watch-display');
let hourDisplay = document.getElementById("hour");
let minDisplay = document.getElementById("min");
let secDisplay = document.getElementById("sec");
let i = 0;
let startStop = 0;
let hour = 0;
let min = 0;
let sec = 0;
let hourOut = 0;
let minOut = 0;
let secOut = 0;
// setInterval
let interval1;

// common function

function start() {
  interval1 = setInterval(counter, 1000);
}

function stop() {
  clearInterval(interval1);
}

function checkTime(element) {
  if (element < 10) {
    element = "0" + element;
  }
  //console.log(element)
  return element;
}

function counter() {
  // i = i + 1;
  hourOut = checkTime(hour);
  minOut = checkTime(min);
  secOut = checkTime(sec);

  sec = sec + 1;

  if (sec == 60) {
    min = min + 1;
    sec = 0;
  }

  if (min == 60) {
    hour = hour + 1;
    min = 0;
  }

  hourDisplay.innerHTML = hourOut;
  minDisplay.innerHTML = minOut;
  secDisplay.innerHTML = secOut;
}

//eventListner
startBtn.addEventListener("click", function () {
  start();
});

stopBtn.addEventListener("click", function () {
  if (startStop == 0) {
    stop();
    stopBtn.innerHTML = "Resume";
    startStop = 1;
  } else if (startStop == 1) {
    stopBtn.innerHTML = "Stop";
    startStop = 0;
    start();
  }
});

resetBtn.addEventListener("click", function () {
  hour = 0;
  min = 0;
  sec = 0;

  hourDisplay.innerHTML = "00";
  minDisplay.innerHTML = "00";
  secDisplay.innerHTML = "00";
});
