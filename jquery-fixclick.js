/*
 * jQuery FixClick Plugin
 * version: 1.0
 * @requires jQuery v1.2.2 or later
 *
 * Copyright (c) 2008 AlloVince
 * Examples at: http://allo.ave7.net/fixclick
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 */
if (jQuery) {
    (function ($) {
        $.fn.fixClick = function (click_handler, dblclick_handler) {
            var _ = this;
            _.click = click_handler;
            _.dblclick = dblclick_handler;
            _.firstClick = false;
            _.timer = null;
            $(this)
            .unbind("click.fixclick")
            .unbind("dblclick.fixclick")
            .on("click.fixclick", function (e) {
                var _self = this;
                _self.e = e;
                _.firstClick == false ? _.timer = setTimeout(function () {
                    click_handler.call(_self, _self.e);
                    _.firstClick = false;
                }, $.fn.fixClick.clickDelay) : null;
                _.firstClick = true;
            })
            .on("dblclick.fixclick", function (e) {
                var _self = this;
                clearTimeout(_.timer);
                _.firstClick = false;
                dblclick_handler.call(_self, e);
            });
            return this;
        };

        $.fn.fixClick.clickDelay = 300;
    })(jQuery);
}
