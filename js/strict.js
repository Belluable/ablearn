'use strict';

console.log('this=', this);

// f = 1;    // ReferenceError: f is not defined
// NaN = 1;  // TypeError: Cannot assign to read only property 'NaN' of object
// Infinity = 0;
// function f(a, a) { console.log('outer f'); }
// // SyntaxError: Duplicate parameter name not allowed in this context
// delete f; // SyntaxError: Delete of an unqualified identifier in strict mode

function f(a) {
  console.log('global f=', a);
}

{
  f(100);
  function f(a) {
    console.log('block f=', a);
  }
}
f(200);
