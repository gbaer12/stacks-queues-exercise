const Deque = require("./deque");

const chai = require("chai");
const expect = chai.expect;

let deque;

beforeEach(() => {
  deque = new Deque();
});

describe("Deque", () => {
  it("should add elements to the front and rear correctly", () => {
    deque.appendleft(1);
    deque.appendright(2);
    deque.appendleft(0);

    expect(deque.peekleft()).to.equal(0);
    expect(deque.peekright()).to.equal(2);
    expect(deque.getSize()).to.equal(3);
  });

  it("should remove elements from the front and rear correctly", () => {
    deque.appendleft(1);
    deque.appendright(2);
    deque.appendleft(0);

    expect(deque.popleft()).to.equal(0);
    expect(deque.popright()).to.equal(2);
    expect(deque.getSize()).to.equal(1);
  });

  it("should handle peeking at the front and rear correctly", () => {
    deque.appendleft(10);
    deque.appendright(20);

    expect(deque.peekleft()).to.equal(10);
    expect(deque.peekright()).to.equal(20);

    deque.appendleft(5);
    expect(deque.peekleft()).to.equal(5);

    deque.appendright(30);
    expect(deque.peekright()).to.equal(30);
  });

  it("should throw an error when trying to remove from an empty deque", () => {
    expect(() => deque.popleft()).to.throw("Can't remove from an empty deque.");
    expect(() => deque.popright()).to.throw(
      "Can't remove from an empty deque."
    );
  });

  it("should return true for isEmpty() on an empty deque", () => {
    expect(deque.isEmpty()).to.be.true;
  });

  it("should return false for isEmpty() when the deque is not empty", () => {
    deque.appendleft(42);

    expect(deque.isEmpty()).to.be.false;
  });
});
