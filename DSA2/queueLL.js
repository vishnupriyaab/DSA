class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    enQueue(data){
        const node = new Node(data)
        if(this.size === 0){
            this.front = node
            this.rear = node
        }else{
            this.rear.next = node
            this.rear = node
        }
        this.size++
    }

    deQueue(){
        if(this.size === 0){
            console.log('list is empty..');
        }else{
            this.front = this.front.next
            this.size--
        }
    }

    peek(){
       return this.front ? this.front.data : null
    }

    display(){
        let current = this.front
        while(current){
            console.log(current.data);
            current = current.next
        }
    }
}

const list = new Queue()
list.enQueue(10)
list.enQueue(20)
list.enQueue(30)
list.display()
console.log('...'); 
list.deQueue()
list.display() 
console.log('peek :-',list.peek()); 