(function(window, mui) {
    var ns = window.ns || {};
    ns._width = 750;
    ns.$html = $("html");
    ns.$body = $("body");
    ns.$window = $(window);
    var div = "<div/>",
        a = "<a/>";

    function $_extend_mui() {
        var ext = ["input", "numbox", "offCanvas", "popover", "progressbar", "pullRefresh", "scroll", "slider", "switch", "pullToRefresh"];
        ext.forEach(function(v, i) {
            $.fn[v] = mui.fn[v];
        });
        for (var s in mui) {
            if ($[s] === undefined) {
                $[s] = mui[s];
            }
        }
        $.fn.stop = function() {
            return this;
        }
    };
    ns.initRem = function(opts) {
        var scale = (window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth) / ns._width * 100;
        ns.$html.css({
            "font-size": scale + "px",
            "display": "block"
        });
    };
    ns.initAside = function(opts) {
        var defaults = {
                box: "#app",
                wrap: "#wrapper",
                nav: "#nav",
                show: ".navShow",
                hide: ".navHide",
                event: "tap"
            },
            opts = $.extend({}, defaults, opts);
        var $app = $(opts.box),
            $wrapper = $(opts.wrapper),
            $nav = $(opts.nav),
            $show = $(opts.show),
            $hide = $(opts.hide);
        this.initAside.show = function() {
            $app.offCanvas('show');
        };
        this.initAside.hide = function() {
            $app.offCanvas('close');
        };
        $show.on(opts.event, this.initAside.show);
        $hide.on(opts.event, this.initAside.hide);
    };
    ns.initTab = function(opts) {
        var defaults = {
                disabled: ".mui-tab-disabled"
            },
            opts = $.extend({}, defaults, opts);
        ns.$body.on("tap", opts.disabled, function(e) {
            var href = $(this).attr("href");
            if (href) {
                window.location.href = href;
            }
            return false;
        });
    };
    ns.initScroll = function(opts) {
        var defaults = {
                el: ".mui-scroll-wrapper"
            },
            opts = $.extend({}, defaults, opts);
        $(opts.el).scroll();
    };
    ns.initA = function() {
        $("body").on("tap", "a", function() {
            var href = $(this).attr("href");
            if (href && !/^javascript:|^tel:|^mes:|^mailto:|^#/.test(href) && !$(this).hasClass("ns-uninit") ) {
                //ns.load();
                window.location.href = href;
                return false;
            }
        });
    };
    ns.initLines = function(el, opts) {
        var defaults = {
            el: undefined,
            title: '',
            subTitle: '',
            x: [],
            y: "value",
            data: []
        };
        if (!echarts) {
            return false;
        }
        var _echat = echarts.init(el);
        _echat.formatops = function(opts) {
            var opts = $.extend({}, defaults, opts);
            var data = _echat.formatData(opts.data);
            var _y;
            if (opts.y === "value") {
                _y = {
                    type: 'value',
                    scale: true,
                    splitArea: {
                        show: false
                    }
                }
            } else {
                _y = opts.y;
            };

            var option = {
                title: {
                    text: opts.title,
                    left: 'center'
                        //subtext: opts.subTitle
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    top: "40",
                    left: '1%',
                    right: '1%',
                    bottom: '17%',
                    containLabel: true
                },
                legend: {
                    show: true,
                    data: data.legend,
                    bottom: 0,
                    itemGap: 15
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    splitLine: {
                        show: false
                    },
                    data: opts.x
                },
                yAxis: _y,
                series: data.series
            };
            if (data.series.html) {
                option.grid.bottom = '0%';
            }
            return option;
        };
    }
    
    ns.get = function(url, data) {
        return ns.ajax(url, data)
    };
    ns.post = function(url, data) {
        return ns.ajax(url, data, {
            type: "post"
        });
    };
    ns.load = function(txt) {
        var lo = ns.load;
        txt = txt || 'loading...';
        if (lo.el === undefined) {
            lo.el = $(div).attr('id', 'ns_loading').appendTo(ns.$body);
            lo.icon = $(div).attr('id', 'ns_loading_i').appendTo(lo.el);
            lo.txt = $(div).attr('id', 'ns_loading_p').appendTo(lo.el);
        }
        lo.txt.html(txt);
        return lo.el.show();
    }
    ns.loadHide = function() {
        if (ns.load.el === undefined) {
            $("#ns_loading").hide();
        } else {
            ns.load.el.hide();
        }
        return ns.load.el;
    }
    ns.init = function() {
        $_extend_mui();
        $.init();
        ns.initA();
        ns.initAside();
        //ns.initTab();
        ns.initScroll();
        ns.$window.on("orientationchange", function() {
            window.location.reload();
        });

        // 快速选择
        var $quick = $(".quick"),
            $quickFull = $(".quick-full");
        $quick.on("click", function() {
            $quickFull.fadeToggle();
        })

    };
    ns.ajaxLock = false;
    ns.initRem();
    //ns.$window.on("resize", ns.initRem);
    window.ns = ns;
    $(function() {
        ns.init();
    });
})(window, mui);
    
