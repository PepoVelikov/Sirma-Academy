function vacation(daysToStay, typeOfRoom, assessment) {
  const priceRoom = 25;
  const priceApartment = 50;
  const pricePresidential = 100;

  let priceForHoliday;
  let days = daysToStay - 1;
switch (typeOfRoom) {
  case 'single room':
    priceForHoliday = priceRoom * days;
    break;
  case 'apartment':
    if (daysToStay < 10) {
      priceForHoliday = priceApartment * days - (priceApartment * days) * 0.3;
    } else if (daysToStay >= 10 && daysToStay < 15) {
      priceForHoliday = priceApartment * days - (priceApartment * days) * 0.35; 
    } else if (daysToStay >= 15) {
      priceForHoliday = priceApartment * days - (priceApartment * days) * 0.5;
    }
  case 'president apartment':
    if (daysToStay < 10) {
      priceForHoliday = pricePresidential * days - (pricePresidential * days) * 0.1;
    } else if (daysToStay >= 10 && daysToStay < 15) {
      priceForHoliday = pricePresidential * days - (pricePresidential * days) * 0.15; 
    } else if (daysToStay >= 15) {
      priceForHoliday = pricePresidential * days - (pricePresidential * days) * 0.2;
    }
    break;
  default:
    break;
}
if (assessment === 'positive') {
  priceForHoliday = priceForHoliday + priceForHoliday * 0.25;
  console.log(priceForHoliday.toFixed(2));
} else {
  priceForHoliday = priceForHoliday - priceForHoliday * 0.1;
  console.log(priceForHoliday.toFixed(2));
}


}

vacation(30, 'president apartment', 'negative');