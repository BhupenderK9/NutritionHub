
// This function will validate email with regex and show error incase email is empty or invalid, also it disables create account button until it's validated
function validateEmail() {
    $("#login").attr('disabled', true);
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
    $("#login").attr('disabled', true);
    if ($("#input-password").val() == "") {
        $("#password-check").show();
        return false;
    }
    else {
        $("#password-check").hide();
        $("#login").attr('disabled', false);
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
    $.post("http://localhost:8080/login",
        user,
        function (response, status) {
            if (response.authenticated) {
                window.location = "index.html";
            } else {
                console.log("Incorrect user name or password");
            }
        });
}

$(document).ready(function () {

    $("#email-check").hide(); // This will first be hidden
    $("#password-check").hide()
    $("#email").keyup(function () {
        validateEmail()
    });
    $("#input-password").keyup(function () {
        validatePassword()
    });
    $("#login").click(    // create account is a button,
        function () {
            // data validation code
            let isValid = validateEmail() && validatePassword();
            if (isValid) {
                // Add an event listener when submit is clicked
                const form = document.querySelector('form');
                form.addEventListener('submit', handleSubmit);
            } else {
                $("#login").attr('disabled', true);
            }
        } // end function
    ); // end click

});



