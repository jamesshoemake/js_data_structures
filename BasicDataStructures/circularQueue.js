// extended regular que, fixed size, single block of memory with first and last element connected
// cicular buffoer or ring bugger using FIFO
// support enqueue and dequeue
// reuses empty block after dequeue
// clock, streaming data, traffic lights

class CircularQueue {
  constructor(capacity) {
    console.log('Created CircularQueue')
    this.items = new Array(capacity)
    this.capacity = capacity
    this.currentLength = 0
    this.front = -1
    this.rear = -1
  }

  isFull() {
    return this.currentLength === this.capacity
  }

  isEmpty() {
    return this.currentLength === 0
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity
      this.items[this.rear] = element
      this.currentLength++
      if (this.front === -1) {
        this.front = this.rear
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    }

    const item = this.items[this.front]
    this.items[this.front] = null
    this.front = (this.front + 1) % this.capacity
    this.currentLength -= 1
    if (this.isEmpty()) {
      this.front = -1
      this.rear = -1
    }

    return item
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front]
    }
    return null
  }

  print() {
    if (this.isEmpty()) {
      console.log('Queue is empty')
    } else {
      let i
      let str = ''
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + ' '
      }
      str += this.items[i]
      console.log(str)
    }
  }
}

const circularQue = new CircularQueue(5)
console.log('isEmpty? ', circularQue.isEmpty())

circularQue.enqueue(10)
circularQue.enqueue(20)
circularQue.enqueue(30)
circularQue.enqueue(40)
circularQue.enqueue(50)

console.log('isFull? ', circularQue.isFull())
circularQue.print()

console.log('dequeue: ', circularQue.dequeue())
console.log('peek: ', circularQue.peek())
circularQue.print()

circularQue.enqueue(60)
circularQue.print()
