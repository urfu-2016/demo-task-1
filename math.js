'use strict';

exports.isStar = false;

exports.sum = function (a, b) {
    // Check valid data
    if (checkValidNum(a) && checkValidNum(b)) {
        return a + b;
    }
};

// function check valid date
function checkValidNum(data) {
    var checkNumOrStr = typeof data === 'number' || typeof data === 'string';

    return checkNumOrStr;
}
