import 'primo-explore-hathitrust-availability';
(function () {
    'use strict';
    var app = angular.module('viewCustom', ['angularLoad', 'hathiTrustAvailability']);
    // Include HathiTrust full text links.
    app.component('prmSearchResultAvailabilityLineAfter', {
        template: '<hathi-trust-availability msg="Full Text Available Online at HathiTrust" ignore-copyright="true" entity-id="https://login.queensu.ca/idp/shibboleth"></hathi-trust-availability>'
    })
/*----------below is the code for libraryh3lp -----------*/
var x = document.createElement("script");
x.type = "text/javascript";
x.async = true;
x.src = "https://ca.libraryh3lp.com/js/libraryh3lp.js?776";
var y = document.getElementsByTagName("script")[0];
y.parentNode.insertBefore(x, y);

var chat = document.createElement("div");
chat.innerHTML = '<div class="needs-js"></div>';
document.body.appendChild(chat);
/*--------------- libraryh3lp code ends here---------------*/
})();
