//Figure out today's date, and put it at the top of the page.

$(document).ready(function () {
  function displayTime() {
    var rightNow = dayjs().format("DD MMM YYYY [at] hh:mm:ss a");
    $("#currentDay").text(rightNow);
  }
  displayTime();

  //we want to create an event listener for all of the  save buttons
  // when someone clicks on the button
  $(".saveButton").on("click", function () {
    // we want to take the value of the textarea (using .siblings('.class-name-here').val())
    let userValue = $(this).siblings(".description").val();
    let userTime = $(this).parent().attr("id");

    localStorage.setItem(userTime, userValue);
  });
  // then we want to save that value to localStorage (localStorage.setItem('name', value))

  // this is how we can use siblings
  // $("li.start").siblings().css({ color: "red", border: "2px solid red" });

  // when someone loads the page
  // if there is data in localStorage
  // ex: localStorage.getItem('9AM')
  $("#desc-9").val(localStorage.getItem("hour-9"));
  $("#desc-9").val(localStorage.getItem("hour-10"));
  $("#desc-9").val(localStorage.getItem("hour-11"));
  $("#desc-9").val(localStorage.getItem("hour-12"));
  $("#desc-9").val(localStorage.getItem("hour-13"));
  $("#desc-9").val(localStorage.getItem("hour-14"));
  $("#desc-9").val(localStorage.getItem("hour-15"));
  $("#desc-9").val(localStorage.getItem("hour-16"));
  $("#desc-9").val(localStorage.getItem("hour-17"));
  // we can display that data to the page
});
//Figure out how to make a block ofr every hour from 9am to 5pm inclusive.

//Each block should allow for text entry (perhaps the block in an input element/textarea)

//Each block should include an hour label

//Each block should include a save button

//
