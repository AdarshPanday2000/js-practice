// reverse words in a string
// var reverseWords = function(s) {
//     let temp = ""
//     let ans = ""
//     let stack = []

//     for(let i = 0; i < s.length ; i++){
//         if(s[i] == " "){
//             if(temp.length > 0){
//                 stack.push(temp)
//                 temp = ""
//             }
//             else{
//                 temp += s[i]
//             }
        
//         ans = ans + temp

//             while(stack.length !== 0){
//                ans = ans + " " + stack.pop()
//            }

//             if(ans.length !== 0 && s[0] == " "){
//                 ans.trim()
//             }
//         }
//     }
//     return ans;
// };

// console.log(reverseWords("the sky is blue"))


var largestOddNumber = function (num) {
    for (let i = num.length - 1; i >= 0; i--)
        if (num[i] % 2 !== 0) return num.slice(0, i + 1);
    return "";
};
console.log(largestOddNumber('7096'));