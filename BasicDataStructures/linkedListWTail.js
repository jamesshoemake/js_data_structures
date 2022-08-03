// linear series of connected nodes
// each node has value and link to next node
// insertion, deletion, search
// stacks and queues: image viewer continuous slide show
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  print() {
    if (this.isEmpty()) {
      console.log('List Empty')
    } else {
      let cur = this.head
      let listValues = ''
      while (cur) {
        listValues += `${cur.value} `
        cur = cur.next
      }
      console.log(listValues)
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1
    }
    let i = 0
    let cur = this.head
    while (cur) {
      if (cur.value === value) {
        return i
      }
      cur = cur.next
      i++
    }
    return -1
  }

  // O(1)
  prepend(value) {
    const node = new Node(value)

    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  // O(n)
  append(value) {
    const node = new Node(value)

    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  // 0(n)
  removeFromFront() {
    if (this.isEmpty()) return null

    const value = this.head.value
    this.head = this.head.next
    this.size--
    return value
  }

  removeFromEnd() {
    if (this.isEmpty()) return null

    const value = this.tail.value

    if (this.size === 1) {
      this.head = null
      this.tail = null
    } else {
      let prev = this.head
      while (prev.next !== this.tail) {
        prev = prev.next
      }
      prev.next = null
      this.tail = prev
    }
    this.size--
    return value
  }

  // O(n)
  insert(value, idx) {
    if (idx < 0 || idx > this.size) return
    console.log(`inserting ${value} at index ${idx}`)
    if (idx === 0) {
      this.prepend(value)
    } else {
      const node = new Node(value)
      let prev = this.head

      for (let i = 0; i < idx - 1; i++) {
        prev = prev.next
      }

      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) return null
    console.log(`removing index ${index}`)
    let removedNode
    if (index === 0) {
      removedNode = this.head
      this.head = this.head.next
    } else {
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      removedNode = prev.next
      prev.next = removedNode.next
    }
    this.size--
    return removedNode.value
  }

  // O(n)
  removeValue(value) {
    if (this.isEmpty()) return null

    if (this.head.value === value) {
      this.head = this.head.next
      this.size--
      return value
    } else {
      let prev = this.head
      while (prev.next && prev.next.value !== value) {
        prev = prev.next
      }
      if (prev.next) {
        const removeNode = prev.next
        prev.next = removeNode.next
        this.size--
        return value
      }
      return null
    }
  }

  reverse() {
    let prev = null
    let cur = this.head
    this.tail = this.head

    while (cur) {
      let next = cur.next
      cur.next = prev
      prev = cur
      cur = next
    }
    this.head = prev
  }
}

// const list = new LinkedList()
// console.log('isEmpty: ', list.isEmpty())
// console.log('List size: ', list.getSize())
// list.print()

// list.append(10)
// list.print()

// list.append(20)
// list.append(30)
// list.print()

// list.insert(5, 0)
// list.print()

// list.insert(25, 3)
// list.print()

// console.log('removed: ', list.removeFrom(3))
// list.print()

// console.log('remove by value: ', list.removeValue(5))
// list.print()

// console.log('Search for 25: ', list.search(25))

// list.reverse()
// list.print()

// console.log('remove from front: ', list.removeFromFront())
// console.log('remove from End: ', list.removeFromEnd())
