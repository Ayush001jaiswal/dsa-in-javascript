// Given an binary array[]. we can swap an single zero. Find the maximum consecutive 1's we can get in the array[] after almost 1 swap.
const b_arr = [1,,0,1,1,0,1];


function maximumConsecutiveOnesBySwap(b_arr) {
    let oncesCount = 0;
    let n = b_arr.length;
    for(let i=0; i<n; i++) {
        if(b_arr[i] === 1) {
            oncesCount+=1
        }
    }

    if(oncesCount === n) return n;
    if(oncesCount === 0) return 0;
    let ans = 0;
    for(let i = 0; i < n; i++) {
        if(b_arr[i] === 0) {
            let l = 0;
            for(let j = i-1; j>=0; j-- ) {
                if(b_arr[j] === 1) l++
                else break
            }
            
            let r = 0;
            for(let j = i+1; j<n; j++ ) {
                if(b_arr[j] === 1) r++
                else break
            }

            let count = 0;
            if(l + r < oncesCount) {
                count = l + r + 1;
            } else {
                count = l + r;
            }
            ans = Math.max(ans, count);
        }
    }
    return ans;
}



const result = maximumConsecutiveOnesBySwap(b_arr);
console.log(result);

