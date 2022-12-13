let grid = document.querySelector(".gridContainer");
const btnReset = document.getElementById('reset');
let number = 16;

reset.addEventListener("click", clearGrid)

// Default Grid
function createGrid() {
    for (let i = 0; i < number*number; i++) {
        let div = document.createElement("div");
        grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
        grid.style.gridTemplateTows = `repeat(${number}, 1fr)`;
        div.classList.add("square");
        grid.appendChild(div); 
        div.addEventListener('mouseover', mouseOver) 
            function mouseOver() {
            div.classList.add("hover");
        } 
    }
};

function clearGrid() {
    let arrayGrid = [...document.querySelectorAll("div")]
    arrayGrid.forEach(div=>div.classList.remove("hover"));
}

function changeGrid() {
    clearGrid();
    number = prompt("Please enter a number from 1 to 100");
    if (number > 1 && number <= 100) { 
        createGrid(number);
    } else {
        alert("Please enter a number from 1 to 100");
    }
}

createGrid();

//HEI CECE :D