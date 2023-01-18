var goalDate = new Date("Jan 20, 2023 21:00:00");
var x = setInterval(function () {
  var countDownDate = goalDate.getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + " d : " + hours + " h : " + minutes + " min : " + seconds + " sec";

  if (distance <= 0) {
    goalDate.setDate(goalDate.getDate() + 7);
  }
}, 1000);
