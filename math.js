'use strict';

exports.isStar = true;

exports.sum = function () {
    // Реализуйте сложение в этой функции
    var args = Array.prototype.slice.call(arguments);
    return args.reduce((acc, item) => acc + item);
};
