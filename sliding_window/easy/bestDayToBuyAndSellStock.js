const assert = require('assert');

function bestDayToBuyAndSellStock(prices) {
  let [left, right, maxProfit] = [0, 1, 0];

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[right] <= prices[left]) {
      left++;
      right++;
    } else {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(profit, maxProfit);

      right++;
    }
  }

  return maxProfit;
}

assert.equal(bestDayToBuyAndSellStock([7, 1, 5, 3, 6, 4]), 5);
assert.equal(bestDayToBuyAndSellStock([7, 6, 4, 3, 1]), 0);
