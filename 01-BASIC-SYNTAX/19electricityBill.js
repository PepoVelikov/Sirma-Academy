function electricity(units, rate) {

  let totalBill = (units * rate) + 10;
  totalBill = totalBill.toFixed(2);

  console.log(totalBill);
}

electricity(150, 1.1);