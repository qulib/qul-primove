(function() {
  "use strict";
  "use strict";

  var app = angular.module("viewCustom", ["angularLoad"]);

/*----------below is the code for libraryh3lp -----------*/
var s=document.createElement('script');
s.id='localScript';
s.src= 'https://ca.libraryh3lp.com/js/libraryh3lp.js?776';
document.body.appendChild(s);

app.component('prmLogoAfter', {
   template: '<div id="needs-js"></div>'
});
/*---------------libchat code ends here---------------*/

})();
