/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

var maxProfit = function (A, n) {
  let buy = 0;
  let sell = 0;
  let flag = 0;
  let ans = [];
  for (let i = 1; i < n; i++) {
    if (A[i] >= A[i - 1] && A[i] != A[buy]) {
      sell++;
      flag = 1;
    } else if (buy === sell) {
      buy = i;
      sell = i;
    } else {
      let temp = [];
      temp.push(buy);
      temp.push(sell);
      ans.push(temp);

      buy = i;
      sell = i;
    }
  }

  if (flag === 0) {
    return ans;
  } else if (buy !== n - 1 && sell === n - 1) {
    let temp = [];
    temp.push(buy);
    temp.push(sell);
    ans.push(temp);
  }
  return ans;
};

let prices = [100, 180, 260, 310, 40, 535, 695];
let res = maxProfit(prices, prices.length);

console.log(res);
