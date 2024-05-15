function converter(euro) {
  let lev = 1.95583;
  let sum = euro * lev;

  sum = sum.toFixed(2);
  
  console.log(sum);
}

converter(123);