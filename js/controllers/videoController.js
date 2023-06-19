export function videoController(item) {
  const videos = document.querySelectorAll(item);

  for (let video of videos) {
    video.addEventListener("click", () => {
      if (video.classList.contains("is-ready")) {
        return;
      }
      video.classList.add("is-ready");

      let dataVideo = video.dataset.video;

      video.insertAdjacentHTML(
        "afterbegin",
        `<iframe class="video" src="${dataVideo}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
      );
    });
  }
}
