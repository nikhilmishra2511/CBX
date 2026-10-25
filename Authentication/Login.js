document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Store email locally
  localStorage.setItem("userEmail", email);

  const res = await fetch("login.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
  });

  const text = await res.text();
  const msg = document.getElementById("message");
  msg.innerHTML = text;

  if (text.includes("Login successful")) {
    window.location.href = "../main/main.html";
  }
});
