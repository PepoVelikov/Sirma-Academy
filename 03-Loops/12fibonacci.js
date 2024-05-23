function solve(num) {
  let sum = 0;
  let current = 0;
  let next = 1;

  for (let i = 0; i <= num; i++) {
    sum += current;
    let temp = current + next;
    current = next;
    next = temp;
  }

  console.log(sum);
}

solve(10); // Output: 54
