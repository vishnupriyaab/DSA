class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    arrayToBst(arr) {
        if (arr.length === 0) return null
        this.root = this.sortedArrayToBst(arr, 0, arr.length - 1);
    }
    sortedArrayToBst(arr, start, end) {
        if (start > end) {
            return null;
        }
        const midd = Math.floor((start + end) / 2);
        const node = new Node(arr[midd]);
        node.left = this.sortedArrayToBst(arr, start, midd - 1);
        node.right = this.sortedArrayToBst(arr, midd + 1, end);
        return node;
    }
    preOrder(root){
        if(root){
            console.log(root.data);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    print(){
        this.preOrder(this.root);
    }
}
const bst = new BST()
const arr = [2, 4, 5, 67, 88, 99];
bst.arrayToBst(arr)
bst.print()
