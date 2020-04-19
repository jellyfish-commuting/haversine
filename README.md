# haversine
Haversine formula to determine distance between 2 points in few lines of code  
Fomula applyed is issued from https://en.wikipedia.org/wiki/Haversine_formula


### Install
```bash
yarn add @jellyfish/haversine
```
or
```bash
npm install @jellyfish/haversine
```
### Usage
```javascript
import haversine from '@jellyfish/haversine';

let dist;

// Distance in meter from array
dist = haversine([4.8668945, 36.7699898], [3.9354349, 36.6988394]);

// Output 83381.53382511878
console.log(dist); 

// Distance in meter from object
dist = haversine(
  { longitude: 4.8668945, latitude: 36.7699898 }, 
  { longitude: 3.9354349, latitude: 36.6988394 },
);

// Distance in miles
dist = haversine([4.8668945, 36.7699898], [3.9354349, 36.6988394], 'mi');

// Distance in nautical miles
dist = haversine([4.8668945, 36.7699898], [3.9354349, 36.6988394], 'nmi');

// Distance in nautical feet
dist = haversine([4.8668945, 36.7699898], [3.9354349, 36.6988394], 'ft');

// Distance in nautical inch
dist = haversine([4.8668945, 36.7699898], [3.9354349, 36.6988394], 'in');

// Distance in nautical Km
dist = haversine([4.8668945, 36.7699898], [3.9354349, 36.6988394], 'km');
```

### Params

```javascript
haversine(a, b, unit='m');
```

| Prop | Type                |  Note                                     |
|------|---------------------|-------------------------------------------|
| `a`  | `array` or `object` | `[lon, lat]` or `{ longitude, latitude }` |
| `b`  | `array` or `object` | `[lon, lat]` or `{ longitude, latitude }` |

*Unit param is optional (default is meter)*  

Allowable units are:  
   
`m` for meter (default)  
`km` for kilometer   
`mi` for mile  
`nmi` for nautical mile  
`ft` for foot  
`in` for inch
  

### Return value

Distance in unit
