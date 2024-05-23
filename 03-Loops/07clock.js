function clock() {
  let hour = 0;
  let minute = 0;

  for (hour = 0; hour < 24; hour++)
    for (let minute = 0; minute < 60; minute++) {
      console.log(`${hour}:${minute}`);
  }  
}

clock();