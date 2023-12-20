/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let window = document.querySelector(".button");
window.onclick = function randomCard() {
  let logo = ["♦", "♥", "♠", "♣"];
  let number = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K"
  ];

  let randomLogo = Math.floor(Math.random() * logo.length);
  let randomNumber = Math.floor(Math.random() * number.length);

  let showLogo = logo[randomLogo];
  let showNumber = number[randomNumber];

  let element = document.querySelector(".top-logo");
  if (showLogo == "♦" || showLogo == "♥") {
    element.style.color = "red";
  } else {
    element.style.color = "black";
  }

  let element2 = document.querySelector(".bottom-logo");
  if (showLogo == "♦" || showLogo == "♥") {
    element2.style.color = "red";
  } else {
    element2.style.color = "black";
  }

  document.querySelector(".top-logo").innerHTML = showLogo;
  document.querySelector(".bottom-logo").innerHTML = showLogo;
  document.querySelector(".number").innerHTML = showNumber;
};
