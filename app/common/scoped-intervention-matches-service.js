(function (commonModule, $, resources) {
    'use strict';

    commonModule.service("ScopedInterventionMatchesService", ['$http' , function ($http) {

       this.orders=[];
        self.matchedItems = function(item) {
          /*  return _.reject(intervention.matches, function(segment) {
                return segment.type === 'ignored' || segment.negated;
            });*/
        };
        self.putOrder = function(item) {
            console.log(" in service put item:"+item);
          this.orders.push(item);
            return orders;
        }
        self.getOrders = function(item) {
         //   this.orders.push(item);
            return this.orders;
        }
        }]);
    
}(window.commonModule, window.$, window.resources));
