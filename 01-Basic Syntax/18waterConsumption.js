function waterConsumption(water, people) {
  let daylyConsumption = water / 7;
  let daylyConsumptionPerPerson = daylyConsumption / people;

  console.log(daylyConsumptionPerPerson.toFixed(2));
}

waterConsumption(3150, 10);