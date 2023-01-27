/*

Question: 2089. Find Target Indices After Sorting Array
Level: Easy
Date: 01/27/2023

You are given a 0-indexed integer array nums and a target element target.
A target index is an index i such that nums[i] == target.
Return a list of the target indices of nums after sorting nums in non-decreasing order. 
If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  let results = [];
  let arrSorted = nums.sort((a, b) => a - b);
  for (i = 0; i < arrSorted.length; i++) {
    if (nums[i] == target) {
      results.push(i);
    }
  }
  return results;
};
