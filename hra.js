import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = "circle"

const playerChange = (event) => {
    event.target.disabled = true;
    if (currentPlayer === "circle") {
        event.target.classList.add("board__field--circle");
        currentPlayer = "cross";
        document.getElementById("current__player").src = "cross.svg";
    } else {
        event.target.classList.add("board__field--cross");
        currentPlayer = "circle";
        document.getElementById("current__player").src = "circle.svg";
    }
};


const buttons = document.querySelectorAll("button")
buttons.forEach((event) => {
    addEventListener("click",playerChange);
  });


document.querySelector(".restart").addEventListener("click",event => {
    const useRestart = confirm("Ukončit hru?");
    if (useRestart === false) {
        event.preventDefault();
    }
});

const herniPole = [...buttons].map((button) => {
  if (button.classList.contains("board__field--circle")) {
    return 'o';
  } else if (button.classList.contains("board__field--cross")) {
    return 'x';
  } else {
    return '_';
  }
});

const vitez = findWinner(herniPole);
    if (vitez === 'o' || vitez === 'x') {
      setTimeout(() => {
        alert(`Vyhrál hráč se symbolem ${vitez} !`);
        location.reload();
      }, 80);
    } else if (vitez === 'tie') {
      setTimeout(() => {
        alert('Hra skončila remízou!');
        location.reload();
      }, 80);
    }
  