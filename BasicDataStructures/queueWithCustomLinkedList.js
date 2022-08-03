import { LinkedList } from './linkedListWTail.js'

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList()
  }

  enqueue(value) {
    this.list.append(value)
  }

  dequeue() {
    return this.list.removeFromFront()
  }

  peak() {
    return this.list.head.value
  }

  isEmpty() {
    return this.list.isEmpty()
  }

  getSize() {
    return this.list.getSize()
  }

  print() {
    return this.list.print()
  }
}

const queue = new LinkedListQueue()
console.log(queue.isEmpty())

queue.enqueue(20)
queue.enqueue(10)
queue.enqueue(30)

console.log('Size: ', queue.getSize())
queue.print()

console.log('dequeue: ', queue.dequeue())
console.log('Size: ', queue.getSize())
queue.print()

console.log('dequeue: ', queue.dequeue())
console.log('Size: ', queue.getSize())
queue.print()
