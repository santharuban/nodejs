var events=require('events');
var eventEmitter=new events.EventEmitter();
var person1=function person1(){
    console.log('person1 executed');
}
var person2=function person2(){
    console.log('person2 executed');
}
eventEmitter.addListener('connection',person1);
eventEmitter.on('connection',person2);
var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventEmitters+'person listening to connection event ');
eventEmitter.emit('connection');
eventEmitter.removeListener('connection',person1);
console.log('person1 will not listen now');
eventEmitter.emit('connection');
eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+'person listening to connection event ');
console.log('program ended');