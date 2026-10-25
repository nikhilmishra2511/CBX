document.getElementById("signupForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Save the entered email locally
  localStorage.setItem("userEmail", email);

  const res = await fetch("signup.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
  });

  const text = await res.text();
  document.getElementById("message").textContent = text;

  if (text.includes("Signup successful")) {
    setTimeout(() => {
      window.location.href = "../main/main.html";
    }, 1500);
  } else if (text.includes("already exists")) {
    document.getElementById("message").innerHTML += `<br><a href='login.html' style='color: #00ffc8; text-decoration: underline;'>Go to Login</a>`;
  }
});
