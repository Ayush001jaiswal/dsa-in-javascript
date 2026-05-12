
//Given a binary array [ ]. We can almost replace a single 0 with 1. Find the maximum consecutive 1's we can get in the array[] after the replacement.
const binary_array = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1];


function maximumConsecutiveOnes(b_arr) {
    let zerosCount = 0, ans = 0;
    for(let i = 0; i < b_arr.length; i++) {
        if(b_arr[i] === 0) {
            zerosCount+=1;
        }
    }
    
    if(zerosCount === 0) return b_arr.length;
    if(zerosCount === b_arr.length) return 1;
    for(let i =0; i<b_arr.length; i++) {
        if(b_arr[i] === 0) {
            let l = 0;
            for(let j = i-1; j>=0; j--) {
                if(b_arr[j] === 1) {
                    l++;
                } else {
                    break;
                }
            }
            let r= 0;
            for(let j=i+1; j<b_arr.length; j++) {
                if(b_arr[j] == 1) {
                    r++;
                } else {
                    break;
                }
            }
            ans=Math.max(ans, l+r+1)
        }
    }
    return ans
}




const result = maximumConsecutiveOnes(binary_array);
console.log(result);




