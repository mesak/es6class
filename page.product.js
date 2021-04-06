import PageClass from './page_class.js';
import ProxyMethod from './proxy_method.js';
class ProductPage extends PageClass{
    constructor( app ){
      super();

      


      this.product = {};
      this.post = {};
      return this;
    }
    init(){


      console.log( 'product init');

      console.log( this )
      console.log( this.constructor.name )
      

      this.render();
      return this;
    }
    render(){
      console.log( this.setWithProductData([1,2,3]) );
      let data =  this.getWithProductData();
      this.renderWithProductList(data);
      return true;
    }
}
export default function( app ){ return new Proxy( new ProductPage( app ) ,ProxyMethod)};