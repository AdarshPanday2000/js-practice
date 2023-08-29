// question.1
// fizz buzz
// var fizzBuzz = function(n) {
//     let arr = []
//     for(let i = 1; i <= n; i++){
//         if(i % 3 === 0 && i % 5 === 0 ){
//             arr.push("FizzBuzz")
//         }else if(i % 3 === 0){
//             arr.push("Fizz")
//         }else if(i % 5 === 0){
//             arr.push("Buzz")
//         }else arr.push(`${i}`)
//     }
//     return arr;
// };


//question.2
//Matrix Diagonal summ
// var diagonalSum = function(matrix) {
//     let sum = 0
//     let lastIndex = matrix.length -1
//     for(let i = 0; i < matrix.length ; i++){
//         sum += matrix[i][i] 
//         if(i !== lastIndex - i){
//             sum += matrix[i][lastIndex - i]
//         }
//     }
//     return sum;
// };

//question.3
// concatenation of array
// var mostWordsFound = function(sentences) {
//     let maxWord = 0;
//     for(let i = 0; i < sentences.length; i++) {
//          let currentWord =  sentences[i].split(' ').length
//             if(currentWord > maxWord){
//             maxWord = currentWord
//         }
//     }
//     return maxWord;
// };

//question 4
//trapping rainwater
// var trap = function(height) {
//     let n = height.length
//     let leftMax = [n]
//     let rightMax = [n]
//     let water = 0

//     leftMax[0]=height[0]
//     rightMax[n-1] = height[n-1]

//     for(let i = 1; i<n; i++){
//         leftMax[i] = Math.max(height[i], leftMax[i - 1])
//     }
//     for(let i = n-2; i >= 0; i--){
//         rightMax[i] = Math.max(height[i], rightMax[i + 1])
//     }
//     for(let i = 1; i< n-1; i++){
//         water += Math.min(leftMax[i], rightMax[i]) - height[i]
//     }
//     return water;
// };


//question 5
//pascal triangle
// var generate = function(numRows) {
//     const triangle = [[1]];
//     if(numRows === 1) return triangle;
//     for(let i = 1; i< numRows; i++){
//         let previousArr = triangle[i-1]
//         let currentArr = []
//         currentArr.push(1)
//         for(let j = 1; j < previousArr.length; j++){
//             currentArr[j] = previousArr[j-1] + previousArr[j]
//         }
//         currentArr.push(1)
//         triangle.push(currentArr)
//     }
//     return triangle;
// };
// console.log(generate(5))

//question 6
//single number
// var singleNumber = function(nums) {
//     let output = {}
//     for(let i = 0; i < nums.length; i++){
//         if(output[nums[i]]) output[nums[i]]+= 1
//         else output[nums[i]] = 1
//     }
//     for (let x in output){
//         if(output[x] === 1) return x;
//     }
// };

// function findAverage(array) {
//     // your code here
//     if(array.length === 0)return 0;
    
//    let arr = array.reduce((total,i)=> total + i)
//    let avg = arr/array.length;
//    return avg
   
//   }
//   console.log(findAverage([]))

//question
// const longestSubarr = function (array){
//    let count = 0;
//    let maxCount = 0;

//    for(let i = 0; i< array.length; i++){
//     if(array[i] >= 0){
//         count += 1
//      }else {
//         count = 0;
//      }
//      if(count > maxCount) maxCount = count;
//    }
//   return maxCount;
// }

// console.log(longestSubarr([2, 3, 4, -1, -2, 1, 5, 6, 3]))

//question
//two sum;
// let twoSum = function(nums,target){
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j< nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i,j]
//             }

//         }
//     }
// }
// console.log(twoSum([2,6,7,8],9));

// let twoSum = function(nums,target){
//     let map = {}
//      for(let i = 0; i < nums.length; i++){
//        let value = nums[i]
//        let compliment = target - value;
//        if(map[compliment] === undefined) map[value] = i
//        else return [map[compliment], i]
//      }
// }
// console.log(twoSum([2,6,7,8],9));

// //question
// //remove duplicates

// let removeDuplicates = function(nums){
//     let  i = 0
//     for(let j = 0; j< nums.length; j++){
//     if(nums[i] !== nums[j]){
//         i++
//         nums[i] = nums[j]

//     }
    
//  }
//  for(let j = i+ 1; j < nums.length; j++){
//     nums[j] = null 
//  }
//  return i + 1
// }

// console.log(removeDuplicates([0,0,1,1,2,2,3,3,4]))

var mergeTwoLists = function(list1, list2) {
    const output = [...list1, ...list2];
    output.sort(function(a,b) {return a -b})

    // if(list1.length === 0 && list2.length === 0){
    //     return output.length === 0
    // }
    return output;
};
console.log(mergeTwoLists([1,2,4],[1,3,4]))
console.log(mergeTwoLists([],[]))
console.log(mergeTwoLists([],[0]))