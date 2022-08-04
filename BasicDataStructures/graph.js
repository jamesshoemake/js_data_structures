// Adjacency Matrix -
// stores values for all edges
// linear time complexity - insert and finding nodes
// weight of edge are store externally
// const matrix = [
//   [0, 1, 0],
//   [1, 0, 1],
//   [0, 1, 0]
// ]

// console.log('return 0', matrix[0][0])
// console.log('return 1', matrix[1][0])
// console.log('return 0', matrix[0][2])
// console.log('return 1', matrix[1][2])

// adjacency List -
// only need to store values for edges that exist
// constant time complexity - insert and finding nodes
// can store values with weights of the edge
// adjacencyList = {
//   A: ['B'],
//   B: ['A', 'C'],
//   C: ['B']
// }

// console.log(adjacencyList['A'])
// console.log(adjacencyList['B'])
// console.log(adjacencyList['C'])

class Graph {
  constructor() {
    this.adjacentyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacentyList[vertex]) {
      this.adjacentyList[vertex] = new Set()
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacentyList[vertex1]) {
      this.addVertex(vertex1)
    }
    if (!this.adjacentyList[vertex2]) {
      this.addVertex(vertex2)
    }
    this.adjacentyList[vertex1].add(vertex2)
    this.adjacentyList[vertex2].add(vertex1)
  }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')
