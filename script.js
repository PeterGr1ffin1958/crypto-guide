document.getElementById('lead-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      document.getElementById('confirmation-message').style.display = 'block';
      this.reset();
    } else {
      alert('Ошибка при отправке формы. Попробуйте позже.');
    }
  } catch (error) {
    console.error('Ошибка:', error);
    alert('Ошибка при отправке формы.');
  }
});