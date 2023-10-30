function getFormvalue() {
    // Get the form element by its ID
    var form = document.getElementById("myForm");

    // Access the input fields by their name attribute
    var firstName = form.elements["firstName"].value;
    var lastName = form.elements["lastName"].value;

    // Display the first and last name using alert()
    alert("First Name: " + firstName + "\nLast Name: " + lastName);

    // Prevent the form from submitting and refreshing the page
    return false;
}

// Add an event listener to the form to call getFormvalue() on form submission
document.getElementById("myForm").addEventListener("submit", getFormvalue);
