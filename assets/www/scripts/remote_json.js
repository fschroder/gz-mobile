var Person = Class.extend( {
  init: function( authForm ) {
    var obj = serializeObject( authForm );
    var img = encodeURIComponent( 'http://i39.tinypic.com/kbtam8.jpg' );
    this.url = encodeURI( "http://echo.jsontest.com/name/" + obj.name + "/email/" + obj.email + "/gender/" + obj.gender + "/img/" + img );
    this.request = $.ajax( {
      url: this.url,
      dataType: "jsonp"
    } );
  },
  onFinish: function( callback ) {
    this.request.done( function( data, textStatus, jqXHR ) {
      callback( data, textStatus, jqXHR );
    } );
  },
  getShortGreet: function() {
    var result = "";
    this.request.done( function( _result ) {
      result = "Hello " + _result.name;
    } );
    return result;
  },
  greet: function() {
    this.request.done( function( _result ) {
      this.result = _result;
      var gender = ( this.result.gender == 'male' ) ? 'Mr. ' : '';
      gender = ( this.result.gender == 'female' ) ? 'Ms. ' : '';
      var name = decodeURIComponent( this.result.name );
      var email = decodeURIComponent( this.result.email );
      var img = decodeURIComponent( decodeURIComponent( this.result.img ) );
      $( '#subtitle' ).html( "Welcome " + gender + name + " <i>(" + email + ")</i>" );
      $( "#imageResult" ).append( '<img alt="" src="' + img + '" />' );
    } );
  }
} );
