const EventEmitter = require('events');
const emitter = new EventEmitter();

var url = 'http://site.test';

class Logger extends EventEmitter {
    log (message) {
        //Http request
        console.log(message);

        //Raise an event
        this.emit('messageLogged', {message: message})
    }
}

module.exports = Logger;