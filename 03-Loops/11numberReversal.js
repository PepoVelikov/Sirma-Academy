function solve(num) {
  let reverseNumber = '';
  let str = num.toString();

for (let i = 0; i < str.length; i++) {
  reverseNumber =  str[i] + reverseNumber
}

console.log(reverseNumber)
}

solve(9876);