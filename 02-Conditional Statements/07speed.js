function speedInfo(speed) {
  if (speed <= 10) {
    console.log('slow');
  } else if (speed > 10 && speed <= 60) {
    console.log('average');
  } else if (speed > 60 && speed <= 120) {
    console.log('fast');
  } else if (speed > 120 && speed <= 160) {
    console.log('super-fast');
  } else if (speed > 160) {
    console.log('turbo-fast');
  }
}

speedInfo(60);