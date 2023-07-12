import { validation } from "../modules/validation.js";

const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const allInputs = document.querySelectorAll("input"),
  allTextarea = document.querySelectorAll("textarea");

function getItem(allItems) {
  for (let item of allItems) {
    item.value = "";
  }
}

modal.addEventListener("click", ({ target, currentTarget }) => {
  if (target.closest(".modal.modal_open") || target === currentTarget) {
    currentTarget.classList.remove("modal_open");
    body.classList.remove("is-hidden");
  }
});

export function formController() {
  const formSubmit = document.getElementById("add-form");

  formSubmit.addEventListener("submit", function (elem) {
    elem.preventDefault();

    if (validation(this) === true) {
      document.getElementById("header").scrollIntoView({ behavior: "smooth" });
      modal.classList.add("modal_open");
      body.classList.add("is-hidden");
      getItem(allInputs);
      getItem(allTextarea);
    }
  });
}
