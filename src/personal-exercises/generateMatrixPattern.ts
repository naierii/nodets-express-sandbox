// TODO - make the code flexible to accept counter clockwise
export default (x: number, y: number) => {
  if (x === 0 || y === 0) {
    return [];
  }

  const generatedMatrixPattern: number[][] = [];

  let matrixCount = 1;

  let [xCoordinate, yCoordinate] = [0, 0];

  let direction = "R";

  /**
   * Loop through the first y axis
   * If it hits a wall, it will rotate clockwise
   *
   * Considered walls are as follows:
   * iY > y.length
   * iX > x.length
   * iY < 0
   * iX < 0
   * next coordinates has a number
   */

  generatedMatrixPattern[yCoordinate] = [];
  generatedMatrixPattern[yCoordinate][xCoordinate] = matrixCount;

  function addMatrixCount() {
    if (!generatedMatrixPattern[yCoordinate]) {
      generatedMatrixPattern[yCoordinate] = [];
    }
    generatedMatrixPattern[yCoordinate][xCoordinate] = matrixCount;
  }
  addMatrixCount();

  function isValidNextDestinationHandler(nextX: number, nextY: number) {
    const hasNumberedDestination =
      generatedMatrixPattern[nextY] &&
      typeof generatedMatrixPattern[nextY][nextX] === "number";

    let isOuterWallDestination = false;
    if (nextX < 0 || nextY < 0 || nextX >= x || nextY >= y) {
      isOuterWallDestination = true;
    }

    return !hasNumberedDestination && !isOuterWallDestination;
  }

  while (matrixCount < x * y) {
    // Confirm if next destination is a wall
    if (direction === "R") {
      // turn if destination is a number
      const nextXDestination = xCoordinate + 1;

      const isValidNextDestination = isValidNextDestinationHandler(
        nextXDestination,
        yCoordinate
      );

      if (isValidNextDestination) {
        matrixCount += 1;
        xCoordinate += 1;

        addMatrixCount();
      } else {
        direction = "D";
      }
    } else if (direction === "D") {
      const nextYDestination = yCoordinate + 1;

      const isValidNextDestination = isValidNextDestinationHandler(
        xCoordinate,
        nextYDestination
      );

      if (isValidNextDestination) {
        matrixCount += 1;
        yCoordinate += 1;

        addMatrixCount();
      } else {
        direction = "L";
      }
    } else if (direction === "L") {
      const nextXDestination = xCoordinate - 1;

      const isValidNextDestination = isValidNextDestinationHandler(
        nextXDestination,
        yCoordinate
      );

      if (isValidNextDestination) {
        matrixCount += 1;
        xCoordinate -= 1;

        addMatrixCount();
      } else {
        direction = "U";
      }
    } else {
      // All else are direction "U"

      const nextYDestination = yCoordinate - 1;

      const isValidNextDestination = isValidNextDestinationHandler(
        xCoordinate,
        nextYDestination
      );

      if (isValidNextDestination) {
        matrixCount += 1;
        yCoordinate -= 1;

        addMatrixCount();
      } else {
        direction = "R";
      }
    }
  }

  return generatedMatrixPattern;
};
