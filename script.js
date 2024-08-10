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
            cell.addEventListener('mouseenter', () => {
                cell.classList.add('black');
            });
        });
    };

    sketch();
}

drawGrid();