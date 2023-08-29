          // offcanvas  login

document.addEventListener("DOMContentLoaded", function() {
  const hodLink = document.getElementById("openHOD");
  const hodOffcanvas = new bootstrap.Offcanvas(document.getElementById("hodOffcanvas"));

  hodLink.addEventListener("click", function(event) {
      event.preventDefault();
      hodOffcanvas.show();
  });

  const staffLink = document.getElementById("openStaff");
  const staffOffcanvas = new bootstrap.Offcanvas(document.getElementById("staffOffcanvas"));

  staffLink.addEventListener("click", function(event) {
      event.preventDefault();
      staffOffcanvas.show();
  });
});


// signup 
document.addEventListener("DOMContentLoaded", function() {
  const signupLink = document.getElementById("openSignup");
  const signupOffcanvas = new bootstrap.Offcanvas(document.getElementById("signupOffcanvas"));

  signupLink.addEventListener("click", function(event) {
      event.preventDefault();
      signupOffcanvas.show();
  });

  function validateSignupForm() {
      // You can add your form validation logic here
      return true; // Return true if validation is successful
  }
});



  //  validation for password 
  function validateSignupForm() {
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    if (password !== cpassword) {
      document.getElementById("signupPasswordError").textContent = "Passwords do not match.";
      return false; 
    }
  
    document.getElementById("signupPasswordError").textContent = "";
    return true;
  }


           // login page 


function validateForm() {
  const idOrEmail = document.getElementById("idOrEmail").value;
  const password = document.getElementById("password").value;
  const passwordError = document.getElementById("passwordError");
  
  if (idOrEmail.includes("@")) {
    // Validate email
    if (!isValidEmail(idOrEmail)) {
      passwordError.textContent = "";
      alert("Invalid email format.");
      return false;
    }
  }
  
  if (password.length < 7) {
    passwordError.textContent = "Password must be at least 7 characters long.";
    return false;
  }
  
  passwordError.textContent = "";
  return true;
}

function isValidEmail(email) {
  // Very basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}