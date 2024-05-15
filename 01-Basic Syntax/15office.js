function furnishing(first) {
  let second = first - (first * 0.2);
  let third = first + second + ((first + second) * 0.15);
  let totalCost = first + second + third;

  console.log(totalCost.toFixed(3));  
}

furnishing(720.50);