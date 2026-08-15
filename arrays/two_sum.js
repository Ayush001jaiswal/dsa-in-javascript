// Given an array and a target, return indices of two numbers whose sum equals target.

function twoSum(target, nums) {
const map = new Map();
    for (let i=0; i<nums.length; i++) {
        let complements = target - nums[i];
        if(map.has(complements)) {
            return [map.get(complements), i]
        }
        map.set(nums[i], i);
    }
}

const nums = [2,11,15,7]
const target = 9

const result = twoSum(target, nums);
console.log(result);

// TC O(n)
// SC O(1)

