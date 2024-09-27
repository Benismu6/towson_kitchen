console.log("Javaconnected");

// Method to verify passwords match
function passwordMatch() {
    
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
            alert("Ensure passwords match");
        }

    });


}

function verifyReferral() {
    // Get referral code input
    const codeInput = document.getByElementId("referral-code");

    codeInput.addEventListener("input", function()
        const
    );

}

passwordMatch();