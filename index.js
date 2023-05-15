let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn-grey, .btn-yellow");
let clear = document.querySelector(".btn-red");
let equal = document.querySelector(".btn-green");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num;
    screen.value += value;
  });
});

equal.addEventListener("click", function () {
  if (screen.value === "") {
    screen.value = "Enter value";
  } else {
    let answer = eval(screen.value);
    screen.value = answer;
  }
});

clear.addEventListener("click", function () {
  screen.value = "";
});

var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
