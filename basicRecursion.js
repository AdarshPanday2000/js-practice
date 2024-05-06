//print n to 1

// let printNumber = function(i,n){
//     if(n == i) return;
//     console.log(n)
//     printNumber(i,n-1);
// }
// printNumber(0,5)

//print 1 to n
// let printNumber = function(i,n){
//     if(i < 1){
//         return;
//     }
//     printNumber(i-1,n)
//     console.log(i) 
// }
// printNumber(5,5)

// let printNumber = function(i,n){
//     if(i < 1){
//         return;
//     }
//     printNumber(i-1,n)
//     console.log(i) 
// }
// printNumber(7,7)

//sum till n numbers
// let sum = function(n){
//     if(n == 0){
//         return 0;
//     }
//     return n + sum(n-1)
// }

// console.log(sum(3));

//factorial
// let factorial = function(n){
//     if(n == 1){
//         return 1;
//     }
//     return n * (factorial(n-1))
// }
// console.log(factorial(4))

//reverse An array using recursion
// let revArr = function(l,r){
//     if(l >= r){
//         return;
//     }
//     let temp = l
//     l = r
//     r = temp
//     //return temp;
//     revArr(l+1,r-1);
// }
// //revArr(0,n-1)
// console.log(revArr([1,2,3,4,5]))

// let revArr = function(arr){
//     s = 0
//     e = arr.length-1
//     while(s < e){
//         let temp = arr[s]
//         arr[s] = arr[e]
//         arr[e] = temp;
//         s++;
//         e--;
//     }
// }
// console.log(revArr([1,2,3,4,5]))


// function reverseArray(arr) {
//     let start = 0;
//     let end = arr.length - 1;
  
//     while (start < end) {
//       // Swap the elements at start and end positions
//       const temp = arr[start];
//       arr[start] = arr[end];
//       arr[end] = temp;
  
//       // Move the pointers towards each other
//       start++;
//       end--;
//     }
//   }

// function reverseArray(arr, start = 0, end = arr.length - 1) {
//     if (start >= end) {
//       // Base case: when the start pointer meets or surpasses the end pointer
//       return arr;
//     }
  
//     // Swap the elements at the start and end positions
//     const temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
  
//     // Recursively call the function with updated pointers
//     return reverseArray(arr, start + 1, end - 1);
//   }
//   console.log(reverseArray([1,2,3,4,5]))


// function reverseArray(arr, start = 0, end = arr.length - 1) {
//     if (start >= end) {
//       // Base case: when the start pointer meets or surpasses the end pointer
//       return;
//     }
  
//     // Swap the elements at the start and end positions
//     const temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
  
//     // Recursively call the function with updated pointers
//     reverseArray(arr, start + 1, end - 1);
//   }
  
//   // Example usage:
//   const myArray = [1, 2, 3, 4, 5];
//   reverseArray(myArray);
//   console.log(myArray); // Output: [5, 4, 3, 2, 1]

  
// let palindrome = function(str,i){
//     let n = str.length
//     if(i >= n/2){
//         return true;
//     }
//     if(str[i] !== str[n-i-1]){
//         return false;
//     }
//      return palindrome(str,i+1);
// }
// console.log(palindrome('padaa',0))


// let palindrome = function(str,i){
//     if(i >= str.length/2){
//         return true
//     }
//     if(str[i] !== str[str.length-i-1]){
//         return false;
//     }
//     return palindrome(str,i+1)
// }
// console.log(palindrome('MADAM'));


// let fibonacci = function (n){
//     if(n <= 1){
//         return n;
//     }
//     let last = fibonacci(n-1);
//     let secondlast = fibonacci(n-2);
//      return last + secondlast;
// }
// console.log(fibonacci(4));

//hashing
// let count = function(arr,target){
//     let hashArr = new Array( Math.max(...arr)+1)
//     hashArr.fill(0);

//     for(let num of arr){
//         hashArr[num]++
//     }
//     return hashArr[target];
// }
// console.log(count([1,2,3,12,1,2,3],3))

// function majorElement (arr){
//     let n =arr.length
//     let hash = new Array(Math.max(...arr)+1)
//     hash.fill(0);

//     for(let i =0; i< n; i++){
//         hash[arr[i]]++
//     }
//     for(let i=0; i<hash.length; i++){
//         if(hash[i] > n/2){
//             return i;
//         }
//     }
// }
// console.log(majorElement([2,2,3,3,1,2,2]));
// console.log(majorElement([1,1,2,2,3,3,3,3,3]))

// function missingNumber(arr){
//    let n = arr.length
//    let hash = new Array(n+1)
//    hash.fill(0);
   
//    for(let i = 0; i< n-1; i++){
//     hash[arr[i]] = 1
//    }
//    for(let i = 0; i< n; i++){
//     if(hash[i] == 0){
//         return i;
//     }
//    }
// }
// console.log(missingNumber([0,1,2,4,5,6,3,7,9]));


// let stringCount = function(str,target){
//    let newArr = str.split('')
//    let hashArr = new Array(27)
//    hashArr.fill(0)

//    for(let num of newArr){
//       hashArr[num]++
//    }
//    return hashArr[target];
// }
// console.log(stringCount('adarsh','a'));

// function singleNumber (arr){
//     let n =arr.length
//     let hash = new Array(Math.max(...arr)+1)
//     hash.fill(0)
//     for(let i = 0; i<= n; i++){
//         hash[arr[i]]++
//     }
//     for(let i = 0; i<= n; i++){
//         if(hash[arr[i]] == 1){
//             return arr[i];
//         }
//     }
// }
// console.log(singleNumber([1,1,2,2,3,4,4]))

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

// var subsetsWithDup = function(nums) {
//     let n = nums.length
//     let res = []

//     function recursion(nums,temp,index,res){
//         res.push([...temp])
//         for(let i = index ; i < n; i++){
//             if(i !== index && nums[i] == nums[i-1]) continue;
//             temp.push(nums[i])
//             recursion(i+1, temp , nums,res)
//             temp.pop()
//         }
//     }
//     nums.sort((a,b) => {return b -a})
//     recursion(nums,[],0,res)
//     return res;
// };

// console.log(subsetsWithDup([1,2,2]))


// QUES- sort a given array 
// function sort (arr,size){
//   if(size <= 1){
//     return true
//   }
//   if(arr[0] > arr[1]){
//     return false
//   }
//   else{
//     let sorted = sort(arr.slice(1), size-1)
//     return sorted;
//   }
// }
// console.log(sort([1,2,4,5],4))


// QUES - find a element in an array
// function find(arr,target){
//   if(arr.length == 0){
//     return 0;
//   }

//   if(arr[0] == target){
//     return true;
//   }

//   return find(arr.slice(1),target)
// }
// console.log(find([1,2,3,4,5,6], 5))


//  ques  -  Find if a target is present or not in an array . using binary search in recursion
// function binarySearch(arr,target,start = 0,end = arr.length-1){

//   //base case
//   if(start > end){
//     return false;
//   }

//   let mid = Math.floor((start+end)/2)

//   if(arr[mid] == target){
//     return true;
//   }

//   if(target < arr[mid]){
//     return binarySearch(arr, target, start, mid-1)
//   }
//   else return binarySearch(arr,target,mid+1, end);
// }
// console.log(binarySearch([1,2,3,4,5],4))