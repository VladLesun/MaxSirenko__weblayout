import { formController } from "./controllers/formController.js";
import { menuController } from "./controllers/menuController.js";
import { videoController } from "./controllers/videoController.js";

function init() {
  menuController({
    btnClass: "burger",
    menuClass: "menu",
    bodyClass: "body",
    menuLinksClass: "menu__link",
    activeClass: "is-opened",
    hiddenClass: "is-closed",
    bodyHidden: "is-hidden",
  });

  videoController(".portfolio__video");
  videoController(".swiper-slide__video");
  formController();
}

init();
