(function(angular) {
    //1.创建1个首页模块. 从
    var app = angular.module("D-Melting-Club_home", ["ngRoute"]);

    app.config(["$locationProvider", function($locationProvider) {
        $locationProvider.hashPrefix("");
    }]);
    //2.配置和首页相关的路由.
    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when("/home/:back?", {
            templateUrl: "./static/home/home.html",
            controller: "home"
        }).when("/", {
            redirectTo: "/home"
        });
    }]);


    app.controller("home", ["$scope", "$route", "$routeParams", function($scope, $route, $routeParams) {
        $('.header').show();
        $('.carousel').carousel({
            interval: 2500
        })
        $scope.data = {
            current: "1" // 1代表张三，2代表李四，3代表王五
        };
        $scope.actions = {
            setCurrent: function(param) {
                $scope.data.current = param;
            }
        }
        if ($route.current.params.back == 1) {
            $(".header .navbar-right a").eq(0).parent().addClass("bootcolor").siblings().removeClass("bootcolor");
            // $('body,html').animate({ scrollTop: 0 }, 500);
        }
    }])

})(angular);