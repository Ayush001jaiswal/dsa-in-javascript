

// Q1 Basic : Given mat[N][M], print row wise sum
const arr = [
    [1, 2, 3, 6],
    [4, 5, 6, 8 ],
    [7, 8, 9, 5],
    [2, 0, 6, 3]
] 
// function getRowWiseSum(arr) {
//     const n = arr.length;
//     const m = arr[0].length;
//     const result = [];
//     for (let row = 0; row < n; row++) {
//         let sum = 0;
//         for (col=0; col < m; col++) {
//             sum+=arr[row][col] 
//         }
//         result.push(sum)
//     }
//     return result;
// }

// const result = getRowWiseSum(arr)
// console.log(result);

// TC N*M
// SC O(N)

// Q2 Basic : Given mat[N][M], print all col wise sum
// function getColWiseSum(arr) {
//     const n = arr.length;
//     const m = arr[0].length;
//     const result = [];
//     for (let col = 0; col < m; col++) {
//         let sum = 0;
//         for (row=0; row < n; row++) {
//             sum+=arr[row][col] 
//         }
//         result.push(sum)
//     }
//     return result;
// }

// const result = getColWiseSum(arr)
// console.log(result); 
// TC N*M
// SC O(N)


// Q3 Print diagonal of sq matrix
// Brut force approach

// function getDiagonalByMatrix(arr) {
//    const n = arr.length;
//    const m = arr[0].length;
//    const result = [];
//    for(let row = 0; row < n; row++) {
//     for(let col = 0; col < m; col++) {
//         if(row === col) {
//             result.push(arr[row][col])
//         }
//     }
//    } 
//    return result;
// }

// const result = getDiagonalByMatrix(arr);
// console.log(result);
// TC O(N * M)
// SC O(N)

// optimal solution

// function getDiagonalByMatrix(arr) {
//    const n = arr.length;
//    const result = [];
   //let i = 0, j =0; // top left diagonal
   //let j = n -1 top right diagonal 
   // let i = n-1, j =0; // botton left diagonal
//    while(i < n && j>=0) {
//         result.push(arr[i][j])
//         i++ 
//         j++;
        //i--; botton left diagonal
        // j-- // top right diagonal 
//    } 
   
//    return result;
// }

// const result = getDiagonalByMatrix(arr);
// console.log(result);
// TC O(N)
// SC O(N)

// Print all diagonal of rectangular matrix
function getAllDiagonalofRect(arr) {
   const n = arr.length;
   const result = [];
   const test = [];
   let temp;
   for (let row = 0; row < n; row++) {
        temp = []
        test[row] = new Array(n).fill(0)
        let i =0; j = row, k =0;
        while(i<n && j>=0) {
            temp.push(arr[i][j])
            test[row][k] = arr[i][j]
            i++;
            j--;
            k++;
        }
        result.push(temp)   
    }

    let m = n;
    for (let row=1; row < n; row++) {
        let i = row, j=n-1, k=0;
        temp = [];
        test[m] = new Array(n).fill(0)
        while(i<n && j>=0) {
        temp.push(arr[i][j])
        test[m][k] = arr[i][j]
        i++;
        j--;
        k++;
    }
    m++
    
    result.push(temp)    
   }
    console.log(test);
   return result;
}

const result = getAllDiagonalofRect(arr);
console.log(result)
//TC O(N*M)
// SC O(N)

