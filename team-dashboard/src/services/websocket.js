class WebSocketService {
    constructor() {
      this.socket = null;
      this.listeners = new Map();
    }
  
    connect() {
      this.socket = new WebSocket(process.env.REACT_APP_WS_URL);
      this.socket.onmessage = this.handleMessage.bind(this);
    }
  
    handleMessage(event) {
      const data = JSON.parse(event.data);
      if (this.listeners.has(data.type)) {
        this.listeners.get(data.type).forEach(callback => callback(data.payload));
      }
    }
  
    subscribe(type, callback) {
      if (!this.listeners.has(type)) {
        this.listeners.set(type, new Set());
      }
      this.listeners.get(type).add(callback);
    }
  
    unsubscribe(type, callback) {
      if (this.listeners.has(type)) {
        this.listeners.get(type).delete(callback);
      }
    }
  
    send(type, payload) {
      this.socket.send(JSON.stringify({ type, payload }));
    }
  }
  
  export default new WebSocketService();