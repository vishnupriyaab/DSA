class MinHeap {
    constructor() {
        this.heap = [];
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    leftChild(i) {
        return 2 * i + 1;
    }

    rightChild(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(data) {
        this.heap.push(data);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(i) {
        while (i > 0 && this.heap[i] < this.heap[this.parent(i)]) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(i) {
        let length = this.heap.length;
        let smallest = i;

        while (true) {
            let l = this.leftChild(i);
            let r = this.rightChild(i);

            if (l < length && this.heap[l] < this.heap[smallest]) {
                smallest = l;
            }

            if (r < length && this.heap[r] < this.heap[smallest]) {
                smallest = r;
            }

            if (smallest === i) {
                break;
            }

            this.swap(i, smallest);
            i = smallest;
        }
    }

    reverse() {
        const arr = [];
        for (let i = this.heap.length - 1; i >= 0; i--) {
            arr.push(this.heap[i]);
        }
        console.log(arr);
    }
}

// Example usage
const minHeap = new MinHeap();
minHeap.insert(12);
minHeap.insert(78);
minHeap.insert(56);
minHeap.insert(9);
minHeap.insert(3);

console.log("Heap array:");
console.log(minHeap.heap);

// console.log("Pop minimum element:");
// console.log(minHeap.pop());

console.log("Heap array after pop:");
console.log(minHeap.heap);

console.log("Reversed heap array:");
minHeap.reverse();
