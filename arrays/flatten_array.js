// Create a flatten array in a nested array
const nestedArr = [1,[2,[3,4],5]]

function getFlattenArray(nestedArr) {
    let result = [];
    for (let num of nestedArr) {
        if(Array.isArray(num)) {
            result  = result.concat(getFlattenArray(num));
        } else {
            result.push(num)
        }
    }
    return result; 
}

const result = getFlattenArray(nestedArr);
console.log(result);

