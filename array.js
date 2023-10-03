//merge sorting
//  let merge = function(arr,low,mid,high){
//     let temp = []
//     let left = low;
//     let right = mid +1
//     while(left <= mid && right<= high){
//         if(arr[left] <= arr[right]){
//             temp.push(arr[left])
//             left++;
//         }else{
//             temp.push(arr[right])
//             right++;
//         }
//     }
//     while(left<= mid){
//         temp.push(arr[left])
//         left++;
//     }

//     while(right<= high){
//         temp.push(arr[right])
//         right++;
//     }

//     for(let i = low ; i <= high; i++){
//         arr[i] = temp[i-low]
//     }

// }

// let ms = function(arr,low,high){
//     if(low == high) return;

//     let mid = Math.floor((low+high)/2);
//     ms(arr, low, mid);
//     ms(arr, mid+1, high);
//     merge(arr, low, mid, high);
// }

// let mergeSort = function(arr){
//     ms(arr,0,arr.length-1);
// }
// //console.log(mergeSort([1,0,2,3,24,42,5,3]))

// const myArray = [1,0,2,3,24,42,5,3]
// mergeSort(myArray)
// console.log(myArray);


//left rotate an array
// function leftRotate(arr,d){
//      n = arr.length
//      d = d % n
//     let temp = []
//     for(let i = 0; i<d; i++){
//         temp.push(arr[i])
//     }
//     for(let i = d; i<n; i++){
//         arr[i-d] = arr[i];
//     }
//     for(i = (n-d); i<n; i++){
//         arr[i]= temp[i - (n-d)]
//     }
//     return arr;

// }
// console.log(leftRotate([1,2,3,4,5,6,7],3));

//optimal
// function leftRotate(arr,d){
//   rotate(arr,0,(d-1));
//   rotate(arr,d,arr.length-1);
//   rotate(arr,0,arr.length-1);
//   return arr;
// } 

// function rotate(arr,s,e){
//     while(s < e){
//         [arr[s],arr[e]] = [arr[e],arr[s]]
//         s++
//         e--;
//     }
//     return arr;
// }
// console.log(leftRotate([1,2,3,4,5,6,7],3));


//right rotate by d places
//[1,2,3,4,5,6,7] , d=3
//op = [5,6,7,1,2,3,4]

// function rotate(arr,s,e){
//     while(s<e){
//         [arr[s],arr[e]] = [arr[e],arr[s]]
//         s++
//         e--
//     }
//     return arr;
// }
// function rightRotate(arr,d){
//     let n = arr.length
//     rotate(arr,n-d,arr.length-1);
//     rotate(arr,0,n-d-1);
//     rotate(arr,0,arr.length-1)
//     return arr;
// }
// console.log(rightRotate([1,2,3,4,5,6,7,8,9],4))


//sort array of 0,1,2
//[0,1,2,0,1,2,0,1,0,2]
// var sortColors = function(nums) {
//     let n = nums.length
//     let count0 = 0
//     let count1 = 0
//     let count2 = 0;
//     for(let i = 0; i< n; i++){
//         if(nums[i] == 0) count0++;
//         else if(nums[i] == 1) count1++;
//         else count2++;
//     }
//     for(let i = 0; i<count0; i++){
//         nums[i] = 0
//     }
//     for(let i = count0; i< count0+count1; i++){
//         nums[i] = 1
//     }
//     for(let i = count0+count1; i< n; i++){
//         nums[i] = 2;
//     }
//     return nums;
// };
// console.log(sortColors([0,1,2,0,1,2,0,1,0,2]));

// var sortColors = function(nums) {
//     let n = nums.length
//     let low = 0
//     let mid = 0
//     let high = n-1

//     while(mid < high){
//         if(nums[mid] == 0){
//             [nums[low],nums[mid]] = [nums[mid],nums[low]]
//             low++
//             mid++;
//         }
//         else if(nums[mid] == 1){
//             mid++;
//         }
//         else{
//             [nums[mid],nums[high]] = [nums[high],nums[mid]]
//             high-- ;
//         }
//     }
// };


// buy and sell stocks 
// var maxProfit = function(prices) {
//     let n = prices.length
//     let minimum = prices[0]
//     let profit = 0
//     for(let i = 1; i< n; i++){
//         let cost = prices[i] - minimum;
//         profit = Math.max(cost,profit);
//         minimum = Math.min(minimum,prices[i])
//     }
//     return profit;
// };

//leaders in an array
//[10,22,12,3,0,6]
//ans = [22,12,6]

// function leaders(arr){
//     let ans = []
//     let max = -Infinity
//     let n = arr.length

//     for(let i = n-1; i >= 0; i--){
//         if(arr[i] > max){
//             ans.push(arr[i])
//         }
//         max = Math.max(arr[i], max)
//     }
//     return ans;
// }
// console.log(leaders([10,22,12,3,0,6]))


