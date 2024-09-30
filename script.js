// verify script is connected 
console.log("Javaconnected");

//  Check and ensure password and verify password match
        // get form element
        const form = document.getElementById("tuEatsForm");

        // Add event listener for submit event
        form.addEventListener("submit", function(event) {
            // Get values of the password fields 
            const password = document.getElementById("password").value;
            const verifyPassword = document.getElementById("verify-password").value;

            // Check if they match 
            if (password !== verifyPassword) {
                // If they don't match, do not submit
                event.preventDefault();
                alert("Please ensure passwords match");
            }

            const username = document.getElementById("username").value; //Get value of username entered 
            // Ensure username is 6 to 24 characters long
            let length = username.length; // Store username size in length
            if (length < 6) {
                event.preventDefault();
                alert("Username must be at least 6 characters long")
            } else if (length > 24) {
                event.preventDefault();
                alert("Username must be less than 24 characters long")
            }


        });

// Check referral code in real time and respond accordingly

    // Get references to referral code, submit button and invalid code message
    const referralCode = document.getElementById("referral-code");
    const submit = document.getElementById("submit")
    const invalidCodeMessage = document.getElementById("invalid-code-message");
    
    // Check to make sure referral code input does exist
    if (referralCode) {
        // add event listener for referral code
        referralCode.addEventListener('input', function() {
            let code = referralCode.value; // Get value of referral code input
            code = code.toLowerCase(); // Convert referral code to lowercase to handle case senstivity 

            // Only check if user types something
            if (code.length > 0) {
                checkCode(code);
            } else {
                // Clear invalid code message if code empty and enable submit
                invalidCodeMessage.textContent = '';
                submit.disabled = false;
            }
        });
    } else {
        console.log('Referral code input not found')
    }

    // Method to check if code is valid
    function checkCode(code) {
        const invalidCodes = [ "tucis", "bogo", "eatgood" ]; // List of invalid codes

        // If code is invalid, display message and disable button
        if (invalidCodes.includes(code)) {
            invalidCodeMessage.textContent = 'This referral code is invalid';
            invalidCodeMessage.style.color = 'red';
            submit.disabled = true; // Disable submit button
        } else {
            // If code valid enable submit button   
            submit.disabled = false;
        }

        // Delete invalid message when another character is added and deleted and referral code is no longer invalid
        if (!invalidCodes.includes(code)){
            invalidCodeMessage.textContent = '';
        }
    }
