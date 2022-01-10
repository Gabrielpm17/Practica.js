const d = document;

export function cuentaAtras(fecha, btnOn, btnOff, mensaje) {
  let insertador,
    $divRegresivo = d.getElementById("cuenta-regresiva");

  const countDownFuncion = () => {
    // -----CONSTANTES------
    const fechaActual = new Date().getTime(),
      fechaFinal = new Date(fecha).getTime(),
      uniSegundos = 1000,
      uniMinutos = uniSegundos * 60,
      uniHoras = uniMinutos * 60,
      uniDias = uniHoras * 24,
      diferenciaTiempo = fechaFinal - fechaActual;

    // -----TIEMPO----
    let segundos = Math.floor((diferenciaTiempo % uniMinutos) / uniSegundos),
      minutos = Math.floor((diferenciaTiempo % uniHoras) / uniMinutos),
      horas = Math.floor((diferenciaTiempo % uniDias) / uniHoras),
      dias = Math.floor(diferenciaTiempo / uniDias);

    if (Math.sign(diferenciaTiempo) === 1) {
      $divRegresivo.innerHTML = `<h3>${dias}:${horas}:${minutos}:${segundos}</h3>`;
    } else {
      $divRegresivo.innerHTML = `<h3>${mensaje}</h3>`;
    }
  };

  // -----EVENTO CLICK----
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnOn)) {
      insertador = setInterval(() => {
        countDownFuncion();
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnOff)) {
      clearInterval(insertador);
      $divRegresivo.innerHTML = `<h3>00:00:00:00</h3>`;
      d.querySelector(btnOn).removeAttribute("disabled");
    }
  });
}
