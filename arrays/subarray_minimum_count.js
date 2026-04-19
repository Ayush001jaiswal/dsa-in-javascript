// Given an array of N integers return length of smallest subarray which contains both maximum minimum element of the array
const nums = [2, 2, 6, 4, 5, 1, 5, 2, 6, 4, 6, 1];

function getSmallestSubArrayCount(nums) {
    const minNum = Math.min(...nums) 
    const maxNum = Math.max(...nums);
    let lastMin = -1;
    let lastMax = -1;
    let ans = nums.length; 
    for(let i =0; i < nums.length; i++) {
        if(nums[i] === minNum) {
            lastMin = i
        }

        if(nums[i] === maxNum) {
            lastMax = i;
        }

        if(lastMin !== -1 && lastMax !== -1) {
            let length = Math.abs(lastMax - lastMin) + 1;
            ans = Math.min(ans, length);
        }
    }
    return ans;
}

const result = getSmallestSubArrayCount(nums);
console.log(result);