// You are given an integer array A of size N.
// You have to perform B operations. In one operation, you can remove either the leftmost or the rightmost element of the array A.
// Find and return the maximum possible sum of the B elements that were removed after the B operations.

 const A = [5, -2, 3 , 1, 2]
 const B = 3

function getMaxPicFromBothSide(A, B) {
    let maxSum = 0;
    let sum = 0; 
    let n = A.length;
    for(let i =0; i<B; i++) {
        sum+=A[i];
    }
    maxSum = sum;

    for(let i=1; i<B; i++ ) {
        sum = sum - A[B-i] + A[n-i]; // check this one 
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum;
}

const result = getMaxPicFromBothSide(A, B);
console.log(result)

