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

function rotate(arr,s,e){
    while(s<e){
        [arr[s],arr[e]] = [arr[e],arr[s]]
        s++
        e--
    }
    return arr;
}
function rightRotate(arr,d){
    let n = arr.length
    rotate(arr,n-d,arr.length-1);
    rotate(arr,0,n-d-1);
    rotate(arr,0,arr.length-1)
    return arr;
}
console.log(rightRotate([1,2,3,4,5,6,7,8,9],4))