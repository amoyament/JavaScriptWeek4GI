// MEDIUM: Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
// You are given a target value to search. If found in the array, return its index, otherwise return -1.
// You may assume no duplicate exists in the array.
// Hint:  Use a function. Use the built in method .indexOf( ) and/or  for loops. Review your lesson on Arrays to aid in working through this problem.
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1.

// Pseudo Code it first
// Create a function that takes in an array
// Loop through the array to find the target number
// If target numer is found return index
// If target number is not found, return -1

const numsArray = [4, 5, 6, 7, 0, 1, 2];
const targetNum = 0;

function findTarget(numsArray, targetNum) {
  for (i = 0; i < numsArray.length; i++)
    if (numsArray[i] === targetNum) {
      return i;
    }
  return -1;
}

console.log(findTarget(numsArray, targetNum)); // Output 4
console.log(findTarget([4, 5, 6, 7, 0, 1, 2], 3)); // Output -1
