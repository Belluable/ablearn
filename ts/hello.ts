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

const introduce = (name: string, height?: number) => {
  console.log(`이름: ${name}`);
  if (typeof height === 'number') console.log(`키: ${height + 10}`);
};

introduce('sue');
introduce('sue', 160);
introduce('sue', undefined);

// 함수 오버로드
// 오버로드
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현부
function func(a: number, b?: number, c?: number): void {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// 인덱스 시그니처
type NaverKakaoUser = {
  id: number;
  // nickname: string;
  // name?: string;
  // email: string;
  [k: string]: string | number; // 인덱스 시그니처, id도 포함되지만 필수로 들어가니까 따로 빼주면 좋음
};

const KUser: NaverKakaoUser = { id: 1, nickname: 'song', age: 12 };

type T = { id: number; getId: () => number };
interface I {
  id: number;
  getId: () => number;
}

class IxUser implements I {
  id = 1;
  getId() {
    return this.id;
  }
}
const ix1 = new IxUser();
console.log(ix1.id, ix1.getId());

const ix2: T = { id: 2, getId: () => 2 };

// interface Animal extends: Ani  {
//   bark:()=> string;
// }

//스프레드
const nums1 = [1, 2, 3, 4, 5]; // number[]
const nums2 = [10, 20, 30, 40, 50]; // number[]

const result1 = nums1.concat(nums2); // 당연히 result1은 number[]

const strings1 = ['lim', 'eun', 'ha']; // string[]
// const result2 = result1.concat(strings1); // Error! concat은 타입이 같아야함
const result2 = [...result1, ...strings1]; // 스프레드 연산자 사용

//튜플
//let tuple1: [number, string, boolean];
type IdNameDidoutAddr = [number, string, boolean, string]; // 확장성 고려
let tuple1: IdNameDidoutAddr;
tuple1 = [2, 'a', false, 'Seoul'];

function tf(id: number, name: string, didOut: boolean, addr: string) {
  console.log(arguments); // arguments는 유사배열객체
}
tf(1, 'a', false, 'Seoul');

function tf2(params: IdNameDidoutAddr) {
  console.log(params);
}
tf2([1, 'a', false, 'Seoul']);
tf2(tuple1);

const Subjects = ['A', 'B', 'C'] as const; // assertion
enum Ss {
  '국어',
  '영어',
  '수학',
}

const sub: Ss = Ss.국어;
const sub2: Ss = Ss.수학;
if (sub === 0) {
}

type TA = [string, number];
const ta1: TA = ['a', 1];

type TB = [boolean, TA]; // [boolean, [string, number]]
type TB2 = [boolean, ...TA]; // [boolean, string, number]
const tb1: TB = [true, ta1];
const tb2: TB2 = [true, ...ta1];

type AA = (string | number)[];
type CC = [boolean, AA]; // [boolean, (string | number)[]]
const cc1: CC = [true, ['a', 1]];

// 연습문제
const SIZE = [
  { id: 'XS', price: 8000 },
  { id: 'S', price: 10000 },
  { id: 'M', price: 12000 },
  { id: 'L', price: 14000 },
  { id: 'XL', price: 15000 },
] as const; // assertion readonly로 바꿔서 다른 값은 못들어가게

const sizeOption = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };
const totalPrice = SIZE.reduce(
  (currPrice, size) => currPrice + sizeOption[size.id] * size.price,
  0
);

// type, interface
type Page = { page: number };
type Title = { title: string };
type PageTitle = Page | Title;

const x1: PageTitle = { page: 1 };
const x2: PageTitle = { title: 'hello' };
const x3: PageTitle = { page: 1, title: 'hello' };

console.log(x1.page, x2.title);
if ('title' in x3) console.log(x3.title);

// interface로 변환
interface Page2 {
  page: number;
}
interface Title2 {
  title: string;
}
type PageTitle2 = Page2 | Title2;

// index signature
interface Novel {
  title: string; // 필수 속성 (실제 사용할 속성)
  [key: string]: string | number | boolean;
}

const novel: Novel = {
  title: 'novel',
  page: 130,
};

interface indexSignature {
  [key: string]: number | string;
}
const is: indexSignature = { 0: 'hello', age: 10 };

declare global {
  // Array는 내가 안만든 거니까
  interface Array<T> {
    // Array interface 병합
    first(): T;
    mapBy: (prop: string) => any;
    // filterBy: (prop: string, value: any) => any;
  }
}

// mapBy
Array.prototype.mapBy = function (prop: string) {
  return this.map((a) => a[prop]);
};

const users = [
  { id: 1, name: 'Hong' },
  { id: 2, name: 'Kim' },
];
console.log(users.mapBy('name')); // ['Hong', 'Kim']
// console.log(users.filterBy('name', 'Kim'));
export {};

// 연습문제
interface User2 {
  id: number;
  name: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
}

interface Ud2 {
  // <이 부분을 작성하시오>
  // type Ud2 = (TUser | TDept) & {addr: string}; 변경
  id: number;
  name?: string;
  dname?: string;
  captain?: string;
  addr: string;
}

// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = { id: 1, name: 'HH', addr: 'Seoul' };
const ud3: Ud2 = { id: 1, dname: 'HH', captain: 'HH', addr: 'Seoul' };
