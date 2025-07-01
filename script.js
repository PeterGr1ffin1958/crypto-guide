document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("lead-form");
  const statusMessage = document.getElementById("form-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        statusMessage.textContent = "Form submitted successfully!";
        statusMessage.style.color = "#00ff99";
        form.reset();
      } else {
        statusMessage.textContent = "There was an error. Please try again.";
        statusMessage.style.color = "red";
      }
    } catch (error) {
      statusMessage.textContent = "Submission failed. Please try again later.";
      statusMessage.style.color = "red";
    }
  });
});