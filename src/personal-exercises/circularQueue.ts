class CircularQueue<Type> {
  private queue: Type[];
  private maxSize: number;

  constructor(maxSize: number = 5) {
    this.queue = [];
    this.maxSize = maxSize;
  }

  enqueue(item: Type) {
    this.queue.push(item);
    if (this.queue.length > this.maxSize) {
      this.queue.splice(0, 1);
    }
  }

  dequeue() {
    this.queue.splice(0, 1);
  }

  peek() {
    return this.queue[0] || null;
  }

  isFull() {
    return this.queue.length >= this.maxSize;
  }

  isEmpty() {
    return !this.queue.length;
  }

  size() {
    return this.queue.length;
  }
}

export default CircularQueue;
