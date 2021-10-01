var time = moment().format("hh:mm:ss");
$("#time").text(time);

var today = moment();
$("#day").text(today.format("MMM Do, YYYY"));

var sheduleFormEl = $("#shedule-form");
var toDoListEl = $("#to-do-list");
var saveEl = $("#icon")

// create function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  // select form element by its `name` attribute and get its value
  var activity = $('input[name="list-input"]').val();

  // if there's nothing in the form entered, don't print to the page
  if (!activity) {
    console.log('No things to do at this moment!');
    return;
  };

  // print to the page
  toDoListEl.append('<li>' + activity + '</li>');
  

  // clear the form input element
  $('input[name="list-input"]').val('');

  
      localStorage.setItem('activity', JSON.stringify(avtivity));
      localStorage.getItem("activity")
  };
  
  


// Create a submit event listener on the form element
saveEl.on('click', handleFormSubmit);