const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const semaphore = document.getElementById("semaphore");
const colors = ["green", "yellow", "red"];

var colorIndex = 0;
var interval = null;

const light = {
    "red": () => {semaphore.src = "./img/vermelho.png";},
    "yellow": () => {semaphore.src = "./img/amarelo.png";},
    "green": () => {semaphore.src = "./img/verde.png";},
    "off": () => {semaphore.src = "./img/desligado.png";}
};

function automatic() {
    interval = setInterval(changeLight, 1000)
}

function changeLight() {
    const color = colors[colorIndex];
    light[color]();
    nextIndex();
}

function nextIndex() {
    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
}

function out() {
    clearInterval(interval);
    light.off();
}

turnOn.addEventListener("click", automatic);
turnOff.addEventListener("click", out);