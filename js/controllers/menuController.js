export function menuController(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);
  const body = document.querySelector(`${params.bodyClass}`);
  const menuLinks = document.querySelectorAll(`.${params.menuLinksClass}`);

  menu.addEventListener("animationend", function () {
    if (this.classList.contains(params.hiddenClass)) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
    }
  });

  btn.addEventListener("click", function () {
    this.classList.toggle(params.activeClass);
    if (
      !menu.classList.contains(params.activeClass) &&
      !menu.classList.contains(params.hiddenClass)
    ) {
      menu.classList.add(params.activeClass);
      body.classList.add(params.bodyHidden);
    } else {
      menu.classList.add(params.hiddenClass);
      body.classList.remove(params.bodyHidden);
    }
  });

  menuLinks.forEach(function (el) {
    el.addEventListener("click", function () {
      btn.classList.remove(params.activeClass);
      menu.classList.remove(params.activeClass);
      body.classList.remove(params.bodyHidden);
    });
  });
}
