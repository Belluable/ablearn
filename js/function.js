function Dog(name) {
  this.name = name;
}

Dog('maxx');
console.log(this); // module
console.log(globalThis.name); // module

const lucy = new Dog('Lucy');
console.log('lucy =', lucy);

console.log('-----------');

function hello() {
  return 'Hello, World!';
}

function printFnReturnValue(fn) {
  console.log(fn.name, fn());
}
const ret = printFnReturnValue(hello);
console.log(ret); // undefined

console.log('-----------');

const f1 = function ff(x, isLast) {
  console.log(x);
  if (isLast) return;
  else ff('efg', true);
};

f1(); // OK
// ff(); // Error! ff is not defined!

console.log('-----------');

(function () {
  console.log('IIFE');
})();

function hi(name) {
  console.log('Hi', name || this.name);
}

hi.call({ name: 'Lee' }); // Hi Lee

console.log('-----------');

const counter = (function () {
  let curr = 0;
  return {
    inc(n) {
      curr += n;
    },
  };
})();

counter.inc(9);
console.log('counter', counter.curr); // undefined

console.log('----화살표함수-------');
// // #1
// function f(x) {
//   return x + 1;
// }

// // #2
// const f = function (x) {
//   return x + 1;
// };

// // #3
// const f = (x) => {
//   return x + 1;
// };

// #4
const f = (x) => x + 1;

console.log('f(2)=', f(2)); // 3
console.log('f(3)=', f(3)); // 4

console.log('-----------');

const addTax1 = function (resolve) {
  return function (price) {
    return resolve(price * 1.1);
  };
};
//        ||
const addTax2 = (resolve) => {
  return (price) => {
    return resolve(price * 1.1);
  };
};
//        ||
const addTax3 = (resolve) => (price) => resolve(price * 1.1);
