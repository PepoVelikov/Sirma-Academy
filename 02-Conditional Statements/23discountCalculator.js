function discountClcultor(age, membership) {
   
  if (age < 18) {
    console.log('10% discount');
  } else if (age >= 18 && age <= 64 && membership == 'Yes') {
    console.log('20% discount');
  } else if (age >= 18 && age <= 64 && membership == 'No') {
    console.log('10% discount');
  } else if (age > 64) {
    console.log('30% discount');
  }
}

discountClcultor(70, 'Yes')