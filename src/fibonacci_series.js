'use strict';

function fibonacci_series(n) {
    var before_1 = 0,before_2 = 0;
    var numArray = [0,1];

    for (var i = 1; i < n; i ++){
        before_1 = numArray[i];
        before_2 = numArray[i-1];
        numArray.push(before_1 + before_2);
    }

    return numArray;
}

module.exports = fibonacci_series;
