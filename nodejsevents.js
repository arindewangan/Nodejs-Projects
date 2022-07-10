const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occurred!');
    setTimeout(() => {
        console.log("Second Event Occured");
    }, 3000);
});
myEmitter.emit('event');