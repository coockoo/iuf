const imu = require('../src');

function doMergeIn () {
  const obj = { a: { b: { c: 15 }, b1: 20 }, a1: 'x' };
  const newObj = imu.mergeIn(obj, ['a', 'b'], { c: 10, d: 12 });
  console.log(obj, newObj, obj !== newObj);
}

function doPushIn () {
  const obj = { a: { b: { c: [1, 2, 3] }, b1: 20 }, a1: 'x' };
  const newObj = imu.pushIn(obj, ['a', 'b', 'c'], 4);
  console.log(obj, newObj, obj !== newObj);
}

function doSetIn () {
  const obj = { a: { b: { c: 15 }, b1: 20 }, a1: 'x' };
  const newObj = imu.setIn(obj, ['a', 'b', 'c'], 16);
  console.log(obj, newObj, obj !== newObj);
}

function doSliceIn () {
  const obj = { a: { b: { c: [1, 2, 3] }, b1: 20 }, a1: 'x' };
  const newObj = imu.sliceIn(obj, ['a', 'b', 'c'], 1);
  console.log(obj, newObj, obj !== newObj);
}

function doToggleIn () {
  const obj = { a: { b: { c: false }, b1: 20 }, a1: 'x' };
  const newObj = imu.toggleIn(obj, ['a', 'b', 'c']);
  console.log(obj, newObj, obj !== newObj);
}

function doUpdateInWith () {
  function doUpdate (value) {
    return value > 0 ? value - 5 : value + 10;
  }
  const obj = { a: { b: { c: 10 }, b1: 20 }, a1: 'x' };
  const newObj = imu.updateInWith(obj, ['a', 'b', 'c'], doUpdate);
  console.log(obj, newObj, obj !== newObj);
}

doMergeIn();
doPushIn();
doSetIn();
doSliceIn();
doToggleIn();
doUpdateInWith();
