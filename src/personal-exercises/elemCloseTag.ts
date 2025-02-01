(() => {
  // Check the BRD and confirm the information
  // Have a function that closes all second div

  // Are we expecting some of the div to be properly closed
  // eg.
  // <div>Hello there<div>

  // Are we expecting some of the document to not start in a div element?
  // eg.
  // Hello <div>world <div>

  // Are we expecting the document to have an odd number of divs?
  // eg.
  // <div>Hello <div>world <div>

  const unclosedDiv =
    "<div>Hello there!<div> <div>Nice day we are having today<div>";

  function elemTagCloser(theString: string, elemToClose: string = "<div>") {
    // Split the string into an array
    const contents = theString.split(elemToClose);

    // scenario 1
    // Starts and ends with div tag
    // <div>Hello there<div>
    // ['', 'Hello there', '']
    const isScenario1 =
      contents[0] === "" && contents[contents.length - 1] === "";
    let newString = "";

    if (isScenario1) {
      contents
        // Remove empty string
        .filter((content) => content !== "")
        // loop through the array of string and construct a new string out of it
        .forEach((content, index) => {
          // Check if odd
          if (index % 2 === 0) {
            newString += `<div>${content}`;
            return;
          }
          newString += `${content}</div>`;
        });
    }

    // scenario 2
    // Doesn't start or end with div tag
    // Hello <div>world <div>
    // ['Hello ', 'world ', '']
    else {
    }

    // scenario 3
    // Has an odd number of div tag
    // This should throw an error
  }

  const closedDiv = elemTagCloser(unclosedDiv);
  console.log("closedDiv", closedDiv);
})();
const globalExample = "hello";
