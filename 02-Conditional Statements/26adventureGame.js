function adventureGame(tool1, tool2) {
  
  if (tool1 == 'sword') {
    if (tool2 == 'shield') {
      console.log('Path to the castle');
    } else {
      console.log('Path to the forest');
    }
  } else if (tool1 == 'map') {
    if (tool2 == 'coins') {
      console.log('Go to the town');
    } else {
      console.log('Camp');
    }
  } else {
    console.log('Wander aimlessly');
  }
}

adventureGame('map', 'coins');