"use strict";

exports.isStar = true;

exports.sum = function (a, b) {
    // Реализуйте сложение в этой функции
    if (typeof a !== "number" && typeof b !== "number") {
        throw new TypeError();
    }

    return a + b;
};
