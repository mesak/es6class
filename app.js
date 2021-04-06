class TestApp {
  constructor() {
    this.data = new Map();
  }
  getData(key) {
    return this.data.get(key);
  }

  setData(key, value) {
    return this.data.set(key, value);
  }

  renderList(...args) {
    console.log('args', args);



    
    return [];
  }
}
export default TestApp;