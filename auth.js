function signupUser(e) {
  e.preventDefault();
  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;
  localStorage.setItem("user", JSON.stringify({ username, password }));
  alert("Signup successful! Please log in.");
  window.location.href = "login.html";
}

function loginUser(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const stored = JSON.parse(localStorage.getItem("user"));
  if (stored && stored.username === username && stored.password === password) {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials");
  }
}