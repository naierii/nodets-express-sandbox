function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation, like fetching data from an API
    console.log("Before setTimeout");
    setTimeout(() => {
      const success = Math.random() < 0.8; // Simulate 80% success rate
      console.log("fetchData");

      resolve({ data: "Here's your data!" });
    }, 1000); // Simulate a 1-second delay
  });
}

console.log("Start");

new Promise((resolve) => {
  console.log("Promise executor"); // Macrotask
  resolve("");
})
  .then(() => console.log("Promise then")) // Microtask
  .catch(() => console.log("Promise catch")) // Microtask
  .finally(() => console.log("Promise finally")); // Microtask

console.log("End");

new Promise((resolve) => {
  console.log("Promise executor"); // Macrotask
  resolve("");
})
  .then(() => console.log("Promise then")) // Microtask
  .catch(() => console.log("Promise catch")) // Microtask
  .finally(() => console.log("Promise finally")); // Microtask

(async () => {
  console.log("before async");
  await fetchData();
  console.log("after async");
})();

fetchData().then((a) => {
  console.log("fetchData then");
});

// server file.ts
async function currentLoop() {
  const someName = "Reian";
  const data = fetch("someUrl"); // Macrotask
  data.then((someJson) => {
    // Microtask
    console.log(someJson);
  });

  // "await" will pause the executing lines of code after this
  // until promise is resolved

  const anotherData = await fetch("anotherUrl"); // Macrotask
  console.log(anotherData);
}

// Single threaded Programming language
// It runs code piece by piece

// non-blocking programming language
// This means that it can run processes asynchronously
// eventLoop(
//   // Current status: paused
//   currentLoop, // Executes our code line by line
//   // When we use an await, it will pause the current code execution and execute ALL queued microtasks
//   [], // microtasks - such as .then .catch .finally
//   [data, anotherMacrotask] // macrotask
// );

// "await"
// First scenario
// Not yet finished

// Second scenario
// Finished
