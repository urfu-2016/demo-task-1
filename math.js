'use strict';

exports.isStar = true;

exports.sum = function () {
    // Реализуйте сложение в этой функции
    return Array.prototype.slice.call(arguments).reduce((acc, item) => acc + item);
};
