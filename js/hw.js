console.log('----HW-1------');
for (let i = 0.1; i <= 1; i += 0.1) {
  // console.log(Number(i.toFixed(1))); // 소수 첫째짜리까지만 출력
  console.log(Math.trunc(Number(i.toFixed(1) * 10)) / 10); // 정수로 변환 후 /10
}

console.log('----HW-2------');
