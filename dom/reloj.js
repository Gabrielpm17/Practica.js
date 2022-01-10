const d = document;
export function relojDigital(iniciarBtn, detenerBtn) {
  if (typeof iniciarBtn !== "string") alert(`El parametro deber ser una clase`);

  // const d = document,
  const $reloj = d.getElementById("reloj"),
    tiempoActual = () => {
      let tiempo = new Date(),
        hr = tiempo.getHours(),
        min = tiempo.getMinutes(),
        sec = tiempo.getSeconds();

      $reloj.innerHTML = `${hr}:${min}:${sec}`;

      setInterval(() => {
        tiempoActual();
      }, 1000);
    };

  tiempoActual();

  d.addEventListener("click", (e) => {
    if (e.target.matches(iniciarBtn)) {
      $reloj.classList.add("inicio");
      d.querySelector(iniciarBtn).setAttribute("disabled", "true");
      alert("iniciando reloj");
    }

    if (e.target.matches(detenerBtn)) {
      $reloj.classList.remove("inicio");
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
