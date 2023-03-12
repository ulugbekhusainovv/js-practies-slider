const slider = document.querySelector(".slider"),
  active = document.querySelector("#active"),
  liner1 = document.querySelector("#line1"),
  liner2 = document.querySelector("#line2"),
  liner3 = document.querySelector("#line3"),
  liner4 = document.querySelector("#line4"),
  container = document.querySelector(".container");

liner1.addEventListener("click", function () {
  slider.style.transform = "translateX(0)";
  active.style.top = 0;
  container.style.background = "#c4d719";
});
liner2.addEventListener("click", function () {
  slider.style.transform = "translateX(-25%)";
  active.style.top = "80px";
  container.style.background = "#195bd7";
});
liner3.addEventListener("click", function () {
  slider.style.transform = "translateX(-50%)";
  active.style.top = "160px";
  container.style.background = "#3f9b28";
});
liner4.addEventListener("click", function () {
  slider.style.transform = "translateX(-75%)";
  active.style.top = "240px";
  container.style.background = "#c71414";
});
