function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  if (username === "admin" && password === "1234") {
    alert("Login Successful ✅");
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Invalid Username or Password ❌";
  }
}