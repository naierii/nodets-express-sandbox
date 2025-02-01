(() => {
  function camelarize(theString: string, index = 2) {
    // let transformedString = theString[0].toUpperCase();
    let transformedString = theString[0].toUpperCase();

    for (let i = 1; i < theString.length; i++) {
      // Add 1 to adjust to the position of the text character
      // Because arrays starts at index of 0
      if ((i + 1) % index !== 0) {
        transformedString += theString[i];
        continue;
      }

      transformedString += theString[i].toUpperCase();
    }

    return transformedString;
  }

  const someString = "hello world";
  const camelarizedString = camelarize(someString);

  // HElLo wOrLd
  console.log("camelarizedString", camelarizedString);
})();
