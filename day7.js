//question1
// 34 leetcode
// var searchRange = function(nums, target) {
//     let output = []

//     for(let i = 0; i< nums.length ; i++){
//         if (nums[i] === target){
//             return output.push(i)
//         }else return output.push(-1,-1)
//     }
//     return output;
// };
// console.log(searchRange([5,7,7,8,8,10], 8))

// //question max subarrY
// var maxSubArray = function(nums) {
//     let maxSum = nums[0]
//     for(let i = 1 ; i< nums.length; i++){
//         nums[i] = Math.max(nums[i], nums[i] + nums[i -1])
//         maxSum = Math.max(maxSum, nums[i])
//     }
//     return maxSum;
// };
