(function(angular) {
    //1.创建1个首页模块. 从
    var app = angular.module("D-Melting-Club_asforus", ["ngRoute"]);

    app.config(["$locationProvider", function($locationProvider) {
        $locationProvider.hashPrefix("");
    }]);

    //2.配置和首页相关的路由.
    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when("/asforus/:tag?", {
            templateUrl: "./static/asforus/asforus.html",
            controller: "asforus"
        })
    }]);

    app.controller("asforus", ["$scope", "$route", "$routeParams", function($scope, $route, $routeParams) {
        $('.header').show();
        if ($route.current.params.tag == null) {
            $('body,html').animate({ scrollTop: 0 }, 500);
        } else if ($route.current.params.tag == "app") {
            // 下载app
            $(".header .navbar-right a").eq(2).parent().addClass("bootcolor").siblings().removeClass("bootcolor");
            $('body,html').animate({ scrollTop: 1800 }, 500);
        }
    }])


})(angular);