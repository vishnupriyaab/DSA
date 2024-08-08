function heapSort(heap) {
    let n = heap.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(heap, n, i);
    }
    for (let i = n - 1; i >= 0; i--) {
        [heap[0], heap[i]] = [heap[i], heap[0]]
        heapify(heap, i, 0);
    }
    return heap
}
function heapify(heap, n, i) {
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    let smallest = i;
    if (l < n && heap[l] < heap[smallest]) {
        smallest = l
    }
    if (r < n && heap[r] < heap[smallest]) {
        smallest = r
    }
    if (i !== smallest) {       
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]]
        heapify(heap, n, smallest);
    }
}
const heap = [9, 6, 5, 3, 8, 4];
console.log(heapSort(heap));