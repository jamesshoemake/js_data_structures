import { LinkedList } from './linkedListWTail.js'

class LinkedListStack {
  constructor() {
    this.list = new LinkedList()
  }

  push(value) {
    return this.list.prepend(value)
  }

  pop() {
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

const stack = new LinkedListStack()
console.log(stack.isEmpty())

stack.push(20)
stack.push(10)
stack.push(30)

console.log('Size: ', stack.getSize())
stack.print()

console.log('Stack.pop', stack.pop())
console.log('Head', stack.peak())
