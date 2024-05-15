function converter(euro) {
  let lev = 1.95583;
  let sum = euro * lev;
  
  console.log(sum.toFixed(2));
}

converter(123);