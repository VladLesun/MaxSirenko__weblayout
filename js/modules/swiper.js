const heroSlider = document.querySelector(".slider-main");
const clientSlider = document.querySelector(".client-swiper");
const sliderNav = document.querySelector(".slider-nav");
const sliderNavItems = document.querySelectorAll(".slider-nav__item");
const sliderNavImg = document.querySelectorAll(".slider-nav__img");
const allVideo = document.querySelectorAll(".swiper-slide__video");

const heroSwiper = new Swiper(heroSlider, {
  slidesPerView: 1,
  allowTouchMove: false,
});

sliderNavItems.forEach((el, index) => {
  el.setAttribute("data-index", index);

  el.addEventListener("click", (item) => {
    const index = parseInt(item.currentTarget.dataset.index);

    for (let item of sliderNavItems) {
      item.classList.remove("item-focus");
    }
    el.classList.add("item-focus");

    for (let video of allVideo) {
      if (video.classList.contains("swiper-slide__video", "is-ready")) {
        video.classList.remove("is-ready");
      }
    }

    if (document.querySelector("iframe")) {
      document.querySelector("iframe").remove();
    }

    heroSwiper.slideTo(index);
  });
});

for (let img of sliderNavImg) {
  img.addEventListener("click", () => {
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  });
}

heroSlider.addEventListener("click", () => {
  document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
});

const clientSwiper = new Swiper(clientSlider, {
  speed: 500,
  loop: true,
  autoplay: true,
  cssEase: "ease",
  allowTouchMove: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },

    580: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    1440: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
