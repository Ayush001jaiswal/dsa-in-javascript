// Longest Palindromic Substring

// Input 1:
// A = "aaaabaaa"
// Input 2:
// A = "abba


//Example Output

// Output 1:
// "aaabaaa"
// Output 2:
// "abba"

const A = "aaaabaaa";
let maxLength = 1;
let start = 0;

function expand(left, right) {
    while(left >= 0 && right < A.length && A[left] === A[right]) {
        left--;
        right++;
    }
    let length = right - left - 1;
    if(length > maxLength) {
        maxLength = length;
        start = left + 1
    }
}

for(let i =0; i<A.length; i++) {
    // odd
    expand(i, i);
    // even
    expand(i, i+1); 
}

let ans =  A.substring(start, start + maxLength)
console.log(ans);   
	