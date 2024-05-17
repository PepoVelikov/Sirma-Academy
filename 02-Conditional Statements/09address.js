function address(age, gender) {
  if (gender == 'f') {
    if (age <= 15) {
      console.log('Miss');
    } else {
      console.log('Ms.');
    }
  } else if (gender == 'm') {
    if (age <= 16) {
      console.log('Master');
    } else {
      console.log('Mr.');
    }
  }
}

address(14, 'f');