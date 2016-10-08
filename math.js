'use strict';

exports.isStar = false;
function typeChecking (c, d){
    if ((typeof d == 'string')){
            var d1 = Number(d);
            return c+d1;
        } else {
            return c+d;
        }
}
exports.sum = function (a, b) {
    // Реализуйте сложение в этой функции
    if ((typeof a) === 'string'){
        var a1 = Number(a);
        return typeChecking(a1,b);
    } else {
        return typeChecking(a,b);
    }
};
