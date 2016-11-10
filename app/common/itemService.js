(function (commonModule, $, resources) {
    'use strict';

    commonModule.service("itemService", ['$http', function ($http) {

            this.getItems = function() {
                $http.get("items.json").success(function(resp){
                    console.log(resp);
                 return   resp.items;
                });

            };

        }]);

}(window.commonModule, window.$, window.resources));
