function getStoredProducts() {
    let storedProductsJSON = localStorage.getItem("products");
    return JSON.parse(storedProductsJSON) || [];  // Return empty array if no products found
}


function displayProducts() {
    let productsContainer = document.getElementById("products-container");

 
    productsContainer.innerHTML = "";

    let storedProducts = getStoredProducts();

    try {
        storedProducts.forEach(product => {
            let productHTML = generateProductHTML(product);
            productsContainer.innerHTML += productHTML;
        });
    } catch (error) {
        productsContainer.textContent = "Failed to load products. Please try again later.";
        console.error("Error displaying products:", error);
    }
}

function generateProductHTML(product) {
    let amountInRands = product.amount * 18; 

    return `
        <div class="col-md-4 product-col">
            <div class="card">
                <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading="lazy">
                <div class="card-body">
                    <h5 class="card-title">${product.productName}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">
                        <span class="shadow text-success fw-bold">Price:</span> R${amountInRands.toFixed(2)}
                    </p>
                    <button type="button" class="btn btn-success" onclick="addToCart(${JSON.stringify(product)})">Add to cart</button>
                </div>
            </div>
        </div>
    `;
}


// Call displayProducts when the page loads
document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
});

// Example of adding to cart function (to be implemented separately)
function addToCart(product) {
    console.log("Product added to cart:");
    console.log(product);
    // Implement your addToCart logic here
}

// Example of current year display (to be integrated as needed)
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear();