// Check whether the string is palindrome or not.

const str = 'Madama';

function isStringPalindrome(str) {
    let newStr = str.toLowerCase();
    let reverseStr = '';
    // for(let i=newStr.length -1; i >=0; i--) {
    //     reverseStr+= newStr[i]
    // }

    // if(newStr === reverseStr) {
    //     return true;
    // }
    let i = 0;
    let j = newStr.length -1 
    while (i<j) {
        if(newStr[i] !== newStr[j]) {
            return false;
        }
        i++;
        j--;
    }
    
    return true;
}

const result = isStringPalindrome(str)
console.log(result);
