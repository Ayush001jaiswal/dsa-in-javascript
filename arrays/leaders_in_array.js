// Leaders in Array
// Find elements that are greater than all previous elements

const arr = [3, 1, 4, 2, 5]; 
function getLeadersElement(arr) {
    let maxSoFar = 0;
    const leaders = [];
    for (let ele of arr) {
        if(ele > maxSoFar) {
            leaders.push(ele);
            maxSoFar = ele;
        }
    }
    return leaders;
}

const result = getLeadersElement(arr);
console.log(result);
