'use strict';

exports.isStar = true;

exports.sum = function (first, second, third) {
    if (third === undefined)
	    return first + second;
    return first + second + third;
};


