document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Create Account Successful");

  this.reset();
});
