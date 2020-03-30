const gridSize = 5
const root = document.getElementById('root')
const grid = generateMaze(gridGenerator(gridSize), [0, 0])
root.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
root.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
grid.forEach(row => row.forEach(cell => {
    const box = document.createElement('div')
    box.className = 'box'
    if (cell.n) box.style.borderTop = 'solid 2pt white'
    if (cell.s) box.style.borderBottom = 'solid 2pt white'
    if (cell.e) box.style.borderRight = 'solid 2pt white'
    if (cell.w) box.style.borderLeft = 'solid 2pt white'
    root.appendChild(box)
}))