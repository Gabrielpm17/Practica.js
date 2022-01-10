import hamburgerMenu from "./menu_hamburguesa.js";
import { relojDigital, alarmaDigital } from "./reloj.js";
import { moveBall } from "./move.js";
import { cuentaAtras } from "./cuentaAtras.js";
const d = document;

// -----EVENTOS ONCLICK----
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");

  relojDigital(".iniciar", ".detener");
  alarmaDigital(".on-alr", ".off-alr", "sources/Gallo.mp3");

  cuentaAtras(
    "2022,1,7,14:18:0",
    "#btn-iniciar",
    "#btn-terminar",
    "La cuenta ha terminado"
  );
});

// -----EVENTOS DEL TECLADO-----
d.addEventListener("keydown", (e) => {
  moveBall(e, ".ball", ".stage");
});

function scrollBoton() {
  const scrollDocumento = d.documentElement.scrollTop,
    $btnUp = d.querySelector(".btn-up");

  console.log(scrollDocumento);
  if (scrollDocumento > 530) {
    $btnUp.classList.add("activar");
  } else if (scrollDocumento < 530) {
    $btnUp.classList.remove("activar");
  }
}

// -----EVENTOS DE SCROLL-----
d.addEventListener("scroll", (e) => {
  scrollBoton();
});
