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
    
    function sketch () {
        const cells = document.querySelectorAll('.cell');
        cells.forEach((cell) => {
            cell.addEventListener('mouseenter', function () {
                this.style.backgroundColor = 'black';
            });
        });
    }

    sketch();
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
    drawGrid(n);

    clear = document.querySelector('#clear');
    clear.addEventListener('click', () => {
        draw = document.querySelector('.draw');
        while (draw.firstChild) {
            draw.removeChild(draw.firstChild)
        };
        let n = askCellsNum();
        drawGrid(n);
});
}

etchAScetch();