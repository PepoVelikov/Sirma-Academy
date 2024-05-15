function furnishing(first) {
  let second = first - (first * 0.2);
  let third = first + second + ((first + second) * 0.15);
  let totalCost = first + second + third;

  totalCost = totalCost.toFixed(3);
  console.log(totalCost);  
}

furnishing(720.50);