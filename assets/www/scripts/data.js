var onDeviceReady = function() {
  $( "#data2" ).css( 'display', 'none' );

  $( "form" ).submit( function() {
    return false;
  } );
  var validator = $( "#basicForm" ).validate( {
    errorPlacement: function( error, element ) {
      error.insertAfter( $( element ).parent() );
    }
  } );

  $( "#submit1" ).click( function() {
    if ( validator.form() ) {
      var p = new Person( "form" );
      p.greet();
      /* Using a Person with callback function */
//      p.onFinish( function( result ) {
//        alert( result.name );
//      } );
      $( "#data1" ).css( 'display', 'none' );
      $( "#data2" ).css( 'display', 'block' );
    }
  } );

  $( "#submit2" ).click( function() {
    $( "#data2" ).css( 'display', 'none' );

    // Show result
    msg = '<p>Message: ' + $( '#needs' ).val() + '</p>';
    $( "#dataResult" ).append( msg );
  } );

};

document.addEventListener( "deviceready", onDeviceReady );
