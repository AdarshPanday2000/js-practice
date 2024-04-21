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


// 16- check prime number
// function primeChecker(num){
//     for(let i = 2 ; i < num ; i++){
//         if(num % i == 0){
//             return false
//         }
//     }
//     return true
// }
// console.log(primeChecker(11))


// 17- check prime number in given range
// min = 10 , max =16
// function primeInRange(min, max){
//     let res = []
//     for(let i = min; i <= max; i++){
//         if(primeCheck(i) == true){
//             res.push(i)
//         }
//     }
//     return res;
// }

// function primeCheck(num){
//     for(let i = 2; i < num; i++){
//         if(num % i == 0){
//             return false
//         }
//     }
//     return true;
// }
// console.log(primeInRange(10,16))


// 18 - armstrong number
// function isArmstroNumbengr(num) {
//     // Convert the number to a string to get the length (number of digits)
//     let numStr = String(num);
//     let numDigits = numStr.length;

//     // Initialize sum to 0
//     let sum = 0;

//     // Loop through each digit of the number
//     for (let i = 0; i < numDigits; i++) {
//         // Get the current digit by converting the character to a number
//         let digit = Number(numStr[i]);
        
//         // Add the digit raised to the power of the number of digits to the sum
//       sum += digit ** numDigits;
//     }

//     // Check if the sum equals the original number
//     return sum === num;
// }

// console.log(isArmstroNumbengr(371))


// 19 - check perfect number
// perfect number = sum of its proper divisors 
// function perfectNum(num){
//     let sum = 0
//     for(let  i = 1; i <= num-1 ; i++){
//         if(num % i == 0){
//             sum += i
//         }
//     }
//     return sum === num;
// }
// console.log(perfectNum(6))


// 20- even /odd
// function checkEvenOdd(num){
//     if(num % 2 == 0){
//         return (`Even`)
//     }
//     else return ('Odd')
// }
// console.log(checkEvenOdd(5))


// 21 - check wheather a given number is positive or negative
// function check(num){
//     if(num > 0){
//         return ('Positive')
//     }
//     else return ('neg')
// }
// console.log(check(1))


// 22- find sum of N natural numbers
// function prefixSum(num){
//     let sum = 0
//     for(let i = 0; i <= num ; i++){
//         sum = sum + i
//     }
//     return sum;
// }
// console.log(prefixSum(6))

// 23- find sum of AP
// n = number of terms , a = first term , d = diffrence to next number
// function AP(n,a,d){
//     let sum = 0
//     for(let i = 1; i <= n ; i++){
//         sum = sum + a
//         a = a + d;
//     }
//     return sum
// }
// console.log(AP(4,2,2))


// 24 - greatest of three numbers
// function greaetest(a,b,c){
//    return Math.max(a,b,c)
// }
// console.log(greaetest(1,2,3))

// 25 - reverse a number  / 427 -> 724
// function reverseNumber(num){
//     let d;
//     let res = 0
//     while(num != 0){
//         d = num % 10
//         res = res*10 + d
//         num = Math.floor(num/10)
//     }
//     return res;
// }
// console.log(reverseNumber(427))

// 26- fibbonachi
// function fibonacchi(num){
//     let prev= 0
//     let next = 1
//     let curr;
//     for(let i = 2 ; i <= num; i++){
//         curr = next+prev
//         prev = next
//         next = curr
//     }
//     return curr
// }
// console.log(fibonacchi(8))


// 27- palindrome string
// function palindromeString(str){
//     let n = str.length
//     let start = 0
//     let end = n-1
//     while(start < end){
//         if(str[start] != str[end]){
//             return false
//         }
//         start++
//         end--
//     }
//     return true;
// }
// console.log(palindromeString('MADAMM'))


// 28 - count vowel and const and whitespaces
// function count(str){
//     let vowel = 0;
//     let consonant = 0;
//     let whiteSpace = 0;
//     for(let i = 0 ; i < str.length; i++){
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//             vowel++
//         }
//         else if(str[i] == ' '){
//             whiteSpace++
//         }
//         else consonant++
//     }
//     return (`Vowel : ${vowel}, consonant : ${consonant}, whiteSpaces : ${whiteSpace}`);
// }
// console.log(count('adarsh is a boy'))


