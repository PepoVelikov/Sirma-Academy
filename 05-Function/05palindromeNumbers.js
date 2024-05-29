function isPalindrome(number) {
  const strNumber = number.toString();
  const reversedStrNumber = strNumber.split('').reverse().join('');
  return strNumber === reversedStrNumber;
}

function checkPalindromes(numbers) {
  return numbers.map(function(number) {
    console.log(isPalindrome(number));
  });
}

checkPalindromes([123, 323, 421, 121]);