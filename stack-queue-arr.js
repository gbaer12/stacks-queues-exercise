/** Queue with Array */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(val) {
    this.items.push(val);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Can't dequeue from an empty queue.");
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty.");
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

/** Stack with Array */

class Stack {
  constructor() {
    this.items = [];
  }

  push(val) {
    this.items.push(val);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Can't pop from an empty stack.");
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      if (this.isEmpty()) {
        throw new Error("Stack is empty.");
      }
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = { Queue, Stack };
