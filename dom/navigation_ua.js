const d = document;

export default function infoNavegador(id) {
  const informacion = navigator.userAgent,
    $id = d.getElementById(id);

  $id.innerHTML = `<h2>${informacion}</h2>`;

  const deEscritorio = {
    windows: () => informacion.match(/windows.nt/i),
  };

  $id.innerHTML += `<p>${deEscritorio.windows()}</p>`;
}
