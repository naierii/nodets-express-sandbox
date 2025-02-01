import PriorityQueue from "./priorityQueue";

describe("PriorityQueue", () => {
  let queue: PriorityQueue<string>;

  beforeEach(() => {
    queue = new PriorityQueue<string>();
  });

  it("Should initialize an empty queue", () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
  });

  it("Should enqueue items with priority", () => {
    queue.enqueue("apple", 2);
    queue.enqueue("banana", 1);
    queue.enqueue("cherry", 3);

    expect(queue.size()).toBe(3);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe("banana");
  });

  it("Should dequeue successfully", () => {
    queue.enqueue("apple", 2);
    queue.enqueue("banana", 1);
    queue.enqueue("cherry", 3);

    queue.dequeue();

    expect(queue.peek()).toBe("apple");
    expect(queue.size()).toBe(2);
    expect(queue.isEmpty()).toBe(false);
  });

  // it('', () => {})
});
