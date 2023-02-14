//fucntion for loop to run create element 64 times if no user input?

function etchGrid (size) {
        let squares = board.querySelectorAll("div");
        squares.forEach((div) => div.remove());
        board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for(let i = 0; i < amount; i ++){
        const pix = document.createElement("div");
        pix.style.backgroundColor = "blue";
        document.getElementById("board").appendChild(pix);
    }

}
let size = document.getElementById("userinput").value;
etchGrid(size);

//event listeners for hovering mouse, try class color of white, then when hovered change class to black
