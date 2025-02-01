import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(greeting = 'Hello') {
  console.log(`${greeting} World`);
}

function goodbyeHandler(goodbye = 'Goodbye') {
  console.log(`${goodbye} World`);
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit events
myEmitter.emit('greet');
myEmitter.emit('goodbye');
// myEmitter.emit('greet', 'Hi!');
// myEmitter.emit('goodbye', 'Sayonara');


// Error handling
myEmitter.on('error', (err) => {
  console.error('An error occured', err);
});

// Simulate error
myEmitter.emit('error', new Error('something went wrong'));