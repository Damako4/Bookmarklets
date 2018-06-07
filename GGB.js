//Makes it so teachers cannot close your tabs. (Requires a prompt to close your tab)

javascript:window.onbeforeunload = function() { return "Do your want to close"; }; alert("Tab Secured");
