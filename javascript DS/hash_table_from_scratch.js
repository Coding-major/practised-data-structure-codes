class newHashTable {
    constructor(size) {
        this.hashTable = new Array(size);
        console.log(this.hashTable)
    }

    _hash(key) {
        let hash = 0;
        for (let i=0; i < key.length; i++) {
            hash += hash + (key.charCodeAt(i) * i);
            i++;
        }
        hash = hash % this.hashTable.length
        return hash
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.hashTable[index]) {
            const newArray = [];
            this.hashTable[index] = newArray;
            this.hashTable[index].push([key, value]);
        
        } else {
            this.hashTable[index].push([key, value])
        }
        return this.hashTable
    }

    get(key) {
        const index2 = this._hash(key)
        const currentIndex = this.hashTable[index2]
        if (currentIndex.length >= 1 ) {
            for (let i=0; i < currentIndex.length; i++) {
                if (currentIndex[i][0] === key) {
                    return currentIndex[i][1]
                }
            }
            return "no specified value"
        }
        return "empty space"
    }

    key() {
        
    }
} 

const tryCheck = new newHashTable(50);
console.log(tryCheck)
tryCheck.set('grapes', 10000)
tryCheck.get('grapes')
tryCheck.set('apples', 9)
tryCheck.get('apples')