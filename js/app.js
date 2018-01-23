(function(angular) {
    //主模块.
    //用来管理ng-app的那个模块就叫做主模块.
    //在主模块中写的代码就会直接在html页面上=起作用.

    //从模块如果需要起作用,除非被主模块依赖.
    // var app = angular.module("moviecat", [
    //     "moviecat_home",
    //     "moviecat_in_theaters",
    //     "moviecat_details",
    //     "moviecat_coming_soon",
    //     "moviecat_top250"
    // ]);

    var app = angular.module("D-Melting-Club", [
        "D-Melting-Club_home",
        "D-Melting-Club_financing",
        "D-Melting-Club_asforus",
        "D-Melting-Club_trouble",
        "D-Melting-Club_infocenter",
        "D-Melting-Club_news"
    ]);


    app.controller("app", ["$scope", "$route", "$location", function($scope, $route, $location) {
        $scope.s = true;
        // console.log($scope.s);
        // console.log($route.current);
        // console.log($log.debug($route.current));
        var pathUrl = $location.path();
        console.log(pathUrl);
    }])



    // 首页li标签的切换样式
    $(document).ready(function() {

        $(".header .navbar-right").on("click", "a", function() {
                $(this).parent().addClass("bootcolor").siblings().removeClass("bootcolor");
                // $(".header .navbar-right a").unbind();
            })
            // 一开始就触发点击首页的事件

        // console.log($(".header .navbar-right li").eq(1).trigger("click"))
        $(".header .navbar-right a").eq(0).parent().addClass("bootcolor").siblings().removeClass("bootcolor");
        $(".foot-nav").on("click", function() {
            var index = $(".foot-nav").index($(this));
            var $this = $(this);
            change(index);
        })

        function change(index) {
            if (index == 1 || index == 2) {
                $(".header .navbar-right a").eq(1).parent().addClass("bootcolor").siblings().removeClass("bootcolor");
            } else if (index == 0) {
                $(".header .navbar-right a").eq(2).parent().addClass("bootcolor").siblings().removeClass("bootcolor");
            } else if (index == 3) {
                $(".header .navbar-right a").eq(3).parent().addClass("bootcolor").siblings().removeClass("bootcolor");
            }
        }
    })

})(angular);