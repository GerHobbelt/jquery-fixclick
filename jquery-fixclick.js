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
            _.delay = 300;
            $(this)
            .click(function (e) {
                var _self = this;
                _self.e = e;
                _.firstClick == false ? _.timer = setTimeout(function () {
                    _.click.call(_self, _self.e);
                    _.firstClick = false;
                }, _.delay) : null;
                _.firstClick = true;
            })
            .dblclick(function (e) {
                var _self = this;
                clearTimeout(_.timer);
                _.firstClick = false;
                _.dblclick.call(_self, e);
            });
            return this;
        }
    })(jQuery);
}
