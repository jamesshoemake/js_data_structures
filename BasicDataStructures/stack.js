// stacks are lists with specific funcationality
// stacks are useful when tracing steps: Broswer history track or undo operation when typing, JS runtime call stack

class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  print() {
    console.log(this.items.toString())
  }
}

const myStack = new Stack()
console.log(myStack.isEmpty())
myStack.push(20)
myStack.push(10)
myStack.push(30)
console.log(myStack.size())
myStack.print()
console.log(myStack.pop())
console.log(myStack.peek())
