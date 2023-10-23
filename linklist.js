class Node {
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkList {
    constructor(){
        this.head = null;
        this.size = 0;
    }


//add element at head and at last
insertLast(data){
    let node = new Node(data);
    let current; //to store current node
    
    if(this.head == null){
        this.head = node
    } else{
        current = this.head; //pointing at head node

        while(current.next){
            current = current.next;
        }
        //add node
        current.next = node
    }
    this.size++;
  }

  //insert first node
  insertFirst(data){
    this.head = new Node(data, this.head);
    this.size++
  }
 
  //insert at index
  insertAt(data,index){
    if(index < 0 || index > this.size){
        return console.log('Please enter a valid index');
    } else{
        let node = new Node(data);
        let current,previous;

        current = this.head;

    }
  }

  //get at index
  getAt(index){
    let current = this.head;
    let count = 0;

    while(current){
        if((count == index)){
            console.log(current.data);
        }
        count++;
        current = current.next;
    }
    return -1;
  }

  //remove at index
  removeAt(index){
    if(index > 0 && index> this.size){
        return;
    }
    let current = this.head
    let previous
    let count = 0;

             //remove first
     if(index === 0){
        this.head = current.next
     } else {

        while(count < index){
            count++;
            previous = current;
            current = current.next
        }
        previous.next = current.next
     }     
     this.size--   
  }

  //clear list
  clearList (){
    this.head = null;
    this.size = 0;
    
  }

  //print list data
  printListData(){
    let current = this.head;

    while(current){
        console.log(current.data);
        current = current.next
    }
  }


}

// let list = new LinkList();
// list.add(1)
// list.add(2)
// list.add(4)
// console.log(list)

const ll = new LinkList();
ll.insertFirst(100);
ll.insertFirst(200)
ll.insertFirst(300)
ll.insertLast(400)

//ll.removeAt(2)
ll.printListData()

//ll.getAt(1)