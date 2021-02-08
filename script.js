const newYear = "Jan 1, 2022 00:00:00";

const newYearDate = new Date(newYear).getTime();
console.log(newYearDate);


var x = setInterval(function () {
  var now = new Date().getTime(); //today's date time
  var difference = newYearDate - now;
  if (difference < 0) {
    document.querySelector("h1").innerHTML = "Happy New Year 2022";
    clearInterval(x);
  } 
  else {
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);


    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#mins").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;

  }
}, 1000);