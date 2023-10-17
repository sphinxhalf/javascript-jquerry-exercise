$(document).ready(function () {
    $('#myForm').submit(function (e) {
        // Prevent the form from submitting by default
        e.preventDefault();

        // Remove any existing error messages
        $('.error').text('').hide();

        // Create an array to store validation errors
        var errors = [];

        // Validation for username
        var username = $('#username').val();
        if (username.length < 5) {
            $('#usernameError').text('Username must be at least 5 characters').show();
            errors.push('Username must be at least 5 characters');
        }

        // Validation for password
        var password = $('#password').val();
        if (password.length < 5) {
            $('#passwordError').text('Password must be at least 5 characters').show();
            errors.push('Password must be at least 5 characters');
        }

        // Validation for re-entered password
        var repassword = $('#repassword').val();
        if (password !== repassword) {
            $('#repasswordError').text('Passwords do not match').show();
            errors.push('Passwords do not match');
        }

        // Validation for email
        var email = $('#email').val();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email.match(emailPattern)) {
            $('#emailError').text('Invalid email address').show();
            errors.push('Invalid email address');
        }

        // Validation for phone number
        var phone = $('#phone').val();
        var phonePattern = /^\d{10}$/; // Change this to match your phone number format
        if (!phone.match(phonePattern)) {
            $('#phoneError').text('Invalid phone number').show();
            errors.push('Invalid phone number');
        }

        // Check if there are any validation errors
        if (errors.length === 0) {
            // If no errors, submit the form
            alert('Form submitted successfully');
        }
    });
});
