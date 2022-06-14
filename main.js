const redLight = document.getElementById("redLight");
const yellowLight = document.getElementById("yellowLight");
const greenLight = document.getElementById("greenLight");
const turnOff = document.getElementById("turnOff");
const semaphore = document.getElementById("semaphore");

function redLightOn() {
    semaphore.src = "./img/vermelho.png";
}

function yellowLightOn() {
    semaphore.src = "./img/amarelo.png";
}

function greenLightOn() {
    semaphore.src = "./img/verde.png";
}

function semaphoreOff() {
    semaphore.src = "./img/desligado.png";
}

redLight.addEventListener("click", redLightOn);
yellowLight.addEventListener("click", yellowLightOn);
greenLight.addEventListener("click", greenLightOn);
turnOff.addEventListener("click", semaphoreOff);