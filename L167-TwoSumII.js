/*

Question: 167. Two Sum II - Input Array Is Sorted
Level: Medium
Date: 01/25/2023

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
find two numbers such that they add up to a specific target number. 
Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, 
added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly 
one solution. You may not use the same element twice.

Your solution must use only constant extra space.


Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
*/

/**
 * @param {number[]} possibleNums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (numbers, target) {
//   let result = [];
//   for (i = 0; i < numbers.length; i++) {
//     for (j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] == target) {
//         result.push(i + 1);
//         result.push(j + 1);
//         break;
//       }
//     }
//   }
//   return result;
// };

var twoSum = function (numbers, target) {
  let result = [];
  let startIndex = 0;
  let endIndex = numbers.length - 1;
  let sum;
  for (i = 0; i <= numbers.length - 1; i++) {
    sum = numbers[startIndex] + numbers[endIndex];
    if (sum > target) {
      endIndex--;
    } else if (sum < target) {
      startIndex++;
    } else {
      result.push(startIndex + 1);
      result.push(endIndex + 1);
      break;
    }
  }
  return result;
};
twoSum([2, 7, 11, 15], 9);
twoSum([[-1, 0]], -1);
