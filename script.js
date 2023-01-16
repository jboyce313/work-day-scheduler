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

  // display saved events in hour blocks
  for (var i = 9; i < 18; i++) {
    var hr = `hour-${i}`;
    if (localStorage.getItem(hr)) {
      var event = localStorage.getItem(hr);
      $(`#${hr}`).children("textarea").text(event);
    }
  }

  // save events in local storage
  saveBtn.on("click", function () {
    var hourBlock = $(this).parent();
    var hourID = hourBlock.attr("id");
    var event = hourBlock.children("textarea").val();
    localStorage.setItem(hourID, event);
  });
});
