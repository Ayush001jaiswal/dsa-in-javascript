// write a javascript program that returns a subset of string

function getAllPossibleStr(str) {
  let res = [];
  for(let i=0; i<str.length; i++) {
    let preStr = '';
    //for(let j=i+1; j<=str.length; j++) {
    for(let j=i; j<str.length; j++) {
        preStr+=str[j];
        res.push(preStr);
        //res.push(str.slice(i,j));
    }
  }
  return res;
}


let str = 'dog';
const result = getAllPossibleStr(str);
console.log(result);

//TC O(n2) 