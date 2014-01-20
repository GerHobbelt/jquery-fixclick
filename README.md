jquery-fixclick
===============

clone of [AlloVince's fixclick plugin](http://allo.ave7.net/) - his site is down so this is based on the v1.0 floating around...



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

```
$("#test").fixClick(fuction(){
  // do something here when click
},function(){
  // do something here when dblclick
});
```
