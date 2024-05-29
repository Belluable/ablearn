const f2 =
  (f) =>
  (...args) =>
    console.log(f.name, f(...args));

const fx = f2(Math.max);
fx(1, 3, 5, 7);

function samef2(f) {
  return function (...args) {
    console.log(f.name, f(...args));
  };
}

const fns = [Math.max, Math.min];
for (const f of fns) {
  console.log(f.name, f(1, 3, 5));
}

// const af1 = function (...args) {
//   console.log(f.name, f(...args));
// };
// const af2 = (...args) => console.log(f.name, f(...args));

// const f22 = function (f) {
//   return af2;
// };

/*
// currying
const f = () => () => {};

const af = () => {};
// function af() {}

const ff = () => af;
// function ff(){
//   return af;
// return function () {};
// }
*/

console.log('-------------');
const arr = [1, 2, 3, 4, 5];
Array.prototype.first = function () {
  return this[0];
};
Array.prototype.last = function () {
  return this[this.length - 1];
};
console.log(arr.first(), arr.last());

console.log('------고차함수-------');

['1', '2', '3'].map((a, idx, arg) => parseInt(a)); // [1, 2, 3]  // 여기서 parseInt는 callback 함수
['1', '2', '3'].map(parseInt); // [1, NaN, NaN]
['1', '2', '3'].map((a, idx, org) => parseInt(a, idx, org)); // [1, NaN, NaN] // 2는 1진수, 3은 2진수로 변환 -> NaN

const arr2 = ['1', '2', '3'];
const ret2 = arr2.map(Number);
console.log('🚀 ~ ret2:', ret2);

Array.prototype.mapX = function (f) {
  const rets = [];
  for (let i = 0; i < this.length; i++) {
    rets.push(f(this[i], i, this));
  }
  return rets;
};
ret3 = arr2.mapX(Number);
console.log('🚀 ~ ret3:', ret3);
console.log(Number.length);
ret4 = arr2.mapX(parseInt);
console.log('🚀 ~ ret4:', ret4);
console.log(parseInt.length);

console.log('-----unary--------');

const rets = arr2.map(parseInt);
console.log(rets); // [ 1, NaN, NaN ]
const unary = (fn) => (fn.length === 1 ? fn : (arg) => fn(arg));
const rets2 = arr2.map(unary(parseInt));
console.log(rets2); // [ 1, 2, 3 ]

console.log('-----ex--------');
// const fn = once(x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다.`;
const weeks = ['일', '월', '화', '수', '목', '금', '토'];

const getNextWeek = (() => {
  let widx = -1;
  return () => {
    widx += 1; // side-effect!
    if (widx >= weeks.length) widx = 0;
    return `${weeks[widx]}요일`;
  };
})();

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect!
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 1000);
