function alarm(hour, minutes) {
  let totalMinutes = hour * 60 + minutes;

  totalMinutes += 15;

  let newHour = Math.floor(totalMinutes / 60) % 24;
  let newMinutes = totalMinutes % 60;

  let formattedHour = ('0' + newHour).slice(-2);
  let formattedMinutes = ('0' + newMinutes).slice(-2);

  let formatted = formattedHour + ':' + formattedMinutes;

  console.log(formatted);
}

alarm(11, 07);