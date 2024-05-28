function reverseAndPrint(arr) {
  const len = arr.length;
  
  for (let i = 0; i < len / 2; i++) {
      const temp = arr[i];
      arr[i] = arr[len - 1 - i];
      arr[len - 1 - i] = temp;
  }
  console.log(arr.join(' '));
}

reverseAndPrint(['a', 'b', 'c', 'd', 'e']);