function climateZoneIdentifier(latitude, hemisphere) {

  if (latitude > 66.5 || latitude < -66.5) {
    console.log('Arctic Zone');
  } else if (latitude >= 23.5 && latitude <= 66.5) {
    console.log('Temperate Zone');
  } else if (latitude > 0 && latitude < 23.5) {
    console.log('Tropic Zone');
  } else if (latitude == 0) {
    console.log('Equator');
  }
}

climateZoneIdentifier(0, 'S');