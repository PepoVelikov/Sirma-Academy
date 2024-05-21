function university(score, extracurricular) {
  
  if (score >= 90) {
    console.log('Admitted');
  } else if (score >= 80 && score <= 89 && extracurricular >= 2) {
    console.log('Admitted');
  } else if (score >= 80 && score <= 89 && extracurricular < 2) {
      console.log('Not admitted');
  } else if (score <80) {
    console.log('Not admitted');
  }
}


university(85, 1);