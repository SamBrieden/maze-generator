const getModifier = (key) => key === 'n' ? [0, 1] : key === 's' ? [0, -1] : key === 'e' ? [1, 0] : [-1, 0]
const getOpposite = (key) => key === 'n' ? 's' : key === 's' ? 'n' : key === 'e' ? 'w' : 'e'

const generateMaze = (gridStart, [xStart, yStart]) => {
    nextNode(xStart, yStart, gridStart)
    return gridStart
}

const nextNode = (x, y, maze) => {
    const node = maze[y][x]
    node.visited = true
    randomizeDirection().forEach(direction => {
        const [xMod, yMod] = getModifier(direction)
        if (
            maze[y + yMod] &&
            maze[y + yMod][x + xMod] &&
            !maze[y + yMod][x + xMod].visited
        ) {
            node[direction] = false
            maze[y + yMod][x + xMod][getOpposite(direction)] = false
            nextNode(x + xMod, y + yMod, maze)
        }
    })
    return false
}