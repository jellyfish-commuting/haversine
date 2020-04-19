// Constants
const DEG_TO_RAD = Math.PI / 180;
const EARTH_RADIUS = 6371008; // Mean earth radius in meter see https://en.wikipedia.org/wiki/Earth_radius#Mean_radius
const UNITS = {
  km: 0.001,
  m: 1,
  mi: 0.000621371192,
  nmi: 0.000539956803,
  ft: 3.280839895013,
  in: 39.370078740158,
};

//-------
// Haversine formula
// https://en.wikipedia.org/wiki/Haversine_formula
//-------
module.exports = function (a, b, unit='m') {
  // Convert in rads
  const [lon1, lat1] = Array.isArray(a) ? [a[0] * DEG_TO_RAD, a[1] * DEG_TO_RAD] : [a.longitude * DEG_TO_RAD, a.latitude * DEG_TO_RAD];
  const [lon2, lat2] = Array.isArray(b) ? [b[0] * DEG_TO_RAD, b[1] * DEG_TO_RAD] : [b.longitude * DEG_TO_RAD, b.latitude * DEG_TO_RAD];

  // Apply formula
  return 2 * EARTH_RADIUS * UNITS[unit] * Math.asin(
    Math.sqrt(
      Math.sin((lat2 - lat1) / 2) ** 2
      + Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) / 2) ** 2
    )
  );
};
