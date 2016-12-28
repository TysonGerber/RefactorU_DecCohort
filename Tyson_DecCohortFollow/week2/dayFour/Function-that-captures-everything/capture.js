var the_events = []
var el = document

Object.keys(Event.prototype).forEach(function(ev) {
   el.addEventListener(ev.toLowerCase(), function() {
     //the_events.push(event)
       // console.log('event:', ev)
       setTimeout(poll_event(event), 1000)
   })
})

// document.addEventListener('',setTimeout(poll_event, 5000))


var poll_event = function (event) {
 if (event != null){
   if (event != undefined){
     //console.log(event)
     the_events.push(event)
   }
 }

   // make Ajax call here, inside the callback call:
   setTimeout(poll_event, 1000);
   // ...
}
//Timestamp based polling

function sleep(miliseconds) {
  var currentTime = new Date().getTime();

  while (currentTime + miliseconds >= new Date().getTime()) {
  }
}


// Object.keys(Event.prototype).forEach(function(ev){console.log(ev)})
// VM480:1 NONE
// VM480:1 CAPTURING_PHASE
// VM480:1 AT_TARGET
// VM480:1 BUBBLING_PHASE
// VM480:1 MOUSEDOWN
// VM480:1 MOUSEUP
// VM480:1 MOUSEOVER
// VM480:1 MOUSEOUT
// VM480:1 MOUSEMOVE
// VM480:1 MOUSEDRAG
// VM480:1 CLICK
// VM480:1 DBLCLICK
// VM480:1 KEYDOWN
// VM480:1 KEYUP
// VM480:1 KEYPRESS
// VM480:1 DRAGDROP
// VM480:1 FOCUS
// VM480:1 BLUR
// VM480:1 SELECT
// VM480:1 CHANGE
// VM480:1 type
// VM480:1 target
// VM480:1 currentTarget
// VM480:1 eventPhase
// VM480:1 bubbles
// VM480:1 cancelable
// VM480:1 defaultPrevented
// VM480:1 timeStamp
// VM480:1 path
// VM480:1 srcElement
// VM480:1 returnValue
// VM480:1 cancelBubble
// VM480:1 stopPropagation
// VM480:1 stopImmediatePropagation
// VM480:1 preventDefault
// VM480:1 initEvent