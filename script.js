let grid = document.querySelector(".gridContainer");
const btnReset = document.getElementById('reset');
const btnRainbow = document.getElementById('rainbow');
let number = 16;
let buttonClicked = false;
let randomColor = "";


reset.addEventListener("click", clearGrid)

rainbow.addEventListener("click", function() {
    buttonClicked = !buttonClicked;
    if (buttonClicked) {
        btnRainbow.innerHTML = "Black";
    } else if (!buttonClicked) {
        btnRainbow.innerHTML = "Rainbow";
    }
});

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
                if (buttonClicked) {
                    randomColor =
                    Math.floor(Math.random()*16777215).toString(16);
                    div.style.backgroundColor = "#" + randomColor;
                } else if (!buttonClicked) {
                    div.style.backgroundColor = "black";
                }
            } 
    }
}

function clearGrid() {
    let arrayGrid = [...document.querySelectorAll("div")]
    arrayGrid.forEach(div=>div.style.backgroundColor = "#d9d9d9");
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