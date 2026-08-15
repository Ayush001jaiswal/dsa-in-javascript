// Group Anagram
// input:  ["eat","tea","tan","ate","nat","bat"]

// Output:

// [
//  ["eat","tea","ate"],
//  ["tan","nat"],
//  ["bat"]
// ]

function groupAnagram(input) {
    const map = new Map();
    for (let i = 0; i < input.length; i++) {
        let value = input[i].split('').sort().join('');
        if(!map.has(value)) {
            map.set(value, [])
        }
        map.get(value).push(input[i])
    }
    return [...map.values()]
}

const input = ["eat","tea","tan","ate","nat","bat"];
const result = groupAnagram(input);
console.log(result);