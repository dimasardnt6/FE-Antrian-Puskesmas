function signIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://dimasardnt6-ulbi.herokuapp.com/sign-in", true);
    xhr.setRequestHeader("Content-Type", "application/json");
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          var token = response.token;
          Swal.fire({
            icon: "success",
            title: "Signed in successfully",
            text: "Token: " + token
          }).then(function() {
            localStorage.setItem('token', token); // Simpan token di local storage
            var redirectUrl;
            if (email.includes("admin")) {
                redirectUrl = "pages/dashboard.html";
            } else {
                redirectUrl = "auth/antrian.html";
            }
            window.location.href = redirectUrl;
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Sign-in failed",
            text: xhr.responseText
          });
        }
      }
    };
  
    var data = JSON.stringify({ email: email, password: password });
    xhr.send(data);
  }
   
  

// document.getElementById("loginBtn").addEventListener("click", login);

// function signIn() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     // Make a POST request to your login endpoint with the user data
//     fetch("https://dimasardnt6-ulbi.herokuapp.com/sign-in", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             email: email,
//             password: password
//         })
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.message)
//         if (data.status === 200) {
//             // Signin success
//             // Display signin success message using SweetAlert
//             Swal.fire({
//                 icon: "success",
//                 title: "Sign In Successful",
//                 text: "You have successfully signed in!"
//             }).then(() => {
//                 // Reload window
//                 window.location.href = "antrian.html";
//             });
//         } else {
//             // Display signin error message using SweetAlert
//             Swal.fire({
//                 icon: "error",
//                 title: data.message,
//                 text: data.error
//             });
//         }
//     })
//     .catch(error => {
//         console.log("Error:", error);
//         // Display error message using SweetAlert
//         Swal.fire({
//             icon: "error",
//             title: "Error",
//             text: "An error occurred while signing up. Please try again later."
//         });
//     });
// }
