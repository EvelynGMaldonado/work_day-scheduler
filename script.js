var time = moment().format("hh:mm:ss");
$("#time").text(time);

var today = moment();
$("#day").text(today.format("MMM Do, YYYY"));

var sheduleFormEl = $("#shedule-form");
var toDoListEl = $("#to-do-list");
var saveEl = $("#icon")
var timeBlock = $(".time-block")

// create function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  console.log($(this).prev().val());
  // select form element by its `name` attribute and get its value
  var activity = $(this).prev().val();
  var id = + $(this).prev().attr("id")
  // if there's nothing in the form entered, don't print to the page
  if (!activity) {
    console.log('No things to do at this moment!');
    return;
  };

      localStorage.setItem(id, JSON.stringify(activity));
     // localStorage.getItem("activity")
};
  
  


// Create a submit event listener on the form element
timeBlock.on('click', ".saveBtn", handleFormSubmit);