const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', () => {
  console.log('Please turn off the motor');
  setTimeout(()=>{
     console.log('Please turn off the motor!Its is gentle reminder'); 
  },3000);
});
console.log("the script is running")
myEmitter.emit('Waterfull');
console.log("the script is still running")
myEmitter.emit('Waterfull');