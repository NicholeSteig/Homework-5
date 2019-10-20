$(document).ready(function () {

    var today = moment().format('dddd, MMMM Do');
    $("#currentDay").append(today);

    var hours = ["9 am", "10 am", "11 am", "12 am", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

    for (var i = 0; i < hours.length; i++) {

        var timestamp = moment().format('h a');
        console.log(timestamp)
        var table = $("#table");
        var row = $("<tr>", { 'class': 'row' });
        var time = $("<td>", { 'class': 'time-cel' }).html(hours[i]);
        var textbox = $("<textarea>").html("");
        var save = $("<button>", { 'class': 'saveBtn' }).html("save");

        row.append(time, textbox, save);
        table.append(row);

        $(time).attr('id', hours[i]);
        $(textbox).attr('id', "textHour" + hours[i]);
        $(save).attr('id', hours[i]);

        //if (hour[i] == timestamp) {
        //    $(textbox).addClass("present");
        //}
        //Future Time Color Change
        //if (hour[i] < timestamp) {
        //    $(textbox).addClass("future");
        //}
        //Past Time Color Change
        //if (hour[i] > timestamp) {
        //    $(textbox).addClass("past");
        //}
    };

    $('.saveBtn').click(function () {
        console.log(this.id);
        var inputtext = document.getElementById("textHour9:00");
        localStorage.setItem("value0", inputtext.value);
        var data = localStorage.getItem("value0");
        console.log(data);

    });

    var datatest = localStorage.getItem("value" + i);
    $(textbox).text(datatest);

});
