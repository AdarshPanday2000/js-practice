// 1 find second smallest number
// [1,2,4,7,7,5]
// function secondSmallest(arr) {
//     let small = arr[0]
//     let second_small = Infinity

//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < small){
//             second_small = small
//             small = arr[i]
//         }
//         else if(arr[i] < second_small & arr[i] != small){
//             second_small = arr[i]
//         }
//     }
//     return second_small;
// }
// console.log(secondSmallest([1,2,3,5,4,6]))

// function secondLargest(arr){
//     let largest = arr[0]
//     let secondL = -Infinity
    
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > largest){
//             secondL = largest
//             largest = arr[i]
//         }
//         else if( arr[i] > secondL && arr[i] != largest){
//             secondL= arr[i]
//         }
//     }
//     return secondL;
// }
// console.log(secondLargest([1,2,3,5,4,6]))


// 2 reverse a given array
// [1,2,3,4,5]
// function reverseArray(arr){
//     let n = arr.length
//      let start = 0
//      let end = n-1

//     while (start < end){
//         let temp = arr[start]
//         arr[start] = arr[end]
//         arr[end] = temp;
//         start++
//         end--
//     }
//     return arr;

//     while ( start < end){
//         [arr[start], arr[end]] = [arr[end], arr[start]]
//         start++
//         end--
//     }
//     return arr;
// }
// console.log(reverseArray([1,2,3,4,5]))



// 3 calculate frequency of element in an  array
// [10,20,30,10,20,30,30]
// function frequencyCalc(arr){
//     let freq = {}

//     for(let i = 0; i < arr.length; i++){
//         // if present already inncrement by 1
//         if(freq[i]){
//             freq[i]++
//         }
//         else { // start the count from 1
//             freq[i] = 1
//         }
//     }
//     return freq
// }
// console.log(frequencyCalc([1,2,3,1,2,3,3,4]))


// 4 Rearrange array in increasing-decreasing order
// [8,7,1,6,9,5]
// op = [1,5,6,9,8,7] first half inc and next half dec
// function inc_dec(arr){
//     arr.sort((a, b) => a - b);
//     let temp = []
//     const n = arr.length;
//     //const firstHalf = arr.slice(0, Math.floor(n / 2)); // Get the first half of the array
//     //const secondHalf = arr.slice(Math.ceil(n / 2)).reverse(); // Get the second half in descending order
//     for(let i = 0; i < Math.floor(n/2); i++){
//         temp.push(arr[i])
//     }
//     for(let i = n-1; i >= Math.ceil(n/2); i--){
//         temp.push(arr[i])
//     }
//     return temp;
// }
// console.log(inc_dec([1,2,3,4,5,6]))


// 5- Calculate Sum of the Elements of the Array
// function sumArray(arr){
//     let n = arr.length
//     let count = 0
//     for(let i = 0 ; i < n ; i++){
//         count = count + arr[i]
//     }
//     return count;
// }
// console.log(sumArray([1,2,3,4,5]))

// 6- Rotate array by K elements : Block Swap Algorithm
// [1,2,3,4,5] k= 2
//op = [3,4,5,1,2]
// function rotate(arr, s, e){
//     while(s < e){
//         [arr[s], arr[e]] = [arr[e], arr[s]]
//         s++
//         e--
//     }
// }
// function rotateElm(arr,k){
//     let n = arr.length
//     rotate(arr, k, n-1)
//     rotate(arr,0, k-1)
//     rotate(arr, 0 , n -1)
//     return arr;
// }
// console.log(rotateElm([1,2,3,4,5], 2))

// 7- Average of all the elements in the array
// N=6, {1,2,1,1,5,1} op = 1.8
// function avg(arr, N){
//     let count = 0
//     for(let i = 0; i < arr.length ; i++){
//         count = count + arr[i]
//     }
//     let average = count/N;
//     return average
// }
// console.log(avg([1,2,3,4,5], 5))


// 8- Find Median of the given Array
// function median(arr){
//     let n = arr.length;
//     arr.sort((a,b) => a-b)

//     if(n % 2 !== 0){
//         return arr[Math.floor(n/2)]
//     }
//     if(n % 2 == 0){
//         let middle1 = n/2 - 1
//         let middle2 = n/2
//         return (arr[middle1] + arr[middle2]) / 2
//     }
// }
// console.log(median([1,2,4,3,5,6]))

// 9- Remove Duplicates in-place from Sorted Array
// arr[1,1,2,2,2,3,3]    
// Output: arr[1,2,3,_,_,_,_]

// function removeDup(arr){
//   let i = 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i+1;
// }
// console.log(removeDup([1,1,2,2,3,3,4,5]))


// 10- Remove Duplicates From an Unsorted Array
// Input: arr[]={2,3,1,9,3,1,3,9}
// Output:  {2,3,1,9}
// function removeDuplicates(nums){
//     const hashtable = {};
//     const uniqueArray = [];

//     for (let i of nums) {
//         if (!hashtable[i]) {
//             hashtable[i] = true; // Store the element as a key in the hashtable
//             uniqueArray.push(i); // Push the unique element to the new array
//         }
//     }
//     return uniqueArray;
// }
// console.log(removeDuplicates([2,3,1,9,3,1,3,9]))


// 11- Find all repeating elements in an array
// [1,1,2,3,4,4,5,2,9]  op= 1,2,4
// function findRepeating(arr){
//     let sorted = arr.sort((a,b) => a-b)  // [1,1,2,2,3,4,4,5,9]
//     let n = sorted.length
//     let temp = []
//     for(let i = 1 ; i < n-1; i++){
//         if(arr[i] !== arr[i-1] && arr[i] !== arr[i+1]){
//             temp.push(arr[i]);
//         }
//     }
//     if(arr[n-1] !== arr[n-2]){
//         temp.push(arr[n-1])
//     }
//     return temp;
// }
// console.log(findRepeating([1,2,1,3,4,4,5,2,9]))


// 12- Find all Symmetric Pairs in the array of pairs
// function findSymmetricPairs(arr) {
//     // Create an empty object to store pairs where the second element is the key
//     let hash = {};

//     // Initialize an array to store symmetric pairs
//     let symmetricPairs = [];

//     // Iterate over each pair in the input array
//     for (let pair of arr) {
//         let [first, second] = pair;

//         // Check if the second element of the current pair exists as a key in the hash
//         if (hash[second] !== undefined && hash[second] === first) {
//             // If the corresponding pair is found, add it to the symmetric pairs array
//             symmetricPairs.push([second, first]);
//         } else {
//             // Otherwise, store the current pair in the hash with the second element as the key
//             hash[first] = second;
//         }
//     }

//     return symmetricPairs;
// }



// 13- Maximum Product Subarray in an Array
// in = [1,2,3,4,5,0] op = 120 
// function maxProduct(arr){
//     let n = arr.length
//     let result = -Infinity
//     for(let i = 0 ; i < n ; i++){
//         let product = 1
//         for(let j = i+1; j < n; j++){
//             product = product * arr[j]
//             result = Math.max(result,product)
//         }
//     }
//     return result;
// }
// console.log(maxProduct([-1,2,3,0,-4,-5]))


// 14- palindrome number
// function palindrome(N){
//     let numStr = String(N)
//     let n = numStr.length
//     let left = 0
//     let right = n-1

//     while(left < right){
//         if(numStr[left] !== numStr[right]){
//             return false
//         }
//         left++
//         right--
//     }
//     return true;
// }
// console.log(palindrome(121))


// 15- find palindrome in a given range
// min=10 max=50
// function palindrome(N){
//     let numStr = String(N)
//     let n = numStr.length
//     let left = 0
//     let right = n-1
//     while(left < right){
//        if(numStr[left] !== numStr[right]){
//             return false
//        }
//        left++
//        right--
//     }
//     return true;
// }
// function rangePalindrome(min, max){
//     let result = []
//     for(let i = min; i <= max; i++){
//         if(palindrome(i)){
//             result.push(i)
//         }
//     }
//     return result;
// }
// console.log(rangePalindrome(10,50))


// 16- 