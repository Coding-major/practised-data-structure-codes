function reOccur(array) {
    const hash = new Set();
    for (let i=0; i < array.length; i++) {
        if (hash.has(array[i])) {
            return array[i]
        }
        hash.add(array[i])
    }
    return "no reoccuring"
}

console.log(reOccur([1,2,3,2,4,5,6]))