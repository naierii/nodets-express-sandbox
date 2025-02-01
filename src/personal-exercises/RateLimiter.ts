(async () => {
  console.log("a");
  await new Promise((resolve) => {
    console.log("b");
    resolve("b");
  });
  console.log("c");
})();

interface Request {
  ipAddress: string;
  requestDates: Date[];
}
class RateLimiter {
  requestList: Request[] = [];

  // These could be dynamic and taken from DB or AWS Parameter Store or ENV File
  // 8 per second
  limit = 8;
  timeFrame = 1000;

  constructor(limit: number) {
    this.limit = limit;
  }

  isAllowed(ipAddress: Request["ipAddress"]) {
    const currentDate = new Date();

    const requestItem = this.requestList.find((requestItem) => {
      return (requestItem.ipAddress = ipAddress);
    });

    // If item is not yet created or if the requestDates array is empty
    if (
      !requestItem ||
      !requestItem.requestDates ||
      !requestItem.requestDates.length
    ) {
      // Add a date item to the requestItem reference
      this.requestList.push({
        ipAddress,
        requestDates: [currentDate],
      });
      return true;
    }

    // Extract all dates
    // Filter all dates
    const requestItemDatesFiltered = requestItem.requestDates.filter(
      (theDate) => {
        // Current time - previous time <= 1 second
        return currentDate.getTime() - theDate.getTime() <= this.timeFrame;
      }
    );

    // clean up
    requestItem.requestDates = requestItemDatesFiltered;

    // If request limit per time frame is reached
    // +1 represents the current request
    if (requestItem.requestDates.length + 1 > this.limit) {
      return false;
    }

    // an object reference
    requestItem.requestDates.push(currentDate);

    return true;
  }
}

const rateLimiter = new RateLimiter(10);
const reqHeaderIpAddress = "the IP Address";

// Test my Rate Limiter
for (let iRequest = 0; iRequest < 12; iRequest++) {
  const isAllowed = rateLimiter.isAllowed(reqHeaderIpAddress);
  console.log("isAllowed", isAllowed);
}

// Test case - check rate limiter after 1.2 seconds
setInterval(() => {
  // Or create a reusable test case function in Jest.js
  for (let iRequest = 0; iRequest < 12; iRequest++) {
    const isAllowed = rateLimiter.isAllowed(reqHeaderIpAddress);
    console.log("isAllowed", isAllowed);
  }
}, 1200);

// 10 true
// 2 false
// 10 true
// 2 false

// Module type - prevent variables from being global
export default {};
