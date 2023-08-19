// question.1
// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.
// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.
// should work also on Leading and Trailing Spaces and caps.

// function dropCap(n) {
//     let arr = n.split(' ')
//     let resultArr = [];
//     for(let i=0; i < arr.length; i++){
//         if(arr[i].length > 2) resultArr.push( arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase())
//         else resultArr.push(arr[i].toLowerCase())
//     }
//      return resultArr.join(' ');
//   }
//console.log(dropCap('apple of banana'));



//question.2

// function getMean(arr, x, y) {
//     if( x < 2 || x > arr.length || y < 2 || y>= arr.length) return -1;
//    let sum1 = 0;
//    let sum2 = 0;
//    for(let i =0 ; i < x; i++){
//      sum1 += arr[i]
//    }
//    for(let i = arr.length-1; i >arr.length-1-y; i-- ){
//      sum2 += arr[i]
//    }
//    let mean1 = sum1/x;
//    let mean2 = sum2/y;
//    return (mean1+mean2)/2;
//  }

// console.log(getMean([1,3,2,4],2,3));



// //question.3
// //gravity flip
// const flip=(d, a)=>{
//     if(d === 'R') a.sort(function(a,b){
//       return a-b
//     })
//      if(d === 'L') a.sort(function(a,b){
//       return b-a
//     })
//     return a;
//   }

//question.4
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// function sum (str){
//     let arr = str.split('')
//     let arr1 = []
//     for(let i=0 ; i< arr.length ; i +2){
//         arr1[i +1] ? arr1.push(arr[i]+ arr[i+1]) : arr1.push(arr[i]+ '_')
//     }
//     return arr1;
// }