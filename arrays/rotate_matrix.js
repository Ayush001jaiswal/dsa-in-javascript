// Rotate matrix by 90


const arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

function transposeMatrix(arr) {
    const n = arr.length; 
    for(let row =0; row < n; row++) {
        for(let col = row + 1; col < n; col++) {
           let temp = arr[row][col];
           arr[row][col] = arr[col][row]
           arr[col][row] = temp;   
        }
    }
    return arr;
}

function rotateMatrixBy90(arr) {
    const transposeArr = transposeMatrix(arr);
    for (let row = 0; row < transposeArr.length; row++) {
        // for(let col =0; col < transposeArr.length; col++) {
        let i = 0;
        let j = transposeArr.length - 1;
        // }
        while(i < j) {
            let temp = transposeArr[row][i];  
            transposeArr[row][i] = transposeArr[row][j];
            transposeArr[row][j] = temp;
            i++;
            j--;
        }
    }
    return transposeArr;
}

const result = rotateMatrixBy90(arr);
console.log(result)

// TC O(N*M)
// SC O(1)