const container = document.querySelector(".container");

function makeGrid(n) {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  const canvasWidth = container.offsetWidth;
  for (let i = 1; i <= n * n; i++) {
    let square = document.createElement("div");
    square.className = "square";
    square.textContent = "";
    square.style.width = `${canvasWidth / n}px`;
    square.style.height = `${canvasWidth / n}px`;
    container.appendChild(square);
  }
}

makeGrid(16); //default size

const square = document.querySelector(".container");
square.addEventListener("mousemove", function (e) {
  e.target.style.background = "lightblue";
});
const sizeBtn = document.querySelector(".size");
sizeBtn.addEventListener("click", function (e) {
  let playerSize = prompt("Choose canvas's size between 1 and 100");
  while (playerSize < 1 || playerSize > 100) {
    playerSize = prompt("Size is out of range, please choose again!");
  }
  makeGrid(playerSize);
});
