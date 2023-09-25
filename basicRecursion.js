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


function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      // Swap the elements at start and end positions
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
  
      // Move the pointers towards each other
      start++;
      end--;
    }
  }
  console.log(reverseArray([1,2,3,4,5]))