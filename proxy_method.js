export default {
  get: function (target, prop,reflect){
    // console.log('target', target);
    // console.log('prop', prop);
    if (target[prop] != undefined) {
      switch( prop )
      {
        case 'init' : 
          target._init([  humps.decamelize( target.constructor.name,{separator:'-' }).split('-') ] );
        break;
      }
      return Reflect.get(target, prop);
    } else {
      //let props2 = humps.depascalizeKeys(prop);
      let props = humps.decamelize(prop,{separator:'-'}).split('-');
      let action = props.shift();
      let keyword = props.shift();
      let targetDom = props.pop();
      let targetFunction =  '_' + humps.camelize([action, keyword, targetDom].join('-'),{separator:'-'});
      console.log(targetFunction);
      //let data = receiver.targetFunction.call( );
      // console.log('data')
      // console.log(data)
      
      if (typeof target[targetFunction] == 'function') {
        return function(...args) {
          return target[ targetFunction ].apply( this, [props, ...args] );
        };
      }
    }
  },
  has: function(target, name) {
    console.log('has' + name);
    return Reflect.has(target, name);
  },
  apply: function (target, thisBinding, args) {
    console.log('thisBinding', thisBinding);
    console.log('args', args);
    return args[0];
  }
}