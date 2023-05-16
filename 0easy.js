// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers.
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2

// First pseudo code...
// Create a function that takes in an array
// Using a loop, add all numbers in the array together
// Divide by number of elements in the array
// Return that number

arrayNums = [1, 4, 7];

function average(arrayNums) {
  let total = 0;
  for (i = 0; i < arrayNums.length; i++) {
    total += arrayNums[i];
  }
  return total / arrayNums.length;
}

console.log(average(arrayNums)); // Output 4
console.log(average([10, 5])); // Output 7.5
console.log(average([1.5, 3, 2.5, 1])); // Output 2
