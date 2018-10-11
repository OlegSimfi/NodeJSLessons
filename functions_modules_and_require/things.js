const array_counter = function (array) {
    return "Array length - " + array.length;
};


const multiply = function (x, y) {
    return `${x} multiplied ${y} equals ${x * y}`;
};

const some_value = 451;

// module.exports.array_counter = array_counter;
// module.exports.multiply = multiply;
// module.exports.some_value = some_value;

module.exports = {
    array_counter: array_counter,
    multiply: multiply,
    some_value: some_value
};

