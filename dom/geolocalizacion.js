const d = document,
  n = navigator;

export default function ubicacionActual(id) {
  const $div = d.getElementById(id),
    posicionGeografica = (pos) => {
      const posicion = pos.coords,
        latitud = posicion.latitude,
        longitud = posicion.longitude;

      $div.innerHTML = `<h3>Tu latitud es: ${latitud} </h3><h3>Tu longitud es: ${longitud} </h3>`;
      console.log(posicion);
    };
  const error = (err) => {
    console.log(`este es el error ${err}`);
  };
  n.geolocation.getCurrentPosition(posicionGeografica, error);
}
