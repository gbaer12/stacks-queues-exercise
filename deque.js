/** Node */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  appendleft(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }

    this.size++;
  }

  appendright(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      newNode.prev = this.rear;
      this.rear.next = newNode;
      this.rear = newNode;
    }

    this.size++;
  }

  popleft() {
    if (this.isEmpty()) {
      throw new Error("Can't remove from an empty deque.");
    }

    const removedValue = this.front.value;

    if (this.size === 1) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
      this.front.prev = null;
    }

    this.size--;
    return removedValue;
  }

  popright() {
    if (this.isEmpty()) {
      throw new Error("Can't remove from an empty deque.");
    }

    const removedValue = this.rear.value;

    if (this.size === 1) {
      this.front = null;
      this.rear = null;
    } else {
      this.rear = this.rear.prev;
      this.rear.next = null;
    }

    this.size--;
    return removedValue;
  }

  peekleft() {
    if (this.isEmpty()) {
      throw new Error("Deque is empty.");
    }
    return this.front.value;
  }

  peekright() {
    if (this.isEmpty()) {
      throw new Error("Deque is empty.");
    }
    return this.rear.value;
  }
}

module.exports = Deque;
