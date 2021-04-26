const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('test', function() {
    console.log('Hi');
});

emitter.emit('test');