arr = [1, 2, 3];
arr.length = 5; // arr = [1, 2, 3, undefined 2]
console.log('🚀 ~ arr:', arr);

arr.splice(1, 2); // 1번째부터 2개 지우기 -> arr = [1]
console.log('🚀 ~ arr:', arr);

arr = [3, 5, 2, 7, 1];
arr.sort(); // 원본도 바뀜
arr.toSorted(); // 원본은 안바뀜 -> 순수함수

[...arr]; // 원본 복사 -> toSorted 없을 때
[...arr].sort((a, b) => (a > b ? -1 : 1)); // DESC
[...arr].sort((a, b) => (a < b ? -1 : 1)); // ASC

console.log(Array.from({ length: 10 }, (_, i) => i + 1));

console.log('---------------');

const lst = ['글1', '글2', '글3', '글4'];

lst.push('글4');
console.log(lst.indexOf('글4')); // 3 // indexOf는 처음 찾은 것의 인덱스
console.log(lst.lastIndexOf('글4')); // 4 // lastIndexOf는 마지막 찾은 것의 인덱스

const hong = { id: 1, name: '홍길동' };
const kim = { id: 2, name: '김철수' };
const park = { id: 4, name: '박영수' };

const users = [hong, kim, park];
const iduser = users.findIndex((v, i) => v.id === 2);
console.log('🚀 ~ iduser:', iduser);

const id2user = users.find((v) => v.id === 2);
console.log('🚀 ~ id2user:', id2user);

for (const user of users) {
  console.log(user.id, user.name);
}
users.forEach((v) => console.log(v.id, v.name));

const userids = users.map((v) => v.id);
console.log('🚀 ~ userids:', userids);

console.log('---------------');
const evenusers = users.filter((v) => v.id % 2 === 1); // filter는 끝까지 돌면서 찾음 // 배열로 반환
console.log('🚀 ~ evenusers:', evenusers);

const isEveryLess5 = users.every((v) => v.id < 5); // 모두 만족해야 true
console.log('🚀 ~ isEveryLess5:', isEveryLess5);

const isSomeLess5 = users.some((v) => v.id < 5); // 하나라도 만족하면 true
console.log('🚀 ~ isSomeLess5:', isSomeLess5);

const hasId3 = users.some((v) => v.id === 3);
console.log('🚀 ~ hasId3:', hasId3);

console.log('---------------');
const lst2 = [1, 2, 3, 4, 5];

const last = lst2.at(-1);
console.log('🚀 ~ last:', last);
const beforeLast = lst2.at(-2);
console.log('🚀 ~ beforeLast:', beforeLast);

console.log(lst2.slice(-2)); // [4, 5]
console.log(lst2.slice(1, 3)); // [2, 3]

console.log(lst2.splice(2, 3)); // [3, 4, 5] // 원본에서 잘라냄
console.log('🚀 ~ lst2:', lst2); // [1, 2]
console.log(lst2.splice(1, 2, 10, 20)); // [2] // 1번째부터 2개 지우고 10, 20 추가
console.log('🚀 ~ lst2:', lst2); // [1, 10, 20]

console.log('---------------');
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2);
console.log('🚀 ~ arr3:', arr3); // [1, 2, 3, 4, 5, 6]

const arr4 = [...arr1, ...arr2];
console.log('🚀 ~ arr4:', arr4); // [1, 2, 3, 4, 5, 6]

const arr5 = arr1.concat(4, 5, 6);
console.log('🚀 ~ arr5:', arr5); // [1, 2, 3, 4, 5, 6]

const arr6 = arr1.concat([4, 5, 6]);
console.log('🚀 ~ arr6:', arr6); // [1, 2, 3, 4, 5, 6]

const arr7 = arr1.concat([4, 5], 6);
console.log('🚀 ~ arr7:', arr7); // [1, 2, 3, 4, 5, 6]

console.log('---------------');
arr = [3, 5, 2, 7, 1];
console.log(arr.toReversed()); // [1, 7, 2, 5, 3] // 원본 안바뀜
console.log('🚀 ~ arr:', arr); // [3, 5, 2, 7, 1]

arr.reverse(); // [1, 7, 2, 5, 3] // 정렬은 안하고 뒤집기만 함 -> 원본 바뀜
console.log('🚀 ~ arr:', arr); // [1, 7, 2, 5, 3]

console.log('---assert-연습중-----');
var assert = require('assert');
// assert.equal(1, 1, 'ok');
// assert(1, 11, 'not equal');
// a = 1;
// b = 2;
// assert.equal(a, b, 'x');
// assert.deepEqual([1, 2, 3], [1, 2, 3], 'y');
// assert.deepStrictEqual([1, 2, 3], [1, 2, '3'], 'z');

console.log('---------------');
const stack = [];
stack.push(1);
stack.push(2, 3);
console.log('🚀 ~ stack:', stack); // [1, 2, 3]

const curr = stack.pop(); // 뒤에서부터 빼기
console.log('🚀 ~ curr:', curr); // 3
console.log('🚀 ~ stack:', stack); // [1, 2]

const curr1 = stack.shift(); // 앞에서부터 빼기
console.log('🚀 ~ curr1:', curr1); // 1
console.log('🚀 ~ stack:', stack); // [1]

const queue = [];
queue.unshift(1);
queue.unshift(2, 3); // 앞에서부터 넣기
console.log('🚀 ~ queue:', queue); // [2, 3, 1]

const curr2 = queue.pop();
console.log('🚀 ~ curr2:', curr2); //  1
console.log('🚀 ~ queue:', queue); // [2, 3]

const curr3 = queue.shift();
console.log('🚀 ~ curr3:', curr3); //  2
console.log('🚀 ~ queue:', queue); // [3]
