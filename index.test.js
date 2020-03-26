const haversine = require('./index');

// Start tests ...
describe('Haversine', () => {
  it('expect distance between Bejaia and Tizi Ouzou equal around 83Km', () => expect(haversine([4.8668945,36.7699898], [3.9354349,36.6988394])).toBe(83381.53382511878));
});
