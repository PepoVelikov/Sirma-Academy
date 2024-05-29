function compareStringArrays(arr1, arr2) {

  if (arr1.length !== arr2.length) {
      console.log(`Arrays are not identical. Found difference at index ${Math.min(arr1.length, arr2.length)}`);
      return;
  }

  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
          console.log(`Arrays are not identical. Found difference at index ${i}`);
          return;
      }
  }

  const sum = arr1.reduce((acc, curr) => acc + Number(curr), 0);
  console.log(`Arrays are identical. Sum: ${sum}`);
}

compareStringArrays(['10', '20', '30'], ['10', '20', '30']);