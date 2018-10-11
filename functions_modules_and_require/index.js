const things = require('./things');

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

console.log(things.array_counter([1,7,8,9,11]));
console.log(things.some_value);
console.log(things.multiply(5, 7));