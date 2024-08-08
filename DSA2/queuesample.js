class Queue {
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0
    }

    enQueue(elem){
        this.items.push(elem)
    }

    deQueue(){
        if(this.isEmpty()){
            return 'Underflow...'
        }else{
            return this.items.shift()
        }
    }

    front(){

        return this.isEmpty() ? 'No data' : this.items[0]
    }

    print(){
        return this.isEmpty() ? 'No data' : this.items 
    }
}

function odd(queue){
    const item = []
    while(!queue.isEmpty()){
        item.push(queue.deQueue()) 
    }

    // const rev = []
    // for (let i = 0; i < item.length; i++) {
    //     if(item[i] % 2 === 0){
    //         rev.push(item[i]) 
    //     }
    // }
    let rev = item.slice().reverse();
    console.log(rev); 
}
 
const queue = new Queue()
queue.enQueue(1)
queue.enQueue(2)
queue.enQueue(3)
queue.enQueue(4)
queue.enQueue(5)
queue.enQueue(6)  

console.log(queue.print());  
console.log('Function called ');
odd(queue) 