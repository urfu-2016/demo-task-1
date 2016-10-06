'use strict';

exports.isStar = true;

exports.sum = function () {
	var sum = parseInt(arguments[0]);
	if (sum == NaN)
		return;
	for (var i = 1; i < arguments.length; i++)
	{
		var num = parseInt(arguments[i]);
		if (num != NaN)
			sum += num;
	}
	return sum;
};
