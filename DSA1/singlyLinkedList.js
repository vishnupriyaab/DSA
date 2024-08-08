class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    prepend(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' ';
            current = current.next;
        }
        console.log(result.trim());
    }
    remove(value) {
        if (this.size === 0) return;
        
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            if (this.size === 0) this.tail = null;
            return;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (current.next) {
            if (current.next === this.tail) {
                this.tail = current;
            }
            current.next = current.next.next;
            this.size--;
        }
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.printList(); // Output: 0 1 2 3
list.remove(2);
list.printList(); // Output: 0 1 3
