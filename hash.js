// checking if the arrays have any commom item
const dict={}
const arr1=["a","b","c","d","e"];
const arr2=[1,2,3,4,"a","z"]
function checkifpair(array1, array2) {
    for (let i=0; i<ar.length; i++) {
        if (!dict[ar[i]]) {
            dict[ar[i]]= true
        }
    }
    for (let j=0; j<ar2.length; j++) {
        if (dict[ar2[j]]) {
            return true
        }
    
    }
    return false
}
checkifpair()
