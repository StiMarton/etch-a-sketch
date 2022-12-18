let grid = document.querySelector(".gridContainer");
const btnReset = document.getElementById('reset');
const btnRainbow = document.getElementById('rainbow');
const btnEraser = document.getElementById('eraser');
let number = 16;
let buttonClicked = false;
let randomColor = "";
let eraserEnabled = false;

reset.addEventListener("click", clearGrid)

eraser.addEventListener("click", function() {
    eraserEnabled = !eraserEnabled;
    if (eraserEnabled) {
        btnEraser.innerHTML = "Eraser ON";
    } else if (!eraserEnabled) {
        btnEraser.innerHTML = "Eraser OFF";
    }
})

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
        grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;
        div.classList.add("square");
        grid.appendChild(div); 
        div.addEventListener('mouseover', mouseOver) 
            function mouseOver() {
                if (buttonClicked && !eraserEnabled) {
                    randomColor = Math.floor(Math.random()*16777215).toString(16);
                    div.style.backgroundColor = "#" + randomColor;
                    div.style.transition = "0.2s";
                } else if (!buttonClicked && !eraserEnabled) {
                    div.style.backgroundColor = "black";
                    div.style.transition = "0.2s";
                } else if (eraserEnabled) {
                    div.style.backgroundColor = "#d9d9d9";
                    div.style.transition = "0s";
                }
            } 
    }
}

function clearGrid() {
    let arrayGrid = [...document.querySelectorAll(".square")]
    arrayGrid.forEach(div=>div.style.backgroundColor = "#d9d9d9");
}

function changeGrid() {
    clearGrid();
    number = prompt("Please enter a number from 2 to 100 (16 default)");
    if (number > 1 && number <= 100) { 
        createGrid(number);
    } else {
        alert("Please enter a number from 1 to 100");
    }
}

createGrid();

//HEI CECE :D