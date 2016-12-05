'use strict';

var sum = require('./math').sum;

console.info(sum(1, 2));
// 3

console.info(sum(63, 15));
// 78

console.info(sum('12', 7));
// 19

console.info(sum('12', 13, '16'));
// 41

console.info(sum('12', 13, 0));
// 25
