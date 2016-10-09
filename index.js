'use strict';

var sum = require('./math').sum;

console.info(sum(1, 2));
// 3

console.info(sum('1', '1'));
// 78

console.info(sum('12', 7));
// 19
