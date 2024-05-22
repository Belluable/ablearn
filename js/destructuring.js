// object destructuring
console.log('--object destructuring--');
const user = { id: 1, name: 'Hong', addr: { city: 'Seoul', road: '길' } };

// id 가져오기
// const id = user.id;
// const { id: id } = user;
// const {id} = user;

// id, addr 가져오기
// const { id, addr } = user;
// const { id: userId, name: userName } = user;

// addr의 city 가져오기
// const { city } = addr; // city = 'Seoul'

// id, addr의 city 가져오기
// const {
//   id,
//   addr: { city },
// } = user;

// id, name, addr의 city 변수명 바꿔서 가져오기
const {
  id: userId,
  name: userName,
  addr: { city: addrCity },
} = user;

console.log(`userID: ${userId}, userName: ${userName}, addrCity: ${addrCity}`);

const arr = [1, 2, 3, 4, 5];
const { 1: x1, 3: x2 } = arr;
console.log('🚀 ~ x1, x2:', x1, x2); //  2 4

const mainField = user.id > 5 ? 'name' : 'addr'; // 화면 크기에 따른 firstname, lastname 같은거 할 때 많이 사용함
const { [mainField]: target } = user; // target = {city: 'Seoul', road: '길'}
console.log('🚀 ~ target:', target);
// target = 'kim'; // TypeError: Assignment to constant variable.
// const { name: target } = user; // SyntaxError: Identifier 'target' has already been declared

// array destructuring
console.log('\n--array destructuring--');
const [, , x, y, , z] = [1, 2, 3, 4, 5, 6];
console.log('x, y, z:', x, y, z); // 3, 4, 6

// swap
let [a, b] = [1, 2];
[b, a] = [a, b];
console.log('swap:', a, b); // 2, 1

const users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 3, name: 'Park' },
];
const [, , { id: usrId }] = users;
console.log('usrId:', usrId); // 3

// default value destructuring
console.log('\n--default value destructuring--');

const [user1] = users; // const [user1, ] = users;
console.log(user1);

const { id, name, addr = 'Seoul' } = { id: 1, name: 'Lee' };
console.log(id, name, addr); // 1 Lee Seoul

// const { id, name = 'Lee' } = { id: 1, name: '' };
// console.log(id, name); // 1 ''

// const { id, name = 'Lee' } = { id: 1, name: undefined };
// console.log(id, name); // 1 Lee

console.log('-----------------');
const [d, e, f = 3] = [1, 2];
console.log(d, e, f); // 1 2 3
const [g, h, o = 3] = [1, 2, 0];
console.log(g, h, o); // 1 2 0

console.log('\n-----------------');
const obj = { i: 1, j: 2, l: 3, m: 4, n: 5 };
let { j, i, k = i * j } = obj;
console.log(j, i, k); // j = 2, i = 1, k = 2
const { l, m, ...restObj } = obj;
console.log(l, m, restObj); // 3 4 { i: 1, j: 2, n: 5 }

console.log('-----------------');
let q, s, r;
({ r = q * 10, q, s } = { q: 10, s: 20 });
console.log(q, s, r); // 10 20 NaN

console.log('-----------------');
user2 = { id: 1, name: 'hong', age: 29 };
spread_x = { ...user2 }; // spread 연산자: 객체 복사
user2.age = 30; // user 객체의 age 프로퍼티 값 변경
console.log(spread_x); // { id: 1, name: 'hong', age: 29 }
console.log(user2); // { id: 1, name: 'hong', age: 30 }

console.log('\n--Argument Destructuring--');
function print({ id, name }) {
  // 객체를 인수로 받음
  console.log(`${id}: ${name}`);
}
print(user2); // 1: hong

function fn({ a, b }) {
  console.log(a, b);
}
fn({ a: 1, b: 2 }); // 1 2
