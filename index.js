import TestApp from './app.js';
class App extends TestApp {

  constructor() {
    super();
    // this.data = new Proxy(this.data, {
    //   get: function (target, prop, receiver) {

    //     console.log('target',target);
    //     console.log('prop',prop);
    //     console.log('receiver',receiver);
    //     return target[prop];
    //   }

    // })
  }

  init() {
    console.log(this);
    this.setData('action', 'render');
    this.setData('name', 'product');
    this.setData('case', 'list');
    console.log('test');
    //return this.getData('action');
  }
  async load( page_name ){
    let includePageModule = await import(`./page.${page_name}.js`)
    let pageModule = includePageModule.default( this );
    pageModule.init();

    
  }
}
const mainApp = new App();

mainApp.init();
mainApp.load('product');

// mainApp.init();
// console.log(mainApp);
// Object.defineProperty(mainApp, 'name', { value: 'myName', writable: false });
// console.log(mainApp);

const mainApp2 = new Proxy(mainApp, {
  get: function (target, prop) {

    // console.log('target', target);
    // console.log('prop', prop);
    if (typeof target[prop] == 'function') {
      return Reflect.get(target, prop);
    } else {
      //let props2 = humps.depascalizeKeys(prop);
      let props = humps.decamelize(prop).split('_');
      let action = props.shift();
      let targetDom = props.pop();
      //console.log(props, action, targetDom);
      let targetFunction = humps.camelize([action, targetDom].join('_'));
      //console.log(targetFunction);
      //let data = receiver.targetFunction.call( );
      // console.log('data')
      // console.log(data)
      if (typeof target[targetFunction] == 'function') {
        return Reflect.get(target, targetFunction);
      } else {
        return Reflect.get(target, prop);
      }
    }
  }
});
// mainApp2.init();
// console.log(mainApp2)
// console.log(mainApp2.getData('case'))
// mainApp2.renderProductList('1');
// console.log( proxyObj )
// console.log( proxyObj.getData('case') )
//mainApp.renderProductList('1');
