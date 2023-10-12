/** Node */

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

/** Linked List */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  remove() {
    if (!this.head) {
      throw new Error("Cant remove form an empty linked list");
    }
    let removedValue = this.head.val;
    this.head = this.head.next;
    this.size--;
    if (!this.head) {
      this.tail = null;
    }
    return removedValue;
  }

  isEmpty() {
    return this.size === 0;
  }
}

/** Queue */

class Queue {
  constructor() {
    this.size = 0;
    this._list = new LinkedList();
  }

  enqueue(val) {
    this._list.append(val);
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Can't dequeue form an empty queue.");
    }
    this.size--;
    return this._list.remove();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this._list.head.value;
  }

  isEmpty() {
    this.isEmpty();
  }
}

/** Stack */

class Stack {
  constructor() {
    this.size = 0;
    this._list = new LinkedList();
  }

  push(val) {
    this._list.append(val);
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Can't pop from an empty stack.");
    }
    this.size--;
    return this._list.remove();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this._list.tail.val;
  }

  isEmpty() {
    this.isEmpty();
  }
}
