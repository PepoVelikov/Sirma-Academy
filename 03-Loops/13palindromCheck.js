function solve(text) {
  let reverseStr = '';

  for (let i = 0; i < text.length; i++) {
      reverseStr = text[i] + reverseStr;
  }

  if (text === reverseStr) {
      console.log('true');
  } else {
      console.log('false');
  }
}

solve('hello');
