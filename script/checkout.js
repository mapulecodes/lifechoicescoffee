const checkoutContainer = document.querySelector('[checkoutContainer]');
const checkoutCounter = document.querySelector('[counter]');

//local storage
let checkoutItems = [];

let storeditems = localStorage.getItem("checkout")
if(storeditems){
    checkoutItems = JSON.parse(storeditems)
}

function displayCheckoutItems(items) {
    checkoutContainer.innerHTML = ""; 

    try {
        items.forEach(item => {
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

displayCheckoutItems(storeditems)

// calculate total amount in cart/checkout
function calculateTotalAmount() {
    let total = 0;
    checkoutItems.forEach(item => {
        total += item.amount;
    });
    return total.toFixed(2);
}

function initializeCheckoutPage() {
    displayCheckoutItems();
    updateCartCounter();
}

// updates cart counter
function updateCartCounter() {
    const cartCount = checkoutItems.length || 0;
    checkoutCounter.textContent = cartCount;
}

// this will initialize checkout page
window.onload = initializeCheckoutPage;
