$(document).ready(function () {

    var today = moment().format('dddd, MMMM Do');
    $("#day").html(today);

    var hours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

    for (var i = 0; i < hours.length; i++) {
        
        var timestamp = moment().format('h a');
        var table = $("#table");
        var row = $("<tr>", { 'class': 'row' });
        var time = $("<td>", { 'class': 'time-cel' }).html(hours[i]);
        var textbox = $("<textarea>").html("");
        var save = $("<button>", { 'class': 'saveBtn' }).html("save");
        save.attr("save-hour", hours[i]);
        row.append(time, textbox, save);
        table.append(row);
        $(textbox).attr('id', hours[i]);

    };


});
