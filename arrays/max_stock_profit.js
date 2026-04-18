// Best Time to Buy and Sell Stock
// To Find max profit 

const prices = [7,1,5,3,6,4];
function calculateMaxProfit() {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        minPrice = Math.min(price, minPrice);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}


const result = calculateMaxProfit(prices);
console.log(result);