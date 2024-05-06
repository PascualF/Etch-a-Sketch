const container = document.querySelector(".container");

// we need to make row and columns for the grid 16x16
// that can be achieved with nested for loops

const grids = 16;
let class_div_row = 1;
let class_div_col = 1;
const COLORS = ['red', 'blue', 'pink', 'green']
const div_row = document.createElement("div");

// This is the section to create a button, prepend => to add the element at the beginning f the body, pls all diff styles.
const btn = document.createElement("button");
btn.innerText = 'Press me to choose grid size';

document.body.prepend(btn);


// Function to create the grid (Columns and rows).
function createGrid(col , row){
    container.replaceChildren();
    for (let i = 0; i < col; i++) {
        const div_col = document.createElement("div");
        div_col.classList.add(`div-grid-col-${class_div_col}`);
        console.log(div_col.className);
        class_div_col++;
        container.appendChild(div_col);
        for (let j = 0; j < row; j++){
            const div_row = document.createElement("div");
            div_row.classList.add(`div-grid-row-${class_div_row}`)
            console.log(div_row.className);
            div_row.style.backgroundColor = "red";
            div_row.style.border = `1px solid blue`;
            div_row.style.height = "50px";
            div_row.style.width = div_row.style.height;
            // margin off to have sqares all together
            // div_row.style.margin = "5px 5px 5px 5px";
            div_row.addEventListener('mouseover', function(ev){ev.target.style.backgroundColor = 'blue'});
            div_row.addEventListener('mouseleave', function(ev){ev.target.style.backgroundColor = 'red'});
            class_div_row++;
            div_col.appendChild(div_row);
        };
    };
};

// function to make you choose the grid you want. Prompt window. 
function chooseRows(){
    rows = window.prompt("How many rows would you like?");
    console.log(rows);
    return rows
}

function chooseColumns(){
    columns = window.prompt("How many columns would you like?");
    console.log(columns);
    return columns;
}


// Just start the grid function - includes the addEventListener.
// Add the addEventListener when the button is pressed.
btn.addEventListener(('click'), () => createGrid(chooseColumns(), chooseRows()));
