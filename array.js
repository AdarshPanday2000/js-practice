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


// function divisor(n){
//     let ans = []
//     for(let i = 1; i*i <= n; i++){
//         if(n % i === 0){
//             if(i !== n/i){
//                 ans.push(i, n/i)
//             }else{
//                 ans.push(i)
//             }
//         }
//     }
//     return ans;
// }
// console.log(divisor(36));

//fibonacci
// function fibonacci(n){
// //     if( n === 0 ) return 0;
// //     if(n === 1)return 1;
// //     return fibonacci(n-1) + fibonacci(n-2)
// // }
// let ans = [0,1]

// for(let i = 2; i<= n; i++){
//     ans[i] = ans[i-1]+ans[i-2]
// }
// return ans
// }
// console.log(fibonacci(6));

// function leftRotate (arr){
//     for(let i = 1; i < arr.length; i++){
//         [arr[i],arr[i-1]]= [arr[i-1], arr[i]]
//     }
//     return arr;
// }
// console.log(leftRotate([1,2,3,4,5]))

// function leftRotate (arr,k){

//     let n =arr.length
//     reverse(arr,0,k-1)
//     reverse(arr,k,n-1)
//     reverse(arr,0,n-1);

//     return arr;
// }
// function reverse(arr,s,e){
//     while(s < e){
//         [arr[s],arr[e]] = [arr[e],arr[s]]
//         s++
//         e--;
//     }
// }
// console.log(leftRotate([1,2,3,4,5],2));

// function majority (arr){
//     let ans = []
//     let n = arr.length;
//     let hash = new Array(Math.max(...arr)+1)
//     hash.fill(0);

//     for(let i = 0; i< n; i++){
//         hash[arr[i]]++
//     }
//     for(let i = 0; i< hash.length; i++){
//         if(hash[i] > Math.floor(n/3)){
//             ans.push(i)
//         }
//     }
//     return ans;
// }
// console.log(majority([1,1,1,3,3,2,2,2]))
// console.log(majority([-1,-1,-1]))

//find the number of roatations
// function rotated (arr){
//     let n = arr.length
//     let low = 0
//     let high = n-1
//     let ans = Infinity
//     let index = -1;

//     while(low <= high){
//         let mid = Math.floor((low+high)/2)
//         if(arr[low] <= arr[mid]){
//             if(arr[low] < ans){
//                 index = low;
//                 ans = arr[low]
//             }
//             low = mid+1
//         }

//         else{
//             if(arr[mid] <= arr[high]){
//                 index = mid;
//                 ans = arr[mid]
//             }
//             high = mid -1
//         }
//     }
//    // return ans;
//     return index;
// }

// console.log(rotated([3,4,5,1,2]));

// function rotatedSorted(arr){
//     let n = arr.length
//     let rotatedIndex = -1
    
//     //find index of biggest rotated element
//     for(let i = 1; i < n; i++){
//         if(arr[i] <= arr[i+1]){
//             rotatedIndex = i+1
//             console.log(rotatedIndex
//                 )
//             break;
//         }
//     }

//     //check from 0 to rotatedindex that is it ascending
//     for(let i = 0; i <= rotatedIndex; i++){
//         if(arr[i] < arr[i+1]){
//             return true
//         }
//         else return false;
//     }

//     //check from rotated to last that is it ascending
//     for(let i = rotatedIndex + 1; i < n; i++){
//         if (arr[i] < arr[i+1]){
//             return true;
//         }else{
//             return false;
//         }
//     }
// };
// 1,2,3,4   4,1,2,3  3,4,1,2  2,3,4,1  
// function rotatedSorted(arr){
//     let n = arr.length
//     let minIndex = -1
//     let minValue = Infinity
//     for(let i = 0; i<n ; i++){
//         minIndex = Math.
//         minValue = Math.min(minValue,arr[i])
//     }
// }

// console.log(rotatedSorted([4,5,6,7,1,2,3]));
// console.log(rotatedSorted([5,6,7,1,4,5,2,3]));

//ans = 0
//[1,2,3,1,1,1,1,2,3], k =5
// i
//sum=0
//    j
//sum += arr[j]
// if(sum = k) max(j-i+1,ans)


//arr[1,1,2,2,2,3,3]
//ans = [1,2,3]

