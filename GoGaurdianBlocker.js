//Makes it so teachers cannot close your tabs. (Requires a prompt to close your tab)

javascript:window.onbeforeunload = function() { return "Do your want to close"; }; alert("Tab Secured");
if window = true, then alert("Tab Secure");

Else, if window = false 
  then alert("Closing Tab");
