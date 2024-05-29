function addRemoveElements(commands) {
  let arr = [];
  let number = 1;

  for (let command of commands) {
    if (command === 'add') {
      arr.push(number);
    } else if (command === 'remove') {
      arr.pop();
    }
    number++;
  }

  if (arr.length === 0) {
    console.log("Empty");
  } else {
    console.log(arr.join(' '));
  }
}

addRemoveElements(['remove', 'remove', 'remove']);