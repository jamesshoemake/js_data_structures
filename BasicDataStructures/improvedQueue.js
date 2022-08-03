// sequential colloection follows first in first out (FIFO) principle
// ordered tasks such as callback queue in JS runtime, Printers, CPU task scheduling
// implementation use object to insure methods run at linear time complexity

class Queue {
  constructor() {
    this.items = {}
    this.rear = 0
    this.front = 0
  }

  enqueue(element) {
    this.items[this.rear] = element
    this.rear++
  }

  dequeue() {
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
  }

  isEmpty() {
    return this.rear - this.front === 0
  }

  peek() {
    return this.items[this.front]
  }

  size() {
    return this.rear - this.front
  }

  print() {
    console.log(this.items)
  }
}

const queue = new Queue()
console.log('isEmpty?', queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log('size', queue.size())
queue.print()

console.log('dequeue', queue.dequeue())
console.log('peek', queue.peek())
