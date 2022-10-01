class myArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    
    get(index) {
        return this.data[index]
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length
    }

    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const itemDeleted = this.data[index];
        this.shiftItem(index);
        delete this.data[this.length-1]
        this.length--;
    }

    //delete this.data[index];
    shiftItem(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1];
        }
    }
}

const arr = new myArray();
arr.push("a");
arr.push("b");
console.log(arr);
// console.log(arr.get(1)); 
arr.push("m");
arr.push("y");
console.log(arr);
arr.delete(2);
arr.push("l");
arr.push("pop");
arr.push("me");
arr.pop();
console.log(arr)
arr.delete(2)
//console.log(arr)