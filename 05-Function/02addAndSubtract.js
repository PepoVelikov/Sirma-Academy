function sum(a, b) {
  return a + b;
}

function subtract(sumResult, c) {
  return sumResult - c;
}

function calculateSumAndSubtract(a, b, c) {
  const resultOfSum = sum(a, b);
  const finalResult = subtract(resultOfSum, c);
  console.log(finalResult);
}

calculateSumAndSubtract(23, 6, 10);