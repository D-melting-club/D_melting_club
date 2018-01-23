(function(angular) {
    //1.创建1个首页模块. 从
    var app = angular.module("D-Melting-Club_news", ["ngRoute"]);

    app.config(["$locationProvider", function($locationProvider) {
        $locationProvider.hashPrefix("");
    }]);

    //2.配置和首页相关的路由.
    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when("/news", {
            templateUrl: "./static/home/news.html",
            controller: "news"
        })
    }]);

    app.controller("news", ["$scope", "$route", "$http", "$routeParams", function($scope, $route, $http, $routeParams) {
            $http.get('../static/JSON/news.json').then(function(result) {
                $scope.news = result.data.news;
                $scope.news2 = result.data.news2;
            })
            $(".header .navbar-right li").removeClass("bootcolor");
        }])
        // console.log($(".header .navbar-right .item").eq(0).html());


})(angular);