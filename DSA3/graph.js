class Graph{
    constructor(){
        this.vertices = {}
    }
    addVertex(v) {
        if(!this.vertices[v]) {
            this.vertices[v] = [];
        }
    }
    hasVertex(v){
        return this.vertices.hasOwnProperty(v);
    }
    addEdge(v1, v2) {
        if(!this.vertices[v1]) {
            this.addVertex(v1);
        }
        if(!this.vertices[v2]) {
            this.addVertex(v2);
        }
        this.vertices[v1].push(v2);
        this.vertices[v2].push(v1);
    }
    hasEdge(v1,v2){
        this.vertices[v1].includes(v2);
    }
    dfs(v,visited = {}){
        visited[v] = true;
        console.log(v);
        for(const a of this.vertices[v]){
            if(!visited[a]){
                this.dfs(a,visited)
            }
        }
    }
    bfs(v){
        const queue = [v]
        const visited = {}
        visited[v] = true;
        console.log(v);
        while (queue.length > 0) {
            const curr = queue.shift(v);
            for(let a of this.vertices[curr]){
                if(!visited[a]){
                    visited[a] = true;
                    queue.push(a)
                    console.log(a);
                }
            }
        }
    }
}
const graph = new Graph()
graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")
// graph.addVertex("E")
graph.addEdge("A","B")
// graph.addEdge("B","C")
// graph.addEdge("D","E")
// graph.addEdge("E")
graph.dfs("A");
