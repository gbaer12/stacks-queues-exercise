const { Queue, Stack } = require("./stack-queue-arr");

const chai = require("chai");
const expect = chai.expect;

describe("Queue with Array", () => {
  it("should enqueue and dequeue elements correctly", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).to.equal(1);
    expect(queue.dequeue()).to.equal(2);
    expect(queue.dequeue()).to.equal(3);
    expect(queue.isEmpty()).to.be.true;
  });

  it("should return the correct value when peeked", () => {
    const queue = new Queue();
    queue.enqueue(42);

    expect(queue.peek()).to.equal(42);
  });

  it("should throw an error when dequeuing an empty queue", () => {
    const queue = new Queue();

    expect(() => queue.dequeue()).to.throw(
      "Can't dequeue from an empty queue."
    );
  });
});

describe("Stack with Array", () => {
  it("should push and pop elements correctly", () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);

    expect(stack.pop()).to.equal(30);
    expect(stack.pop()).to.equal(20);
    expect(stack.pop()).to.equal(10);
    expect(stack.isEmpty()).to.be.true;
  });

  it("should return the correct value when peeked", () => {
    const stack = new Stack();
    stack.push(99);

    expect(stack.peek()).to.equal(99);
  });

  it("should throw an error when popping an empty stack", () => {
    const stack = new Stack();

    expect(() => stack.pop()).to.throw("Can't pop from an empty stack.");
  });
});
