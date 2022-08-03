function TrieNode() {
  this.children = new Map()
  this.completeWord = false
}

const Trie = function () {
  this.root = new TrieNode()
}

Trie.prototype.insert = function (word) {
  if (word === null || word.length === 0) return
  let node = this.root

  for (const c of word) {
    if (!node.children.has(c)) {
      node.children.set(c, new TrieNode())
    }

    node = node.children.get(c)
  }

  node.completeWord = true
}

Trie.prototype.search = function (word) {
  if (word === null || word.length === 0) return
  let node = this.root

  for (const c of word) {
    if (!node.children.has(c)) {
      return false
    }

    node = node.children.get(c)
  }

  return node.completeWord
}

Trie.prototype.startsWith = function (prefix) {
  if (prefix === null || prefix.length === 0) return
  let node = this.root

  for (const c of prefix) {
    if (!node.children.has(c)) {
      return false
    }

    node = node.children.get(c)
  }

  return true
}

const myTrie = new Trie()
console.log(myTrie)
myTrie.insert('apple')
console.log('search apple', myTrie.search('apple'))
console.log('search app', myTrie.search('app'))
console.log(myTrie.startsWith('app'))
