function solve(num) {
  let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += i * 2;
    }
    console.log(sum);
}

solve(3);