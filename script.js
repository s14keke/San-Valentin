"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const siButton = document.querySelector(".btn--si");
const noButton = document.querySelector(".btn--no");
const gatoImagen = document.querySelector(".imagengato");

const MAX_IMAGES = 20;

let play = true;
let noCount = 0;

siButton.addEventListener("click", cambiarSiClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    cambiarImagen(imageIndex);
    ajustarButtonSi();
    ajustarBotonNo();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function cambiarSiClick() {
  titleElement.innerHTML = "vamooooo!!!! te amo galita <2";
  buttonsContainer.classList.add("hidden");
  cambiarImagen("si");
}

function ajustarButtonSi() {
  const computedStyle = window.getComputedStyle(siButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  siButton.style.fontSize = `${newFontSize}px`;
}

function generarMensaje(noCount) {
  const messages = [
    "No",
    "Estas segura?",
    "No me rechaces ahora",
    "Le voy a contar a un pajarito",
    "Le conté a mi mamá",
    "Ahora soy solitario...",
    "dale porfavor",
    "deci que si",
    "ya fue",
    "no te queda de otra..."
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function cambiarImagen(image) {
  gatoImagen.src = `img/gato-${image}.jpg`;
}

function ajustarBotonNo() {
  noButton.innerHTML = generarMensaje(noCount);
}
