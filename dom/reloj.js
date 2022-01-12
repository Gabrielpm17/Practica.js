const d = document;

export function relojDigital(iniciarBtn, detenerBtn) {
  const $reloj = d.getElementById("reloj");
  let tempo;

  function tiempoActual() {
    let tiempoReal = new Date().toLocaleTimeString();
    $reloj.innerHTML = `<h3> ${tiempoReal} </h3>`;
    console.log(tiempoReal);
  }

  d.addEventListener("click", (e) => {
    if (e.target.matches(iniciarBtn)) {
      tempo = setInterval(() => {
        tiempoActual();
      }, 1000);
      d.querySelector(iniciarBtn).setAttribute("disabled", "true");
    }

    if (e.target.matches(detenerBtn)) {
      clearInterval(tempo);
      $reloj.innerHTML = "";
      d.querySelector(iniciarBtn).removeAttribute("disabled");
    }
  });
}
export function alarmaDigital(onBtn, offBtn, song) {
  let alarmTempo;
  const $alarma = d.createElement("audio");
  $alarma.loop = true;
  $alarma.src = song;

  d.addEventListener("click", (e) => {
    if (e.target.matches(onBtn)) {
      alarmTempo = setTimeout(() => {
        alert("ejecuntando alarma");
        $alarma.play();
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(offBtn)) {
      clearTimeout(alarmTempo);
      $alarma.pause();
      $alarma.currentTime = 0;
      d.querySelector(onBtn).disabled = false;
    }
  });
}
