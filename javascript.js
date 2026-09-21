const container = document.querySelector("#container");
function createGrid(size){
    container.innerHTML = "";
    const totalSquares = size * size;
    const squareSize = 960 / size;

for (let i = 0; i < totalSquares; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener("mouseenter", () => {
        square.classList.add("coloured")
    });
    container.appendChild(square);
}
}

createGrid(16);

const resetButton = document.querySelector("#reset-btn");
resetButton.addEventListener("click", () => {
    let userInput = prompt("Enter the number of squares per side (max 100): ")

let size = parseInt(userInput);
if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    createGrid(size);
});