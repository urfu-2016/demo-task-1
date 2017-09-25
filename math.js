'use strict';

exports.isStar = true;

exports.sum = (...numbers) => numbers
    .map(Number)
    .reduce((a, b) => a + b, 0);
