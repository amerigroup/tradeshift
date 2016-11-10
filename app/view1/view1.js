'use strict';

angular.module('myApp.view1', ['ngRoute','angular-echarts'])

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
/*
    var pageload = {
        name: 'page.load',
        datapoints: [
            { x: 2001, y: 1012 },
            { x: 2002, y: 1023 },
            { x: 2003, y: 1045 },
            { x: 2004, y: 1062 },
            { x: 2005, y: 1032 },
            { x: 2006, y: 1040 },
            { x: 2007, y: 1023 },
            { x: 2008, y: 1090 },
            { x: 2009, y: 1012 },
            { x: 2010, y: 1012 },
        ]
    };

    var firstPaint = {
        name: 'page.firstPaint',
        datapoints: [
            { x: 2001, y: 22 },
            { x: 2002, y: 13 },
            { x: 2003, y: 35 },
            { x: 2004, y: 52 },
            { x: 2005, y: 32 },
            { x: 2006, y: 40 },
            { x: 2007, y: 63 },
            { x: 2008, y: 80 },
            { x: 2009, y: 20 },
            { x: 2010, y: 25 },
        ]
    };

    $scope.config = {
        title: 'Line Chart',
        subtitle: 'Line Chart Subtitle',
        debug: true,
        showXAxis: true,
        showYAxis: true,
        showLegend: true,
        stack: false,
    };

    $scope.data = [ pageload ];
    $scope.multiple = [pageload, firstPaint ];*/

}])


;