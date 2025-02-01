type ValueOf<Type> = Type[keyof Type];

interface Employee {
  name: string;
  age: number;
  address: string;
}
type CacheInfoType<Type> = {
  [Key in keyof Type]: {
    value: Type[Key] | null;
    expirationDate: Date;
  };
};

class MyCache<ValueType> {
  cacheInfo: CacheInfoType<ValueType>;

  constructor() {
    this.cacheInfo = {} as CacheInfoType<ValueType>;
  }

  public set(
    key: keyof CacheInfoType<ValueType>,
    value: ValueOf<ValueType>,
    duration: number
  ) {
    const currentDate = new Date();
    this.cacheInfo[key] = {
      value,
      expirationDate: new Date(currentDate.getTime() + duration),
    };

    this.removeExpiredCaches();
  }

  public get(key: keyof CacheInfoType<ValueType>) {
    this.removeExpiredCaches();
    return this.cacheInfo[key].value;
  }

  private removeExpiredCaches(theCurrentDate?: Date) {
    const nowDate = theCurrentDate || new Date();

    for (const key in this.cacheInfo) {
      const value = this.cacheInfo[key];
      const isExpired = nowDate >= value.expirationDate;
      if (isExpired) {
        this.cacheInfo[key].value = null;
      }
    }
  }
}

const cache = new MyCache<Employee>();

cache.set("name", "John Doe", 1000); // Store for 10 seconds
const firstLog = cache.get("name"); // Returns "John Doe" (within 10 seconds)
console.log("firstLog", firstLog);

// After 10 seconds...
setTimeout(() => {
  const forLog = cache.get("name"); // Returns null (expired)
  console.log("timeout", forLog);
}, 1200);

// To avoid global variable leakage
export default {};
