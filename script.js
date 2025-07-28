let container = document.querySelector("#container");

for(let i=0;i<16*16;i++){
    let square = document.createElement("div");
    square.classList.add("grid-square");
    container.appendChild(square);
}

function changeBg(event) {
    event.target.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let gSquares = document.querySelectorAll(".grid-square");
gSquares.forEach(square => {
    square.addEventListener("mouseover",changeBg);
})
