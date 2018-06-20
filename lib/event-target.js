const EventEmitter = require('events');

class Event {
  constructor(type,target){
    this.type = type;
    this.target = target;
  }
}

class MessageEvent extends Event {
  constructor(data,target){
    super('message',target);
    this.data = data;
  }
}

class Ws extend EventEmitter {
  dispatchEvent(){
    this.emmit('message');
  }
  addEventListener(method,listener){
    if (typeof listener !== 'function') return;
    this.on('message',function(){
      listener(new MessageEvent);
    })
  }
}