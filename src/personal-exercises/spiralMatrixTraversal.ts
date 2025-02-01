function spiralTraverse(numTable: number[][]) {
  // squaredArea = x.length * y.length

  // direction = R | D | L | U

  // n = 0
  // R = x.length - n
  // D = y.length - n
  // L = 0 + n
  // n++
  // U = 0 + n
  // Repeat until the new array.length === squaredArea

  const squaredArea = numTable.length * numTable[0].length;
  const traversedArray: number[] = [];
  let n = 0;

  const xTableLength = numTable[0].length;
  const yTableLength = numTable.length;
  let xCoordinates = 0;
  let yCoordinates = 0;

  const directions = ["R", "D", "L", "U"];
  let direction = directions[0];

  function goRight() {
    // First +1 represents new coordinates
    // Second +1 represents adjustment for index that starts on 0 vs length
    if (xCoordinates + 1 + 1 <= xTableLength - n) {
      xCoordinates += 1;
      return true;
    }
    direction = "D";
    return false;
  }
  function goDown() {
    if (yCoordinates + 1 + 1 <= yTableLength - n) {
      yCoordinates += 1;
      return true;
    }
    direction = "L";
    return false;
  }
  function goLeft() {
    // -1 represents new coordinates
    if (xCoordinates - 1 >= 0 + n) {
      xCoordinates -= 1;
      return true;
    }
    direction = "U";
    return false;
  }
  function goUp() {
    // n + 1 represents the new value of n
    if (yCoordinates - 1 >= 0 + n + 1) {
      yCoordinates -= 1;
      return true;
    }
    n += 1;
    direction = "R";
    return false;
  }

  traversedArray.push(numTable[yCoordinates][xCoordinates]);

  while (traversedArray.length < squaredArea) {
    let shouldPush: boolean;

    if (direction === "R") {
      shouldPush = goRight();
    } else if (direction === "D") {
      shouldPush = goDown();
    } else if (direction === "L") {
      shouldPush = goLeft();
    }
    // up
    else {
      shouldPush = goUp();
    }

    if (shouldPush) {
      traversedArray.push(numTable[yCoordinates][xCoordinates]);
    }
  }

  return traversedArray;
}

export default spiralTraverse;
