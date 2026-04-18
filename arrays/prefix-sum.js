// Calculate the sum of all the previous element using prefix sum

const arr = [3, 7, 5, -8, 2, 6, 1];

function calPrefixSum() {
    const  prefixSum = [];
    prefixSum[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i -1] + arr[i]
    }

    return prefixSum;
}


const result = calPrefixSum(arr);
console.log(result);
