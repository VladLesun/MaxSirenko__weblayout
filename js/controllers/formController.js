import { validation } from "../modules/validation.js";

export function formController() {
  const formSubmit = document.getElementById("add-form");

  formSubmit.addEventListener("submit", function (elem) {
    elem.preventDefault();

    if (validation(this) === true) {
      alert("Форма проверена успешно!");
    }
  });
}
