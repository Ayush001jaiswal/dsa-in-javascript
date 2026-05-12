// Multiple all Object values by x

function multiplyObjectValue(obj, x) {
    for (let key in obj) {
        if (Object.hasOwn(obj, key)) {
            obj[key]*= x
        }
    }
    return obj;
}


const obj = {
  a: 2,
  b: 3,
  c: 4
}
const result = multiplyObjectValue(obj, 2);
console.log(result);
