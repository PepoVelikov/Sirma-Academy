function potion(ingredients1, ingredients2) {
  
  if (ingredients1 == 'herbs') {
    if (ingredients2 == 'water') {
      console.log('Health potion');
    } else if (ingredients2 == 'oil') {
      console.log('Stealth potion');
    } else {
      console.log('Minor stamina potion');
    }
  } else if (ingredients1 == 'berries') {
    if (ingredients2 == 'sugar') {
      console.log('Speed potion');
    } else {
      console.log('Minor energy potion');
    }
  } else {
    console.log('No potion');
  }
}

potion('sugar', 'salt');