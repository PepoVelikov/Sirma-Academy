function speed(distance, hours, minutes, seconds) {
  let time = hours * 3600 + minutes * 60 + seconds;
  let speed = distance / time;

  speed = speed.toFixed(6);
  
  console.log(speed);
}

speed(2500, 5, 56, 23);