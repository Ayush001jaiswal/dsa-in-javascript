// Rotate the array by last to first by k times
const arr = [1,2,3,4,5];
const k = 2;
const n = arr.length;

function reverseByKTimes(arr, left, right) {
    
    while(left<right) {
        let temp = arr[left];
        arr[left] = arr[right]
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}



const reverseArr = reverseByKTimes(arr, 0, n-1)
const reverseLeftArr = reverseByKTimes(reverseArr, 0, k-1)
const reverseRightArr = reverseByKTimes(reverseLeftArr, k, n-1)
