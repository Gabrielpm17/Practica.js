const d = document;

export default function lottery(array, container, btnWinner) {
  const $containerParticipants = d.querySelector(container);

  // *****Creando lista en el DOM*****
  for (let i = 0; i < array.length; i++) {
    const $li = d.createElement("li");
    $li.textContent = array[i];
    $containerParticipants.appendChild($li);
  }

  // *****Funcion generadora del ganador*****
  const generateWinner = () => {
    let winner = "",
      i = 0;
    const posiciones = array.length;

    while (winner === "") {
      i = Math.floor(Math.random() * posiciones);
      winner = array[i];
    }
    return console.log(winner);
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnWinner)) {
      generateWinner();
    }
  });
}
