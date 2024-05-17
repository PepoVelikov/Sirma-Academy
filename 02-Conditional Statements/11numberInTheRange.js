function numberRange(number) {
  let isValidNumber = number >= -100 
    && number <= 100
    && number != 0;

  if (number = isValidNumber) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

numberRange(-101);