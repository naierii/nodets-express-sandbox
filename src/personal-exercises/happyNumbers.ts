export default (testValue: number | string) => {
  // Validation section
  if (+testValue === 1) {
    return true;
  } else if (isNaN(+testValue)) {
    console.error("Data type is incompatible");
    return null;
  } else if (+testValue < 0) {
    console.error("Numbers should be a positive number");
    return null;
  }

  let currentValue = +testValue;

  const sumHistory = [currentValue];

  while (currentValue !== 1) {
    const numberItems = currentValue.toString().split(""); // eg '123' => ['1','2','3']

    const squaredItems = numberItems.map((item) => (+item) ** 2);

    currentValue = squaredItems.reduce((prev, curr) => prev + curr);

    if (sumHistory.includes(currentValue)) {
      return false;
    }

    sumHistory.push(currentValue);
  }

  return currentValue === 1;
};