// 29 - get ASCII VALUE OF CHARACTER
// function getAscii(str){
//     return str.charCodeAt(1)
// }
// console.log(getAscii('Adarsh'))

// 30 - remove vowels and return a new string
// function removeVowels(str){
//     let res = ''
//     for(let i = 0 ; i < str.length; i++){
//         if(str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u'){
//             res += str[i]
//         }
//     }
//     return res;
// }
// console.log(removeVowels('adarsh is a bad boy'))


// 31- remove spaces from string
// function removeSpace(str){
//     let res = '';
//     for(let i = 0 ; i < str.length; i++){
//         if(str[i] !== ' '){
//             res += str[i]
//         }
//     }
//     return res;
// }
// console.log(removeSpace('hey hi hello'))


// 32 - remove all cheez from string except alphabets
// function removeChars(str){
//     let res = ''
//     for(let i = 0 ; i < str.length ; i++){
//         let charCode = str.charCodeAt(i)

//         if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
//             res += str[i]
//         }
//     }
//     return res;
// }
// console.log(removeChars('123@ada$%rsh'))


// 33- reverse a string
// function reverseString(str){
//    let res = ''
//    for(let i = str.length - 1 ; i >= 0 ; i--){
//     res += str[i]
//    }
//    return res;
// }
// console.log(reverseString('adarsh is a boy'))


//34 - remove brackets from a string
// function removeBrackets(str){
//     let res = ''
//     for(let i = 0; i < str.length ; i++){
//         if(str[i] !== '(' && str[i] !== ')'){
//             res += str[i]
//         }
//     }
//     return res;
// }
// console.log(removeBrackets('(a+b))'))


// 35- Capitalize first and last character of each word of a string
// function capsFirstLast(str){
//     let words = str.split(' ');
//     // Iterate over each word in the array
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];

//         // Check if the word has more than one character
//         if (word.length > 1) {
//             // Capitalize the first character
//             words[i] = word[0].toUpperCase() + word.slice(1, -1) + word[word.length - 1].toUpperCase();
//         } else {
//             // If the word has only one character, capitalize it
//             words[i] = word.toUpperCase();
//         }
//     }

//     // Join the words back into a single string
//     return words.join(' ');
// }
// console.log(capsFirstLast('take you forward'))


// 36- count frequency of characters in string
// function countFreq(str){
//     let frequency = {}

//     for(let i of str){
//         // if str is present add 1 otherwise start count
//         frequency[i] = (frequency[i] || 0) + 1
//     }
//     return frequency;
// }
// console.log(countFreq('adarsh pandey'))


// 37- Find Non-repeating characters of a String
// function nonRep(str){
//     frequency = {}

//     for(let i of str){
//         frequency[i] = (frequency[i] || 0 ) + 1
//     }
//     // filter character with freq 1
//     let nonRepeatingChar = Object.keys(frequency).filter(i => frequency[i] == 1)
//     return nonRepeatingChar 
// }
// console.log(nonRep('yahoo'))


//38 - find anagram of string (permutation)
// function anagram(str1, str2){
//     let string1 = str1.split('').sort((a,b) => a-b)
//     let string2 = str2.split('').sort((a,b) => a-b)

//     for(let i = 0 ; i < string1.length; i++){
//         if(string1[i] !== string2[i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(anagram('CAT', 'ACT'))


// 39 - maximum occuirng character in a string
// function countMax(str){
//     let freq = {}

//     for(let i of str){
//         freq[i] = (freq[i] || 0 ) + 1
//     }
//     let maxFreq = 0
//     let maxChar = ''

//     // for in loop for object
//     for(let i in freq){
//         if(freq[i] > maxFreq){
//             maxFreq = freq[i]
//             maxChar = i
//         }
//     }
//     return maxChar
// }
// console.log(countMax('adarsh'))