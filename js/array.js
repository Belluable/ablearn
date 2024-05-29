arr = [1, 2, 3];
arr.length = 5; // arr = [1, 2, 3, undefined 2]
console.log('🚀 ~ arr:', arr);

arr.splice(1, 2); // 1번째부터 2개 지우기 -> arr = [1]
console.log('🚀 ~ arr:', arr);

arr = [3, 5, 2, 7, 1];
arr.sort(); // 원본도 바뀜
arr.toSorted(); // 원본은 안바뀜 -> 순수함수

[...arr]; // 원본 복사 -> toSorted 없을 때
[...arr].sort((a, b) => (a > b ? -1 : 1)); // DESC
[...arr].sort((a, b) => (a < b ? -1 : 1)); // ASC

console.log(Array.from({ length: 10 }, (_, i) => i + 1));
