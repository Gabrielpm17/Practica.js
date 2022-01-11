import hamburgerMenu from "./menu_hamburguesa.js";
import { relojDigital, alarmaDigital } from "./reloj.js";
import { moveBall } from "./move.js";
import { cuentaAtras } from "./cuentaAtras.js";
import botonScroll from "./boton_scroll.js";
const d = document;

// -----EVENTOS ONCLICK----
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");

  relojDigital(".iniciar", ".detener");
  alarmaDigital(".on-alr", ".off-alr", "sources/Gallo.mp3");

  cuentaAtras(
    "2023,1,7,14:18:0",
    "#btn-iniciar",
    "#btn-terminar",
    "La cuenta ha terminado"
  );

  botonScroll(".scroll-up-btn");
});

// -----EVENTOS DEL TECLADO-----
d.addEventListener("keydown", (e) => {
  moveBall(e, ".ball", ".stage");
});
