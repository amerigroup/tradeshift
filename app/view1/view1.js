'use strict';

angular.module('myApp.view1', ['ngRoute','angularUtils.directives.dirPagination'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
/*   ,resolve:{
      'items':['itemService',function(itemService){
      return itemService.getItems();
       }]

    }*/
  });
}])
    .controller('scopedController',['$scope','$http','itemService',function($scope,$http,itemService) {
        $scope.orders=[];
        $scope.putOrder = function(item) {
            console.log(item);
            $scope.orders.push(item);
            return $scope.orders;
        }

        $scope.getOrders = function(item) {
          //  remove(index)
            $scope.orders.push(item);
            console.log(""+$scope.orders);
            return $scope.orders;
        }

    }])

.controller('View1Ctrl',['$scope','$http','itemService',function($scope,$http,itemService) {
    $scope.currentPage = 1;
    $scope.pageSize = 2;
    $scope.items = [];
    //$scope.orders=[];
    $scope.getItems =function() {
   /*     itemService.getItems().then(function(data){
            $scope.items=data;
        });*/

       $http.get("items.json").success(function(resp) {
            console.log(resp);
            $scope.items= resp.items;
        });
    };
    $scope.getItems();


    $scope.pageChangeHandler = function(num) {
        console.log('items page changed to ' + num);
    };
  $scope.remove = function(index) {
    $scope.items.splice(index, 1);
  };
}])
    .directive('scopedInterventionMatchedItem', ['ScopedInterventionMatchesService', function(ScopedInterventionMatchesService) {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                title: '@',
                item: '=',
                status: '=',
             orders:'=',
                fireScrollToEvent: '&'
             
            },
            templateUrl: 'view1/link.html',
            controller:'scopedController',
            link: function (scope, elem, iAttre) {
                scope.staticText = resources.messages.analytics.assessment;
                scope.ScopedInterventionMatchesService = ScopedInterventionMatchesService;

            }
        };
    }])



;