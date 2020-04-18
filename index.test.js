const haversine = require('./index');

// Start tests ...
describe('Haversine', () => {
  it('expect distance in meter between Bejaia and Tizi Ouzou equal around 83Km', () => {
    expect(haversine(
      [4.8668945,36.7699898],
      [3.9354349,36.6988394],
    ))
      .toBe(83381.53382511878);
  });

  it('expect distance in meter between Bejaia and Tizi Ouzou equal around 83Km', () => {
    expect(haversine(
      { longitude: 4.8668945, latitude: 36.7699898 },
      { longitude: 3.9354349, latitude: 36.6988394 },
    ))
      .toBe(83381.53382511878);
  });

  it('expect distance in Km between Bejaia and Tizi Ouzou equal around 83Km', () => {
    expect(haversine(
      [4.8668945,36.7699898],
      [3.9354349,36.6988394],
      'km',
    ))
      .toBe(83.38153382511877);
  });

  it('expect distance in Km between Bejaia and Tizi Ouzou equal around 83Km', () => {
    expect(haversine(
      { longitude: 4.8668945, latitude: 36.7699898 },
      { longitude: 3.9354349, latitude: 36.6988394 },
      'km',
    ))
      .toBe(83.38153382511877);
  });

  it('expect distance in miles between Bejaia and Tizi Ouzou equal around 51mi', () => {
    expect(haversine(
      [4.8668945,36.7699898],
      [3.9354349,36.6988394],
      'mi',
    ))
      .toBe(51.81088306370237);
  });

  it('expect distance in miles between Bejaia and Tizi Ouzou equal around 51mi', () => {
    expect(haversine(
      { longitude: 4.8668945, latitude: 36.7699898 },
      { longitude: 3.9354349, latitude: 36.6988394 },
      'mi',
    ))
      .toBe(51.81088306370237);
  });

  it('expect distance in nautical miles between Bejaia and Tizi Ouzou equal around 45nmi', () => {
    expect(haversine(
      [4.8668945,36.7699898],
      [3.9354349,36.6988394],
      'nmi',
    ))
      .toBe(45.02242643344749);
  });

  it('expect distance in nautical miles between Bejaia and Tizi Ouzou equal around 45nmi', () => {
    expect(haversine(
      { longitude: 4.8668945, latitude: 36.7699898 },
      { longitude: 3.9354349, latitude: 36.6988394 },
      'nmi',
    ))
      .toBe(45.02242643344749);
  });

  it('expect distance in feet between Bejaia and Tizi Ouzou equal around 273561ft', () => {
    expect(haversine(
      [4.8668945,36.7699898],
      [3.9354349,36.6988394],
      'ft',
    ))
      .toBe(273561.46268082556);
  });

  it('expect distance in feet between Bejaia and Tizi Ouzou equal around 273561ft', () => {
    expect(haversine(
      { longitude: 4.8668945, latitude: 36.7699898 },
      { longitude: 3.9354349, latitude: 36.6988394 },
      'ft',
    ))
    .toBe(273561.46268082556);
  });

  it('expect distance in inch between Bejaia and Tizi Ouzou equal around 3282737in', () => {
    expect(haversine(
      [4.8668945,36.7699898],
      [3.9354349,36.6988394],
      'in',
    ))
      .toBe(3282737.5521700736);
  });

  it('expect distance in inch between Bejaia and Tizi Ouzou equal around 3282737in', () => {
    expect(haversine(
      { longitude: 4.8668945, latitude: 36.7699898 },
      { longitude: 3.9354349, latitude: 36.6988394 },
      'in',
    ))
      .toBe(3282737.5521700736);
  });
});
