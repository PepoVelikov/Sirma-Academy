function printElement(arr, step) {
  let result = [];

  for (let i = 0; i < arr.length; i += step) {
    result.push(arr[i]);
  }

  console.log(result.join(' '));
}

printElement(['dsa', 'asd', 'demo', 'test'], 2);