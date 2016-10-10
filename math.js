'use strict';

exports.isStar = false;

exports.sum = function (num1, num2) {
	if (typeof(num1) !== "number" || typeof(num2) !== "number") {
		throw new TypeError("Expected type is number");
	}
    return num1 + num2;
};
