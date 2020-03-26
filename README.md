# haversine
Haversine formula to determine distance between 2 points   
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

let dist;

// Return distance in meter from arrays
dist = haversine(
  [4.8668945,36.7699898], 
  [3.9354349,36.6988394],
);

// Output 83381.53382511878
console.log(dist); 

// Return distance in meter from objects
dist = haversine(
  { longitude: 4.8668945, latitude: 36.7699898 }, 
  { longitude: 3.9354349, latitude: 36.6988394 },
);

// Output 83381.53382511878
console.log(dist); 
```

### Params

```javascript
haversine(a, b);
```

| Prop | Type                |  Note                                     |
|------|---------------------|-------------------------------------------|
| `a`  | `array` or `object` | `[lon, lat]` or `{ longitude, latitude }` |
| `b`  | `array` or `object` | `[lon, lat]` or `{ longitude, latitude }` |
