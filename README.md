# Immutable Update Functions

Always return a **new object** with updated properties in some way.

```bash
npm i iuf
```

```javascript
import * as iuf from 'iuf';
const iuf = require('iuf');
```

## Simple Usage

```javascript
const iuf = require('iuf');

const obj = { a: { b: { c: 15 }, b1: 20 }, a1: 'x' };
const newObj = iuf.setIn(obj, ['a', 'b', 'c'], 16);

console.log(obj, newObj, obj !== newObj);
```

## API

### Functions

- [filterIn](#filter-in)
- [mergeIn](#merge-in)
- [pushIn](#push-in)
- [setIn](#set-in)
- [sliceIn](#slice-in)
- [toggleIn](#toggle-in)
- [updateInWith](#update-in-with)


### <a name="filter-in"></a>filterIn

Filter collection of items using callback function

```javascript
const obj = { a: { b: [{ k: 1 }, { k: -1 }, { k: 0 }] }, c: 'x' };
const newObj = iuf.filterIn(obj, ['a', 'b'], (e) => e.k > 0);
// => { a: { b: [{ k: 1 }] }, c: 'x' };
```

### <a name="merge-in"></a>mergeIn

Merge object into another object

```javascript
const obj = { a: { b: { c: 15 }, b1: 20 }, a1: 'x' };
const newObj = iuf.mergeIn(obj, ['a', 'b'], { c: 10, d: 12 });
// => { a: { b: { c: 10, d: 12 }, b1: 20 }, a1: 'x' }
```

### <a name="push-in"></a>pushIn

Push value to an array

```javascript
const obj = { a: { b: { c: [1, 2, 3] }, b1: 20 }, a1: 'x' };
const newObj = iuf.pushIn(obj, ['a', 'b', 'c'], 4);
// => { a: { b: { c: [1, 2, 3, 4] }, b1: 20 }, a1: 'x' }
```

### <a name="set-in"></a>setIn

Set value of a property

```javascript
const obj = { a: { b: { c: 15 }, b1: 20 }, a1: 'x' };
const newObj = iuf.setIn(obj, ['a', 'b', 'c'], 99);
// => { a: { b: { c: 99 }, b1: 20 }, a1: 'x' }
```

### <a name="slice-in"></a>sliceIn

Remove an item from an array by given index

```javascript
const obj = { a: { b: { c: [1, 2, 3] }, b1: 20 }, a1: 'x' };
const newObj = iuf.sliceIn(obj, ['a', 'b', 'c'], 4);
// => { a: { b: { c: [1, 3] }, b1: 20 }, a1: 'x' }
```

### <a name="toggle-in"></a>toggleIn

Toggle boolean value to opposite.

```javascript
const obj = { a: { b: { c: false }, b1: 20 }, a1: 'x' };
const newObj = iuf.toggleIn(obj, ['a', 'b', 'c']);
// => { a: { b: { c: true }, b1: 20 }, a1: 'x' }
```

### <a name="update-in-with"></a>updateInWith

Perform update using a callback function

```javascript
const obj = { a: { b: { c: 10 }, b1: 20 }, a1: 'x' };
function doUpdate (value) {
  return value > 0 ? value - 5 : value + 10;
}
const newObj = iuf.updateInWith(obj, ['a', 'b', 'c'], doUpdate);
// => { a: { b: { c: 5 }, b1: 20 }, a1: 'x' }
```

## Roadmap

- [ ] Fix array conversion into an object.
- [ ] Add linter
- [ ] What to do with non-existant properties and paths iuf.updateIn({ a: { b: 10 } }, ['c', 'd'], 10)?
- [ ] Add withoutIn

## License

MIT
