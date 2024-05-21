function luggageCharges(weight, dimensions) {
  let fee = 0;
  let oversize = dimensions - 158;

  if (weight > 50 && oversize <= 0) {
    fee += 100;
    console.log(`$${fee} (Overweight)`);  
  } else if (weight <= 50 && oversize > 0) {
    if (oversize <= 20) {
      fee += 50;
      console.log(`$${fee} (Slightly oversize)`);
    } else if (oversize <= 50) {
      fee += 100;
      console.log(`$${fee} (Oversize)`);
    } else if (oversize > 50) {
      fee += 200;
      console.log(`$${fee} (Oversize)`);
    }
  } else if (weight > 50 && oversize > 0) {
    fee += 100; //Overweight fee
    if (oversize <= 20) {
      fee += 50; //Oversize fee
      fee += 50; //Additional handling fee
      console.log(`$${fee} (Overweight + Oversize + Handling)`);
    } else if (oversize <= 50) {
      fee += 100; //Oversize fee
      fee += 50; //Additional handling fee
      console.log(`$${fee} (Overweight + Oversize + Handling)`);
    } else if (oversize > 50) {
      fee += 200; //Oversize fee
      fee += 50; //Additional handling fee
      console.log(`$${fee} (Overweight + Oversize + Handling)`);
    }
  }
}

luggageCharges(55, 190);