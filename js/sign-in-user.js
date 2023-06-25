// document.getElementById("loginBtn").addEventListener("click", login);

function signIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Make a POST request to your login endpoint with the user data
    fetch("https://dimasardnt6-ulbi.herokuapp.com/sign-in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message)
        if (data.status === 200) {
            // Signin success
            // Display signin success message using SweetAlert
            Swal.fire({
                icon: "success",
                title: "Sign In Successful",
                text: "You have successfully signed in!"
            }).then(() => {
                // Reload window
                window.location.href = "../pages/dashboard.html";
            });
        } else {
            // Display signin error message using SweetAlert
            Swal.fire({
                icon: "error",
                title: data.message,
                text: data.error
            });
        }
    })
    .catch(error => {
        console.log("Error:", error);
        // Display error message using SweetAlert
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred while signing up. Please try again later."
        });
    });
}
