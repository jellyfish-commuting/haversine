# haversine
Haversine formula to determine distance between 2 points in few lines of code  
Fomula applyed is issued from https://en.wikipedia.org/wiki/Haversine_formula


### Install
```bash
yarn add @thejellyfish/haversine
```
or
```bash
npm install @thejellyfish/haversine
```
### Usage
```javascript
import haversine from '@thejellyfish/haversine';

const a = [4.8668945, 36.7699898];
const b = [3.9354349, 36.6988394];
let dist;

// Distance in meter from array
dist = haversine(a, b);

// Output 83381.53382511878
console.log(dist); 

// Distance in meter from object
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

// Distance in inch
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

*Allowable units are*  
   
`m` for meter (default)  
`km` for kilometer   
`mi` for mile  
`nmi` for nautical mile  
`ft` for foot  
`in` for inch
  

### Return value

Distance in unit
