// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var today = dayjs();
  var currentHour = today.$H;
  var saveBtn = $(".saveBtn");
  var container = $(".container-fluid");
  var currentDay = $("#currentDay");

  // set current day display text
  currentDay.text(today.$d);

  // apply past, present, or future classes to time blocks
  container.children().each(function () {
    var hourString = this.id.match(/\d+/);
    var hour = parseInt(hourString);
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtn.on("click", function () {
    var hourBlock = $(this).parent();
    var hourID = hourBlock.attr("id");
    var event = hourBlock.children("textarea").val();
    localStorage.setItem(hourID, event);
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
