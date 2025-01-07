// Function to calculate subtotal, tax, and total for all products
function calculateSubtotalAndTaxes() {
    // Define products
    const products = [
      {
        quantityElement: document.getElementById("quantity-1"),
        pricePerUnitElement: document.getElementById("price-per-unit-1"),
        subtotalElement: document.getElementById("subtotal-1")
      },
      {
        quantityElement: document.getElementById("quantity-2"),
        pricePerUnitElement: document.getElementById("price-per-unit-2"),
        subtotalElement: document.getElementById("subtotal-2")
      }
    ];
  
    let totalSubtotal = 0;
    let totalTax = 0;
  
    // Loop through products to calculate subtotals and update UI
    products.forEach(product => {
      const quantity = parseInt(product.quantityElement.value);
      const pricePerUnit = parseFloat(product.pricePerUnitElement.textContent.replace("₹", ""));
  
      const subtotal = quantity * pricePerUnit;
      const tax = subtotal * 0.18;
      const total = subtotal + tax;
  
      product.subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
  
      totalSubtotal += subtotal;
      totalTax += tax;
    });
  
    // Update the total subtotal, taxes, and final total
    document.getElementById("total-subtotal").textContent = `₹${totalSubtotal.toFixed(2)}`;
    document.getElementById("tax").textContent = `₹${totalTax.toFixed(2)}`;
    document.getElementById("total").textContent = `₹${(totalSubtotal + totalTax).toFixed(2)}`;
  }
  
  // Event listener for increase and decrease buttons (handles all products)
  document.querySelectorAll('.increase-quantity').forEach(button => {
    button.addEventListener('click', function () {
      const productId = this.dataset.product;
      const quantityElement = document.getElementById(`quantity-${productId}`);
      quantityElement.value = parseInt(quantityElement.value) + 1; // Increase quantity by 1
      calculateSubtotalAndTaxes(); // Recalculate totals
    });
  });
  
  document.querySelectorAll('.decrease-quantity').forEach(button => {
    button.addEventListener('click', function () {
      const productId = this.dataset.product;
      const quantityElement = document.getElementById(`quantity-${productId}`);
      if (parseInt(quantityElement.value) > 1) {
        quantityElement.value = parseInt(quantityElement.value) - 1; // Decrease quantity by 1
        calculateSubtotalAndTaxes(); // Recalculate totals
      }
    });
  });
  
  // Payment action (triggering the spinner and success/failure message)
  document.getElementById('pay-now').addEventListener('click', function () {
    const message = document.getElementById('payment-message');
    const spinner = document.getElementById('loading-spinner');
  
    // Show loading spinner and message
    message.textContent = "Payment in progress. Please do not close this window.";
    spinner.style.display = "block";
  
    // Simulate payment processing delay
    setTimeout(() => {
      spinner.style.display = "none"; // Hide spinner
  
      // Randomize success or failure
      const isSuccess = Math.random() > 0.5;
      message.textContent = isSuccess ? "Payment Success!" : "Payment Failed!";
      message.style.color = isSuccess ? "green" : "red";
    }, 10000); // 10 seconds delay
  });
  
  // Initial calculation on page load
  calculateSubtotalAndTaxes();
  //random motion of balls
  function randomPosition(dot) {
    // Generate random values for speed and timing (optional)
    const randomSpeed = Math.random() * 30 + 50; // Random speed between 10 and 20 seconds
    dot.style.animationDuration = `${randomSpeed}s`; // Apply the speed to the animation
  }
  
  // Get both dot images
  const dot1 = document.getElementById('dot1');
  const dot2 = document.getElementById('dot2');
  
  // Set initial random movement speed
  randomPosition(dot1);
  randomPosition(dot2);
  
  // Optionally, update speed every few seconds (if you want to vary the speed dynamically)
  setInterval(() => {
    randomPosition(dot1);
    randomPosition(dot2);
  }, 10000);  // Change every 10 seconds
  