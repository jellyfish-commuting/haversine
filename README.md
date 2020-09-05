[![Version](https://img.shields.io/npm/v/@jellyfish-commuting/haversine)](https://www.npmjs.com/package/@jellyfish-commuting/haversine)
[![Licence](https://img.shields.io/npm/l/@jellyfish-commuting/haversine)](https://en.wikipedia.org/wiki/ISC_license)
[![Build](https://img.shields.io/travis/jellyfish-commuting/haversine)](https://travis-ci.org/github/jellyfish-commuting/haversine)
[![Coverage](https://img.shields.io/codecov/c/github/jellyfish-commuting/haversine)](https://codecov.io/gh/jellyfish-commuting/haversine)
[![Downloads](https://img.shields.io/npm/dt/@jellyfish-commuting/haversine)](https://www.npmjs.com/package/@jellyfish-commuting/haversine)

# haversine
Haversine formula to determine distance between 2 points in few lines of code  
Formula applied is taken from https://en.wikipedia.org/wiki/Haversine_formula


### Install
```bash
yarn add @jellyfish-commuting/haversine
```
or
```bash
npm install @jellyfish-commuting/haversine
```
### Usage
```javascript
import haversine from '@jellyfish-commuting/haversine';

// ... coordinates example
const a = [4.8668945, 36.7699898];
const b = [3.9354349, 36.6988394];
let dist;

// Distance in meters from array
dist = haversine(a, b);

// Output 83381.53382511878
console.log(dist); 

// Distance in meters from object
dist = haversine(
  { longitude: 4.8668945, latitude: 36.7699898 }, 
  { longitude: 3.9354349, latitude: 36.6988394 },
);

// Distance in miles
dist = haversine(a, b, 'mi');

// Distance in nautical miles
dist = haversine(a, b, 'nmi');

// Distance in feet
dist = haversine(a, b, 'ft');

// Distance in inches
dist = haversine(a, b, 'in');

// Distance in Km
dist = haversine(a, b, 'km');
```

### Params

```javascript
haversine(a, b, unit='m');
```

| Prop   | Type                |  Note                                     |
|--------|---------------------|-------------------------------------------|
| `a`    | `array` or `object` | `[lon, lat]` or `{ longitude, latitude }` |
| `b`    | `array` or `object` | `[lon, lat]` or `{ longitude, latitude }` |
| `unit` | `string`            | Unit param is optional (default is meter) |


### Supported units
   
`m` for meter (default)  
`km` for kilometer   
`mi` for mile  
`nmi` for nautical mile  
`ft` for foot  
`in` for inch
  

### Return value

Distance in unit
