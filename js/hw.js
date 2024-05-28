console.log('---HW-연산자-1------');
for (let i = 0.1; i <= 1; i += 0.1) {
  // console.log(Number(i.toFixed(1))); // 소수 첫째짜리까지만 출력
  // console.log(Math.trunc(Number(i.toFixed(1) * 10)) / 10); // 정수로 변환 후 /10
  console.log(+i.toFixed(1)); // 소수 첫째짜리까지만 출력
}

console.log('----HW-연산자-2------');
for (let i = 1; i <= 10; i++) {
  // console.log(Math.sqrt(i).toFixed(3));
  const sq = Math.sqrt(i).toFixed(3);
  if (sq % 1) console.log(i, sq);
}

console.log('----HW-연산자-3------');
const today = new Date();
// console.log(today.getDay());
switch (today.getDay()) {
  case 0:
    console.log('오늘은 일요일입니다.');
    break;
  case 1:
    console.log('오늘은 월요일입니다.');
    break;
  case 2:
    console.log('오늘은 화요일입니다.');
    break;
  case 3:
    console.log('오늘은 수요일입니다.');
    break;
  case 4:
    console.log('오늘은 목요일입니다.');
    break;
  case 5:
    console.log('오늘은 금요일입니다.');
    break;
  case 6:
    console.log('오늘은 토요일입니다.');
}

// sol2 switch문 없이
const weekdays = ['일월화수목금토'];
function days() {
  const day = new Date().getDay();
  console.log('day:', weekdays[0][day]);
}
days();

console.log('----HW-연산자-4------');
function getLen(n) {
  return (n ?? '').toString().length;
}
function addPoints(a, b) {
  let len = Math.max(getLen(a), getLen(b));
  let ans = Number((a + b).toFixed(len - 2)); // 0. 길이 제외
  // return console.log('🚀 ans:', ans);
  return ans;
}
addPoints(0.223145, 0.2);
addPoints(0.13, 0.23);
addPoints(0.3, 3.2435);
console.log(addPoints(0.3, 3.2435) === 3.5435); // 확인

console.log('----HW-디스트럭처링-1------');
function f1(user) {
  console.log(user.id, user.name);
}
function f2({ id, name }) {
  console.log(id, name);
}
const f3 = function ({ id, name }) {
  console.log(id, name);
};
const f4 = ({ id, name }) => {
  console.log(id, name);
};
const hong = { id: 1, name: 'Hong' };
const lee = { id: 2, name: 'Lee' };

f1(hong);
f2(lee);

console.log('----HW-디스트럭처링-2------');
const user = { id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul' };
const { passwd, ...userInfo } = user;

console.log(userInfo);

console.log('----HW-디스트럭처링-3------');
const arr1 = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr1;
console.log(id1, id2, id3);

console.log('----HW-closure-1------');
const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 8000 },
  탕수육: { price: 22000, taxfree: 1 },
};

function bill() {
  const orders = [];
  return {
    order: function (menu) {
      orders.push(menu);
    },
    printBill: function (menu) {
      let total = 0;
      for (const order of orders) {
        total += MENU[order].price;
        tax = MENU[order].taxfree ? 0 : MENU[order].price * 0.1;
        console.log(`*${order}`);
        console.log(`공급가액: ${MENU[order].price}원`);
        console.log(`부가세액: ${tax}원`);
        console.log('=====================');
      }
      console.log('Total:', total);
    },
  };
}

const table1 = bill();
table1.order('짜장');
table1.order('짬뽕');
table1.order('탕수육');
table1.printBill();

console.log('----HW-closure-2------');
function makeArray(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}
function makeReverseArray(n) {
  const arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
}
console.log(makeArray(10));
console.log(makeReverseArray(5));

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
