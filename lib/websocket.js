const EventEmitter = require('events');

class WebSocket extends EventEmitter {
  constructor(socket){
    this.socket = socket;

    this.msg = ; // 解析后的socket 消息 二进制buffer

    socket.on('data', this.handleData);
    socket.on('close', this.handleClose);
    socket.on('error', this.handleError);
  }

  handleData(data){ //判断报文
    // 解析获取到的 websocket报文
    // 判断解析报文
    // 如果报文结束 触发指定事件
    
    if (protocol.fin == 1){
      this.msg
    }
    this.emit('message',this.msg);
    tis.msg = null;
  }

  // 握手报文处理
  handleShake(){

  }

  // 解析数据帧
  parseFrame(frame){

  }

  // socket 关闭
  handleClose(error){
    console.log('socket 关闭')
  }

  // 连接出错
  handleError(){

  }

}