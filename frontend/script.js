document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
      user: {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
      },
      address: {
        phone: document.getElementById('phone').value,
        streetAddress: document.getElementById('streetAddress').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        country: document.getElementById('country').value,
        postalCode: document.getElementById('postalCode').value,
      },
    };

    try {
      const response = await fetch('http://localhost:5000/api/createUserAndAddress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert('User registered successfully.');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  });