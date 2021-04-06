
class PageClass {
  //renderList(...args) {
  //  console.log('renderList args', args);
  _init( variable )
  {

    if( Array.isArray(variable)) {
      variable.forEach( key => this[key] = {} );
    }
    console.log( this );
  }
  _setWithData(names , set_args) {
    let targetVariable = humps.camelize(names.join('-'),{separator:'-'});
    console.log('setWithData args',targetVariable, names ,set_args);
    this[targetVariable] = set_args;
    return this;
  }
  _getWithData(names , set_args) {
    
    let targetVariable = humps.camelize(names.join('-'),{separator:'-'});
    console.log('getWithData args', names ,set_args);
    let data = this[targetVariable];
    console.log( data );
    return data;
  }
  _renderWithList(names , set_args) {
      
    console.log('renderWithList args', names ,set_args);



    
    return [];
  }
}
export default PageClass;