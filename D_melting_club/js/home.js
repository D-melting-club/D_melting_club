(function(angular) {
    //1.创建1个首页模块. 从
    var app = angular.module("D-Melting-Club_home", ["ngRoute"]);

    app.config(["$locationProvider", function($locationProvider) {
        $locationProvider.hashPrefix("");
    }]);
    //2.配置和首页相关的路由.
    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when("/home", {
            templateUrl: "./static/home/home.html",
            controller: "home"
        }).when("/", {
            redirectTo: "/home"
        });
    }]);


    app.controller("home", ["$scope", function($scope) {
        $('.header').show();
        $('.carousel').carousel({
            interval: 1500
        })
        $scope.data = {
            current: "1" // 1代表张三，2代表李四，3代表王五
        };
        $scope.actions = {
            setCurrent: function(param) {
                $scope.data.current = param;
            }
        }
    }])

})(angular);