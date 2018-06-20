const stream = require('stream');

class Receiver extends stream.Writable{
  constructor(){
    super();

    this.buffers = [];
    this.bufferedBytes = 0;
    
    this.fin = false;
    this.opcode = 0;
    this.mask = undefined;
    this.payloadLenth = 0;
    this.masked = false;
    this.fragments = [];
  }
  _write(chunk, encoding, cb) {
    if (this.opcode === 0x08) return cb();

    this.bufferedBytes += chunk.length;
    this.buffers.push(chunk);
    this.startLoop(cb);
  }
}