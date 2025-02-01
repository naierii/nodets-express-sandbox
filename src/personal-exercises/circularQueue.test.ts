import CircularQueue from "./circularQueue";

describe("Circular Queue", () => {
  let circularQueue: CircularQueue<number>;

  beforeEach(() => {
    circularQueue = new CircularQueue<number>(5);

    circularQueue.enqueue(1);
    circularQueue.enqueue(2);
    circularQueue.enqueue(3);
  });

  it("Should enqueue successfully", () => {
    expect(circularQueue.peek()).toBe(1);
    expect(circularQueue.isFull()).toBe(false);
    expect(circularQueue.isEmpty()).toBe(false);
    expect(circularQueue.size()).toBe(3);
  });

  it("Should dequeue successfully", () => {
    circularQueue.dequeue();

    expect(circularQueue.peek()).toBe(2);
    expect(circularQueue.isFull()).toBe(false);
    expect(circularQueue.isEmpty()).toBe(false);
    expect(circularQueue.size()).toBe(2);
  });

  it("Should dequeue all successfully", () => {
    circularQueue.dequeue();
    circularQueue.dequeue();
    circularQueue.dequeue();

    expect(circularQueue.peek()).toBe(null);
    expect(circularQueue.isFull()).toBe(false);
    expect(circularQueue.isEmpty()).toBe(true);
    expect(circularQueue.size()).toBe(0);
  });

  it("Should dequeue when enqueued while full successfully", () => {
    circularQueue.enqueue(4);
    circularQueue.enqueue(5);
    circularQueue.enqueue(6);

    expect(circularQueue.peek()).toBe(2);
    expect(circularQueue.isFull()).toBe(true);
    expect(circularQueue.size()).toBe(5);
  });
});
