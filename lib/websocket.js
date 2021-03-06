const EventEmitter = require('events');

//连接状态
const readyStates = ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'];
// 只处理握手之后的socket报文
class WebSocket extends EventEmitter {
  constructor(){
    // 保存存储的socket
    this.socket = null;
    // 设置readyState的初始状态
    this.readState = WebSocket.CONNECTING;
    // 报文接收器
    this.receiver = null;
    // 报文组装发送器
    this.sender = null;
    // 设定当前角色 默认为服务端
    this.isServer = true;
  }

  setSocket(socket){
    this.socket = socket;
    this.sender = new Sender;
    this.receiver = new Receiver;
    socket.on('close', socketOnClose);
    socket.on('data', socketOnData);
    socket.on('end', socketOnEnd);
    socket.on('error', socketOnError);
  }

  socketOnData(chunk){
    // 建立握手
    if(this.readState === WebSocket.CONNECTING) {
      this.handShake(this.socket);
    }
    // 接收报文
    if(this.readState === WebSocket.OPEN){
      this.receiver.receive(chunk);
    }
  }

  // 握手
  handShake(){

  }

  // 发送数据报
  send(data){
    this.sender.send(data);
  }

  ping(){
    this.sender.ping();
  }

  pong(){
    this.sender.pong();
  }
}

// 设置 WebSocket常量
readyStates.forEach(state => WebSocket[state] = state);