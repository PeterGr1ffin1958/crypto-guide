document.getElementById("guideForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    exchange: document.getElementById("exchange").value,
    portfolio: document.getElementById("portfolio").value,
    interest: document.getElementById("interest").value,
  };

  const res = await fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const msg = await res.text();
  document.getElementById("message").textContent = msg;
});