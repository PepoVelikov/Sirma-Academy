function grocery(product, city, quantity) {
  let price;
  if (product == 'tea') {
    if (city == 'Sofia') {
      price = 0.5;
    } else if (city == 'Plovdiv') {
      price = 0.4;
    } else if (city == 'Varna') {
      price = 0.45;
      }
    }
  if (product == 'water') {
    if (city == 'Sofia') {
      price = 0.8;
    } else if (city == 'Plovdiv') {
      price = 0.7;
    } else if (city == 'Varna') {
      price = 0.7;
      } 
    }
  if (product == 'juice') {
    if (city == 'Sofia') {
      price = 1.2;
    } else if (city == 'Plovdiv') {
      price = 1.15;
    } else if (city == 'Varna') {
      price = 1.1;
      }
    }
  if (product == 'sweets') {
    if (city == 'Sofia') {
      price = 1.45;
    } else if (city == 'Plovdiv') {
      price = 1.3;
    } else if (city == 'Varna') {
      price = 1.35;
      }
    }
  if (product == 'chips') {
    if (city == 'Sofia') {
      price = 1.6;
    } else if (city == 'Plovdiv') {
      price = 1.5;
    } else if (city == 'Varna') {
      price = 1.55;
      }
    }
    console.log((price * quantity).toFixed(2));
  }

grocery('chips', 'Varna', 2);