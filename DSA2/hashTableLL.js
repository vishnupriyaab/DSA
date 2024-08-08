class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        const newNode = new ListNode(key, value);

        if (!this.table[index]) {
            this.table[index] = newNode;
        } else {
            let current = this.table[index];
            while (current) {
                if (current.key === key) {
                    current.value = value; // Update value if key already exists
                    return;
                }
                if (!current.next) break;
                current = current.next;
            }
            current.next = newNode; // Add to the end of the list
        }
    }

    get(key) {
        const index = this.hash(key);
        let current = this.table[index];

        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return undefined; // Key not found
    }

    remove(key) {
        const index = this.hash(key);
        let current = this.table[index];
        let previous = null;

        while (current) {
            if (current.key === key) {
                if (previous) {
                    previous.next = current.next;
                } else {
                    this.table[index] = current.next;
                }
                return;
            }
            previous = current;
            current = current.next;
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            let current = this.table[i];
            while (current) {
                console.log(`Index ${i}: Key = ${current.key}, Value = ${current.value}`);
                current = current.next;
            }
        }
    }
}

// Example usage
const table = new HashTable(50);
table.set("name", "vishnu");
table.set("age", 25);
table.display();

console.log(table.get("name")); // vishnu

table.remove("name");
table.display();

table.set("mane", "priya");
table.display();
