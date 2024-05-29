function isValidLength(password) {
  return password.length >= 6 && password.length <= 10;
}

function hasOnlyLettersAndDigits(password) {
  for (let char of password) {
    if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9'))) {
      return false;
    }
  }
  return true;
}

function hasAtLeastTwoDigits(password) {
  let digitCount = 0;
  for (let char of password) {
    if (char >= '0' && char <= '9') {
      digitCount++;
    }
  }
  return digitCount >= 2;
}

function validatePassword(password) {
  if (!isValidLength(password)) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!hasOnlyLettersAndDigits(password)) {
    console.log("Password must consist only of letters and digits");
  }
  if (!hasAtLeastTwoDigits(password)) {
    console.log("Password must have at least 2 digits");
  }
  if (isValidLength(password) && hasOnlyLettersAndDigits(password) && hasAtLeastTwoDigits(password)) {
    console.log("Password is valid");
  }
}

validatePassword('pass');