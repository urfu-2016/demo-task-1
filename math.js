'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
	if (c === undefined){
		c=0;
	}
    return parseInt(a)+parseInt(b);
};
