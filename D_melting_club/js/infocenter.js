(function(angular) {
    //1.创建1个首页模块. 从

    var app = angular.module("D-Melting-Club_infocenter", ["ngRoute"]);

    app.config(["$locationProvider", function($locationProvider) {
        $locationProvider.hashPrefix("");
    }]);

    //2.配置和首页相关的路由.
    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when("/infocenter", {
            templateUrl: "./static/infocenter/infocenter.html",
            controller: "infocenter"
        })
    }]);


    app.controller("infocenter", ["$scope", function($scope) {
        $('.header').hide();
        $scope.data = {
            current: "1" // 1代表张三，2代表李四，3代表王五
        };
        $scope.actions = {
            setCurrent: function(param) {
                $scope.data.current = param;
            }
        }

        console.log("aaa");
        $('.right .financing .list').on('click', 'li', function() {
            console.log("aaa");
            $(this).parent().parent().hide().next().show().children().eq(0).html('融资业务>' + $(this).children().eq(1).html())
            $(".left .list-group").children().eq(1).html("融资介绍")
        })


        $('.left .list-groups-item').eq(1).on("click",
            function() {
                $(this).parent().parent().next().children().eq(0).children().eq(0).show().next().hide();
                $(this).html("融资业务");
            }
        );
        $('.left .list-groups-item').eq(1).trigger('click');

    }])







})(angular);