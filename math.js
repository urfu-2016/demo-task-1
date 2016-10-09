'use strict';

exports.isStar = true;

exports.sum = function (a, b) {
    // Реализуйте сложение в этой функции
    if ((typeof a != 'string') && (typeof b != 'string'))
        {
            return a + b;
        }
    else 
        {
            return;
        }
};
