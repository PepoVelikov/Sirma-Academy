function reverseNumbers(n, arr) {
  const newArr = arr.slice(0, n).reverse();
  
  console.log(newArr.join(' '));
  }

  reverseNumbers(4, [-1, 20, 99, 5]);