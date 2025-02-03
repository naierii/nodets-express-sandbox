export default function (row: number) {
  if (typeof row !== "number" || row === Infinity) {
    console.error("Non numerical numbers are not allowed");
    return;
  } else if (row < 0) {
    console.error("Negative values are not allowed");
    return;
  } else if (row === 0) {
    console.error("0 values are not allowed");
    return;
  }

  let displayValue: string = "";
  for (let iRow = 1; iRow <= row; iRow++) {
    // +1 Represents the adjustment of index
    // Which starts from zero to the business requirement
    // that number should start from 1
    for (let iColumn = 1; iColumn <= iRow; iColumn++) {
      displayValue += `${iColumn}`;
    }

    if (iRow + 1 <= row) {
      displayValue += "\n";
    }
  }

  return displayValue;
}
