function f() {
  let count = 0;
  return {
    // count: count
    count, // 이름이 같으면 생략 가능
  };
}

const x = f();
console.log('🚀 ~ x.count:', x.count); // 0

function f2() {
  let count = 0;
  return function Y() {
    count += 1;
    return count;
  };
}

const y = f2();
const z = f2();
console.log('🚀 ~ y:', y);
console.log('🚀 ~ ycount:', y());
console.log('🚀 ~ ycount:', y());
console.log('🚀 ~ zcount:', z());
