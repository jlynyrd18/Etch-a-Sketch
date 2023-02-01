//webpage must load with a 16x16 grid of square divs, put inside a container div
const container = document.createElement("div");
container.style.width = "600px";
container.style.height = "400px";
body.append(container);

//fucntion for loop to run create element 64 times if no user input?
const size = 0;
function etch_grid (size) {
    if (size === 0) {
        for (let i = 0; i < 64; i++) {
            const gridDefault = document.createElement("div");
        }
        container.appendChild(gridDefault);
    }else if (size !== 0) {
        for (let i = 0; i < size; i++) {
            const gridInput = document.createElement("div");
        }
    }   container.appendChild(gridInput);
}

//event listeners for hovering mouse, try class color of white, then when hovered change class to black


//button top screen asking for grid size, once entered the existing grid should be removed and a new grid should be generated in same space
//research button tags and prompts, 