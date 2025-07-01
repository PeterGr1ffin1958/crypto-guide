document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      exchange: formData.get("exchange"),
      portfolio: formData.get("portfolio"),
      interest: formData.get("interest"),
    };

    try {
      const response = await fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        form.reset(); // очистить поля формы после отправки
      } else {
        alert("An error occurred. Please try again.");
      }
    } catch (error) {
      alert("Failed to submit the form. Please try again later.");
      console.error("Form submission error:", error);
    }
  });
});