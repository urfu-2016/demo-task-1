'use strict';

exports.isStar = true;

exports.sum = function (a, b)
 {
	if ( typeof a != 'number')
	{
		a = Number(a);
	}
	if ( typeof b != 'number')
	{
		b = Number(b);
	}
	
	return a + b;
};
