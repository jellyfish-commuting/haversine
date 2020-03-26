const DEG_TO_RAD = Math.PI / 180;
const EARTH_RADIUS = 6371008; // Mean earth radius in meter see https://en.wikipedia.org/wiki/Earth_radius#Mean_radius

//-------
// Haversine formula
// https://en.wikipedia.org/wiki/Haversine_formula
//-------
module.exports = function (a, b) {
  // Init vars
  let lon1;
  let lat1;
  let lon2;
  let lat2;

  // From Arrays ?
  if (Array.isArray(a) && Array.isArray(b)) {
    [lon1, lat1] = a.map(v => v * DEG_TO_RAD);
    [lon2, lat2] = b.map(v => v * DEG_TO_RAD);

  // ... or get longitude & latitude props
  } else {
    lon1 = a.longitude * DEG_TO_RAD;
    lat1 = a.latitude * DEG_TO_RAD;
    lon2 = b.longitude * DEG_TO_RAD;
    lat2 = b.latitude * DEG_TO_RAD;
  }

  // Haversine formula found in wikipedia page
  return 2 * EARTH_RADIUS * Math.asin(
    Math.sqrt(
      Math.sin((lat2 - lat1) / 2) ** 2
      + Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) / 2) ** 2
    )
  );
};
