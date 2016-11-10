'use strict';

angular.module('myApp.view1', ['ngRoute','echarts-ng'])

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
    var myChart = echarts.init(document.getElementById('echarts'));
    $scope.DISTRIBUTION_ID = $echarts.generateInstanceIdentity();
    $scope.distribution = {
        xAxis : [
            {
                type : 'category',
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'联盟广告',
                type:'bar',
                data:[220, 182, 191, 234, 290, 330, 310]
            }
        ]
    };
}])


;