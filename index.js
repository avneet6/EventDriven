const EventEmitter = require("events");

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
    console.log("Water is still filling.");

    setTimeout(() => {
        console.log('Please turn off the motor! Its a gentle reminder.');

    },3000);
});

console.log("Water is filling.")
myEmitter.emit('WaterFull');