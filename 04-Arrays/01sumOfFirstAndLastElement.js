function printElements(arr) {
  let firstElement = parseInt(arr[0]);
  let lastElement = parseInt(arr[arr.length - 1]);

  console.log(firstElement + lastElement);
}

printElements(['10', '17', '22', '33']);