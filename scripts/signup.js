/* Form input
*/

// This function will validate name and show error incase name is empty, also it disables create account button until it's validated
//const createUser = require("../service/createUser");

function validateName() {
    $("#create-account").attr('disabled', true);
    if ($("#user-name").val() == "") {
        $("#name-check").show();
        return false;
    }
    else {
        $("#name-check").hide();
        return true
    }
}
// This function will validate email with regex and show error incase email is empty or invalid, also it disables create account button until it's validated
function validateEmail() {
    $("#create-account").attr('disabled', true);
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let email = $("#email").val();
    if (email == "") {
        $("#email-check").show();
        return false;
    }
    else if (!regex.test(email)) {
        $("#email-check").show();
        return false;
    }
    else {
        $("#email-check").hide();
        return true;
    }
}
// This function will validate the length of password and show error incase password is empty, also it disables create account button until it's validated
function validatePassword() {
    $("#create-account").attr('disabled', true);
    if ($("#input-password").val() == "") {
        $("#password-check").show();
        return false;
    }
    else {
        $("#password-check").hide();
        return true;
    }
}

// This function will check if both passwords are equal and show error if password is empty, also it disables create account button until it's validated
function validateConfirmPassword() {
    $("#create-account").attr('disabled', true);
    const password = $("#input-password").val();
    const confirmPassword = $("#input-confirm-password").val();

    if (confirmPassword == "") {
        $("#password-confirm-check").show();
        return false;
    }
    else if (password != confirmPassword) {
        $("#password-confirm-check").show();
        return false;
    }
    else {
        $("#password-confirm-check").hide();
        $("#create-account").attr('disabled', false); // Enable the create account button 
        return true;
    }
}

// Handle the click event as and store the details in json file
function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    let user = {};
    // Form Data API returns an iterable with each having an list with 2 elements in it, first is name of the element and other the value
    for (const element of data) {
        user[element[0]] = element[1];
    }
    console.log(user);
    $.post("http://localhost:8080/signup",
        user,
        function (response, status) {
            if (response.accountAlreadyExist) {
                console.log("account already exist");
                window.location = "account.html"
            } else if (response.accountCreated) {
                window.location = "account.html";
                console.log("Account has been created");
            } else {
                console.log("Some issue with server");
            }
        });
}

// We will validate the whole form before submitting
function validateForm() {
    if (validateName() && validateEmail() && validatePassword() && validateConfirmPassword()) { // If all are validated then we are good to go for creating an account
        return true;
    }
    else {
        return false; // Else requires more validation
    }
}
$(document).ready(function () {

    $("#name-check").hide(); // This will first be hidden

    $("#user-name").keyup(function () {
        validateName()
    });

    $("#email-check").hide(); // This will first be hidden

    $("#email").keyup(function () {
        validateEmail()
    });


    $("#password-check").hide(); // This will first be hidden
    $("#input-password").keyup(function () {
        if ($(this).val().length > 8) {
            $('#confirm-password').css("display", "block");
        } else {
            $("#password-check").show();
        }
        validatePassword()
    });

    $("#password-confirm-check").hide(); // This will first be hidden

    $("#input-confirm-password").keyup(function () {
        validateConfirmPassword()
    });

    $("#create-account").click(    // create account is a button,
        function (event) {
            // data validation code
            let isValid = validateForm();
            if (isValid) {
                // Add an event listener when submit is clicked
                const form = document.querySelector('form');
                form.addEventListener('submit', handleSubmit);
            } else {
                $("#create-account").attr('disabled', true);
            }
        } // end function
    ); // end click

});



