'use strict';

var sum = require('./math').sum;

console.info(sum(1, 2, 7));
// 3

console.info(sum(63, 15, '1'));
// 78

console.info(sum('12', 7, 3));
// 19
