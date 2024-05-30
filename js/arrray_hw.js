// import { deepstrictEqual } from 'assert';
const assert = require('assert');

function push(arr, ...args) {
  return arr.concat(args);
}

function pop(arr, i) {
  return i ? arr.splice(arr.length - i, i) : arr.splice(-1);
}

function shift(arr, i) {
  return i ? arr.splice(0, i) : arr.splice(0);
}

function unshift(arr, ...args) {
  return args.concat(arr);
}

const arr = [1, 2, 3, 4];
console.log(assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]));
// console.log(assert.deepStrictEqual(pop(arr), 4));
// assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!
// assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
// assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
// assert.deepStrictEqual(shift(arr), [2, 3, 4]);
// assert.deepStrictEqual(shift(arr, 2), [3, 4]);
// assert.deepStrictEqual(arr, [1, 2, 3, 4]);