// function remove(arr){
//     let i = 0
//     for(let j = 1; j<arr.length; j++){
//         if(arr[j] !== arr[i]){
//             i++;
//             arr[i] = arr[j]
//         }
//     } 
//     i++
//     while(i < arr.length){
//         arr[i] = '_'
//         i++
//     }
//     return arr;
    
// }
// console.log(remove([1,1,2,2,3,3,3]))


// function removeDup(arr){
//     let set = new Set(arr)
//     let temp = [...set]
//     return temp
// }
// console.log(removeDup([1,1,2,2,3,3,3]))


//arr1 =[1,2,3,4,5]
//arr2= [2,3,4,4,5]

//ans=[1,2,3,4,5]

// function union(arr1,arr2){
//     let ans = arr1.concat(arr2);
//     let set = new Set(ans);
//     let temp = [...set]
//     return temp;
// }
// console.log(union([1,2,3,4,5], [2,3,4,4,5]));

// function findUnion(arr1,arr2){
//     let ans = []
//     let i = 0
//     let j = 0
//     while(i <= arr1.length && j <arr2.length){
//         if(arr1[i] <= arr2[j]){
//             if(ans.length === 0 || ans[ans.length-1] !==arr1[i]){
//                 ans.push(arr1[i])
                
//             }
//             i++;           
//         }
//         else{
//             if(ans.length === 0 || ans[ans.length-1] !==arr2[j]){
//                 ans.push(arr2[j])
//             }
//             j++;
//         }
//     }
//     while(i < arr1.length){
//         if(ans[ans.length-1] !== arr1[i]){
//             ans.push(arr1[i])
//         }
//     }
//     while(j < arr2.length){
//         if(ans[ans.length-1] !== arr2[j]){
//             ans.push(arr2[j])
//         }
//     }
//     return ans;
// };

// console.log(findUnion([1,2,3,4,5], [2,3,4,4,5]));


// function maxOnes(arr){
//     let count = 0
//     let output = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === 1){
//             count += 1
//         }
//         else if(arr[i] == 0){
//             output = count
//             count = 0
//         }
//          output = Math.max(output,count)
//     }
//     return output;
// }

// console.log(maxOnes([1,1,0,1,1,1]))


// function secondLargest(arr){
//     let largest = arr[0]
//     let SL = -Infinity 
//     for(let i = 1; i<arr.length ; i++){
//         if(arr[i] > largest){
//             SL = largest
//             largest = arr[i]
//         }
//         else if(arr[i] < largest && arr[i]>SL){
//             SL = arr[i]
//         }
//     }
//     return SL;
// }
// console.log(secondLargest([1,2,3,7,7,5]))

// function secondSmallest(arr){
//     let smallest = arr[0]
//     let secondSmall = Infinity
//     let n = arr.length
    
//     for(let i = 1; i < n; i++){
//         if (arr[i] < smallest){
//             secondSmall = smallest
//             smallest = arr[i]
//         }
//         else if(arr[i] !== smallest && arr[i] < secondSmall){
//             secondSmall = arr[i]
//         }
//     }
//     return secondSmall;
// }
// console.log(secondSmallest([3,1,4,5,2,3,6]))

// function isSorted(arr){
//     for(let i = 1; i< arr.length ; i++){
//         if(arr[i] >= arr[i-1]){
//             //return true
//         }
//         else return false
//     }
//     return true
// }
// console.log(isSorted([1,2,3,7,5]))


// function duplicates(arr){
//     let i = 0 
//     for(let j = 1 ; j< arr.length; j++){
//         if(arr[i] !== arr[j]){
//             arr[i+1] = arr[j]
//             i++
//         }
//     }
//     return i+1;
// }
// console.log(duplicates([1,1,2,2,3,3]))


// function leftSingleRotate(arr){
//     let n = arr.length
//     let temp = arr[0]
//     for(let  i = 1; i< n ; i++){
//         arr[i-1] = arr[i]
//     }
//     arr[n-1] = temp ;
//     return arr;  
// }  
// console.log(leftSingleRotate([1,2,3,4,5]))


// function dLeftRotate(arr,d){
//     let n = arr.length
//     reverse(arr,0,d-1)
//     reverse(arr,d,n-1)
//     reverse(arr,0,n-1)
//     return arr;
// }
// function reverse(nums,s,e){
//     //let s = 0
//     //let e = nums.length-1
//     while(s < e){
//         [nums[s], nums[e]] = [nums[e], nums[s]]
//         s++
//         e--
//     }
// }
// console.log(dLeftRotate([1,2,3,4,5,6,7],3))

