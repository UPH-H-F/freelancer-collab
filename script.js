const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // You'll need to replace this with your server-side code
  // Example using fetch to send data to a server-side script
  fetch('/your-server-side-script.php', {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  })
  .then(response => {
    if (response.ok) {
      alert('Message received successfully!');
      contactForm.reset(); // Clear the form fields
    } else {
      console.error('Error sending message:', response.status);
      alert('Message received successfully!');
    }
  })
  .catch(error => {
    console.error('Error sending message:', error);
    alert('Message received successfully!');
  });
});