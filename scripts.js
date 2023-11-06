'use strict';

document.addEventListener('DOMContentLoaded', function () 
{
    let submit = document.querySelectorAll(".btn")[1];
    submit.addEventListener('click', clickHandler);
});


function clickHandler(event) 
{
    event.preventDefault();

    // Get the value of the email input field
    var emailAddress = document.getElementById("email").value;

    // Select the message element
    var messageElement = document.getElementsByClassName("message")[0];

    if (emailAddress !== "") {
        messageElement.innerHTML = "Thank You! Your email address " + emailAddress + " has been added to our mailing list.";
    } else {
        messageElement.innerHTML = "Please enter a valid email address";
    }
}