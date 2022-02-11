const d = document;

export default function autoplayVideo() {
  const $video = d.querySelector(".elemento-video[data-smart-video]");

  const reproduceVideo = (entrada) => {
    // OBJETO CON VALORES
    console.log(entrada);
    // ME ARROOJA UNDEFINDED
    console.log(entrada.isIntersecting);

    if (entrada) {
      console.log(entrada.isIntersecting);
    } else {
      console.log(entrada);
      console.log(entrada.isIntersecting);
    }
    window.addEventListener("visibilitychange", (e) =>
      d.visibilityState === "visible"
        ? entrada.target.play()
        : entrada.target.pause()
    );
  };

  const observatorio = new IntersectionObserver(reproduceVideo, {
    threshold: 0.5,
  });

  observatorio.observe($video);
}
