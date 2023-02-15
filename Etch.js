//fucntion for loop to run create element 16 times if no user input?

function etchGrid (size) {
        let board = document.querySelector("#board");
        let squares = board.querySelectorAll("div");
        squares.forEach((div) => div.remove());
        board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for(let i = 0; i < amount; i ++){
        let square = document.createElement("div");
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        })
        square.style.backgroundColor = "white";
        document.getElementById("board").appendChild(square);
    }
}

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        etchGrid(input);
    }else {
        console.log("outside deviation");
    }
}
etchGrid(16);

//event listeners for hovering mouse, try class color of white, then when hovered change class to black
