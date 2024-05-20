function vegetableMarket(vegetable, day, quantity) {
  let price;
  
  const isWorkingDay = day == 'Monday'
    || day == 'Tuesday'
    || day == 'Wednesday'
    || day == 'Thursday'
    || day == 'Friday';

  const isWeekend = day == 'Saturday' || day == 'Sunday';

  switch (vegetable) {
    case 'tomato':
      if (isWorkingDay) {
        price = 2.5;
        break;
      } else if (isWeekend) {
        price = 2.8;
        break
      }
    case 'onion':
      if (isWorkingDay) {
        price = 1.2;
        break;
      } else if (isWeekend) {
        price = 1.3;
        break
      }
    case 'lettuce':
      if (isWorkingDay) {
        price = 0.85;
        break;
      } else if (isWeekend) {
        price = 0.85;
        break
      }
    case 'cucumber':
      if (isWorkingDay) {
        price = 1.45;
        break;
      } else if (isWeekend) {
        price = 1.75;
        break
      }
    case 'pepper':
      if (isWorkingDay) {
        price = 5.50;
        break;
      } else if (isWeekend) {
        price = 3.5;
        break
      }

    default:
      console.log('error');
      break;
  }
  let totalPrice = price * quantity;

  console.log(totalPrice.toFixed(2));
}
vegetableMarket('tomato', 'Monday', 2);