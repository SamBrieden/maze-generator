const randomizeDirection = () => {
    const directions = ['n', 'e', 's', 'w']
    const randomized = directions.reduce((acc, cur) => {
        acc.push({
            direction: cur,
            val: Math.floor(Math.random() * 999)
        })
        return acc
    }, [])
    return randomized.sort((a,b) => a.val - b.val).reduce((acc, cur) => {
        acc.push(cur.direction)
        return acc
    }, [])
}
