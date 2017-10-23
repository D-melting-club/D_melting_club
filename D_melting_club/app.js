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
        "D-Melting-Club_infocenter"
    ]);


    app.controller("app", ["$scope", function($scope) {
        $scope.s = true;
        console.log($scope.s);

    }])



    // app.config(["$routeProvider", function($routeProvider) {
    //     $routeProvider.when("/infocenter", {
    //         controller: "infocenter"
    //     })
    // }]);



    // 首页li标签的切换样式
    $(document).ready(function() {
        $(".header .navbar-right").on("click", "li", function() {
            $(this).addClass("bootcolor").siblings().removeClass("bootcolor");
            $(".header .navbar-right li").unbind();
        })

    })

})(angular);