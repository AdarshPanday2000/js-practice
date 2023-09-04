//question -1
// var rowAndMaximumOnes = function(mat) {
//     let output = [0,0]
//     let count = 0
//     for(let i = 0; i< mat.length; i++){
//         for(let j = 0; j<mat[i].length; j++){
//             if(mat[i][j] === 1) count += 1
//         }
//         if(count > output[1]){
//             output[1] = count
//             output[0] = i
//         }
//         count = 0
//     }
//     return output;
// };

//question 2
//island perimeter
// var islandPerimeter = function(grid) {
//     let sum = 0;
//     for(let i = 0; i < grid.length ; i++){
//         for(let j = 0; j< grid[i].length; j++){
//             if(grid[i][j] === 1){
//                 if( i === 0 || grid[i-1][j] !== 1 )sum++
//                 if(i === grid.length - 1 || grid[i+1][j] !== 1 )sum++
//                 if(j === 0 || grid[i][j-1] !== 1 )sum++
//                 if(j === grid[i].length-1 || grid[i][j+1] !== 1 )sum++
//             }
//         }
//     }
//     return sum;
// };

//question 3
// var maximumWealth = function(accounts) {
//     let output = 0
//     for(let i = 0; i < accounts.length; i++){
//         let sum = 0
//         for(let j = 0; j < accounts[i].length; j++){
//             sum += accounts[i][j]
//         }
//         output = Math.max(output,sum)
//     }
//     return output;
// };

//question 4
//running sum of 1D array
// var runningSum = function(nums) {
//     for(let i = 1; i < nums.length; i++){
//        nums[i] = nums[i] + nums[i-1]
//     }
//     return nums;
// };

//question 5
// const numSpecial = function(matrix) {
//     let output = 0
//     for(let i = 0; i< matrix.length ; i++){
//         for(let j = 0; j< matrix[i].length; j++){
//             if(matrix[i][j] === 1){
//                 if(checkRows(i) && checkCol(j)){
//                     output++
//                 }
//             }
        
//         }
//     }


//     function checkRows(i){
//         let count = 0
//         for(let j = 0; j < matrix[i].length; j++){
//             if(matrix[i][j]=== 1){
//                 count++
//             }
//         }
//         if(count > 1) return false
//         else return true;
//     }

//     function checkCol(j){
//         let count = 0
//         for(let i = 0; i < matrix.length; i++){
//             if(matrix[i][j]=== 1){
//                 count++
//             }
//         }
//         if(count > 1) return false
//         else return true;
//     }
//     return output;
// };