// function zeroAtEnd(arr){

//     //find the first 0th index
//     for(let i = 0 ; i< arr.length ; i++){
//         if(arr[i] === 0){
//             j = i;
//             break;
//         }
//     }
//     //loop from i to lasr swap elem
//     for(let i = j+1; i<arr.length; i++){
//         if(arr[i] !== 0){
//             [arr[i], arr[j]] = [arr[j], arr[i]]
//             j++
//         }
//     }
//     return arr;
// }
// console.log(zeroAtEnd([1,0,2,3,2,0,0,4,5,1]))


// function maxOnes(arr){
//     let max = 0
//     let count = 0

//     for(let i = 0; i <arr.length; i++){
//         if(arr[i] == 1){
//             count++
//             max = Math.max(count,max)
//         }
//         else{
//             count = 0
//         }
//     }
//     return max;
// }
// console.log(maxOnes([1,1,0,1,1,1,1,0,1,1]))


// function numberOnce(arr){
//     let hash = new Array(Math.max(...arr) + 1).fill(0);

//     for(let i = 0; i<arr.length ; i++){
//         hash[arr[i]]++
//     }
//     for(let i = 0; i<hash.length; i++){
//         if(hash[arr[i]] == 1){
//             return arr[i]
//         }
//     }
// }
// console.log(numberOnce([1,1,2,2,3,4,4]))

// function checkSorted(arr){
//     let count = 0
//     let n = arr.length
//     if(arr[0] < arr[n-1]) count++;
//     for(let i = 1; i< n; i++){
//         if(arr[i] > arr[i-1]){

//         }else{
//             count++
//         }
//     }
//     if(count < 2) return true;
//     else return false;
// }
// console.log(checkSorted([3,4,2,1,5]))

// function longestSubarray(arr,k){
//     // let length = 0
//     // for(let i = 0; i< arr.length ; i++){
//     //     let sum = 0
//     //     for(let j = i; j< arr.length; j++){
//     //         sum += arr[j]
//     //         if(sum ===  k){
//     //             length = Math.max(length, j-i+1);
//     //         }
//     //     }
//     // }
//     // return length;

    
// }
// console.log(longestSubarray([2,3,5,1,9],10))


 
// input= 'hello world
//output = 'world hello

//[7,15,6,3]
// function bananas(arr,numBananas){
//     let n = arr.length
//     let totalHrs = 0
//     for(let i = 0; i<n ; i++){
//         totalHrs += Math.ceil((arr[i]/numBananas))
//     }
//     return totalHrs;
// }

// function minimumRateToEatBananas(arr, h) {
//     // let n = arr.length
//     // let hours; 
//     // for(let  i = 1; i <= Math.max(...arr); i++){
//     //     hours = bananas(arr,i)
//     //     if(hours <= h){
//     //         return i;
//     //     }
//     // }

//     let n = arr.length
//     let low = 1
//     let high = Math.max(...arr)
//     let hours;
//     while(low <= high){
//         let mid = Math.floor((low+high)/2)
//         hours = bananas(arr,mid)
//         if(hours <= h){
//             high = mid-1
//         } else{
//             low = mid+1
//         }
//     }
//     return low;
// }
// console.log(minimumRateToEatBananas([7,15,6,3],8))


//arr = [10, 22, 12, 3, 0, 6]
// function leader(arr){
//     let n = arr.length
//     let ans = [arr[n-1]]
//     let res = arr[n-1]
//     for(let i = n-2; i>= 0 ; i--){
//         if(arr[i] > res){
//          ans.push(arr[i])
//          res = arr[i]
//         } 
//     }
//     return ans;
// }
// console.log(leader([10,22,12,3,0,6]))

//array[] = {3,1,2,4}, k = 6
//function sumSubarray(arr,k){
    // let n = arr.length 
    // let res = 0
    // for(let i = 0; i<n ; i++){
    //     let sum = 0
    //     for(let j = i; j<n ; j++){
    //         sum += arr[j]
    //         if(sum === k){
    //             res++
    //         }
    //     }
    // }
    // return res;


    //////////////////hash map //////////////////////////////
//     let map = {0:1}
//     let sum = 0
//     let count = 0
//     for(let i = 0 ; i <arr.length ; i++){
//         sum += arr[i]
//         if(map[sum-k]){
//             count += map[sum-k]
//         }
//         if(map[sum]){
//             map[sum] += 1
//         } else{
//             map[sum] = 1
//         }
//     }
//     return count;
// }
// console.log(sumSubarray([3,1,2,4],6));
//////////////////////////////////////////////////////////////

