function profit(renovationBugdet, powders, lipsticks, spirals, shadows, correctors) {
  const pricePowder = 2.6;
  const priceLipstick = 3;
  const priceSpiral = 4.1;
  const priceShadows = 8.2;
  const priceCorrector = 2;

  let countProducts = powders + lipsticks + spirals + shadows + correctors;
  let priceOrder = powders * pricePowder 
    + lipsticks * priceLipstick 
    + spirals * priceSpiral 
    + shadows * priceShadows 
    + correctors * priceCorrector;

  let rentMoney;
  let profit;
  let moneyLeft;
  let moneyNeeded;

  if (countProducts >= 50) {
    priceOrder = priceOrder - (priceOrder * 0.25);
    rentMoney = priceOrder * 0.1;
    profit = priceOrder - rentMoney;
    moneyLeft = (profit - renovationBugdet).toFixed(2);
    if (profit > renovationBugdet) {
      console.log(`Yes! ${moneyLeft} BGN left.`);
    } else {
      moneyNeeded = (renovationBugdet - profit).toFixed(2);
      console.log(`Not enough money! ${moneyNeeded} BGN needed`);
    }
  } else {
    rentMoney = priceOrder * 0.1;
    profit = priceOrder - rentMoney;
    moneyLeft = (profit - renovationBugdet).toFixed(2);
  } if (profit > renovationBugdet) {
    console.log(`Yes! ${moneyLeft} BGN left.`);
  } else {
    moneyNeeded = (renovationBugdet - profit).toFixed(2);
    console.log(`Not enough money! ${moneyNeeded} BGN needed`);
  }
  
}


profit(320, 8, 2, 5, 5, 1);