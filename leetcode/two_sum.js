// function twoSum(array, sum) {
//     var decide = "no";
//     for (let i=0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (i === j || array[i] + array[j] != sum) {
//                 continue
//             } else {
//                 return true
//             } 
//         }
//     }
//     return false
// }


// const array1 = [3,6,5,8,2];
// let sum = 6;
// console.log(twoSum(array1, sum));



function twoSums(array, sum) {
    const check = new Set();
    let decision = "no"
    for (let i=0; i < array.length; i++) {
        let otherPair = sum - array[i];
        if ( !check.has(otherPair)) {
            check.add(array[i]);
        }else {
            decision = "yes"
        }
    }
    return decision
}

const array1 = [3,6,2,5,8,2];
let sum = 6;
console.log(twoSums(array1, sum));