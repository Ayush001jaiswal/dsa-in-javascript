// Longest Substring Without Repeating Characters
// Input: "abcabcbb"

// Output: 3

// Explanation:
// "abc"


function getLongestSubstringlengthWithoutRepeatingChar(str) {
    let maxLen = 0;
    let left = 0;
    const set = new Set(); 
    for(let right = 0; right < str.length; right++) {
        while(set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }
        set.add(str[right]);
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen;
}


const str = "abcadbcbb";
const result = getLongestSubstringlengthWithoutRepeatingChar(str);
console.log(result);