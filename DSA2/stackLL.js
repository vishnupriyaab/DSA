class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
} 

class stack{
    constructor(){
        this.top = null
        this.size = 0
    }

    push(data){
        const node = new Node(data)
        if(!this.top){
            this.top = node
        }else{
            node.next = this.top 
            this.top = node
        }
        this.size++
    }

    pop(){
        if(!this.top){
            return null
        }else{
            this.top = this.top.next
            this.size--
        }
    }

    print(){
        let current = this.top
        while(current){
            console.log(current.data);
            current = current.next
        }
    }

    printOdd(){ 
        let current = this.top
        while(current){
            if(current.data % 2 != 0){
                console.log(current.data);
            }
            current = current.next
        }
    }
}

const Stack = new stack()
Stack.push(1) 
Stack.push(2)  
Stack.push(3)  
Stack.push(4)  
Stack.push(5)  
Stack.print() 
// console.log('...');  

// Stack.printOdd() 
Stack.pop()
Stack.print()  