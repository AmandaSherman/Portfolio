$(document).mousemove(function(e) {
   $("#light").css({
     left: e.pageX - 250,
     top: e.pageY - 250
   });
 });