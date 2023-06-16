export function formController() {
  const formSubmit = document.querySelector(".brief__form");

  formSubmit.addEventListener("submit", (elem) => {
    elem.preventDefault();
  });
}
