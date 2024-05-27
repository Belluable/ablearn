console.log('----HW-1------');
for (let i = 0.1; i <= 1; i += 0.1) {
  // console.log(Number(i.toFixed(1))); // 소수 첫째짜리까지만 출력
  console.log(Math.trunc(Number(i.toFixed(1) * 10)) / 10); // 정수로 변환 후 /10
}

console.log('----HW-2------');

console.log('----HW-object1------');
const arr = [100, 200, 300, 400, 500, 600, 700];
for (const i in arr) console.log(i);
for (const i in arr) console.log(arr[i]);
for (const n of arr) console.log(n);

console.log('----HW-object2------');
const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false };
for (const i in obj) console.log(i);
for (const i in obj) console.log(obj[i]);
for (const value of Object.values(obj)) console.log(value);
Object.defineProperty(obj, 'level', { writable: false });
Object.freeze(obj, { role: 9 });

// for (const i in obj) console.log(i);
// for (const i in obj) console.log(obj[i]);
