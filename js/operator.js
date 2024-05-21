let a = 1;
let b = 2;

let c = (a++, b++);
console.log('c =', c, a, b);  // 2 2 3

let d = (a--, b + a);
console.log('d =', d, a, b);  // 4 1 3

d = void (c = a + b);
console.log(a, b, c, d);  // 1 3 4 undefined

const T = true, F = false; let x = 1;
console.log(T || x++, T && x++, x);  // true 1 2
console.log(T && x++, F && x++, x);  // 2 false 3

console.log('-----------------');

const first = 'Uncle';
const last = 'Bob';

if (first){
    console.log(first);
}
console.log(last);  // Bob

let fullName = first ? first + ' ': '';
fullName += last;
console.log('fullName =', fullName) 


// refactoring
console.log(`${first}${first ? ' ' : ''}${last}`);  // Uncle Bob
console.log(`${first}${first && ' '}${last}`);  // Uncle Bob