function isPhonegapInitialized() {
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
/*  TODO: check. If deviceready then phonegap is always initialized ("dummy if").
 *  if (!isPhonegapInitialized()) {
    var script   = document.createElement("script");
    script.type  = "text/javascript";
    script.src   = "cordova.js";
    document.head.appendChild(script);
    alert('initialized');
  } else {
    alert('NOTTT initialized');
  }
*/
}, true);
