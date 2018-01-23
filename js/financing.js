(function(angular) {
    //1.创建1个首页模块. 从
    var app = angular.module("D-Melting-Club_financing", ["ngRoute"]);

    app.config(["$locationProvider", function($locationProvider) {
        $locationProvider.hashPrefix("");
    }]);
    //2.配置和首页相关的路由.
    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when("/financing/:tag?", {
            templateUrl: "./static/financing/financing.html",
            controller: "financingCtro"
        })
    }]);

    app.controller("financingCtro", ["$scope", "$http", "$route", "$routeParams", function($scope, $http, $route, $routeParams) {
        $('.header').show();
        $scope.data = {
            current: "1" // 1代表张三，2代表李四，3代表王五
        };
        $scope.actions = {
            setCurrent: function(param) {
                $scope.data.current = param;
            }
        }
        console.log($route.current.params.tag);
        if ($route.current.params.tag == null) {
            console.log($route.current.params.tag);
            $('body,html').animate({ scrollTop: 0 }, 500);
        } else if ($route.current.params.tag == "process") {
            $('body,html').animate({ scrollTop: 1600 }, 100);
        } else {
            // 功能：让页面回到顶端，然后更改样式做路由跳转样，运行点击函数，更改显示的绑定值
            console.log($route.current.params.tag);
            $(".header .navbar-right a").eq(1).parent().addClass("bootcolor").siblings().removeClass("bootcolor");
            $scope.actions.setCurrent($route.current.params.tag);
            $('body,html').animate({ scrollTop: 0 }, 500);
        }



    }])


})(angular);