// function maximumOnes(matrix){
//     let n = matrix.length
//     let m = matrix[0].length

//     let index = -1
//     let maxCount = -1
//     for(let i = 0; i<n; i++){
//         let countRow = 0
//         for(let j = 0; j< m; j++){
//             countRow += matrix[i][j]
//         }
//         if(countRow > maxCount){
//             maxCount = countRow
//             index = i;
//         }
//     }
//     return index;
// }
// console.log(maximumOnes([[0,0,1,1,1],[0,0,0,0,0],[0,1,1,1,1]]))


// function lowerBound(arr,k){
//     let n = arr.length
//     let low = 0
//     let high = n-1
//     let ans = n
//     while(low <= high){
//         let mid = Math.floor((low+high)/2)
//         if(arr[mid] >= k){
//             ans = mid
//             high = mid-1
//         } else{
//             low = mid+1
//         }
//     }
//     return ans;
// }

// function maximumOnes(matrix){
//     let n = matrix.length
//     let m = matrix[0].length
//     let index = -1
//     let countMax = 0
//     for(let i = 0 ; i < n; i++){
//         let countOnes = m - lowerBound(matrix[i],1)
//         if(countOnes > countMax){
//             countMax = countOnes
//             index = i
//         }
//     }
//     return index;
// }
// console.log(maximumOnes([[0,0,1,1,1],[0,0,0,0,0],[0,1,1,1,1]]))


//[0,1,2,4,5,8,9,10], k = 7 , arr[mid] >= k
function lowerBound(arr,k){
    let n = arr.length
    let low = 0
    let high = n-1

    while(low <= high){
        let mid = Math.floor((low+high) / 2)
        if(arr[mid] >= k){
            high = mid -1
        } 
        else{
            low = mid +1
        }
    }
    return low;
}

function upperBound(arr,k){
    let n = arr.length
    let low = 0
    let high = n-1

    while(low <= high){
        let mid = Math.floor((low+high) / 2)
        if(arr[mid] > k){
            high = mid -1
        } 
        else{
            low = mid +1
        }
    }
    return low;
}
// console.log(lowerBound([0,1,2,4,5,8,9,10],8))
// console.log(upperBound([0,1,2,4,5,8,9,10],8))

//[3,4,13,13,13,20,40],k=13
// function findIndex(arr,k){
//     let leftIndex = lowerBound(arr,k)
//     let rightIndex = upperBound(arr,k)
//    // return [leftIndex,rightIndex-1]
//    if(arr[leftIndex] !== k) return -1;
//     return rightIndex-leftIndex
//}
// console.log(findIndex([3,4,13,13,13,20,40],2))


//search in a rotated ARRAY
// function searchIndex (arr,k){
//     let n = arr.length
//     let low = 0
//     let high = n-1

//     while(low <= high){
//         let mid = Math.floor((low+high)/2)
//         if(arr[mid] == k){
//             return mid
//         }
//         else if(arr[low] <= arr[mid]){
//                 if(k >= arr[low] && k <= arr[mid]){
//                     high = mid -1
//                 }else{
//                     low = mid +1
//                 }
//             }
//         else {
//             if(arr[mid] <= k && arr[high] > k){
//                 high = mid -1
//             }else{
//                 low = mid +1
//             }
//         }    
//      }
//      return -1;
// };
// console.log(searchIndex([4,5,6,7,0,1,2,3], 0))

//minimum el in array
//[3,4,5,1,2]

// function minElement (arr){
//     let low = 0
//     let high = arr.length -1
//     let ans = Infinity
//     while(low <= high){
//         let mid = Math.floor((low+high)/2)

//         //check if left half is sorted
//         if(arr[low] <= arr[mid]){
//             ans = Math.min(ans,arr[low]) // lowest value in ans
//             low = mid +1
//         }
//         else{
//             ans = Math.min(ans,arr[mid])
//             high = mid -1
//         }
//     }
//     return ans;
// }
//console.log(minElement([3,4,5,0,1,2]))

// function minElementIndex(arr){
//     let low = 0
//     let high = arr.length -1
//     let ans = Infinity
//     let index = -1
//     while(low <= high){
//         let mid = Math.floor((low+high)/2)

