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


document.querySelector("button:nth-child(1)").addEventListener("click",playerChange);
document.querySelector("button:nth-child(2)").addEventListener("click",playerChange);
document.querySelector("button:nth-child(3)").addEventListener("click",playerChange);
document.querySelector("button:nth-child(4)").addEventListener("click",playerChange);
document.querySelector("button:nth-child(5)").addEventListener("click",playerChange);
document.querySelector("button:nth-child(6)").addEventListener("click",playerChange);
document.querySelector("button:nth-child(7)").addEventListener("click",playerChange);
document.querySelector("button:nth-child(8)").addEventListener("click",playerChange);
document.querySelector("button:nth-child(9)").addEventListener("click",playerChange);
document.querySelector("button:nth-child(10)").addEventListener("click",playerChange);

document.querySelector(".restart").addEventListener("click",event => {
    const useRestart = confirm("Ukončit hru?");
    if (useRestart === false) {
        event.preventDefault();
    }
});