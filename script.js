function login() {
  let matric = document.getElementById("matric").value;

  if (matric === "") {
    document.getElementById("error").innerText =
      "Please enter your matriculation number";
    return;
  }

  localStorage.setItem("matricNumber", matric);
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("matricNumber");
  window.location.href = "login.html";
}

// Run only AFTER page loads
window.onload = function () {
  let matric = localStorage.getItem("matricNumber");
  let studentSpan = document.getElementById("student");

  if (studentSpan && matric) {
    studentSpan.innerText = matric;
  }
};