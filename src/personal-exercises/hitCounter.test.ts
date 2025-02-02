describe("Hit counter", () => {
  // You are tasked with designing a hit counter
  // that tracks the number of hits received in the past 5 minutes.
  //
  // hit(timestamp): This function should record a hit at a given timestamp (in seconds).
  // getHits(timestamp): This function should return the number of hits in the last 5 minutes (300 seconds) from the given timestamp.

  it("Should record the hits in seconds", () => {
    let total = 0;
    // +10
    // +10
    // +10
    // total = someGetterMethod();

    expect(total).toEqual(30);
  });

  it("Should return all items within 5 minutes while 5 mins has not passed yet", () => {});

  it("Should return all items within 5 minutes after 5 mins has passed yet");
});
