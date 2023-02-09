//title element to be created with h1 "Etch-a-Sketch"


//upper half of webpage with instructions
const instructions = document.createElement("div");
document.body.append(instructions);
instructions.id = "instructions";
//need h3 elements with instructions, ids be steps 1 and so on
const step1 = document.createElement("h3");
step1.textContent = "Step 1. Etch-a-Sketch: drag mouse over the fields and it will change color";
instructions.appendChild(step1);

const step2 = document.createElement("h3");
step2.textContent = "Step 2. When changing the size of the field keep below 100 for computer performance";
instructions.appendChild(step2);


//container for box and board to align side by side
const container = document.createElement("div");
document.body.append(container);
container.id = "container";

//button top screen asking for grid size, once entered the existing grid should be removed and a new grid should be generated in same space
//research button tags and prompts, 
const controlBox = document.createElement("div");
controlBox.style.width = "200px";
controlBox.style.height = "250px";
container.append(controlBox);
controlBox.style.border = "3px solid black";

//inside box need text field saying description, input field with size of grid, and button to refresh and run function
const desc = document.createElement("h3");
desc.textContent = "Size of board";
controlBox.appendChild(desc);
desc.style.textAlign = "center";

const userInput = document.createElement("input");
controlBox.appendChild(userInput);
userInput.id = "userInput";
userInput.setAttribute("type", "number");
userInput.defaultValue = "64";
//gets value of input field  size = document.getElementById("userInput").value; make requirement for value to be no more than 100
const size = document.getElementById("userInput").value;

const refreshBtn = document.createElement("button");
refreshBtn.id = "refreshBtn";
refreshBtn.textContent = "Refresh";
controlBox.appendChild(refreshBtn);
refreshBtn.addEventListener("click", etchGrid());

//webpage must load with a 16x16 grid of square divs, put inside a container div
const board = document.createElement("div");
container.append(board);
board.id = "board";

//fucntion for loop to run create element 64 times if no user input?
function etchGrid (size) {
    for(i = 0; i < size; i ++){
        const pix = document.createElement("div");
        pix.className = "pixColor";
        board.appendChild(pix);
    }

}

//event listeners for hovering mouse, try class color of white, then when hovered change class to black
document.getElementsByClassName("pixColor").addEventListener("mouseover", pixFill());
function pixFill(){
    document.getElementsByClassName("pixcolor")
}