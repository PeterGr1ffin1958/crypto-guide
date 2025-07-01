document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("leadForm");
  const statusMessage = document.createElement("p");
  statusMessage.style.color = "#00ff99";
  statusMessage.style.marginTop = "1rem";
  form.appendChild(statusMessage);

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
        form.reset();
      } else {
        statusMessage.textContent = "There was an error. Please try again.";
        statusMessage.style.color = "red";
      }
    } catch (error) {
      statusMessage.textContent = "Submission failed. Please try later.";
      statusMessage.style.color = "red";
    }
  });
});