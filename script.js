document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("lead-form");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      exchange: form.exchange.value,
      portfolio: form.portfolio.value,
      interest: form.interest.value,
    };

    try {
      const response = await fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.status === "success") {
        message.textContent = "✅ Форма успешно отправлена!";
        message.style.color = "limegreen";
        form.reset();
      } else {
        message.textContent = "❌ Ошибка при отправке формы.";
        message.style.color = "red";
      }
    } catch (error) {
      console.error("Ошибка:", error);
      message.textContent = "❌ Ошибка при отправке формы.";
      message.style.color = "red";
    }
  });
});