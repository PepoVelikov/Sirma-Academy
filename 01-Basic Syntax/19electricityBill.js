function electricity(units, rate) {

  let totalBill = (units * rate) + 10;

  console.log(totalBill.toFixed(2));
}

electricity(150, 1.1);