'use strict';

exports.isStar = true;

exports.sum = function (a, b, c) {
    a = analyzeVariable(a);
    b = analyzeVariable(b);

    return c !== undefined ? a + b + analyzeVariable(c) : a + b;
};

function analyzeVariable(variable) {
    switch (typeof variable) {
        case 'string':
            return parse(variable);
        case 'number':
            return variable;
        default:
            throw new TypeError();
    }
}

function parse(string) {
    var checkingResult = startCheckingTools(string);
    if (checkingResult !== null) {
        return checkingResult;
    }
    var floatParsed = parseFloat(string);
    if (isNaN(floatParsed)) {
        throw new TypeError();
    }

    return floatParsed;
}

function startCheckingTools(string) {
    var infinity = checkInfinity(string);
    if (infinity !== null) {
        return infinity;
    }
    var scale = checkScaleOfNotation(string);
    if (scale !== null) {
        return scale;
    }

    return null;
}

function checkInfinity(string) {
    if (string === 'Infinity') {
        return Infinity;
    }
    if (string === '-Infinity') {
        return -Infinity;
    }

    return null;
}

function checkScaleOfNotation(string) {
    if (string.match(/^[\+-]?0x[A-Fa-f\d]{2}$/) !== null) {
        return parseInt(string, 16);
    } else if (string.match(/^[\+-]?0\d+$/) !== null) {
        return parseInt(string, 8);
    } else if (string.match(/^[\+-]?\d+(\.\d+([eE][\+-]?\d+)?)?$/) === null) {
        throw new TypeError();
    }

    return null;
}