//         //check if left half is sorted
//         if(arr[low] <= arr[mid]){
//             if(arr[low] < ans){
//                 ans = arr[low]
//                 index = low
//             }
//             low = mid +1
//         }
//         else{
//             if(arr[mid] < ans){
//                 ans = arr[mid]
//                 index = mid
//             }
//             high = mid -1
//         }
//     }
//     return index;
// }
// console.log(minElementIndex([3,4,5,1,2]))


// function L(m,n){
//    return m**n
// }
// function nRoot(m,n){
//     let low = 1
//     let high = m

//     while(low <= high){
//         let mid = Math.floor((low+high)/2)
//         if(L(mid,n) === m){
//             return mid;
//         }
//         else if(L(mid,n) > m){
//             high = mid -1
//         }
//         else{
//             low = mid +1
//         }
//     }
//     return -1;
// }
// console.log(nRoot(27,3))


//koko eating banana
// function L(arr,h){
//     let res = 0
//     for(let i = 0; i<arr.length; i++){
//        res += Math.ceil(arr[i]/h)
//     }
//     return res;
// }

// function koko(arr,h){
//     let low = 1
//     let high = Math.max(...arr)

//     while(low <= high){
//         let mid = Math.floor((low+high)/2)
//         let totalHrs = L(arr,mid)
//         if(totalHrs === h){
//             return mid ;
//         }
//         else if(totalHrs > h){
//             low = mid +1
//         }
//         else{
//             high = mid -1
//         }
//     }
//     return -1;
// }
// console.log(koko([7,15,6,3],8))


//M boquets
//[7,7,7,7,13,11,12,7] , m=2, k=3
// function L (arr,days,m,k){
//     let count = 0, guldaste = 0
//     for(let i = 0; i<arr.length ; i++){
//         if(arr[i] <= days){
//             count++
//             if(count >= k){
//                 guldaste++
//                 count=0
//             }
//         }
//         else count = 0
//     }
//     return guldaste 
// }

// function guldasta(arr,m,k){
//     let low = Math.min(...arr)
//     let high = Math.max(...arr)
//     let n = arr.length
//     if(n < m*k) return -1;

//     while(low <= high){
//         let mid = Math.floor((low+high)/2)
//         if(L (arr,mid,m,k) == m){
//             high = mid -1
//         }
//         else{
//             low = mid +1
//         }
//     }
//     return low;
// }
// console.log(guldasta([7,7,7,7,13,11,12,7],2,3))


//[1,2,3,4,5], limit = 8
//op = 3
// function L(arr,k){
//     let count = 0
//     for(let i = 0; i<arr.length ; i++){
//         count += Math.ceil(arr[i]/k)
//     }
//     return count;
// }

// function smallestDivisor (arr, limit){
//     let low = Math.min(...arr)
//     let high = Math.max(...arr)

//     while(low <= high){
//         let mid = Math.floor((low+high)/2)
//         let threshold = L(arr,mid)

//         if(threshold <= limit){
//             high = mid -1
//         }
//         else{
//             low = mid +1
//         }
//     }
//     return low;
// }
// console.log(smallestDivisor([1,2,3,4,5],8))


//aggresive cows
//[0,3,4,7,10,9] , k = 4 //place 4 cows in arr
//op = 3 //manimum maximum distace possible
// function L(arr, distance,k){
//     let countCows = 1, last = arr[0]
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] - last >= distance){
//             countCows++
//             last = arr[i]
//         }
//         if(countCows >= k) return true;
//     }
//     return false;
// }

// function cows(arr,k){
//     arr.sort((a,b) => a-b)
//     let n = arr.length
//     let low = 1
//     let high = arr[n-1]

//     while(low <= high){
//         let mid = Math.floor((low+high)/2)
//         if(L (arr,mid,k)){
//             low = mid +1
//         }
//         else{
//             high - mid - 1
//         }
//     }
//     return high;
// }
// console.log(cows([0,3,4,7,10,9],4))

//finding kth element
// function kth(arr,k){
//     let low = 0
//     let high = arr.length - 1

//     while(low <= high){
//         let mid = Math.floor((low+high)/2)
//         let missingValues = arr[mid] - (mid+1)

//         if(missingValues < k){
//             low = mid + 1
//         }
//         else{
//             high = mid - 1
//         }
//     }
//     return high + k + 1
// }
// console.log(kth([2,3,4,7,11],5))


