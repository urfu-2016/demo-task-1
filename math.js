'use strict';

exports.isStar = true;

exports.sum = function () {
    // Реализуйте сложение в этой функции
    return Array.prototype.reduce.call(arguments, (acc, item) => acc + item);
};
