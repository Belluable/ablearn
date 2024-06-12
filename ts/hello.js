"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var myName = 'Alice';
var s = 'abc';
s = 123;
console.log('Hello world!');
console.log("Hello, ".concat(myName, "!"));
var x;
var y;
y = 123;
y = 'abc';
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
var rocker;
rocker = 'Alice';
console.log(rocker.toUpperCase());
rocker = 123.45;
console.log(rocker.toPrecision(1));
var firstName;
firstName === null || firstName === void 0 ? void 0 : firstName.toUpperCase();
var str = 'abc';
var user = { id: 1, name: 'Alice' };
user.addr = 'Seoul';
var emp = {
    id: 1,
    name: 'Kim',
    dept: 'Sales',
};
emp.dept = 12;
var Y = 'y'; // y타입
var Z = 'x'; // literal 타입
Z = 'y';
Z = Y;
var N = 3; //
var member = {
    name: '홍길동',
    addr: '용산구',
    discountRate: 0.1,
    spend: [1000, 30000, 50000],
};
var guest = { name: '김길동', age: 28, spend: 5500 };
// name프로퍼티는Member타입과Guest타입모두에 존재하므로 접근 가능!!
// discountRate 프로퍼티는 Member 타입에만 존재하고 Guest타입에는존재하지않으므로접근불가능!!
var who = Math.random() > 0.5 ? member : guest;
who.name = '마길동'; // OK 접근 가능, 양쪽 타입에 존재
if ('addr' in who)
    console.log(who.discountRate); //addr이 있다는 것은 Member타입이라는 것을 의미
// if (who.hasOwnProperty('addr')) console.log(who.discountRate); // Error! hasOwnProperty 사용불가
var xarr = Math.random() > 0.5 ? 1 : [1, 2];
if (Array.isArray(xarr))
    console.log(xarr.length); // OK 접근 가능
// xarr.length;
console.log('typeof who.spend=', typeof who.spend);
var totalAmount;
if (typeof who.spend !== 'number') {
    totalAmount = who.spend.reduce(function (s, c) { return s + c; }, 0);
}
else {
    totalAmount = who.spend;
}
// // who.spend.reduce((s, c) => s + c, 0); // Error!!
// 이전 예제에서 if문의 조건식은 who.spend의 타입만 검사할 뿐이다.
// => who.spend의 타입만 narrowing   (:검사되는 property만 narrowing)
// who.spend의 타입이 number[] 타입이라고해서 who의 타입이 Member로 narrowing된 것이 아님!
var hong = { id: 1, name: 'hong', addr: 'Seoul' };
// const users = {hong, {id:2; name: 'kim'}};
function getHong() {
    return { id: 1, name: 'hong', addr: 'Seoul' };
}
var xuser;
var xemp;
xuser = { id: 1, name: 'hong' };
// xuser = {id:2, name: 'kim', addr: 'Seoul'}; // freshness
xuser = { id: 2, name: 'kim', addr: 'Seoul' }; // freshness off
xuser = hong; // freshness off
xuser = getHong();
xemp = { id: 1, name: 'lee', addr: 'Pusan' };
xuser = xemp; // CoVariance:(id, name) <= (id, name, addr)
// xemp = xuser; // Error! ContraVariance: (id, name, addr) <= (id, name)
function getX1(obj) {
    return obj.name;
}
function getX2(obj) {
    return obj.name;
}
function getX(obj) {
    return obj.name;
}
function ff(f) { }
console.log('getX=', getX(xuser));
console.log('getX=', getX(xemp));
console.log('getX1=', getX1(xuser));
console.log('getX1=', getX1(xemp));
// console.log('getX2=', getX2(xuser));
console.log('getX2=', getX2(xemp));
var introduce = function (name, height) {
    console.log("\uC774\uB984: ".concat(name));
    if (typeof height === 'number')
        console.log("\uD0A4: ".concat(height + 10));
};
introduce('sue');
introduce('sue', 160);
introduce('sue', undefined);
// 구현부
function func(a, b, c) {
    if (typeof b === 'number' && typeof c === 'number') {
        console.log(a + b + c);
    }
    else {
        console.log(a * 20);
    }
}
var KUser = { id: 1, nickname: 'song', age: 12 };
var IxUser = /** @class */ (function () {
    function IxUser() {
        this.id = 1;
    }
    IxUser.prototype.getId = function () {
        return this.id;
    };
    return IxUser;
}());
var ix1 = new IxUser();
console.log(ix1.id, ix1.getId());
var ix2 = { id: 2, getId: function () { return 2; } };
// interface Animal extends: Ani  {
//   bark:()=> string;
// }
//스프레드
var nums1 = [1, 2, 3, 4, 5]; // number[]
var nums2 = [10, 20, 30, 40, 50]; // number[]
var result1 = nums1.concat(nums2); // 당연히 result1은 number[]
var strings1 = ['lim', 'eun', 'ha']; // string[]
// const result2 = result1.concat(strings1); // Error! concat은 타입이 같아야함
var result2 = __spreadArray(__spreadArray([], result1, true), strings1, true); // 스프레드 연산자 사용
var tuple1;
tuple1 = [2, 'a', false, 'Seoul'];
function tf(id, name, didOut, addr) {
    console.log(arguments); // arguments는 유사배열객체
}
tf(1, 'a', false, 'Seoul');
function tf2(params) {
    console.log(params);
}
tf2([1, 'a', false, 'Seoul']);
tf2(tuple1);
var Subjects = ['A', 'B', 'C']; // assertion
var Ss;
(function (Ss) {
    Ss[Ss["\uAD6D\uC5B4"] = 0] = "\uAD6D\uC5B4";
    Ss[Ss["\uC601\uC5B4"] = 1] = "\uC601\uC5B4";
    Ss[Ss["\uC218\uD559"] = 2] = "\uC218\uD559";
})(Ss || (Ss = {}));
var sub = Ss.국어;
var sub2 = Ss.수학;
if (sub === 0) {
}
var ta1 = ['a', 1];
var tb1 = [true, ta1];
var tb2 = __spreadArray([true], ta1, true);
var cc1 = [true, ['a', 1]];
// 연습문제
var SIZE = [
    { id: 'XS', price: 8000 },
    { id: 'S', price: 10000 },
    { id: 'M', price: 12000 },
    { id: 'L', price: 14000 },
    { id: 'XL', price: 15000 },
]; // assertion readonly로 바꿔서 다른 값은 못들어가게
var sizeOption = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };
var totalPrice = SIZE.reduce(function (currPrice, size) { return currPrice + sizeOption[size.id] * size.price; }, 0);
var x1 = { page: 1 };
var x2 = { title: 'hello' };
var x3 = { page: 1, title: 'hello' };
console.log(x1.page, x2.title);
if ('title' in x3)
    console.log(x3.title);
var novel = {
    title: 'novel',
    page: 130,
};
var is = { 0: 'hello', age: 10 };
// mapBy
Array.prototype.mapBy = function (prop) {
    return this.map(function (a) { return a[prop]; });
};
var users = [
    { id: 1, name: 'Hong' },
    { id: 2, name: 'Kim' },
];
console.log(users.mapBy('name')); // ['Hong', 'Kim']
// 다음 코드가 오류가 없으면 통과!
var ud2 = { id: 1, name: 'HH', addr: 'Seoul' };
var ud3 = { id: 1, dname: 'HH', captain: 'HH', addr: 'Seoul' };
