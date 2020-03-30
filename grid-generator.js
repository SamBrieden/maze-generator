const gridGenerator = (num) => {
    const grid = []
    for (let i = 0; i < num; i++) {
        const arr = []
        for (let j = 0; j < num; j++) {
            const newNode = {
                n: true,
                e: true,
                s: true,
                w: true,
                visited: false
            }
            arr.push(newNode)
        }
        grid.push(arr)
    }
    return grid
}