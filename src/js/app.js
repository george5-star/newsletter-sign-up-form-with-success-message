"use strict";

const formBtn = document.querySelector(".form__btn");
const successBtn = document.querySelector(".success__btn");
const errorMessage = document.querySelector(".form__error-message");

const emailEl = document.querySelector(".form__input");
const mainPage = document.querySelector(".container");
const successPage = document.querySelector(".success");
const successEmail = document.querySelector(".success__email");

const isValidEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

formBtn.addEventListener("click", () => {
  const emailValue = emailEl.value;

  if (isValidEmail.test(emailValue)) {
    emailEl.classList.remove("input-error");
    errorMessage.classList.remove("show");
    successPage.classList.add("show");
    mainPage.classList.add("hide");
    emailEl.value = "";
    successEmail.textContent = emailValue;
  } else {
    emailEl.classList.add("input-error");
    errorMessage.classList.add("show");
  }
});

successBtn.addEventListener("click", () => {
  successPage.classList.remove("show");
  mainPage.classList.remove("hide");
});
