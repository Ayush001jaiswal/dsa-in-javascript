//Check if all array elements are equal
const arr = [7,7, 7, 7, 1]

// alternate way

// function checkEqualElements(arr) {
//     return arr.every(el => el === arr[0]);
// }


function checkEqualElements(arr) {
    for(let i=1; i<arr.length; i++) {
        if(arr[i-1] != arr[i]) {
            return false
        }
    }
    return true;
}


const result = checkEqualElements(arr);
if(result) {
    console.log("Elements are equal");
} else {
    console.log("Elements are not equal");
}


