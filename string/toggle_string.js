// String Basics
let ch = 65;
console.log(String.fromCharCode(ch + 1));
console.log('a' > 'A')

// Given a string toggle every charater of the string
const str = 'HellO'
let outputStr = '';
let arr = str.split('');
console.log(arr)
function toggleStringChar(str) {
    for (let i = 0; i<str.length; i++) {
       let asciiValue = str[i].charCodeAt(0);
       if(asciiValue < 97) {
            outputStr+= String.fromCharCode(asciiValue + 32);
            arr[i]= String.fromCharCode(asciiValue + 32);
            
       } else {
        outputStr+= String.fromCharCode(asciiValue - 32);
         arr[i] = String.fromCharCode(asciiValue - 32);
       }   
    }
    return arr;
}

const result = toggleStringChar(str); 
console.log(result);