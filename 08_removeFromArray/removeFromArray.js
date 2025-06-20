const removeFromArray = function(arr, ...args) {
    let idx;
    for (let i = 0; i < args.length; i++) {
        const toRemove = args[i];
        while (arr.includes(toRemove)) {
            idx =  arr.indexOf(toRemove)
            arr.splice(idx, 1)
        };
    };
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
