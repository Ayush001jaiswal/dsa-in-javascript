//Find the sum of all subaway

// Approch 1 Brutforce
const nums = [3, 2, 5];


// function findAllSubarraySum(nums) {
//     let totalCount = 0;
//     const n = nums.length;
//     for(let i = 0; i<n; i++) {
//         for(let j=i; j<n; j++) {
//             let subarrCount = 0;
//             for(let k=i; k<=j; k++) {
//                 subarrCount+=nums[k] 
//             }
//             totalCount+=subarrCount;
//         }
//     }
//     return totalCount;
// }

// Appro 2 using prefix sum
// TC O(n2)
// SC O(n)

// function findAllSubarraySum(nums) {
//     const n = nums.length;
//     let prefixSum = new Array(n);
//     prefixSum[0] = nums[0];
//     for(let i= 1; i<n; i++) {
//         prefixSum[i] = prefixSum[i - 1] + nums[i]
//     }
//     let totalCount = 0;
    
//     for(let j=0; j<n; j++) {
//         for(let l=j; l<n; l++) {
//             if(j===0) {
//                 totalCount += prefixSum[l]; // 18
//             } else {
//                 totalCount += prefixSum[l] - prefixSum[j - 1];  
//             }
//         }
//     }
//     return totalCount;
// }

// Apro 3 Using carry forward
// TC O(n2)
// SC O(1)

// function findAllSubarraySum(nums) {
//     const n = nums.length;
//     let totalCount = 0;
//     for(let j=0; j<n; j++) {
//         let prevVal = 0;
//         for(let l=j; l<n; l++) {
//             prevVal+=nums[l];
//             totalCount+=prevVal;            
//         }
//     }
//     return totalCount;
// }

// Approch 3 Using Contribution Techniques:-
// TC O(1)
// SC O(1)

function findAllSubarraySum(nums) {
    const n = nums.length;
    let totalCount = 0;
    for(let i=0; i<n; i++) {
        totalCount+= nums[i] * (n - i) * (i+1); 
    }
    return totalCount;
}


const result = findAllSubarraySum(nums);
console.log(result);