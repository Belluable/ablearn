const myName = 'Alice';
let s: string | number = 'abc';
s = 123;
console.log('Hello world!');
console.log(`Hello, ${myName}!`);

let x: null | undefined;
let y: any;
y = 123;
y = 'abc';

function add(a: number, b: number) {
  return a + b;
}
console.log(add(1, 2));

let rocker;
rocker = 'Alice';
console.log(rocker.toUpperCase());

rocker = 123.45;
console.log(rocker.toPrecision(1));

let firstName: string | undefined;
firstName?.toUpperCase();

const str: string = 'abc';
type User = { id: number; name: string; addr?: string };
const user: User = { id: 1, name: 'Alice' };
user.addr = 'Seoul';

type Emp = { id: number; name: string; dept: string | number };
const emp: Emp = {
  id: 1,
  name: 'Kim',
  dept: 'Sales',
};
emp.dept = 12;

const Y = 'y'; // y타입
let Z: 'x' | 'y' | 'z' = 'x'; // literal 타입
Z = 'y';
Z = Y;
let N: 1 | 2 | 3 = 3; //

type Member = {
  name: string;
  addr: string;
  discountRate: number;
  spend: number[];
};
type Guest = { name: string; age: number; spend: number };

const member: Member = {
  name: '홍길동',
  addr: '용산구',
  discountRate: 0.1,
  spend: [1000, 30000, 50000],
};
const guest: Guest = { name: '김길동', age: 28, spend: 5500 };
// name프로퍼티는Member타입과Guest타입모두에 존재하므로 접근 가능!!
// discountRate 프로퍼티는 Member 타입에만 존재하고 Guest타입에는존재하지않으므로접근불가능!!
const who = Math.random() > 0.5 ? member : guest;

who.name = '마길동'; // OK 접근 가능, 양쪽 타입에 존재

if ('addr' in who) console.log(who.discountRate); //addr이 있다는 것은 Member타입이라는 것을 의미
// if (who.hasOwnProperty('addr')) console.log(who.discountRate); // Error! hasOwnProperty 사용불가

let xarr: number[] | number = Math.random() > 0.5 ? 1 : [1, 2];
if (Array.isArray(xarr)) console.log(xarr.length); // OK 접근 가능
// xarr.length;

console.log('typeof who.spend=', typeof who.spend);

let totalAmount: number;
if (typeof who.spend !== 'number') {
  totalAmount = who.spend.reduce((s, c) => s + c, 0);
} else {
  totalAmount = who.spend;
}
// // who.spend.reduce((s, c) => s + c, 0); // Error!!
// 이전 예제에서 if문의 조건식은 who.spend의 타입만 검사할 뿐이다.
// => who.spend의 타입만 narrowing   (:검사되는 property만 narrowing)
// who.spend의 타입이 number[] 타입이라고해서 who의 타입이 Member로 narrowing된 것이 아님!

const hong = { id: 1, name: 'hong', addr: 'Seoul' };
// const users = {hong, {id:2; name: 'kim'}};

function getHong() {
  return { id: 1, name: 'hong', addr: 'Seoul' };
}

type Xuser = { id: number; name: string };
type Xemp = { id: number; name: string; addr: string };
let xuser: Xuser;
let xemp: Xemp;
xuser = { id: 1, name: 'hong' };
// xuser = {id:2, name: 'kim', addr: 'Seoul'}; // freshness
xuser = { id: 2, name: 'kim', addr: 'Seoul' } as Xuser; // freshness off
xuser = hong; // freshness off
xuser = getHong();
xemp = { id: 1, name: 'lee', addr: 'Pusan' };

xuser = xemp; // CoVariance:(id, name) <= (id, name, addr)
// xemp = xuser; // Error! ContraVariance: (id, name, addr) <= (id, name)

function getX1(obj: Xuser) {
  return obj.name;
}
function getX2(obj: Xemp) {
  return obj.name;
}
function getX(obj: Xuser | Xemp) {
  return obj.name;
}
function ff(f: typeof getX) {}

console.log('getX=', getX(xuser));
console.log('getX=', getX(xemp));
console.log('getX1=', getX1(xuser));
console.log('getX1=', getX1(xemp));
// console.log('getX2=', getX2(xuser));
console.log('getX2=', getX2(xemp));
