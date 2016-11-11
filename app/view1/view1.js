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
    //baidu
    var map = new BMap.Map("allmap");

    $scope.getItems =function() {
   /*     itemService.getItems().then(function(data){
            $scope.items=data;
        });*/

       $http.get("food.json").success(function(resp) {
            console.log(resp);
            $scope.items= resp;

           map.centerAndZoom(new BMap.Point( $scope.items[0].location.coordinates[0], $scope.items[0].location.coordinates[1]), 11);
           map.addControl(new BMap.NavigationControl());               // 添加平移缩放控件
           map.addControl(new BMap.ScaleControl());                    // 添加比例尺控件
           map.addControl(new BMap.OverviewMapControl());              //添加缩略地图控件
           map.enableScrollWheelZoom();                            //启用滚轮放大缩小
           map.addControl(new BMap.MapTypeControl());          //添加地图类型控件
           map.setCurrentCity("Los Angles");          // 设置地图显示的城市 此项是必须设置的

      /*     var customLayer;
           function addCustomLayer(keyword) {
               if (customLayer) {
                   map.removeTileLayer(customLayer);
               }
               customLayer=new BMap.CustomLayer({
                   geotableId: 30960,
                   q: '', //检索关键字
                   tags: '', //空格分隔的多字符串
                   filter: '' //过滤条件,参考http://developer.baidu.com/map/lbs-geosearch.htm#.search.nearby
               });
               map.addTileLayer(customLayer);
               customLayer.addEventListener('hotspotclick',callback);
           }
           function callback(e)//单击热点图层
           {
               var customPoi = e.customPoi;//poi的默认字段
               var contentPoi=e.content;//poi的自定义字段
               var content = '<p style="width:280px;margin:0;line-height:20px;">地址：' + customPoi.address + '<br/>价格:'+contentPoi.dayprice+'元'+'</p>';
               var searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
                   title: customPoi.title, //标题
                   width: 290, //宽度
                   height: 40, //高度
                   panel : "panel", //检索结果面板
                   enableAutoPan : true, //自动平移
                   enableSendToPhone: true, //是否显示发送到手机按钮
                   searchTypes :[
                       BMAPLIB_TAB_SEARCH,   //周边检索
                       BMAPLIB_TAB_TO_HERE,  //到这里去
                       BMAPLIB_TAB_FROM_HERE //从这里出发
                   ]
               });
               var point = new BMap.Point(customPoi.point.lng, customPoi.point.lat);
               searchInfoWindow.open(point);
           }
           document.getElementById("open").onclick = function(){
               addCustomLayer();
           };*/
           var marker = new Array(); //存放标注点对象的数组
           var info = new Array(); //存放标注点对象的数组

for(var i=0;i< $scope.items.length;i++)
           {
             /*  var myIcon = new BMap.Icon("http://api.map.baidu.com/img/markers.png", new BMap.Size(20, 25), {
                   offset: new BMap.Size(10, 25),
                   imageOffset: new BMap.Size(0, 0 - index * 25)
               });*/

                marker[i] = new BMap.Marker(new BMap.Point( $scope.items[i].location.coordinates[0], $scope.items[i].location.coordinates[1]));

               map.addOverlay(marker[i]);
               var label = new window.BMap.Label($scope.items[i].applicant, { offset: new window.BMap.Size(20, -10) });
              // marker[i].setLabel(label);


           }     // 初始化地图,设置中心点坐标和地图级别}
           for (var i = 0; i < marker.length; i ++)
           {
               var index = i;
               console.log(i);
               //alert(i);
               addInfo("<p style=’font-size:12px;lineheight:1.8em;’>" +  $scope.items[i].applicant + "</br>地址：" +  $scope.items[i].address + "</br> fooditems...：" +$scope.items[i].fooditems+ "</br></p>",marker[i]);
           }
           function addInfo(txt,marker){
               var infoWindow = new BMap.InfoWindow(txt);
               marker.addEventListener("click", function(){this.openInfoWindow(infoWindow);});
           }



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


;