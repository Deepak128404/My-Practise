function optimizedSquare(fn){
    const cache = {}

    return function(...args) {
        
        const key = JSON.stringify(args)
        if (cache[key] !== undefined) {
            return cache[key]
        }
        const result = fn(...args)
        cache[key] = result
        return result
    }
}

function square(number){
    return number * number
}