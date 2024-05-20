function holidayBudget(budget, season) {
  season == 'summer' || 'winter';
  let destination;
  let accommodation;
  let spentAmount;

  switch (season) {
    case 'summer':
      if (budget <= 100) {
        destination = 'Bulgaria';
        accommodation = 'Camp';
        spentAmount = (budget * 0.3).toFixed(2);
      } else if (budget > 100 && budget < 1000) {
        destination = 'Europa';
        accommodation = 'Camp';
        spentAmount = (budget * 0.4).toFixed(2);
      } else if (budget >= 1000) {
        destination = 'Asia';
        accommodation = 'Hotel';
        spentAmount = (budget * 0.9).toFixed(2);
      }
      break;
    case 'winter':
      if (budget <= 100) {
        destination = 'Bulgaria';
        accommodation = 'Hotel';
        spentAmount = (budget * 0.7).toFixed(2);
      } else if (budget > 100 && budget < 1000) {
        destination = 'Europa';
        accommodation = 'Hotel';
        spentAmount = (budget * 0.8).toFixed(2);
      } else if (budget >= 1000) {
        destination = 'Asia';
        accommodation = 'Hotel';
        spentAmount = (budget * 0.9).toFixed(2);
      }
      break;

    default:
      break;
  }
  
  console.log(`Somewhere in ${destination}`);
  console.log(`${accommodation} - ${spentAmount}`);
}

holidayBudget(1500, 'winter');