class stack{
    constructor(){
        this.item = []
    }

    push(el){
        this.item.push(el)
    }

    pop(){
        if(this.item.length === 0){
            return 'Stack is Empty..'
        }else{
            return this.item.pop()  
        }
    }

    peek(){
        if(this.item.length === 0){
            return 'Stack is Empty...'
        }else{
            console.log('peek',this.item[this.item.length - 1]); 
        }
    }

    isEmpty(){
        return this.item.length === 0
    }

    print(){
        if(this.item.length === 0){
            console.log('Stack is Empty..');
        }else{
            console.log(this.item.join());    
        }
    }
}

function printOdd(Stack){
    const ar = []
    const odd = []
    while(!Stack.isEmpty()){
        ar.push(Stack.pop())
    }

    for (let i = 0; i < ar.length; i++) {
        if(ar[i] % 2 != 0){
            odd.push(ar[i]);
        }
    }

    console.log(odd.join()); 
} 

const Stack = new stack() 
Stack.push(1)
Stack.push(2)
Stack.push(3)
Stack.push(4)
Stack.push(5)
Stack.peek() 
Stack.print()  
console.log('....');
printOdd(Stack) 