'use strict';

exports.isStar = true;

exports.sum = function (a, b) {

    // Реализуйте сложение в этой функции
    var summ = 0;
    a = parseInt(a, 10);
    b = parseInt(b, 10);

    if (!isNaN(a) && !isNaN(b)) {
        summ = a + b;

        return summ;
    }
    else {
        var part = 0;
        for (var i = 0; i < arguments.length; i++) {
            part = parseInt(arguments[i], 10);
            if (!isNaN(part)) {
                summ += part;
            }

            return summ;
        }
    }


};
