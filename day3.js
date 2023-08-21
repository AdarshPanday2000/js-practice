//question 1
//two sum
// var twoSum = function(nums, target) {
//     for(let i = 0; i< nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i,j];
//             }

//         }
//     }
// };

// var twoSum = function(nums, target) {
//     let map = {}
    
//     for (let i = 0; i< nums.length; i++){
//        let value = nums[i]
//        let com = target - value;
//        if(map[com]=== undefined){
//         map[value] = i
//        }else return [map[com], i]

       
//     }
// }
// console.log(twoSum([2,7,13,45], 9))

//question.2
//remove elements from sorted array
// var removeDuplicates = function(nums) {
//    let i = 0;
//    for(let j = 1; j<nums.length; j++){
//     if(nums[i] !== nums[j]){
//         i++
//         nums[i] = nums[j]
//     }
//    }
//    for(let j= i + 1; j<nums.length; j++){
//       nums[j] = null
//    }return i+1
// };
//[0,1, 1,1,1,2,2]

//question.3
// var plusOne = function(digits) {
//     let result = []
//     let num = BigInt (Number(digits.join('')) + 1)
//     while(num >= 1n){
//         result.unshift(num % 10n)
//         num = Math.floor(num / 10n)
//     }

//     return result;
// };


//question.4
// var plusOne = function(arr){
//     let i = arr.length - 1;
//     while(arr[i] === 9 && i >= 0){
//         arr[i] = 0;
//         i--;
//     }
//     if (i >= 0) arr[i] = arr[i] +1;
//     else(
//         arr.unshift(1);
//     )
//     return arr;
// }