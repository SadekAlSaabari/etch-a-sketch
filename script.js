const grid = document.querySelector(".grid");

grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(16, 40px)";
grid.style.gridTemplateRows = "repeat(16, 40px)";

for (let i=0 ; i<16; i++) {
    for (let j=0; j<16; j++) {
        const gridBox = document.createElement("div");
        gridBox.setAttribute("style", "border: solid 1px black; height: 40px; width: 40px");
        grid.appendChild(gridBox);
    

    gridBox.addEventListener ('mouseover', function() {
        gridBox.style.backgroundColor = getRandomColor();
    });

    }
};

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const reset = document.querySelector(".reset");

reset.addEventListener('click', function() {
    const gridBoxes = document.querySelectorAll("div");
    gridBoxes.forEach(function(box) {
    box.style.backgroundColor = 'white';
    });
});

const newGrid = document.querySelector(".newGrid");

newGrid.addEventListener('click', function() {
    let numero = parseInt(prompt("What would you like the new grid's width to be? Enter just a number"));

    grid.textContent = '';

    grid.style.display = "grid";    
    grid.style.gridTemplateColumns = `repeat(${numero}, 40px)`;
    grid.style.gridTemplateRows = `repeat(${numero}, 40px)`;

for (let i = 0 ; i < numero; i++) {
    for (let j = 0; j < numero; j++) {
        const gridBox = document.createElement("div");
        gridBox.setAttribute("style", "border: solid 1px black; height: 40px; width: 40px");
        grid.appendChild(gridBox);
    

    gridBox.addEventListener ('mouseover', function() {
        gridBox.style.backgroundColor = getRandomColor();
    });

    }
}


});

