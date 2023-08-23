"use strict";

const formBtn = document.querySelector(".form__btn");
const successBtn = document.querySelector(".success__btn");
const errorMessage = document.querySelector(".form__error-message");

const emailEl = document.querySelector(".form__input");
const mainPage = document.querySelector(".container");
const successPage = document.querySelector(".success");

let successEmailValue = document.querySelector(".success__email");
let isValidEmail;

const regex = /email@company/;

emailEl.addEventListener("input", function (e) {
  isValidEmail = regex.test(e.target.value);
  emailEl.classList.add("error");
  errorMessage.classList.add("show");
  if (isValidEmail) {
    emailEl.classList.remove("error");
    errorMessage.classList.remove("show");
  }
});

formBtn.addEventListener("click", function () {
  if (regex.test(emailEl.value)) {
    mainPage.classList.add("hide");
    successPage.classList.add("show");
    successEmailValue.textContent = emailEl.value;
  } else {
    emailEl.classList.add("error");
    errorMessage.classList.add("show");
  }
});

successBtn.addEventListener("click", function () {
  successPage.classList.remove("show");
  mainPage.classList.remove("hide");
  emailEl.value = "";
});
