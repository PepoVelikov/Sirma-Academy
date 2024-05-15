function waterConsumption(water, people) {
  let daylyConsumption = water / 7;
  let daylyConsumptionPerPerson = daylyConsumption / people;

  daylyConsumptionPerPerson = daylyConsumptionPerPerson.toFixed(2);
  console.log(daylyConsumptionPerPerson);
}

waterConsumption(3150, 10);