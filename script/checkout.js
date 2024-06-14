// Selectors
const checkoutContainer = document.querySelector('[checkoutContainer]');
const checkoutCounter = document.querySelector('[counter]');

// Retrieve checkout items from local storage
let checkoutItems = JSON.parse(localStorage.getItem('checkout')) || [];

// Function to display checkout items
function displayCheckoutItems() {
    checkoutContainer.innerHTML = ""; // Clear existing content

    try {
        checkoutItems.forEach(item => {
            checkoutContainer.innerHTML += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h5 class="card-title">${item.productName}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text">Amount: R${item.amount}</p>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        checkoutContainer.textContent = "Failed to load checkout items. Please try again later.";
    }
}

// Function to calculate total amount in cart
function calculateTotalAmount() {
    let total = 0;
    checkoutItems.forEach(item => {
        total += item.amount;
    });
    return total.toFixed(2); // Ensure total amount is formatted to 2 decimal places
}

// Function to initialize checkout page
function initializeCheckoutPage() {
    displayCheckoutItems();
    updateCartCounter();
}

// Function to update cart counter
function updateCartCounter() {
    const cartCount = checkoutItems.length || 0;
    checkoutCounter.textContent = cartCount;
}

// Call initializeCheckoutPage function when window loads
window.onload = initializeCheckoutPage;
