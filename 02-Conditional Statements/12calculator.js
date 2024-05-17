function calculator(num1, num2, operation) {
  let result;

  if (operation == 'add') {
    result = num1 + num2;
  } else if (operation == 'subtract') {
    result = num1 - num2;
  } else if (operation == 'divide') {
    result = num1 / num2;
  } else if (operation == 'multiply') {
    result = num1 * num2;
  }
  
    console.log(result.toFixed(2));
  }

calculator(9, 3, 'divide');