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