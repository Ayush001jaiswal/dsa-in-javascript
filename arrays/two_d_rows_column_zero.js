// Given array [N] [M]
// Make all element in a row and column zero if arr[i][j] = 0;
const arr = [
                [1, 2, 3, 4],
                [5, 6, 7, 0],
                [9, 2, 0, 4],
            ]


function getRowColumnZero(arr) { 
    
    for(let row=0; row < arr.length; row++ ) {
        let flag = false;
        for(let j = 0; j<arr[0].length; j++) {
            if(arr[row][j] === 0) {
                flag = true;
                break;
            }
        }
        if(flag) {
            for(let j = 0; j<arr[0].length; j++) {
                if(arr[row][j] != 0) {
                    arr[row][j] = -1 * Math.abs(arr[row][j])
                }
            }
        }

    }

    for(let col=0; col < arr[0].length; col++ ) {
        let flag = false;
        for(let j = 0; j < arr.length; j++) {
            if(arr[j][col] == 0) {
                flag = true;
                break;
            }
        }
        if(flag) {
            for(let j = 0; j<arr.length; j++) {
                if(arr[j][col] != 0) {
                    arr[j][col] = -1 * Math.abs(arr[j][col])
                }
            }
        }

    }

    for(let row=0; row < arr.length; row++ ) {
        let flag = false;
        for(let col = 0; col<arr[0].length; col++) {
            if(arr[row][col] < 0) {
                arr[row][col] = 0
            }
        }
    }
    return arr;
}


const result = getRowColumnZero(arr) 
console.log(result)

// TC O(n2)
// SC o(1)

