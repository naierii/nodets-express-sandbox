class Trie {
  list: string[] = [];
  constructor() {}

  insert(item: string) {
    this.list.push(item.toLowerCase());
  }

  search(item: string) {
    return !!this.list.find((listItem) => {
      return listItem === item;
    });
  }

  startsWith(item: string) {
    // return if a value is found
    for (const listItem of this.list) {
      if (listItem.startsWith(item)) {
        return true;
      }
    }

    return false;
  }
}

const trie = new Trie();

console.log(trie.insert("apple")); // undefined
console.log(trie.search("apple")); // returns true
console.log(trie.search("app")); // returns false
console.log(trie.startsWith("app")); // returns true
console.log(trie.insert("app"));
console.log(trie.search("app")); // returns true

export default {};
