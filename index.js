const DEG_TO_RAD = Math.PI / 180;
const EARTH_RADIUS = 6371008; // Mean earth radius in meter see https://en.wikipedia.org/wiki/Earth

//-------
// Haversine formula
// https://en.wikipedia.org/wiki/Haversine_formula
//-------
module.exports = function (a, b) {
  // Convert in degree
  const [lon1, lat1] = a.map(v => v * DEG_TO_RAD);
  const [lon2, lat2] = b.map(v => v * DEG_TO_RAD);

  // Haversine formula found in wikipedia page
  return 2 * EARTH_RADIUS * Math.asin(
    Math.sqrt(
      Math.sin((lat2 - lat1) * 0.5) ** 2
      + Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) * 0.5) ** 2
    )
  );
};
