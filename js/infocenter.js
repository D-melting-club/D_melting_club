(function(angular) {
    //1.创建1个首页模块. 从

    var app = angular.module("D-Melting-Club_infocenter", ["ngRoute"]);

    app.config(["$locationProvider", function($locationProvider) {
        $locationProvider.hashPrefix("");
    }]);

    //2.配置和首页相关的路由.
    app.config(["$routeProvider", function($routeProvider) {
        $routeProvider.when("/infocenter/:notice?", {
            templateUrl: "./static/infocenter/infocenter.html",
            controller: "infocenter"
        })
    }]);


    app.controller("infocenter", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams) {
        $('.header').hide();
        $('body,html').animate({ scrollTop: 0 }, 500);
        // console.log($routeParams.notice);
        if ($routeParams.notice) {
            $scope.data = {
                current: $routeParams.notice
            };
            // 由于不是首页的子页面 所以在这里虽然父页面显示出来了， 但是子页面还是默认的隐藏状态，
            // 所以需要设置当父亲显示出来的时候,儿子也显示出来 ,但是也别的页面显示出来的时候,也设置显示出来 ,没有关系 ,因为自己对应的父亲是不会显示的
            $scope.parentTrouble = true;
        }
        // $scope.data = {
        //     current: "1" // 1代表张三，2代表李四，3代表王五
        // };
        //以下数据为操作层级列表的显示与隐藏
        $scope.parentFinancing = true;
        $scope.actions = {
            setCurrent: function(param) {
                $scope.data.current = param;
                $scope.parentFinancing = true;
                $scope.isFinancing = null;
                $scope.parentTrouble = true;
                $scope.isTrouble = null;
            }
        }

        $scope.showFinancing = {
            setCurrent: function(params) {
                $scope.isFinancing = params;
                $scope.parentFinancing = false;
            }
        }
        $scope.showTrouble = {
            setCurrent: function(params) {
                $scope.isTrouble = params;
                $scope.parentTrouble = false;
            }
        }

        $http.get('../static/JSON/infocenter.json').then(function(result) {
            $scope.financing = result.data.financing;
            var reg = /\n/g;
            // var strChange = result.data.trouble[3].text.replace(reg, '<br/>');
            // result.data.trouble[3].text = strChange;
            $scope.trouble = result.data.trouble;
        })



    }])



})(angular);