class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add a node at the end
    append(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Add a node at the beginning
    prepend(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Remove a node by value
    remove(value) {
        if (this.size === 0) return;

        // Removing the head
        if (this.head.value === value) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            this.size--;
            return;
        }

        // Removing the tail
        if (this.tail.value === value) {
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            } else {
                this.head = null;
            }
            this.size--;
            return;
        }

        // Removing from the middle
        let current = this.head;
        while (current && current.value !== value) {
            current = current.next;
        }

        if (current) {
            current.prev.next = current.next;
            if (current.next) {
                current.next.prev = current.prev;
            }
            this.size--;
        }
    }

    // Print the list from head to tail
    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value + ' ';
            current = current.next;
        }
        console.log(result.trim());
    }

    // Print the list from tail to head
    printReverse() {
        let current = this.tail;
        let result = '';
        while (current) {
            result += current.value + ' ';
            current = current.prev;
        }
        console.log(result.trim());
    }
}

const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.printList(); // Output: 0 1 2 3
list.remove(2);
list.printList(); // Output: 0 1 3
list.printReverse(); // Output: 3 1 0
