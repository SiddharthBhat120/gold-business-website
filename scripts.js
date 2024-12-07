// Gold Price Calculator Function
const goldPricePerGram = 7617; // Current market rate per gram in INR

function calculatePrice() {
  const weight = document.getElementById('weight').value;
  const priceResult = document.getElementById('priceResult');

  if (weight && weight > 0) {
    const totalPrice = weight * goldPricePerGram;
    priceResult.textContent = `Total Price: ₹${totalPrice.toFixed(2)}`;
  } else {
    priceResult.textContent = "Please enter a valid weight!";
  }
}
