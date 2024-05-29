globalThis.name = 'GLOBAL';
this.name = 'MODULE';

const obj = {
  name: 'OBJ', // property - heap에 존재
  f1: function () {
    // 함수 선언문
    console.log('f1=', this.name);
  },
  f2: () => {
    //화살표 함수
    console.log('f2=', this.name);
  },
  f3() {
    // method, prototype
    console.log('f3=', this.name);
  },
};

obj.f1();
obj.f2();
obj.f3();

console.log('-------------');

const nm = obj.name;
const f11 = obj.f1; // property니까 obj가 사라져도 this가 유지됨
const f22 = obj.f2; // 화살표 함수니까 this가 유지됨
const f33 = obj.f3; // method니까 obj가 사라지면 this도 사라짐 // strict mode에서는 undefined

// delete obj.name; //obj 지우기

f11();
f22();
f33();

console.log('-------------');

class Dog {
  name;
  constructor(nm) {
    this.name = nm;
  }
  f1() {
    console.log('Dog.f1 ->', this.name);
  }
}

class Golden extends Dog {}

const lucy = new Dog('Lucy');
Dog.prototype.f1();
lucy.f1();

const maxx = new Golden();
maxx.f1();

console.log('>>', Golden.prototype.f1 === Golden.prototype.f1);
