//question.1
// var nato = (function() {
//     var letters =  {
//       "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
//       "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
//       "G": "Golf",   "H": "Hotel",   "I": "India",
//       "J": "Juliett","K": "Kilo",    "L": "Lima",
//       "M": "Mike",   "N": "November","O": "Oscar",
//       "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
//       "S": "Sierra", "T": "Tango",   "U": "Uniform",
//       "V": "Victor", "W": "Whiskey", "X": "X-ray",
//       "Y": "Yankee", "Z": "Zulu"
//     }
//     return function(word) {
//       let arr = []
//       for(let i = 0; i< word.length; i++){
//         arr.push(letters[word[i].toUpperCase()]) 
//       }
//       return arr.join(' ')
//     }
//   })()
//   console.log(nato('hi'))
//   console.log(nato('abcd'))

//question.2
function stringClean(s){
    // Function will return the cleaned string
    let str =''
    for(let i = 0; i< s.length; i++){
       console.log(typeof s[i])
      if(typeof s[i] !=='Number') 
        str += s[i]
    }
    return str;
  }
  console.log(stringClean('1,2,3'))