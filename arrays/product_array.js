// Product of Array Except Self
// nums = [1,2,3,4]

// Output:

// [24,12,8,6]

// prefix [1, 1, 2, 6]


function productArrayExpectItself(input) {
    const result = [];
    let prefix = 1
    for (let i=0; i<input.length; i++) {
        result[i] = prefix;
        prefix*=input[i];
    }

    let suffix  = 1;
    for (let j=input.length - 1; j>=0; j--) {
        result[j]*=suffix;
        suffix*=input[j];
    }
    return result;
}

const input = [1,2,3,4];
const result = productArrayExpectItself(input);
console.log(result);
