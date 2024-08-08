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
    insert(data) {
        const node = new Node(data)
        if (!this.root) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }
    insertNode(root, node) {
        if (node.data < root.data) {
            if (!root.left) {
                root.left = node;
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (!root.right) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
    search(root, data) {
        if (!root) {
            return false;
        }
        if (root.data === data) {
            return true;
        }
        if (data < root.data) {
            return this.search(root.left, data)
        } else {
            return this.search(root.right, data)
        }
    }
    remove(data) {
        return this.removeNode(this.root, data)
    }
    removeNode(root, data) {
        if (!root) return null;
        if (data < root.data) {
            root.left = this.removeNode(root.left, data)
        } else if (data > root.data) {
            root.right = this.removeNode(root.right, data)
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            }
            if (!root.right) {
                return root.left;
            }
            const temp = this.findMin(root.right);
            root.data = temp.data;
            root.right = this.removeNode(root.right, temp.data)
        }
        return root;
    }
    findMin(root) {
        while (root.left !== null) {
            root = root.left;
        }
        return root;
    }
    findMax(root) {
        while (root.right !== null) {
            root = root.right;
        }
        return root;
    }
    count(root) {
        if (!root) {
            return 0;
        }
        return this.count(root.left) + this.count(root.right) + 1;
    }
    height(root) {
        if (!root) {
            return -1;
        }
        return Math.max(this.height(root.left), this.height(root.right)) + 1;
    }      

    findSecondAndThirdSmallest() {
        let count = 0;
        let secondMin = null;
        let thirdMin = null;
        const inOrderTraversal = (node) => {
          if (node === null || count >= 3) {
            return;
          }
          // Traverse the left subtree first
          inOrderTraversal(node.left);
          count++;
          if (count === 1) {
            // First smallest
          } else if (count === 2) {
            secondMin = node.data;
          } else if (count === 3) {
            thirdMin = node.data;
            return;
          }
          // Traverse the right subtree
          inOrderTraversal(node.right);
        };
        inOrderTraversal(this.root);
        return { secondMin, thirdMin };
      }


      findSecondAndThirdLargest() {
        let count = 0;
        let secondMax = null;
        let thirdMax = null;
        const reverseInOrderTraversal = (node) => {
          if (node === null || count >= 3) {
            return;
          }
          reverseInOrderTraversal(node.right);
          count++;
          if (count === 1) {
            // First largest, do nothing
          } else if (count === 2) {
            secondMax = node.data;
          } else if (count === 3) {
            thirdMax = node.data;
            return;
          }
          reverseInOrderTraversal(node.left);
        };
        reverseInOrderTraversal(this.root);
        return { secondMax, thirdMax };
      }

    bfs() {
        const result = []
        const queue = []
        if (this.root !== null) {
            queue.push(this.root)
        }
        while (queue.length > 0) {
            const node = queue.shift()
            result.push(node.data);
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        return result;
    }
    preOrder(root){
        if(root){
            console.log(root.data);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.data);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.data);
        }
    }
}
const bst = new BST();

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(17)
bst.insert(19)
bst.insert(22)
bst.insert(20)
bst.insert(35)
bst.insert(29)


const { secondMin, thirdMin } = bst.findSecondAndThirdSmallest();
console.log(`The 2nd smallest element is:`, secondMin);
console.log(`The 3rd smallest element is:`, thirdMin);


// console.log(bst.search(bst.root,7)); //Search - True or False 

// bst.remove(15); // Remove
// console.log(bst.search(bst.root,15));

// console.log(bst.findMin(bst.root).data); // Min elem
// console.log(bst.findMax(bst.root).data); // Max elem

console.log(bst.count(bst.root)); //Count

// console.log(bst.height(bst.root));  //Height

// console.log(bst.bfs()); //BFS

// console.log('preorder');
// bst.preOrder(bst.root);
// console.log('inorder');
// bst.inOrder(bst.root);
// console.log('postOrder');
// bst.postOrder(bst.root); 
// console.log("wsedrftgyhujikdrfgtyhujikolfrtgyhuj");   
// console.log(bst.secondMax(bst.root))