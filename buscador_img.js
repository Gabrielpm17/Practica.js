const d = document;

export default function buscadorImagenes(buscador, tarjetaHija, contenedor) {
  const $buscador = d.querySelector(buscador),
    $tarjetaHija = d.querySelectorAll(tarjetaHija),
    $imagenesContenedor = d.querySelector(contenedor);

  const encontrar = () => {
    $tarjetaHija.forEach((tarjeta) => {
      const texto = tarjeta.innerText;
      console.log($buscador.value);

      let i = 0;
      while (i !== -1) {
        i = texto.indexOf($buscador.value, i);
        if (i !== -1) {
          $imagenesContenedor.appendChild(tarjeta);
          i++;
          break;
        }
        if ($imagenesContenedor.contains(tarjeta)) {
          if (i === -1) {
            $imagenesContenedor.removeChild(tarjeta);
          }
        }
      }
    });
  };

  $buscador.addEventListener("keydown", (e) => {
    encontrar();
  });
}
