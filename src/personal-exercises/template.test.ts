import PriorityQueue from "./priorityQueue";

describe("PriorityQueue", () => {
  let queue: PriorityQueue<string>;

  beforeEach(() => {
    queue = new PriorityQueue<string>();
  });

  it("Should initialize an empty queue", () => {
    expect(queue.isEmpty()).toBe(false);
    expect(queue.size()).toBe(0);
  });

  // it('', () => {})
});
