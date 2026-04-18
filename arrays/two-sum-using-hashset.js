// Given an array of integer nums and a target integer k determine if there exists two distinct elements in the array whose sum equal to k use hashset to solve this efficiently.
const nums = [3, 6, 7, 7, 9];
const target = 15;

function checkTargetByTwoSum (arr, target) {
    const set = new Set();
    for (num of nums) {
        const complement = target - num;
        if(set.has(complement)) {
            return true;
        }
        set.add(num);
    }
    return false;
}
const result = checkTargetByTwoSum(nums, target)
console.log(result);

// Time Complexity O(n)
// Space Complexity O(n)
 