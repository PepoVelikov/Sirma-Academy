function dayOfWeek(number) {
  switch (number) {
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Thuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    case 7:
      console.log('Sunday');
    default:
      console.log('Invalid day!');
      break;
  }
}

dayOfWeek(8);