// Given an array [N] Find the majority element
// Majority Element: Element which occurs more than N/2 times.

// solve by Moore's Voting Algo

const  elements = [3,1,3,6,1,3,2,5,3,3,3,1,1,1,1,1,1,1,1];   // n = 11/2 = 5 ans = 3


function getMajorityElements(ele) {
    const n = ele.length;
    let majority = ele[0];
    let freq = 1;
    for(let i=1; i<n; i++) {
        if(ele[i] === majority) {
            freq++;
        } else if(freq === 0) {
            majority = ele[i];
            freq = 1
        } else {
            freq--;
        }
    }
    
    let count = 0;
    for (let i = 0; i < n; i++) {
        if(ele[i] === majority) {
            count+=1;
        }
    }

    if(count > n/2 ) {
        return majority
    } else {
        return -1
    }
}


const result = getMajorityElements(elements);
console.log(result);

 

