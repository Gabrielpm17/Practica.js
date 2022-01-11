const d = document,
  w = window;

export default function botonScroll(scrollBtn) {
  const $scrollBtn = d.querySelector(scrollBtn);

  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset;
    if (scrollTop > 600) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches(scrollBtn)) {
      w.scrollTo({ behavior: "smooth", top: 0 });
    }
  });
}
