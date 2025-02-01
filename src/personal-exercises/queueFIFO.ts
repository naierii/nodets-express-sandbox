(() => {
  // scenario 1
  // We will start with an empty list

  // Scenario 2
  // We will start with a list
  // eg. maybe we have some VIPs, or cut-off from other day

  type QueueItem = number;
  type Queue = QueueItem[];

  class FifoQueue {
    queue: Queue = [];
    constructor(theQueue: Queue = []) {
      this.queue = theQueue;
    }

    // enqueue - adds item into the queue
    enqueue = (theItem: QueueItem) => {
      this.queue.push(theItem);
    };

    // dequeue - removes item in front of the queue - NOTE use shift()
    dequeue = () => {
      if (!this.queue.length) {
        console.error("Queue is already empty");
        return;
      }
      const removedItem = this.queue.shift();
      console.log(`Item ${removedItem} has been processed`);
    };

    // peek - return the next queue
    peek = () => {
      // If there's no more queue
      if (!this.queue[0]) {
        return;
      }

      return this.queue[0];
    };

    // isEmpty - return boolean if empty
    isEmpty = () => {
      return !this.queue.length;
    };

    // size - return the length
    getSize = () => {
      return this.queue.length;
    };

    // clear - clear queue
    clear = () => {
      this.queue = [];
    };
  }

  const myQueueScenario1 = new FifoQueue();
  const myQueueScenario2 = new FifoQueue([1, 2]);

  myQueueScenario1.enqueue(1);
  myQueueScenario1.enqueue(2);
  myQueueScenario1.enqueue(3);
  myQueueScenario1.enqueue(4);

  console.log(myQueueScenario1.peek()); // 1;

  myQueueScenario1.dequeue(); // [2,3,4]
  myQueueScenario1.dequeue(); // [3,4]

  console.log(myQueueScenario1.peek()); // 3

  console.log("size", myQueueScenario1.getSize());

  // Normally I'd have a Jest for automated testing so the code will not break if other developers try to edit it
  // Test case - not empty
  console.log("isEmpty", myQueueScenario1.isEmpty()); // false [3, 4]
  myQueueScenario1.dequeue();
  myQueueScenario1.dequeue();

  // Test case - empty
  console.log("isEmpty", myQueueScenario1.isEmpty()); // true

  // Note, handle if dequeue is used while queue is empty
  // Test case - already empty
  myQueueScenario1.dequeue(); // console.error

  // Test case - Created queue has an initial value
  console.log("myQueueScenario2.peek()", myQueueScenario2.peek()); // 1

  // Test case - peeking when array is empty
  const myQueueScenario3 = new FifoQueue();
  console.log("myQueueScenario3", myQueueScenario3.peek());
})();
