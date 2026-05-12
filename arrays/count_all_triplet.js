//You are given an array A of N elements. Find the number of triplets i,j and k such that i<j<k and A[i]<A[j]<A[k]
const nums = [1, 2, 3, 4, 5];

function getAllTripletsCount(nums) {
    let n = nums.length;
    let ans = 0;
    for(let i=0; i<n; i++) {
        let leftCount = 0;
        let rightCount = 0;
        for(let j=0; j<i; j++) {
            if(nums[j] < nums[i]) {
                leftCount++;
            }
        }
        
        for(let k=0; k<n; k++) {
            if(nums[k] > nums[i]) {
                rightCount++;
            }
        }
        ans+= rightCount * leftCount;
    }
    return ans;
}




const result = getAllTripletsCount(nums);
console.log(result);





