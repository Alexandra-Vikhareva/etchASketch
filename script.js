draw = document.querySelector('.draw');
console.log(draw);

for (let i = 0; i < 16; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        box.appendChild(cell);
    };
    draw.appendChild(box);
}