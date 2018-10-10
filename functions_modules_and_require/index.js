const array_counter = require('./array');

function test() {
    console.log("Hello!")
}

test();

function call(func) {
    func();
}

const printSomething = function () {
    console.log("Example text")
};

call(printSomething);

console.log(array_counter([1,7,8,9,11]));