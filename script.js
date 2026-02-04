document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const matric = document.getElementById('matric').value.trim();
      if (matric) {
        localStorage.setItem('matric', matric);
        window.location.href = "home.html";
      } else {
        alert("Please enter your matric number!");
      }
    });
  }
});
