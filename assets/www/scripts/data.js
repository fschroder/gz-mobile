var serializeObject = function(element) {
  var fields = $(element).serializeArray();
  var object = {};
  jQuery.each(fields, function(i, field) {
    object[field.name] = field.value;
  });
  return object;
};

var showResult = function() {

  var obj = serializeObject("form");

  var gender = (obj['gender'] == 'male') ? 'Mr.' : 'Ms.';
  var msg = '<p>Hello ' + gender + obj['name'] + '</p>';
  msg += '<i>Your email is: ' + obj['email'] + '</i>';
  msg += '<p>Message: ' + obj['needs'] + '</p>';

  $("#dataResult").append(msg);
  // jQuery.each(fields, function(i, field) {
  // $("#dataResult").append(field.value + " ");
  // });
};

var onDeviceReady = function() {
  $("#data2").css('display', 'none');
  $("#dataResult").css('display', 'none');

  $("form").submit(function() {
    return false;
  });
  var validator = $("#basicForm").validate({
    errorPlacement: function(error, element) {
      error.insertAfter($(element).parent());
    }
  });

  $("#submit1").click(function() {
    if (validator.form()) {
      $("#data1").css('display', 'none');
      $("#data2").css('display', 'block');
    }
  });

  $("#submit2").click(function() {
    $("#data2").css('display', 'none');
    $("#dataResult").css('display', 'block');
    showResult();
  });

};

$(document).ready(onDeviceReady);
