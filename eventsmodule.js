const EventEmitter=require('node:events');
const emitter=new EventEmitter();
emitter.on('order the tea',(flavour,type) =>{
    console.log(`your order tea was confirmed with ${flavour} with ${type} `);
});
emitter.on('order the tea',(flavour) =>{
    if(flavour==='lemon'){
        console.log('Serving with additional snacks');
    }
})
emitter.emit('order the tea','lemon','honey');