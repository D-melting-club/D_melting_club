(function(angular) {
    //1.创建1个首页模块. 从
    var app = angular.module("D-Melting-Club_financing", ["ngRoute"]);

    app.config(["$locationProvider", function($locationProvider) {
        $locationProvider.hashPrefix("");
    }]);
    //2.配置和首页相关的路由.
    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when("/financing", {
            templateUrl: "./static/financing/financing.html",
            controller: "financingCtro"
        })
    }]);



    // app.config(["$routeProvider", function($routeProvider) {
    //     $routeProvider.when("/details/:id", {
    //         templateUrl: "./details/details.html",
    //         controller: "financingCtro"
    //     });
    // }]);
    app.controller("financingCtro", ["$scope", function($scope) {

        //    app.run(function($rootScope) {
        //     $rootScope.data = {
        //         current: "1" // 1代表张三，2代表李四，3代表王五
        //     };
        //     $rootScope.actions = {
        //         setCurrent: function(param) {
        //             $rootScope.data.current = param;
        //         }
        //     }
        // })
        $('.header').show();
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