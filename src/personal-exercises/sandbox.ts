const chunkInputs = ["2\n3"];

(() => {
  const inputItems = chunkInputs[0].split("\n");
  console.log("eee");

  if (inputItems.length !== 2) {
    console.log("Invalid numbers of input");
    return;
  }

  const num1 = +inputItems[0];
  const num2 = +inputItems[1];

  const sum = num1 + num2;

  if (isNaN(sum)) {
    console.log("Invalid input format");
    return;
  }

  console.log(sum);
})();

export default {};
