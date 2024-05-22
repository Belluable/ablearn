// 조건문

console.log('-----------------');
const n = 2;
// if문
if (n == 1) {
  console.log('one');
} else if (n == 2) {
  console.log('two');
} else if (n == 3) {
  console.log('three');
} else {
  console.log('etc');
}

let outStr = 'etc';
if (n == 1) {
  outStr = 'one';
} else if (n == 2) {
  outStr = 'two';
} else if (n == 3) {
  outStr = 'three';
}
console.log(outStr);

// switch
switch (n) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  case 3:
    console.log('three');
    break;
  default:
    console.log('etc');
}

// 3항 연산자
outStr = n === 1 ? 'one' : n === 2 ? 'two' : n === 3 ? 'three' : 'etc';
console.log(outStr);

// || 연산자
// outStr = n === 1 || n === 2 || n === 3 ? ['one', 'two', 'three'][n-1] : 'etc';
outStr =
  (n === 1 ? 'one' : '') ||
  (n === 2 ? 'two' : '') ||
  (n === 3 ? 'three' : 'etc');
console.log(outStr);
