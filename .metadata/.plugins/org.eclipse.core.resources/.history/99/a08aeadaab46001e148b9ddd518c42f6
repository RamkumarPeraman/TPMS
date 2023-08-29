          // offcanvas 

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