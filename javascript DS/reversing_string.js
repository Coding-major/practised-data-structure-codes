// reversing a statement
const statements = "i am okay and good is that what you want to hear because you arr=e my babe";
const newStatement = [];
function reverse(statement) {
    for (let i = statement.length-1; i >= 0; i--) {
        newStatement.push(statement[i])
    }

    let reversed = newStatement.join("")
    return reversed;
} 

console.log(reverse(statements));