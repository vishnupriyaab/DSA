class Node {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }
    insert(word) { 
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }

    prefixSearch(pref) {
        let node = this.root;
        for (let char of pref) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
    search(pref) {
        let node = this.root;
        for (let char of pref) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEnd;
    }

    autosuggestion(word) {
        let suggestion = [];
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                return suggestion;
            }
            node = node.children[char];
        }
        function complete(node, word) {
            if (node.isEnd) {
                suggestion.push(word);
            }

            for (let char in node.children) {
                complete(node.children[char], word + char);
            }
        }
        complete(node, word);
        return suggestion;
    }
}

const trie = new Trie();
trie.insert("vishnu");
console.log(trie.prefixSearch("vis")); // true
console.log(trie.autosuggestion("vis")); //   ["vishnu"] (or any other words that match the prefix "vis")
console.log(trie.search("qwer"));