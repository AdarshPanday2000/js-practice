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