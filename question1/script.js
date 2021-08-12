$(document).ready(function () {
    $("#incBtn").click(function () {
        var txt = $("#inputTxt").val();
        if (txt) {
            var listsize = $("#listAdd").children().length+1;
            if (listsize % 3 == 0) {
                $("#listAdd").append("<li class='red'>" + txt + "</li>");
            } else {
                $("#listAdd").append("<li>" + txt + "</li>");
            }
        }
    });
});