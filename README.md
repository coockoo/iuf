# Immutable Update Functions

Always return a **new object** with updated properties in some way.

```
npm i imu

import * as imu from 'imu';
const imu = require('imu');
```

## Simple Usage

```javascript
const imu = require('imu');

const obj = { a: { b: { c: 15 }, b1: 20 }, a1: 'x' };
const newObj = imu.setIn(obj, ['a', 'b', 'c'], 16);

console.log(obj, newObj, obj !== newObj);
```

## API

### Functions

- [mergeIn](#merge-in)
- [pushIn](#push-in)
- [setIn](#set-in)
- [sliceIn](#slice-in)
- [toggleIn](#toggle-in)
- [updateInWith](#updateInWith-in)


### <a name="merge-in"></a>mergeIn

Merge object into another object

```javascript
const obj = { a: { b: { c: 15 }, b1: 20 }, a1: 'x' };
const newObj = imu.mergeIn(obj, ['a', 'b'], { c: 10, d: 12 });
// => { a: { b: { c: 10, d: 12 }, b1: 20 }, a1: 'x' }
```

### <a name="push-in"></a>pushIn

Push value to an array

```javascript
const obj = { a: { b: { c: [1, 2, 3] }, b1: 20 }, a1: 'x' };
const newObj = imu.pushIn(obj, ['a', 'b', 'c'], 4);
// => { a: { b: { c: [1, 2, 3, 4] }, b1: 20 }, a1: 'x' }
```

### <a name="set-in"></a>setIn

Set value of a property

```javascript
const obj = { a: { b: { c: 15 }, b1: 20 }, a1: 'x' };
const newObj = imu.setIn(obj, ['a', 'b', 'c'], 99);
// => { a: { b: { c: 99 }, b1: 20 }, a1: 'x' }
```

### <a name="slice-in"></a>sliceIn

Remove an item from an array by given index

```javascript
const obj = { a: { b: { c: [1, 2, 3] }, b1: 20 }, a1: 'x' };
const newObj = imu.sliceIn(obj, ['a', 'b', 'c'], 4);
// => { a: { b: { c: [1, 3] }, b1: 20 }, a1: 'x' }
```

### <a name="toggle-in"></a>toggleIn

Toggle boolean value to opposite.

```javascript
const obj = { a: { b: { c: false }, b1: 20 }, a1: 'x' };
const newObj = imu.toggleIn(obj, ['a', 'b', 'c']);
// => { a: { b: { c: true }, b1: 20 }, a1: 'x' }
```

### <a name="update-in-with"></a>updateInWith

Perform update using a callback function

```javascript
const obj = { a: { b: { c: 10 }, b1: 20 }, a1: 'x' };
function doUpdate (value) {
  return value > 0 ? value - 5 : value + 10;
}
const newObj = imu.updateInWith(obj, ['a', 'b', 'c'], doUpdate);
// => { a: { b: { c: 5 }, b1: 20 }, a1: 'x' }
```

## License

MIT
