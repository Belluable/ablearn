let un; // undefined
console.log(un + 1); // NaN

let nu = null; // null = 0
console.log(nu + 2); // 1

let a = 1;
let b = 2;

let c = (a++, b++);
console.log('c =', c, a, b); // 2 2 3

let d = (a--, b + a);
console.log('d =', d, a, b); // 4 1 3

d = void (c = a + b);
console.log(a, b, c, d); // 1 3 4 undefined

const T = true,
  F = false;
let x = 1;
console.log(T || x++, T && x++, x); // true 1 2
console.log(T && x++, F && x++, x); // 2 false 3

console.log('-----------------');

const first = 'Uncle';
const last = 'Bob';

if (first) {
  console.log(first);
}
console.log(last); // Bob

let fullName = first ? first + ' ' : '';
fullName += last;
console.log('fullName =', fullName);

// refactoring
console.log(`${first}${first ? ' ' : ''}${last}`); // Uncle Bob
console.log(`${first}${first && ' '}${last}`); // Uncle Bob

console.log('-----------------');
const bi = 0b101;
const oct = 0o101;
const hex = 0x101;
console.log(bi, oct, hex); // 5 65 257

console.log(parseInt('101', 36)); // 36진수로 변환
console.log(parseFloat('101.20'));

console.log('-----------------');
console.log(-Infinity);
console.log(isNaN(Infinity));
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);

console.log('-----------------');
console.log('-Max_Value 가져와서 비교-');
console.log(9007199254740991 === 9007199254740991); // true
console.log(9007199254740991 === 9007199254740992); // false
console.log(9007199254740993 === 9007199254740992); // true
console.log(9007199254740993 === 9007199254740992n); // false

console.log('-----------------');
console.log(Number.isInteger(0.1)); // false
const num = 123.456;
console.log(num, num.toFixed(2));
console.log(num, Number(num.toFixed(2) + 9));
console.log(num, Math.trunc(Number(num.toFixed(2)) + 9));

console.log('-----------------');
console.log('-엘런튜닝의 한계: 보수의 버그-');
console.log(0.1 + 0.2 == 0.3); // false
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(Math.trunc((0.1 + 0.2) * 10) / 10); // 0.3
console.log(0.1 + 0.7); // 0.7999999999999999
console.log(0.3 + 0.2); // 0.5

console.log('-EPSILON: 끝에 붙은 값이 쓰레기 값인가?-');
console.log(0.1 + 0.2 - 0.3); // 5.551115123125783e-17
console.log(0.1 + 0.2 - 0.3 < Number.EPSILON); // true
console.log(0.1 + 0.2 - 0.3 < Number.EPSILON * Math.pow(2, 2)); // true
console.log(0.1 + 0.2 - 0.3 < Number.EPSILON * Math.pow(2, 3)); // true

const three = 0.1 + 0.2;
console.log(three);
const ep = Math.abs(three - 0.3) - Number.EPSILON;
console.log(ep < Number.EPSILON); // true
console.log('ep: ', ep, Number.EPSILON);
console.log(three - Number.EPSILON);

console.log('-----------------');
if (three === 0.3) {
  console.log('three = 0.3');
} else {
  console.log('exists garbage value');
}

console.log('-----------------');
const dt = new Date();
console.log(
  'dt:',
  dt,
  dt.toLocaleString(), // 2024-05-22 15:30:00
  dt.getFullYear(), // 2024
  dt.getMonth(),
  dt.getDate(),
  dt.getDay(),
  dt.getHours(),
  dt.getMinutes(),
  dt.getSeconds(),
  dt.getMilliseconds(),
  dt.getTimezoneOffset()
);
