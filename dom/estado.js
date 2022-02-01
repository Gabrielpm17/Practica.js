const d = document;

const $div = d.createElement("div");
export default function estadoWifi(clase) {
  const $div = d.querySelector(clase);
  let internet = navigator.onLine;

  if (internet) {
    $div.classList.remove("hidden");
    $div.style.backgroundColor = `green`;
    $div.innerHTML = `<h3>Conexion establecida</h3>`;
    setInterval(() => {
      $div.classList.add("hidden");
      $div.innerHTML = "";
    }, 3000);

    console.log("conexion establecida");
  } else {
    $div.classList.remove("hidden");
    $div.style.backgroundColor = `red`;
    $div.innerHTML = `<h3>Conexion perdida</h3>`;
    setInterval(() => {
      $div.classList.add("hidden");
      $div.innerHTML = "";
    }, 3000);
  }
}
