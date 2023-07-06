// // Check if the user is already logged in
// if (localStorage.getItem("token") !== null) {
//     // Display SweetAlert message with button
//     Swal.fire({
//       icon: "warning",
//       title: "Already Logged In",
//       text: "You are already logged in. Please logout first.",
//       showConfirmButton: true,
//       confirmButtonText: "OK"
//     }).then(() => {
//       // Redirect to index.html
//       window.location.href = "index.html";
//     });
//   }
  
  // Event listener for form submission
  document.getElementById("loginBtn").addEventListener("click", signIn);
  
  // Function to handle sign-in
  function signIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Make a POST request to the sign-in endpoint
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
        if (data.status === 200) {
          // Signin success
          // Save the token in local storage
          localStorage.setItem("token", data.token);
  
          // Display success message using SweetAlert
          Swal.fire({
            icon: "success",
            title: "Sign In Successful",
            text: "You have successfully signed in.",
            showConfirmButton: false,
            timer: 2000
          }).then(() => {
            // Check if email contains "admin"
            if (email.includes("admin")) {
              // Redirect to index.html
              window.location.href = "index.html";
            } else {
              // Redirect to antrian.html
              window.location.href = "auth/antrian.html";
            }
          });
        } else {
          // Display signin error message using SweetAlert
          Swal.fire({
            icon: "error",
            title: "Sign In Failed",
            text: data.message
          });
        }
      })
      .catch(error => {
        console.log("Error:", error);
        // Display error message using SweetAlert
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while signing in. Please try again later."
        });
      });
  }
  
console.log("abc");