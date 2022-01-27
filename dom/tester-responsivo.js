const d = document,
  w = window;

export default function testerReponsivo(form) {
  const $form = d.getElementById(form);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      tester = w.open(
        $form.enlace.value,
        "ventana abierta",
        `width =${$form.ancho.value} height = ${$form.alto.value}`
      );
    }

    if (e.target === $form.cerrar) {
      tester.close();
    }
  });
}
