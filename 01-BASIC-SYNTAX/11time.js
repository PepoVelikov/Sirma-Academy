function timeConverter(minutes) {
  let hour = Math.floor(minutes / 60);
  let remainingMinutes = minutes - hour * 60;

  if (remainingMinutes < 10){
    remainingMinutes = "0" + remainingMinutes;
  }

  console.log(hour + ":" + remainingMinutes);
}

timeConverter(60);