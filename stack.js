//implement stack using arrays
// class Stack {
//     constructor(){
//         this.arr = []
//         this.top = -1
//     }

//     push
//     push(element){
//         this.arr[++this.top] = element
//     }

//     pop(){
//         this.arr.pop()
//         this.top--;
//     }

//     peak(){
//         return this.arr[this.top];
//     }

//     size(){
//         return this.top+1
//     }

//     isEmpty(){
//         return (this.top == -1);
//     }
// }

// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// console.log(stack.isEmpty())
// console.log(stack.peak())



//implement queue using arrays
// class queue {
//     constructor(size){
//         this.arr = []
//         this.count = 0
//         this.front = 0
//         this.rear = 0
//         this.size = size;
//     }

//     push(val){
//         if(this.count === this.size){
//             return -1
//         }
//         this.arr[this.rear % this.size] = val
//         this.rear++
//         this.count++
//     }

//     pop(){
//         if(this.size === 0){
//             return -1
//         }
//         this.arr[this.front % this.size] = undefined
//         this.front++
//         this.count--
//     }
// }

// let myQueue = new queue (3)
// myQueue.push(10)
// myQueue.push(20)
// myQueue.push(30)
// myQueue.pop()
// myQueue.push(40)
// console.log(myQueue)



//implement stack using queues
// by taking two queues
// class stack {
//     constructor(){
//         this.Q1 = []
//         this.Q2 = []
//     }

//     push(val){
//         this.Q2.push(val)
//         while(this.Q1.length !== 0){
//             this.Q2.push(this.Q1.shift())
//         }
//         [this.Q1, this.Q2] = [this.Q2, this.Q1]
//     }

//     pop(){
//         this.Q1.pop()
//     }
// }

// let myStack = new stack()
// myStack.push(10)
// myStack.push(20)
// myStack.push(30)
// myStack.pop()
// console.log(myStack)


//implement queue using stack
// class queue{
//     constructor(){
//         this.input = []
//         this.output = []
//     }

//     push(val){
//         this.input.push(val)
//     }

//     pop(){
//         if(this.output.length !== 0){
//             this.output.pop()
//         }
//         else{
//             while(this.input.length > 0){
//                 this.output.push(this.input.pop())
//                 //this.output.pop()
//             }
//         }
//         return this.output.pop()
//     }

//     peek(){
//         if(this.output.length===0)
//         {
//             while(this.input.length>0)
//             {
//                     this.output.push(this.input.pop())
//             }
//         }
//         return this.output[this.output.length-1]
//     }

//     empty(){
//         if(this.input.length===0  && this.output.length===0) return true
//     else return false
//     }   
       
// }

// let myQueue = new queue()
// myQueue.push(10)
// myQueue.push(20)
// myQueue.push(30)
// myQueue.pop()
// myQueue.peek()
// console.log(myQueue)


//next smallest element
// function nextSmallest(arr){
//     let n = arr.length
//     let ans = []
//     let stack = new Array(n).fill(-1)

//     for(let i = n-1; i >= 0; i--){
//         let curr = arr[i]
//         while(stack[stack.length-1] >= curr){
//             stack.pop()
//         }

//         //ans is stack ka top
//         ans[i] = stack[stack.length-1]
//         stack.push(curr)
//     }
//     return ans;
// }
// console.log(nextSmallest([2,3,1]))


// function nextLarger(arr){
//     let n = arr.length
//     let ans = []
//     let stack = new Array(n).fill(-1)

//     for(let i = n-1; i >=0; i--){
//         let curr = arr[i]
//         while(stack[stack.length-1] <= curr){
//             stack.pop()
//         }
//         ans[i] = stack[stack.length-1]
//         stack.push(curr)
//     }
//     return ans;
// }
// console.log(nextLarger([3,4,5,1]))


//largest area of histogram
function largestArea(heights){
    let n = heights.length
    let next = nextSmallerElement(heights)
    let prev = prevSmallerElement(heights)

    let area = -Infinity
    for(let i = 0; i<n; i++){
        let l = heights[i]
        
        if(next[i] === -1){
            next[i] = n;
        }
        let b = next[i]-prev[i]-1
        let newArea = l * b
        area = Math.max(area,newArea)
    }
    return area;
}
function nextSmallerElement(arr){
    let n = arr.length
    let ans = []
    let stack = new Array(n).fill(-1)

    for(let i = n-1; i >= 0; i--){
        let curr = arr[i]
        while(stack[stack.length-1] !== -1 && arr[stack[stack.length-1]] >= curr){
            stack.pop()
        }

        ans[i] = stack[stack.length-1]
        stack.push(i)
    }
    return ans;
}
function prevSmallerElement(arr){
    let n = arr.length
    let ans = []
    let stack = new Array(n).fill(-1)

    for(let i = 0; i<n; i++){
        let curr = arr[i]
        while(stack[stack.length-1] !== -1 && arr[stack[stack.length-1]] >= curr){
            stack.pop()
        }

        ans[i] = stack[stack.length-1]
        stack.push(i)
    }
    return ans;
}

console.log(largestArea([2,1,5,6,2,3]))