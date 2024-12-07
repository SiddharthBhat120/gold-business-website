// Gold Price Calculator Function in INR
const goldPricePerGram = 5000; // Example market rate in INR per gram

function calculatePrice() {
  const weight = document.getElementById('weight').value;
  const priceResult = document.getElementById('priceResult');

  if (weight && weight > 0) {
    const totalPrice = weight * goldPricePerGram;
    priceResult.textContent = `Total Price: ₹${totalPrice.toFixed(2)} INR`;
  } else {
    priceResult.textContent = "Please enter a valid weight!";
  }
}

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const formResponse = document.getElementById('formResponse');

  if (name && email && message) {
    formResponse.textContent = "Thank you for contacting us! We'll get back to you soon.";
    formResponse.style.color = 'green';
  } else {
    formResponse.textContent = "Please fill in all fields.";
    formResponse.style.color = 'red';
  }
});
