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

// Return distance in meter
const dist = haversine([4.8668945,36.7699898], [3.9354349,36.6988394]);
console.log(dist); // Output 83381.53382511878
```

### Params

```javascript
haversine(a, b);
```

| Prop | Type    |  Note      |
|------|---------|------------|
| `a`  | `array` | [lon, lat] |
| `b`  | `array` | [lon, lat] |
