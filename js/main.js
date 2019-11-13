var nb1 = document.getElementById("nb1");
var nb2 = document.getElementById("nb2");
var nb3 = document.getElementById("nb3");
var nb4 = document.getElementById("nb4");
var nt1 = document.getElementById("nt1");
var nt2 = document.getElementById("nt2");
var nt3 = document.getElementById("nt3");
var nt4 = document.getElementById("nt4");
var hamburger = document.getElementById("hamburger");

nb1.style.top = "-15%";
nb2.style.top = "-15%";
nb3.style.top = "-15%";
nb4.style.top = "-15%";

nb1.style.left = "0%";
nb2.style.left = "25%";
nb3.style.left = "50%";
nb4.style.left = "75%";

nb1.style.opacity = "0.7";
nb2.style.opacity = "0.7";
nb3.style.opacity = "0.7";
nb4.style.opacity = "0.7";

nb1.style.transition = "top 1s, opacity 1s";
nb2.style.transition = "top 1s, opacity 1s";
nb3.style.transition = "top 1s, opacity 1s";
nb4.style.transition = "top 1s, opacity 1s";

nt1.innerHTML = "SOUND";
nt2.innerHTML = "GEAR";
nt3.innerHTML = "RECENT";
nt4.innerHTML = "ABOUT";

hamburger.style.top = "2%";
hamburger.style.transition = "top 1s";
hamburger.onclick = showNav;

makeHam();
var topLine = document.getElementById("topLine");
var midLine = document.getElementById("midLine");
var botLine = document.getElementById("botLine");

swapColors();

function swapColors() {
  var swap = window.getComputedStyle(hamburger, null).getPropertyValue("background-color");
  topLine.style.backgroundColor = swap;
  midLine.style.backgroundColor = swap;
  botLine.style.backgroundColor = swap;
  hamburger.style.backgroundColor = "transparent";
}
function makeHam() {
  var line1 = document.createElement("span");
  line1.id = "topLine";
  line1.style.position = "absolute";
  line1.style.width = "100%";
  line1.style.height = "10%";
  line1.style.top = "0%";
  line1.style.backgroundColor = "black";
  hamburger.appendChild(line1);

  var line2 = document.createElement("span");
  line2.id = "midLine";
  line2.style.position = "absolute";
  line2.style.width = "100%";
  line2.style.height = "10%";
  line2.style.top = "45%";
  line2.style.backgroundColor = "black";
  hamburger.appendChild(line2);

  var line3 = document.createElement("span");
  line3.id = "botLine";
  line3.style.position = "absolute";
  line3.style.width = "100%";
  line3.style.height = "10%";
  line3.style.top = "90%";
  line3.style.backgroundColor = "black";
  hamburger.appendChild(line3);
}

function showNav() {
  if (hamburger.style.top == "2%") {
    hamburger.style.top = "7%";
    nb1.style.top = "2%";
    nb2.style.top = "2%";
    nb3.style.top = "2%";
    nb4.style.top = "2%";
  } else {
    hamburger.style.top = "2%";
    nb1.style.top = "-15%";
    nb2.style.top = "-15%";
    nb3.style.top = "-15%";
    nb4.style.top = "-15%";

  }
}
