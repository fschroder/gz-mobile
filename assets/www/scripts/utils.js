function isMobileDevice() {
  return !!navigator.notification;
}

function serializeObject(element) {
  var fields = $(element).serializeArray();
  var object = {};
  jQuery.each(fields, function(i, field) {
    object[field.name] = field.value;
  });
  return object;
};

document.addEventListener("deviceready", function() {
  navigator.notification.vibrate(500);

//  if (isMobileDevice()) {
//    var script   = document.createElement("script");
//    script.type  = "text/javascript";
//    script.src   = "cordova.js";
//    document.head.appendChild(script);
//  }

}, true);