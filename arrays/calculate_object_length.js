// Write a JavaScript program to return the length of the object.

let objLen = function(obj) {
    return Object.keys(obj).length;
}

const obj = {
  a: 2,
  b: 3,
  c: 4
}
const result = objLen(obj);
console.log(result);