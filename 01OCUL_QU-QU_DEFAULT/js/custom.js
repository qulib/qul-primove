(function() {
  "use strict";
  "use strict";

  var app = angular.module("viewCustom", ["angularLoad"]);

  var libraryh3lpScript = document.createElement("script");
  libraryh3lpSCript.id = "localScript";
  libraryh3lpScript.src = "https://ca.libraryh3lp.com/js/libraryh3lp.js?767";
  // document.body.appendChild(s);
  document.getElementsByTagName("head")[0].appendChild(libraryh3lpScript);

  // app.component("prmLogoAfter", {
  //   template: '<div id="needs-js"></div>'
  // });

  // var jQueryScript = document.createElement("script");
  // jQueryScript.src = "https://code.jquery.com/jquery-3.4.1.min.js";
  // document.getElementsByTagName("head")[0].appendChild(jQueryScript);

  // jQueryScript.onload = function() {
  //   $(document).ready(function() {
  //     $("prm-logo").append("<img src=\"custom/01OCUL_QU-QU_DEFAULT/img/qul-omni-logo-white.svg\" alt=\"Omni logo\">");
  //   });
  // };
})();