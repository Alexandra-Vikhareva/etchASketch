function drawGrid (n = 16) {

    draw = document.querySelector('.draw');

    for (let i = 0; i < n; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        for (let j = 0; j < n; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            box.appendChild(cell);
        };
        draw.appendChild(box);
    };
}    

function sketch () {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', function () {
            this.style.backgroundColor = 'black';
        });
    });
}

function rainbowSketch() {
        
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', function () {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = "#" + randomColor;
        });
    });
}

function progressiveSketch() {

    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseenter', function () {
            if (this.style.opacity < 1) {
                let buff = Number(this.style.opacity) + 0.1;
                this.style.opacity = buff; 
            }
        });
    });
}

function askCellsNum() {

    let cellsNum;
    do {
        cellsNum = prompt('Enter the number of cells on one side (less than 100):');
    } while (!Number(cellsNum) || cellsNum % 1 != 0 || cellsNum <= 0 || cellsNum > 100);

    return Number(cellsNum)
}

function etchAScetch() {

    let n = askCellsNum();
    const clear = document.querySelector('#clear');
    const rainbow = document.querySelector('#rainbow');
    const normal = document.querySelector('#normal');
    const progressive = document.querySelector('#progressive');

    rainbow.addEventListener('click', () => {
        rainbowSketch();
    })

    normal.addEventListener('click', () => {
        sketch();
    })

    progressive.addEventListener('click', () => {
        progressiveSketch();
    })
    
    drawGrid(n);
    sketch();

    clear.addEventListener('click', () => {
        draw = document.querySelector('.draw');
        while (draw.firstChild) {
            draw.removeChild(draw.firstChild)
        };
        let n = askCellsNum();
        drawGrid(n);
        sketch();

});
}

etchAScetch();