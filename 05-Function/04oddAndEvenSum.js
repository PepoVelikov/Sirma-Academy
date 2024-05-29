function sumEvenAndOddDigits(number) {
  let oddSum = 0;
  let evenSum = 0;
  
  const numStr = number.toString();
  
  for (let i = 0; i < numStr.length; i++) {
      const digit = Number(numStr[i]);
      
      if (digit % 2 === 0) {
          evenSum += digit;
      } else {
          oddSum += digit;
      }
  }
  
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

sumEvenAndOddDigits(1000435);
