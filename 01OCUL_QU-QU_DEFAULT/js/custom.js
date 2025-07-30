(function () {
    "use strict";

    var app = angular.module('viewCustom', ['angularLoad']);

    // Code for js/custom.js
    // Place it below "var app = angular.module('viewCustom', ['angularLoad']);" and within the top JS function
    // Adapt cataloguingStatement and the style attribute to your needs

    var cataloguingStatement = 'Queen’s University Library is committed to using language that is inclusive and respectful to describe our collections. We recognize that some of our descriptions contain harmful and insensitive language that demeans the humanity of the people we describe. We are actively working to update the existing harmful language with respectful descriptions. Your statement';

    // Cataloguing statement full view
    /*app.component('prmFullViewAfter', {
        bindings: { parentCtrl: '<' },
        template: '<div class="custStatementWrapper flex-xl-60 flex-md-70 flex-lg-65 flex-sm-100" style="color:white; background-color:#4D4D70;padding:20px;margin-top:20px;"><p>' + cataloguingStatement + '</p></div>'
    });*/

    // Libraryh3lp code
    var x = document.createElement("script");
    x.type = "text/javascript";
    x.async = true;
    x.src = "https://ca.libraryh3lp.com/js/libraryh3lp.js?1246";
    var y = document.getElementsByTagName("script")[0];
    y.parentNode.insertBefore(x, y);

    var chat = document.createElement("div");
    chat.innerHTML = '<div class="needs-js"></div>';
    document.body.appendChild(chat);

    /* Angular code */

    // Auto Activate Filter in Full Display
    app.component('prmLocationItemsAfterAppStoreGenerated', {
        bindings: { parentCtrl: '<' },
        controller: function controller($scope) {
            this.$onInit = function () {
                var activateFilter = function activateFilter() {
                    filterCount = filterCount + 1;

                    if (document.querySelectorAll("[translate='nui.aria.locationItems.filters']").length > 0) {
                        clearInterval(myFilterIntervalVar);
                        return;
                    }

                    if (filterCount > 5) {
                        clearInterval(myFilterIntervalVar);
                        return;
                    }

                    var filter_list = document.querySelectorAll("[id^='filter']");
                    for (var i = 0; i < filter_list.length; i++) {
                        filter_list[i].parentNode.click();
                        filterExpanded = true;
                    }
                };

                var myFilterIntervalVar = setInterval(activateFilter, 800);
                var filterCount = 0;
                var filterExpanded = false;
            };
        }
    });

    // Collapse "Get It From Other Institutions" dropdown by default in full record display
    app.component("prmAlmaOtherMembersAfterAppStoreGenerated", {
        bindings: { parentCtrl: '<' },
        controller: function controller($scope) {
            this.$onInit = function () {
                var ctrl = this;
                ctrl.parentCtrl.isCollapsed = true;
            };
        }
    });

    // OUTAGE BANNER
    /*    app.component('prmExploreFooterAfter', {
        bindings: { parentCtrl: '<' },
        template: '<div role="alert" aria-live="assertive" layout-align="center center" class="layout-align-center-center">\n' +
            '    <div layout="column" class="bar alert-bar layout-align-center-center" layout-align="center center" style="height:100%">\n' +
            '        <span class="bar-text">\n' +
            '            Due to the significant freezing rain expected this weekend, we have made a decision to reduce and close library services. Stauffer Library will remain open during regular hours (8am – 2am) over the weekend. All other locations will be closed all weekend. \n' +
            '        </span>\n' +
            '    </div>\n' +
            '</div>'
    }); */
})();
