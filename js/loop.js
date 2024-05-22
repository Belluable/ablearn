// 반복문

console.log('-----------------');
let i = 5;
while (i > 0) {
  console.log('🚀 ~ i:', i);
  i--;
}

console.log('----------');
i = 5;
while (i-- > 0) console.log('🚀 ~ i:', i);

console.log('----------');
i = 5;
do {
  console.log('🚀 ~ i:', i);
} while (i-- > 0);

console.log('-----------------');
let s = 0;
for (i = 1; i <= 100; i++) {
  s += i;
}
console.log('🚀 ~ s:', s);

s = 0;
i = 1;
while (i <= 100) {
  s += i++;
}
console.log('🚀 ~ s:', s);

s = 0;
i = 1;
do {
  s += i++;
} while (i <= 100);
console.log('🚀 ~ s:', s);

console.log('-----------------');
console.log('---배열 출력---');
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr?.length; i++) {
  console.log(`🚀 ~ arr[${i}]:`, arr[i]);
}

console.log('----------');
for (const t of arr) {
  console.log('🚀 ~ t:', t);
}

console.log('----------');
for (const t of arr) {
  console.log('🚀 ~ t:', t);
  if (t > 2) break;
}

console.log('----------');
for (const t of arr) {
  if (t % 2 === 0) continue;
  console.log('🚀 ~ t:', t);
}

console.log('-----------------');
const WeakNames = '월화수목금토일';
for (const c of WeakNames) {
  // 문자열도 이터러블 객체
  console.log('🚀 ~ c:', c);
}

console.log('-----------------');
const user = { id: 1, name: 'Lee' };
for (const key in user) {
  console.log(`🚀 ~ key: ${key}, value: ${user[key]}`);
  console.log('key:', key, user[key]);
}

console.log('----------');
const cart = {
  user: user,
  items: [
    { id: 100, itemName: '신라면' },
    { id: 200, itemName: '진라면' },
  ],
};

console.log('cartOwner=', cart.user.name);
for (const cc of cart.items) {
  if (cc === 'user') {
    for (const p in cart[cc]) {
      console.log('p:', p, cart[p]);
    }
  }
}
