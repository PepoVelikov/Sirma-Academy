function sumEvenNumbers(arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
      const num = parseInt(arr[i]);
      if (num % 2 === 0) {
          sum += num;
      }
  }
  
  console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6']);