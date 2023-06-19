const heroSwiper = document.querySelector(".slider-main");
const sliderNav = document.querySelector(".slider-nav");
const sliderNavItems = document.querySelectorAll(".slider-nav__item");
const allVideo = document.querySelectorAll(".swiper-slide__video");

const swiper = new Swiper(heroSwiper, {
  slidesPerView: 1,
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

    swiper.slideTo(index);
  });
});
