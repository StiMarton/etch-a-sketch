const grid = document.querySelector(".gridContainer");

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};

createGrid();

//HEI CECE :D