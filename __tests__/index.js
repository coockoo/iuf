const iuf = require('../src');

test('does valid mergeIn', () => {
  const obj = { a: { b: { c: 15 }, b1: 20 }, a1: 'x' };
  const newObj = iuf.mergeIn(obj, ['a', 'b'], { c: 10, d: 12 });
  expect(newObj.a.b.c).toBe(10);
  expect(newObj.a.b.d).toBe(12);
  expect(newObj).not.toBe(obj);
});

test('does valid pushIn', () => {
  const obj = { a: { b: { c: [1, 2, 3] }, b1: 20 }, a1: 'x' };
  const newObj = iuf.pushIn(obj, ['a', 'b', 'c'], 4);
  expect(newObj.a.b.c).toHaveLength(4);
  expect(newObj.a.b.c[3]).toEqual(4);
  expect(newObj.a.b.c).toBeInstanceOf(Array);
  expect(newObj).not.toBe(obj);
});

test('does valid setIn', () => {
  const obj = { a: { b: { c: 15 }, b1: 20 }, a1: 'x' };
  const newObj = iuf.setIn(obj, ['a', 'b', 'c'], 16);
  expect(newObj.a.b.c).toEqual(16);
  expect(newObj).not.toBe(obj);
});

test('does valid sliceIn', () => {
  const obj = { a: { b: { c: [1, 2, 3] }, b1: 20 }, a1: 'x' };
  const newObj = iuf.sliceIn(obj, ['a', 'b', 'c'], 1);
  expect(newObj.a.b.c).toHaveLength(2);
  expect(newObj.a.b.c[0]).toEqual(1);
  expect(newObj.a.b.c[1]).toEqual(3);
  expect(newObj.a.b.c).toBeInstanceOf(Array);
  expect(newObj).not.toBe(obj);
});

test('does valid toggleIn', () => {
  const obj = { a: { b: { c: false }, b1: 20 }, a1: 'x' };
  const newObj = iuf.toggleIn(obj, ['a', 'b', 'c']);
  expect(newObj.a.b.c).toEqual(true);
  expect(newObj).not.toBe(obj);
});

test('does valid updateInWith', () => {
  function doUpdate (value) {
    return value > 0 ? value - 5 : value + 10;
  }
  const obj = { a: { b: { c: 10 }, b1: 20 }, a1: 'x' };
  const newObj = iuf.updateInWith(obj, ['a', 'b', 'c'], doUpdate);
  expect(newObj.a.b.c).toEqual(5);
  expect(newObj).not.toBe(obj);
});

test('creates non-existant path for setIn', () => {
  const obj = { a: { b: 10, b1: 20 }, a1: 'x' };
  const newObj = iuf.setIn(obj, ['c', 'd'], 16);
  expect(newObj).toHaveProperty('c');
  expect(newObj.c).toHaveProperty('d');
  expect(newObj.c.d).toEqual(16);
  expect(newObj).not.toBe(obj);
});

test('does valid filterIn', () => {
  const obj = { a: { b: [{ k: 1 }, { k: -1 }, { k: 0 }] }, c: 'x' };
  const newObj = iuf.filterIn(obj, ['a', 'b'], (e) => e.k > 0);
  expect(newObj.a.b).toHaveLength(1);
  expect(newObj.a.b).toHaveProperty('0.k', obj.a.b[0].k);
  expect(newObj).toHaveProperty('c', obj.c);
  expect(newObj).not.toBe(obj);
});
