$(document).ready(function () {

    var today = moment().format('dddd, MMMM Do');
    $("#currentDay").append(today);

    var hours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

var milHours = [0900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700];

    var timestamp = moment().format('H');

    for (var i = 0; i < milHours.length; i++) {

        var table = $("#table");
        var row = $("<tr>", { 'class': 'row' });
        var time = $("<td>", { 'class': 'timeCel' }).html(hours[i]);
        var textbox = $("<textarea>").html("");
        var save = $("<button>", { 'class': 'saveBtn' }).html("save");

        row.append(time, textbox, save);
        table.append(row);

        $(time).attr('id', milHours[i]);
        $(textbox).attr('id', "textB" + i);
        $(save).attr('id', milHours[i]);

        if (milHours[i] == timestamp) {
        $(textbox).addClass("present");
        }
        
        if (milHours[i] < timestamp) {
            $(textbox).addClass("future");
        }
        
        if (milHours[i] > timestamp) {
            $(textbox).addClass("past");
        }

        saveRows();
    };

    $('.saveBtn').click(function () {
        console.log(this.id);
        var inputtext = document.getElementById("textB0");
        localStorage.setItem("value0", inputtext.value);
        var data = localStorage.getItem("value0");
        console.log(data);
    });

    $('.saveBtn').click(function () {
        console.log(this.id);
        var inputtext = document.getElementById("textB1");
        localStorage.setItem("value1", inputtext.value);
        var data = localStorage.getItem("value1");
        console.log(data);
    });

    $('.saveBtn').click(function () {
        console.log(this.id);
        var inputtext = document.getElementById("textB2");
        localStorage.setItem("value2", inputtext.value);
        var data = localStorage.getItem("value2");
        console.log(data);

    });

    $('.saveBtn').click(function () {
        console.log(this.id);
        var inputtext = document.getElementById("textB3");
        localStorage.setItem("value3", inputtext.value);
        var data = localStorage.getItem("value3");
        console.log(data);

    });

    $('.saveBtn').click(function () {
        console.log(this.id);
        var inputtext = document.getElementById("textB4");
        localStorage.setItem("value4", inputtext.value);
        var data = localStorage.getItem("value4");
        console.log(data);

    });

    $('.saveBtn').click(function () {
        console.log(this.id);
        var inputtext = document.getElementById("textB5");
        localStorage.setItem("value5", inputtext.value);
        var data = localStorage.getItem("value5");
        console.log(data);

    });

    $('.saveBtn').click(function () {
        console.log(this.id);
        var inputtext = document.getElementById("textB6");
        localStorage.setItem("value6", inputtext.value);
        var data = localStorage.getItem("value6");
        console.log(data);

    });

    $('.saveBtn').click(function () {
        console.log(this.id);
        var inputtext = document.getElementById("textB7");
        localStorage.setItem("value7", inputtext.value);
        var data = localStorage.getItem("value7");
        console.log(data);

    });

    $('.saveBtn').click(function () {
        console.log(this.id);
        var inputtext = document.getElementById("textB8");
        localStorage.setItem("value8", inputtext.value);
        var data = localStorage.getItem("value8");
        console.log(data);

    });

    function saveRows() {
        var dataAddedback = localStorage.getItem("value" + i);
        $(textbox).text(dataAddedback);
    };
    var datatest = localStorage.getItem("value" + i);
    $(textbox).text(datatest);

});
