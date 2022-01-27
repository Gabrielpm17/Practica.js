const d = document,
  w = window;

export function contenidoResponsivo(
  id,
  mq,
  contenidoEscritorio,
  contenidoMobil
) {
  const ancho = w.matchMedia(mq);

  const insertarContenido = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = contenidoEscritorio;
    } else {
      d.getElementById(id).innerHTML = contenidoMobil;
    }
  };

  ancho.addEventListener("change", insertarContenido);
  insertarContenido(ancho);
}
