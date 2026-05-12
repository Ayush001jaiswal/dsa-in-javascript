// Write a JavaScript program to sort an array of JavaScript objects based on one key 


function sortObjectByKey(emp, key) {
    return [...emp].sort((a,b) => {
        if(typeof a[key] === 'string') {
            return a[key].localeCompare(b[key])
        }
        return a[key] - b[key];
    })
}  


const employees = [
  { name: "Ayush", age: 31 },
  { name: "Rahul", age: 25 },
  { name: "Amit", age: 28 }
]

const result =  sortObjectByKey(employees, 'name')
console.log(result);