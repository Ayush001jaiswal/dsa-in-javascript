// Given an array of N elements Print max subarray sum for subarray with length K using fixed sliding window techniques

const nums = [-3, 4, -2, 5, 3, -2, 8, 2, -1, 4];
const k =5;
 

function getMaxSumSubArray(nums, k) {
    let maxSum = 0;
    let sum = 0
    for (let i=0; i<k; i++) {
        sum+=nums[i];
    }
    maxSum = sum;
    for(let j=k; j<nums.length; j++) {
        sum= (sum - nums[j-k]) + nums[j];
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum;
}

const result = getMaxSumSubArray(nums, k);
console.log(result);

