function updateDigitalClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  var timeString = hours + ':' + minutes + ':' + seconds;

  document.getElementById('time').textContent = timeString;
}

function updateAnalogClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var hourDeg = (hours % 12) * 30 + minutes * 0.5;
  var minuteDeg = minutes * 6 + seconds * 0.1;
  var secondDeg = seconds * 6;

  var hourHand = document.querySelector('.hour-hand');
  var minuteHand = document.querySelector('.minute-hand');
  var secondHand = document.querySelector('.second-hand');

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

updateDigitalClock();
updateAnalogClock();
setInterval(updateDigitalClock, 1000);
setInterval(updateAnalogClock, 1000);
