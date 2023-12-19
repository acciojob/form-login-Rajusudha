// script.js

function getFormValues() {
  // Get the values of the First and Last name
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;

  // Display the values using alert
  alert('First Name: ' + firstName + '\nLast Name: ' + lastName);
}


// Add an event listener to the form to call getFormvalue() on form submission
document.getElementById("myForm").addEventListener("submit", getFormvalue);
