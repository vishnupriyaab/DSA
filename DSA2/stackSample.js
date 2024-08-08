class Stack{
    constructor(){
        this.table = []
    }

    isEmpty(){
        return this.table.length === 0
    }

    push(elem){
        this.table.push(elem)
    }

    pop(){
        if(this.isEmpty()){
            return 'Stack underflow..'
        }else{
            return this.table.pop()
        }
    }

    peek(){
        if(this.isEmpty()){
            return 'Stack underflow..'
        }else{
            console.log(this.table[this.table.length - 1]); 
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('Empty..');
        }else{
            console.log(this.table);
        }
    }
}

function printReverse(stack){
    
    let ar = []
    let odd = []

    while(!stack.isEmpty()){
        ar.push(stack.pop())
    }

    // for (let i = 0; i < ar.length; i++) {
    //     if(ar[i] % 2 != 0){
    //         odd.push(ar[i]) 
    //     } 
    // } 
    // console.log(odd);
    console.log(ar); 
}


const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

stack.print() 
stack.peek() 

console.log("Removed a stack");
stack.pop() 
stack.print() 
console.log("...........................");
printReverse(stack)