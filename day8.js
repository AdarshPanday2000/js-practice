// function binarySearch(nums,s,e,target){
  
//     let mid = Math.floor((s+e)/2)

//     while(s <= e){
//         if(nums[mid] == target){
//             return mid;
//         }
//         if(target > nums[mid]){
//             s = mid +1
//         }else {
//             e = mid - 1
//         }
//         mid = Math.floor((s+e)/2)
//     }
//     return -1;
// }


// function pivotElement(nums){
//     let s = 0
//     let e = nums.length -1
//     let mid = Math.floor((s+e)/2)

//     while(s < e){
//         if(nums[mid] >= nums[0]){
//             s = mid +1;
//         }else {
//             e = mid;
//         }
//         mid = Math.floor((s+e)/2)
//     }
//     return s;
// }


// var search = function(nums, target) {
//     let pivot = pivotElement(nums)
//     let n = nums.length
//     if(target >= nums[pivot]  && target <= nums[n-1]){
//         return binarySearch(nums,pivot,n-1,target)
//     }
//     else{
//         return binarySearch(nums,0,pivot-1,target)
//     }
// };

// console.log(search([7,9,1,2,3],9))


// let matrix  = function (rows,col){
//     let matrix1 = []
//     for(let i = 0; i< rows; i++){
//         for(let j = 0; j< col; j++){
//             matrix1[i][j]++
//         }
//     }
//     return matrix1
// }
// console.log(matrix([1,2,3,4,5,6,7,8,9,10,11,12]))

// function rowMajor(){
//     let num = 1
//     let arr = []
//     for(let j = 0 ; j< 3; j++){
//         let temp = []
//         for(let i = 0; i< 4; i++){
//             temp.push(num++)
//         }
//         arr.push(temp)
//     }
//     return arr;
// }
// console.log(rowMajor())

// function colMajor(){
//     let num = 1
//     let arr = new Array(3)
//     arr.fill([])
//     for(let i = 0 ; i< 4; i++){
//         for(let j = 0; j< 3; j++){
//             arr[j][i] = num
//             num++
//         }
//     }
//     return arr;
// }
// console.log(colMajor())


// function createMatrix(rows, columns) {
//     const matrix = [];
  
//     for (let i = 0; i < rows; i++) {
//       matrix[i] = []; // Create an empty row.
//       for (let j = 0; j < columns; j++) {
//         // Generate values for the matrix elements (you can modify this as needed).
//         matrix[i][j] = i * columns + j + 1;
//       }
//     }
  
//     return matrix;
//   }
//   console.log(createMatrix(3,4))