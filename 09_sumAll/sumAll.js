const sumAll = function(start, end) {
    if (
        typeof start != 'number' || 
        typeof end != 'number' ||
        !Number.isInteger(start) ||
        !Number.isInteger(end) ||
        start < 0 || 
        end < 0) return "ERROR";
    if (start > end) [start, end] = [end, start];
    let fullArr = []
    for (i=start; i<=end; i++) fullArr.push(i);
    let result = fullArr.reduce((sum, num) => (sum += num), 0);
    return result
};

// Do not edit below this line
module.exports = sumAll;
