const d = document;
let x = 0,
  y = 0;
export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    $ballLimits = $ball.getBoundingClientRect(),
    $stageLimits = $stage.getBoundingClientRect();

  switch (e.keyCode) {
    case 39:
      if ($ballLimits.right < $stageLimits.right) {
        x++;
      } else {
        alert(`Haz chocado con el borde derecho `);
      }
      break;
    case 37:
      if ($ballLimits.left > $stageLimits.left) {
        x--;
      } else {
        alert(`Haz chocado con el borde izquierdo`);
      }
      break;
    case 40:
      if ($ballLimits.bottom < $stageLimits.bottom) {
        e.preventDefault();
        y++;
      } else {
        alert(`Haz chocado con el borde inferior`);
      }
      break;
    case 38:
      if ($ballLimits.top > $stageLimits.top) {
        e.preventDefault();
        y--;
      } else {
        alert(`Haz chocado con el borde superior`);
      }
      break;
  }
  $ball.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
}
