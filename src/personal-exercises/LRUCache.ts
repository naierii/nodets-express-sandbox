(() => {
  interface CacheItems {
    key: number;
    // favorite points is used to track how much an item is used
    favoritePoints: number;
    value: any;
  }

  class LRUCache {
    capacity: number;
    cacheItems: CacheItems[];
    maxFavoritePoints = 5;

    constructor(capacity: number) {
      this.capacity = capacity;
      this.cacheItems = [];
    }

    put = (key: number, value: any = "Hello test") => {
      // I should have a condition where I remove the least favorite item;
      if (this.cacheItems.length >= this.capacity) {
        const leastFavoriteItem = this.cacheItems.reduce(
          (minObject, currentObject) => {
            return currentObject.favoritePoints < minObject.favoritePoints
              ? currentObject
              : minObject;
          }
        );

        // Take index of the item using the key
        const iLeastFavoriteItem = this.cacheItems
          .map((item) => item.key)
          .indexOf(leastFavoriteItem.key);

        // Remove the least favorite item
        this.cacheItems.splice(iLeastFavoriteItem, 1);
      }

      this.cacheItems.forEach((item) => {
        item.favoritePoints = item.favoritePoints - 1;
      });

      this.cacheItems.push({
        key,
        favoritePoints: 0,
        value,
      });
    };

    get = (key: CacheItems["key"]) => {
      // Take object reference
      const itemRef = this.cacheItems.find((item) => item.key === key);
      if (!itemRef) {
        // No item found
        console.log(-1);
        return -1;
      }

      // Reduce favorite points of others
      this.cacheItems.forEach((item) => {
        if (item.key !== itemRef.key) {
          item.favoritePoints = item.favoritePoints - 1;
        }
      });

      itemRef.favoritePoints =
        itemRef.favoritePoints <= 5
          ? (itemRef.favoritePoints += 1)
          : itemRef.favoritePoints;

      console.log(itemRef.value);
      return itemRef.value;
    };
  }

  const cache = new LRUCache(2);

  cache.put(1, 1);
  cache.put(2, 2);
  cache.get(1); // returns 1
  cache.put(3, 3); // evicts key 2
  cache.get(2); // returns -1 (not found)
  cache.put(4, 4); // evicts key 1
  cache.get(1); // returns -1 (not found)
  cache.get(3); // returns 3
  cache.get(4); // returns 4
})();
