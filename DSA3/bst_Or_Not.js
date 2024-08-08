class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function isBSt(node, min = null, max = null) {
    if (!node) {
        return true;
    }
    if ((min != null && node.data <= min) || (max != null && node.data >= max)) {
        return false;
    }
    return isBSt(node.left, min, node.data) && isBSt(node.right, node.data, max);
}
const root = new Node(4)
root.left = new Node(2)
root.right = new Node(6)
root.left.left = new Node(1000)
root.left.right = new Node(3)
root.right.left = new Node(5)
root.right.right = new Node(7)

console.log(isBSt(root));