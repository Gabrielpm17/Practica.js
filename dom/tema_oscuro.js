const d = document,
  ls = localStorage;

export default function modoOscuro(btnDark, classDark) {
  const $btnDark = d.querySelector(btnDark),
    $darkElements = d.querySelectorAll("[data-dark]");

  const moon = "🌑",
    sun = "☀️",
    darkMode = () => {
      $darkElements.forEach((el) => el.classList.add(classDark));
      $btnDark.textContent = sun;
      ls.setItem("tema", "dark");
    },
    lightMode = () => {
      $darkElements.forEach((el) => el.classList.remove(classDark));
      $btnDark.textContent = moon;
      ls.setItem("tema", "light");
    };

  // --EVENTO EN AL DOCUMENTO---
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnDark)) {
      if ($btnDark.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("tema") === null) ls.setItem("tema", "light");

    if (ls.getItem("tema") === "light") lightMode();

    if (ls.getItem("tema") === "dark") darkMode();
  });
}

// if ($btnDark.textContent === moon) {
//   $darkElements.forEach((el) => el.classList.add(classDark));
//   $btnDark.textContent = sun;
// } else {
//   $darkElements.forEach((el) => el.classList.remove(classDark));
//   $btnDark.textContent = moon;
// }
