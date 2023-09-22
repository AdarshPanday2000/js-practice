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


//function reverseArr(arr){
    // let output = []
    // for(let i = arr.length -1 ; i >= 0; i--){
    //     output.push(arr[i])
    // }
    // console.log(arr)
    // return output;
//     let left = 0
//     let right = arr.length -1
//     while(left < right){
//         let temp = arr[left]
//         arr[left] = arr[right]
//         arr[right] = temp
//         left++
//         right--
//     }
//     console.log(arr)
//     return arr;
// }

// console.log(reverseArr([1,2,3,4,5,6,7,8,9,10]))

// console.log(rotatedArr(2,[1,2,3,4,5]))
// function rotatedArr(d,arr){
//     let output = []
//     for(let i = d; i< arr.length; i++){
//         output.push(arr[i])
//      }
//      for(let i = 0; i < d; i++){
//         output.push(arr[i])
//      }
//      return output;
//     }


// function matchingStrings(stringList, queries) {
//     let output = []
//     for(let i = 0; i<queries.length; i++){
//         count = 0
//         for(let j = 0; j < stringList.length; j++){
//             if(queries[i] === stringList[j]){
//                 count++
//             }f
//         }
//         output.push(count);
//     }
//     return output;
// }

// console.log(matchingStrings(['ab','bc','bc'], ['ab','abc','bc']))


//question
//longest subArray
// console.log(longestSubArr([2, 3, 4, -1, -2, 1, 5, 6, 3]))

// function longestSubArr(arr){
//     let currentCount = 0
//     let longestCount = 0
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] >= 0){
//             currentCount++
//         }else {
//             longestCount = Math.max(longestCount,currentCount)
//             currentCount = 0
//         }
//     }
//     longestCount = Math.max(longestCount,currentCount)
//     return longestCount;
// }

// function  unique(arr){
//     let ans = 0;
//     for(let i= 0; i< arr.length; i++){
//         ans = ans ^ arr[i]
//     }
//     return ans;
// }
// console.log(unique([1,1,2,3,3]))


// binarySearch(n){
//     let s = 0
//     let e = n
//     let mid = Math.floor((s+e)/2)
//     let ans = 0
//     while(s <= e){
//         let square = mid * mid
//         if(square == n){
//             return mid;
//         }
//         if(square < n){
//            ans = mid
//            s = mid + 1
//         }
//         else{
//             e = mid -1
//         }
//         mid = Math.floor((s+e)/2)
//     }
//     return ans;
// }

// var mySqrt = function(x) {
//     return binarySearch(x)
// };

// var findMin = function(nums) {
//     let s = 0
//     let e = nums.length -1

//     let mid = Math.floor((s+e)/2)

//     while(s<e){
//         if(nums[mid] >= nums[0]){
//             s = mid +1
//         }
//         else{
//             end = mid
//         }
//         mid = Math.floor((s+e)/2)
//     }
//     return s
// };
//console.log(findMin([7,8,9,1,2,3]))

function findPivot(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] > arr[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    // When the loop exits, 'left' will point to the pivot element.
    return arr[left];
  }
  
//   // Example usage:
//   const rotatedArray = [7,9,1,2,3];
//   const pivot = findPivot(rotatedArray);
//   console.log("Pivot element:", pivot); // Output: Pivot element: 0
  


// const secureBooking = function(){
//   let passengerCount = 0
//   //const a =10

//   return function(){
//     passengerCount++;
//     console.log(`${passengerCount}`,a)
//   }
// }
// const a = 15
// const booker = secureBooking();

// booker();
// booker();