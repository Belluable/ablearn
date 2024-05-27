console.log('----HW-object1------');
const arr = [100, 200, 300, 400, 500, 600, 700];
for (const key in arr) console.log(key);
for (const key in arr) console.log(arr[key]);
for (const value of arr) console.log(value);

console.log('\n----HW-object2------');
const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false };
for (const k in obj) console.log(k);
for (const k in obj) console.log(obj[k]);
for (const value of Object.values(obj)) console.log(value); // 객체는 iterable이 아니므로 Object.values() 사용
Object.defineProperty(obj, 'level', { enumerable: false }); // 출력 안되게 설정
Object.freeze(obj, 'role'); // role은 읽기 전용
obj.role = 99;
console.log('출력', Object.entries(obj));
// for (const i in obj) console.log(i);
// for (const i in obj) console.log(obj[i]);

console.log('----HW-object3------');
function makeObjectFromArray(object1) {
  // 구현
  const [k, ...v] = object1;
}

const obj1 = makeObjectFromArray([
  ['A', 10, 20],
  ['B', 30, 40],
  ['C', 50, 60, 70],
]);
console.log(obj1); // { A: [10, 20], B: [30, 40], C: [50, 60, 70] }
