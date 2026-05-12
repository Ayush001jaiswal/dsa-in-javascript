// Remove first n elements of an array
const arr = [10, 20, 40, 80, 90];

function removeFirstElement(arr, n) {
    //return arr.slice(n); // Do not modify original array
    //arr.shift() // all the elemet reindexed here
    arr.splice(0, n); // Modify original Array
    return arr;
}

function removeFirstElement(arr, n) {
    for(let i = n; i < arr.length; i++) {
          arr[i-n] = arr[i]
    }
    arr.length = Math.max(arr.length - n , 0)
    return arr;
}


const result = removeFirstElement(arr, 1);
console.log(result);