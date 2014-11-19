jquery-fixclick
===============

augmented clone/fork of [AlloVince's fixclick plugin](http://allo.ave7.net/) - his site is down so this is based on the v1.0 floating around...



## Original / references to the original

- http://allo.ave7.net/
- http://www.jquery-plugins.info/fixclick-00012763.htm



## References discussing the problem (mixing `.click()` and `.dblclick()`)

- http://api.jquery.com/dblclick/

  Also pay attention to the note near the end where it says:

  > It is inadvisable to bind handlers to both the click and dblclick events for the same element. \[...]

- http://stackoverflow.com/questions/6330431/jquery-bind-double-click-and-single-click-separately
- https://gist.github.com/ncr/399624
- http://stackoverflow.com/questions/1067464/need-to-cancel-click-mouseup-events-when-double-click-event-detected/1067484#1067484
- http://stackoverflow.com/questions/5471291/javascript-with-jquery-click-and-double-click-on-same-element-different-effect



## Problem

When you bind both the single [click](http://api.jquery.com/click/) and [double click (dblclick)](http://api.jquery.com/dblclick/) event on a DOM element, the click handler will fire once (or twice) before the dblclick handler is invoked.



## Solution 

With this plugin you can safely bind to both click and double click (dblclick) events and only have the appropriate one execute when the user clicks/double-clicks.

Note that the single-click event will be delayed by about 300 ms. This is unfortunately necessary to discern between both events.



## Usage

Example usage:

```
$("#test").fixClick(function (e) {
  // do something here when click
  //
  // Note: this handler will be delayed! 
  // ($.fn.fixClick.clickDelay = 300 milliseconds by default)
  //
  // `e` event object is a clone of the original event and has
  // its `.simulated` field set to boolean `true`.
  ...
}, function (e) {
  // do something here when dblclick
  //
  // `e` is the usual event object you'ld expect for any jQuery
  // dblclick action. 
  ...
});
```

Enhanced example usage:

```
$("#test").fixClick(function (e) {
  // do something here when click
  //
  // Note: this handler will be delayed! 
  // ($.fn.fixClick.clickDelay = 300 milliseconds by default)
  //
  // `e` event object is a clone of the original event and has
  // its `.simulated` field set to boolean `true`.
  ...
}, function (e) {
  // do something here when dblclick
  //
  // `e` is the usual event object you'ld expect for any jQuery
  // dblclick action. 
  ...
}, function (e) {
  // this optional handler gets invoked *immediately* when
  // a click event arrives. Here you may perform some app-specific
  // setup/signaling.
  //
  // Warning/Note: this handler is, of course, invoked for each
  // click event, hence it will also be invoked for a dblclick.
  // When you wish jQuery-FixClick to *not* set up and fire a
  // delayed click handler (the first argument of this fixClick()
  // call), you can accomplish this by invoking
  // `e.stopImmediatePropagation()`.
  ...
  if (some_condition_where_you_dont_want_the_delayed_click_called) {
    e.stopImmediatePropagation();
  }
});
```
