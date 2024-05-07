const cont = document.querySelector(".cont");

let gridSize = 16;
// we need to make row and columns for the grid 16x16
// that can be achieved with nested for loops

const div_row = document.createElement("div");

// This is the section to create a button, prepend => to add the element at the beginning f the body, pls all diff styles.
const btn = document.createElement("button");
btn.style.marginBottom = "10px";
btn.innerText = 'Press me to choose grid size';
document.body.prepend(btn);

// Add the addEventListener when the button is pressed.
btn.addEventListener(('click'), () => {
    let resHuman = prompt("Choose the size of the grid p to 100");
    if (resHuman > 100 || resHuman < 1 || isNaN(resHuman)){
        alert("Insert a valid number between 1 and 100!");
    } else {
        cont.innerHTML = "";
        createGrid(resHuman);
    }
});

createGrid(gridSize);

// Function to create the grid (Columns and rows).
function createGrid(gridSize){
    let lengthDiv = (400/gridSize).toString() + "px";

    for (let i = 0; i < gridSize; i++) {
        const div_col = document.createElement("div");
        div_col.classList.add(`div-grid`);
        //console.log(div_col.className);
        cont.appendChild(div_col);
        for (let j = 0; j < gridSize; j++){
            const div_row = document.createElement("div");
            div_row.classList.add(`div-grid`)
            //console.log(div_row.className);
            div_row.style.backgroundColor = "red";
            div_row.style.border = "`1px solid blue`;"
            div_row.style.height = lengthDiv;
            div_row.style.width = lengthDiv;
            div_row.style.padding = "0px";
            div_row.style.margin = "0px";
            div_row.addEventListener('mouseover', function(ev){ev.target.style.backgroundColor = 'blue'});
            //div_row.addEventListener('mouseleave', function(ev){ev.target.style.backgroundColor = 'red'});
            cont.appendChild(div_row);
        };
    };
};
