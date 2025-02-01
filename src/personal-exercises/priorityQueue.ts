export interface QueueItem<ItemType> {
  item: ItemType;
  priority: number;
}

export default class PriorityQueue<ItemType> {
  protected queue: QueueItem<ItemType>[];
  constructor() {
    this.queue = [];
  }

  // Adds an item to the queue with the given priority
  enqueue(item: ItemType, priority: QueueItem<ItemType>["priority"]) {
    this.queue.push({
      item,
      priority,
    });
  }

  // Removes
  // and returns the item with the highest priority from the queue
  dequeue() {
    // remove item in an array using indexOf
    // TODO - Check edge cases such as if item is an object, array, etc,...
    const nextItem = this.peek();
    const nextItemIndex = this.queue.findIndex(
      (item) => item.item === nextItem
    );
    this.queue.splice(nextItemIndex, 1);
  }

  // Returns the item with the highest priority without removing it
  peek(): QueueItem<ItemType>["item"] {
    const queueItem = this.queue.reduce((prevValue, currentValue) => {
      return prevValue.priority < currentValue.priority
        ? prevValue
        : currentValue;
    });

    return queueItem.item;
  }

  // Returns true if queue is empty, false otherwise
  isEmpty() {
    return !this.queue.length;
  }

  // Returns the number of items in the queue
  size() {
    return this.queue.length;
  }
}
