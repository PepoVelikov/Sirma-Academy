function speed(distance, hours, minutes, seconds) {
  let time = hours * 3600 + minutes * 60 + seconds;
  let speed = distance / time;
  
  console.log(speed.toFixed(6));
}

speed(2500, 5, 56, 23);