import hamburgerMenu from "./menu_hamburguesa.js";
import { relojDigital, alarmaDigital } from "./reloj.js";
import { moveBall } from "./move.js";
import { cuentaAtras } from "./cuentaAtras.js";
import botonScroll from "./boton_scroll.js";
import modoOscuro from "./tema_oscuro.js";
import { contenidoResponsivo } from "./enlace_responsivo.js";
import testerResponsivo from "./tester-responsivo.js";
import estadoWifi from "./estado.js";
import ubicacionActual from "./geolocalizacion.js";
import buscadorImagenes from "../buscador_img.js";
import lottery from "./sorteo_digital.js";
import slidesMove from "./slides_images.js";
import scrollSpy from "./intersection_observer.js";
import autoplayVideo from "./video_autoplay.js";

const d = document,
  w = window;

// -----EVENTO A CARGA DEL DOCUENT----
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

  contenidoResponsivo(
    "mapa",
    "(min-width: 1024px)",
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21122.066800380035!2d-87.07200431681375!3d20.6333739736877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e43481d3e89e7%3A0x70e34c055dfa5e45!2sLa%20Quinta%20Avenida!5e0!3m2!1ses!2smx!4v1643211709562!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
    `<a href="https://g.page/LaQuintaAvenidamx?share">Ver mapa</a>`
  );

  testerResponsivo("formulario");

  ubicacionActual("id-ubicacion");
  buscadorImagenes(".buscador-img", ".tarjetas", ".contenedor-tarjetas");

  lottery(["gabriel", "vania", "ana"], ".contain-participants", ".btn-winner");

  slidesMove(".image1", ".image2", ".right-btn", "left-btn");
  scrollSpy();
  autoplayVideo();
});

// -----EVENTOS DEL TECLADO-----
d.addEventListener("keydown", (e) => {
  moveBall(e, ".ball", ".stage");
});

w.addEventListener("online", (e) => {
  estadoWifi(".estado-wifi");
});
w.addEventListener("offline", (e) => {
  estadoWifi(".estado-wifi");
});

modoOscuro(".btn-dark", "dark-mode");

// function webCam() {
//   const $video = d.getElementById("camara-web");
//   const videoWeb = navigator.mediaDevices
//     .getUserMedia({ video: true })
//     .then((media) => {
//       $video.srcObject = media;
//       $video.play();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
