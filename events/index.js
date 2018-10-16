const events = require('events');
const myEmit = new events.EventEmitter();
const util = require('util');

myEmit.on('some_event', function (text) {
    console.log(text);
});

myEmit.emit('some_event', 'Events handler complete!' );

/////////////////////////////////////////////////////////////

const Cars = function (model) {
    this.model = model;
};

util.inherits(Cars, events.EventEmitter);

const bmw = new Cars('BMW');
const audi = new Cars('Audi');
const volvo = new Cars('Volvo');

const cars = [bmw, audi, volvo];

cars.forEach(function (car) {
    car.on('speed',function (text) {
        console.log(car.model + " speed is -" + text);
    });
});

bmw.emit('speed','254.5 km/h');
audi.emit('speed','270.5 km/h');
volvo.emit('speed','25480.5 km/h');

