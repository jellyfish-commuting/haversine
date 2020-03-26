const DEG_TO_RAD = Math.PI / 180;
const EARTH_RADIUS = 6371008; // Mean earth radius in meter see https://en.wikipedia.org/wiki/Earth

//-------
// Haversine formula
// https://en.wikipedia.org/wiki/Haversine_formula
//-------
module.exports = function (pta, ptb) {
  // Convert in degree
  const a = pta.map(v => v * DEG_TO_RAD);
  const b = ptb.map(v => v * DEG_TO_RAD);

  // Haversine formula found in wikipedia page
  return 2 * EARTH_RADIUS * Math.asin(
    Math.sqrt(
      Math.sin((b[1] - a[1]) * 0.5) ** 2
      + Math.cos(a[1]) * Math.cos(b[1]) * Math.sin((b[0] - a[0]) * 0.5) ** 2
    )
  );
};
