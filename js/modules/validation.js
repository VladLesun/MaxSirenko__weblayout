export function validation(form) {
  let result = true;

  function removeError(elem) {
    const parent = elem.parentNode;

    if (parent.classList.contains("error")) {
      parent.querySelector(".error-label").remove();
      parent.classList.remove("error");
    }
  }

  function createError(elem, text) {
    const parent = elem.parentNode;
    const errorLabel = document.createElement("label");

    errorLabel.classList.add("error-label");
    parent.classList.add("error");

    errorLabel.textContent = text;

    parent.prepend(errorLabel);
  }

  const allValidation = form.querySelectorAll(".js-validation");

  for (let elem of allValidation) {
    removeError(elem);

    if (elem.dataset.mail == "true") {
      if (elem.value == "") {
        removeError(elem);
        createError(elem, "Введите ваш e-mail!");
        result = false;
      }
    }

    if (elem.dataset.name == "true") {
      if (elem.value == "") {
        removeError(elem);
        createError(elem, "Введите ваше имя!");
        result = false;
      }
    }

    if (elem.dataset.company == "true") {
      if (elem.value == "") {
        removeError(elem);
        createError(elem, "Введите название вашей компании!");
        result = false;
      }
    }

    if (elem.dataset.tel == "true") {
      if (elem.value == "") {
        removeError(elem);
        createError(elem, "Введите ваш номер телефона!");
        result = false;
      }
    }

    if (elem.dataset.product == "true") {
      if (elem.value == "") {
        removeError(elem);
        createError(elem, "Введите описание вашего продукта!");
        result = false;
      }
    }

    if (elem.dataset.targetGroup == "true") {
      if (elem.value == "") {
        removeError(elem);
        createError(
          elem,
          "Введите данные на какую аудиторию направлен продукт!"
        );
        result = false;
      }
    }

    if (elem.dataset.task == "true") {
      if (elem.value == "") {
        removeError(elem);
        createError(elem, "Введите задачи для видеоролика!");
        result = false;
      }
    }

    if (elem.dataset.videoHosting == "true") {
      if (elem.value == "") {
        removeError(elem);
        createError(
          elem,
          "Введите платформу(-ы) где должен размещаться видеоролик!"
        );
        result = false;
      }
    }

    if (elem.dataset.budget == "true") {
      if (elem.value == "") {
        removeError(elem);
        createError(elem, "Введите ваш бюджет для видео!");
        result = false;
      }
    }

    if (elem.dataset.deadline == "true") {
      if (elem.value == "") {
        removeError(elem);
        createError(elem, "Введите дату для сдачи видео!");
        result = false;
      }
    }

    // if (elem.value == "") {
    //   removeError(elem);
    //   createError(elem, "Поле не заполнено!");
    //   result = false;
    // }
  }

  return result;
}
