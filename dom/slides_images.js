// -----Mi codigo ------
const d = document;

export default function slidesMove(image1, image2, btnRigth, btnLeft) {
  const $image1 = d.querySelector(image1),
    $image2 = d.querySelector(image2);

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnRigth)) {
      $image1.classList.add("hidden-btn");
      $image2.classList.remove("hidden-btn");
    }
    if (e.target.matches(btnLeft)) {
      $image1.classList.add("hidden-left");
    }
  });
}

// ------ Codigo del profesor jon -----

function slider() {
  const $nextBtn = d.querySelector("la-clase"),
    $prevBtn = d.querySelector("la-clase"),
    $slides = d.querySelectorAll("ele-clases");

  let i = 0;

  d.addEventListener("click", (e) => {
    // ---Diapositiva previa
    if (e.target === $prevBtn) {
      $slides[i].classList.remove("la-clase");

      i--;

      if (i < 0) {
        i = $slides.length - 1;
      }

      $slides[i].classList.add("la-clase");
    }

    // ---Diapositiva Siguiente
    if (e.target === $nextBtn) {
      $slides[i].classList.remove("la-clase");

      i++;

      if (i >= $slides.length) {
        i = 0;
      }

      $slides[i].classList.add("la-clase");
    }
  });
}
