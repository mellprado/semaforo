const redLight = document.getElementById("redLight");
const yellowLight = document.getElementById("yellowLight");
const greenLight = document.getElementById("greenLight");
const turnOff = document.getElementById("turnOff");
const auto = document.getElementById("auto");
const semaphore = document.getElementById("semaphore");
const colors = ["green", "yellow", "red"];

var colorIndex = 0;

const light = {
    "red": () => {semaphore.src = "./img/vermelho.png";},
    "yellow": () => {semaphore.src = "./img/amarelo.png";},
    "green": () => {semaphore.src = "./img/verde.png";},
    "off": () => {semaphore.src = "./img/desligado.png";}
};

function automatic() {
    setInterval(changeLight, 2000)
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

redLight.addEventListener("click", light.red);
yellowLight.addEventListener("click", light.yellow);
greenLight.addEventListener("click", light.green);
turnOff.addEventListener("click", light.off);
auto.addEventListener("click", automatic);