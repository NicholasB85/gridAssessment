const offsets = {
    above: [-1, +0],
    right: [+0, +1],
    down: [+1, 0],
    left: [0, -1],
}

const grid1 = new Grid(15, 15, 20, 20, document.getElementById("grids"), offsets);
// const grid2 = new Grid(1, 2, 15, 15, document.getElementById("grid2"));

// for (let i = 1; i <= 5; i++) {
//     const gridSize = 5 * i;
//     const cellSize = 6 * i;
//     new Grid(gridSize, gridSize, cellSize, cellSize, document.getElementById("grids"));
// }
