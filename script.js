let container = document.querySelector("#container");

function generateGrid(size) {
  container.innerHTML= "";
  for(let i=0;i<size*size;i++){
    let square = document.createElement("div");
    square.classList.add("grid-square");
    container.appendChild(square);
    let squaresize = 640/size;
    square.style.width = `${squaresize}px`;
    square.style.height = `${squaresize}px`;
  }

  let gSquares = document.querySelectorAll(".grid-square");
    gSquares.forEach(square => {
    square.addEventListener("mouseover",changeBg);
  })
}

generateGrid(16);

let btn = document.querySelector("#btn");
btn.addEventListener("click", ()=>{
  let num = prompt("Please gimme no of squares per side :), and please limit it to 100");
  num =parseInt(num);
  if(!isNaN(num) && num>0 && num<=100){
    generateGrid(num);
  }
  else{
    alert("Please enter between 1 and 100 :))");
  }
})

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