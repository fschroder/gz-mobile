var Person = Class.extend( {
  init: function( authForm ) {
    var obj = serializeObject( authForm );
    var img = encodeURIComponent( 'https://www.dropbox.com/s/17aql8fxlwptfl3/Boston%20City%20Flow.jpg' );
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
      $( '#subtitle' ).html( "Welcome " + gender + decodeURI( this.result.name ) + " <i>(" + decodeURI( this.result.email ) + ")</i>" );
      $( "#imageResult" ).append( '<img alt="" src="' + decodeURIComponent( decodeURIComponent( _result.img ) ) + '" />' );

    } );
  }
} );
