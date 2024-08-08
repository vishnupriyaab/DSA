class Queue{
    constructor(){
        this.item = []
    }

    enQueue(elem){
        this.item.push(elem)
    }

    deQueue(){
        if(this.item.length === 0){
            console.log('item is empty..');
        }else{
            return this.item.shift() 
        }
    }

    front(){
        if(this.item.length === 0){
            console.log('item is empty..');
        }else{
            console.log(this.item[0]); 
        }
    }

    print(){
        if(this.item.length === 0){
            console.log('item is empty..');
        }else{
            console.log(this.item.join());
        }
    }
}

const item = new Queue()
item.enQueue(10)
item.enQueue(20)
item.enQueue(30)
item.enQueue(40)
item.enQueue(50)
item.print() 
console.log('...');
// item.deQueue()
// item.print() 
item.front() 