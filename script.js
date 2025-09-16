const container = document.querySelector(".container");
for (let i = 1; i <= 256; i++) {
  let square = document.createElement("div");
  square.className = "square";
  square.textContent = "";
  container.appendChild(square);
}
const square = document.querySelector("div");
square.addEventListener("mousemove", function (e) {
  e.target.style.background = "lightblue";
});
