
function time(hours) {
    var time = hours >= 12 ? "PM" : "AM";
    time = time % 12;
    time = time ? time : 12;
    return hours + time;
}
time();


$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    for (let i = 9; i < 18; i++) {


        var row = $('<div data-time=${i} id="${i}" class="row">');


        var columnOne = $('<div class="col-sm-2"> <p class="hour"> + time(i) + "<p>');
        row.append(columnOne);

        var columnTwo = $('<div class="col-sm-8 past"><textarea id=text${i} class="event" placeholder="Schedule your event..."></textarea>');
        row.append(columnTwo);

        var columnThree = $('<div class="col-sm-2"><button class="saveBtn" id=${i}>SAVE</button>')
        row.append(columnThree);

        $(".container").append(row);

        localStorage(i);
    }

