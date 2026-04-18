// Count “AG” Subsequences Problem 
// Count how many times: 'A' comes before 'G'
const str = 'ABCGAGAG';

function getCountSubsequenceChar (str) {
    let count = 0;
    let result = 0;
    for (let ch of str) {
        if(ch === 'A') {
            count++;
        }
        if(ch === 'G') {
            result+=count;
        }
    }
    return result;         
}

const result = getCountSubsequenceChar(str);
console.log(result);