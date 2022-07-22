        console.clear();
        console.log("%c 有朋自远方来, 不亦说乎.", "background:#24272A; color:#ffffff", "");
        console.log("%c Github %c", "background:#24272A; color:#ffffff", "", "https://github.com/ThekingMX1998");
        console.log("%c 版本号: %c", "background:#24272A; color:#ffffff", "", "beta");
        (function ($) {
            $.fn.snow = function (options) {
                var $flake = $('<div id="snowbox" />').css({ 'position': 'absolute', 'z-index': '9999', 'top': '-50px' }).html('&#10052;'),
                    documentHeight = $(document).height(),
                    documentWidth = $(document).width(),
                    defaults = {
                        minSize: 10,
                        maxSize: 20,
                        newOn: 1000,
                        flakeColor: "#AFDAEF"
                    },
                    options = $.extend({}, defaults, options);
                var interval = setInterval(function () {
                    var startPositionLeft = Math.random() * documentWidth - 100,
                        startOpacity = 0.5 + Math.random(),
                        sizeFlake = options.minSize + Math.random() * options.maxSize,
                        endPositionTop = documentHeight - 200,
                        endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
                        durationFall = documentHeight * 10 + Math.random() * 5000;
                    $flake.clone().appendTo('body').css({
                        left: startPositionLeft,
                        opacity: startOpacity,
                        'font-size': sizeFlake,
                        color: options.flakeColor
                    }).animate({
                        top: endPositionTop,
                        left: endPositionLeft,
                        opacity: 0.2
                    }, durationFall, 'linear', function () {
                        $(this).remove()
                    });
                }, options.newOn);
            };
        })(jQuery);
        $(function () {
            $.fn.snow({
                minSize: 5,
                maxSize: 50,
                newOn: 800
            });
        });
        var OriginTitle = document.title;
        var titleTime;
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) {
                // $('[rel="icon"]').attr('href', "/funny.ico");
                document.title = 'GreenFish - Leading the future';
                clearTimeout(titleTime);
            }
            else {
                $('[rel="icon"]').attr('href', "/favicon.ico");
                document.title = 'GreenFish - 引领未来' + OriginTitle;
                titleTime = setTimeout(function () {
                    document.title = OriginTitle;
                }, 2000);
            }
        });
