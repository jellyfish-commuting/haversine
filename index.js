const DEG_TO_RAD = Math.PI / 180;
const EARTH_RADIUS = 6371008; // Mean earth radius in meter see https://en.wikipedia.org/wiki/Earth_radius#Mean_radius

//-------
// Haversine formula
// https://en.wikipedia.org/wiki/Haversine_formula
//-------
module.exports = function (a, b) {
  // Convert in rads
  const [lon1, lat1] = Array.isArray(a) ? [a[0] * DEG_TO_RAD, a[1] * DEG_TO_RAD] : [a.longitude * DEG_TO_RAD, a.latitude * DEG_TO_RAD];
  const [lon2, lat2] = Array.isArray(b) ? [b[0] * DEG_TO_RAD, b[1] * DEG_TO_RAD] : [b.longitude * DEG_TO_RAD, b.latitude * DEG_TO_RAD];

  // Haversine formula found in wikipedia page
  return 2 * EARTH_RADIUS * Math.asin(
    Math.sqrt(
      Math.sin((lat2 - lat1) / 2) ** 2
      + Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) / 2) ** 2
    )
  );
};
