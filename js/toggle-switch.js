/* global  , document */
var checked = function () {
    var n = document.getElementById("switch").checked;
    if (n === true)
        document.body.style.background = "#ededec";
    else
        document.body.style.background = "#222";
};

checked();

$("input[type=checkbox]").on("click", checked);
