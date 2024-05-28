function f(x, y) {
  const id = 1;
  // 함수 선언문은 this가 무조건 global object (globalThis)
  console.log('this.id =', this.id);
  console.log('x, y:', x, y);
}

globalThis.id = 'globalThis';
this.id = 'moduleThis';
var id = 5; // this.id = undefined
f(); // globalThis

// 화살표 함수에서 this는 부모/상위 스코프의 this를 가리킨다.
const f2 = () => {
  console.log('this.id =', this.id);
};
f2(); // module this, 선언/초기화 후 사용

const user = { id: 1, name: 'hong' };
//강제로 this를 user로 할당
// f.bind(user)();
const newF = f.bind(user); // this만 먼저 할당하고 함수 실행
newF(1, 11); // 함수 실행
f.call(user, 2, 22); // 인자를 전달
f.apply(user, [3, 33]); // 배열로 전달

f.call(globalThis, 4, 44); // globalThis
f(4, 44);

console.log('------------');
//화살표함수에서는 call, bind, apply 사용 안함
f2.call(user);
f2.bind(user)();

console.log('------------');
