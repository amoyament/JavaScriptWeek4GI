// *VERY HARD: You are given coins of different denominations and a total amount
// of money. Write a function to compute the fewest number of coins that
// you need to make up that amount. If that amount of money cannot be made up by
// any combination of the coins, return -1. Hint:  Sudo code this problem. Focus
// on breaking the problem down into steps
// Use functions, arrays and logical operators. Do not have anyone give you the
// answer or solve this problem for you.

// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1
// Note: You may assume that you have an infinite number of each kind of coin.

// If the lowest coin is higher than the goal than the output is -1
// Define a number of coins before for loop
// Put this in a for loop, to keep searching the array
// If the lowest is not higher, add the second lowest number to it
// If that is equal to the goal, return that number of coins
// If that doesn't equal the goal, try adding it to itself
// If it equals to goal set counter to that number of coins

function fewestNumberOfCoins(coins, amount) {
  // If the smallest coin is greater than the goal amount, there is no combo that will make the amount, return -1
  if (Math.min(...coins) > amount) {
    return -1;
  }
  // Create a 'coinOptions' array with the length set to our goal 'amount + 1' This way we have one for each possible coin option
  // 'coinOptions' will store the minimum number of coins needed to make up each amount
  const coinOptions = Array(amount + 1).fill(amount);
  // Set the initial value of 'dp' at index 0 to 0, since no coins are needed to make up an amount of 0,
  coinOptions[0] = 0;

  // Create a for loop to loop through each amount from 1 to the target amount ('amount')
  for (let i = 1; i <= amount; i++) {
    // Loop through each coin in the 'coins' array
    for (let j = 0; j < coins.length; j++) {
      // If current amount is greater than or equal to the current coin then it can be used to contribute to the current amount
      if (i >= coins[j]) {
        // Update the minimum number of coins needed for the current amount 'i'
        // We take the minimum between its current 'coinOptions[i]' and 'coinOptions[i - coins[j]]' plus 1 to use the current coin denomination
        coinOptions[i] = Math.min(coinOptions[i], coinOptions[i - coins[j]] + 1);
      }
    }
  }

  if (coinOptions[amount] === amount) {
    return -1;
  } else {
    return coinOptions[amount];
  }
}
const coins = [1, 2, 5];
const amount = 11;
console.log(fewestNumberOfCoins(coins, amount));

const coins2 = [2];
const amount2 = 3;
console.log(fewestNumberOfCoins(coins2, amount2));
