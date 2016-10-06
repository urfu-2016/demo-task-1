'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    if (c === undefined)
		return a + b;
	else
		return a + b + c;
};
