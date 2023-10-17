$(document).ready(function () {
    $('#myForm').submit(function (e) {
        // Prevent the form from submitting by default
        e.preventDefault();

        // Validation for username
        var username = $('#username').val();
        if (username.length < 5) {
            $('#usernameError').text('Username must be at least 5 characters').show();
            return;
        } else {
            $('#usernameError').hide();
        }

        // Validation for password
        var password = $('#password').val();
        if (password.length < 5) {
            $('#passwordError').text('Password must be at least 5 characters').show();
            return;
        } else {
            $('#passwordError').hide();
        }

        // Validation for re-entered password
        var repassword = $('#repassword').val();
        if (password !== repassword) {
            $('#repasswordError').text('Passwords do not match').show();
            return;
        } else {
            $('#repasswordError').hide();
        }

        // Validation for email
        var email = $('#email').val();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email.match(emailPattern)) {
            $('#emailError').text('Invalid email address').show();
            return;
        } else {
            $('#emailError').hide();
        }

        // Validation for phone number
        var phone = $('#phone').val();
        var phonePattern = /^\d{10}$/; // Change this to match your phone number format
        if (!phone.match(phonePattern)) {
            $('#phoneError').text('Invalid phone number').show();
            return;
        } else {
            $('#phoneError').hide();
        }

        // If all validations pass, you can submit the form
        alert('Form submitted successfully');
    });
});