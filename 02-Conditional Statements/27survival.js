function survival(timeOfDay, environment, item) {
  
  if (timeOfDay == 'day') {
    if (environment == 'forest') {
      if (item == 'knife') {
        console.log('Hunt for food'); 
      } else if (item == 'container') {
        console.log('Collect berries');
      } else {
        console.log('Explore');
      }
    } if (environment == 'desert') {
      if (item == 'hat') {
        console.log('Search for water');
      } else {
        console.log('Find shade');
      }
    } 
  } else if (timeOfDay == 'night') {
    if (environment == 'forest') {
      if (item == 'firestarter') {
        console.log('Make a campfire');
      } else {
        console.log('Climb on a tree');
      }
    } else if (environment == 'desert') {
      if (item == 'blanket') {
        console.log('Sleep');
      } else {
        console.log('Keep moving to stay warm');
      }
    }
  }
}

survival('night', 'desert', 'sword');