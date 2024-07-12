
let wrapper = document.querySelector("[recentProducts]");
let cartBtn = document.querySelector("[cart-btn]")

let checkoutItems = []

// let allProducts = document.querySelector("[allProducts]")

// Check and initialize the products in localStorage
// let products = JSON.parse(localStorage.getItem("products")) || [
//     {
//         id: 1,
//         productName: "Cocoa coffee",
//         category: "Laptop",
//         description: "cocoa coffee with infused beans",
//         amount: 30.89,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/cocoa.jpg"
//     },
//     {
//         id: 2,
//         productName: "Bittersweet coffee",
//         category: "Application",
//         description: "bittersweet coffee from brazil",
//         amount: 30.89,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/bittersweet.jpg"
//     },
//     {
//         id: 3,
//         productName: "Maplesyrup coffee",
//         category: "Book",
//         description: "maple syrup coffee straight from the trees in the amazon",
//         amount: 39.99,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/maplesyrup.jpg"
//     },
//     {
//         id: 4,
//         productName: "cocoa, mellow and citrus coffee",
//         category: "Book",
//         description: "cocoa, mellow and citrus coffee, asian blend",
//         amount: 30,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/cocoa,mellow,citrus.jpg"
//     },
//     {
//         id: 5,
//         productName: "Caramel coffee",
//         category: "Laptop",
//         description: "sweet caramel infused coffee",
//         amount: 39,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/caramel.jpg"
//     },
//     {
//         id: 6,
//         productName: "Dried fruit coffee",
//         category: "Laptop",
//         description: "cape town driedfruit and citrus coffee",
//         amount: 22.89,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/driedfruit,citrus.jpg"
//     },
//     {
//         id: 7,
//         productName: "Cocoa citrus coffee",
//         category: "Application",
//         description: "citrus with a hint of cocoa coffeeg",
//         amount: 33.89,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/cocoa,mellow,citrus.jpg"
//     },
//     {
//         id: 8,
//         productName: "Pink mug",
//         category: "Book",
//         description: " mug features a soft, pastel pink hue with a glossy finish.",
//         amount: 26.99,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/pink1.jpg"
//     },
//     {
//         id: 9,
//         productName: "Orange mug",
//         category: "Book",
//         description: "the Perfect mug for adding a touch of elegance and warmth to any coffee shop or virtual café",
//         amount: 110,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/orange.jpg"
//     },
//     {
//         id: 10,
//         productName: "Red mug",
//         category: "Laptop",
//         description: "red mug exudes warmth and energy with its bold color and glossy finish. ",
//         amount: 150,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/mug2.jpg"
//     },
//     {
//         id: 11,
//         productName: "White mug",
//         category: "mug",
//         description: "Ideal mug for serving hot beverages such as coffee, tea, or hot chocolate in style.",
//         amount: 150.89,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/mug1.jpg"
//     },
//     {
//         id: 12,
//         productName: "Green mug",
//         category: "mug",
//         description: "green mug exudes a fresh and soothing vibe with its smooth, matte finish and earthy tone.",
//         amount: 350.89,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/green.jpg"
//     },
//     {
//         id: 13,
//         productName: "Blue mug",
//         category: "mug",
//         description: "Perfect for serving a variety of hot and cold beverages, including coffee, tea, and herbal infusions.",
//         amount: 126.99,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/blue.jpg"
//     },
//     {
//         id: 14,
//         productName: "Enamal mug",
//         category: "mug",
//         description: "popular choice among environmentally conscious consumers or those who appreciate earth-inspired aesthetics. ",
//         amount: 125.99,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/enamal.jpg"
//     },
//     {
//         id: 15,
//         productName: "Chill tumbler",
//         category: "tumbler",
//         description: "The Chill Tumbler is a sleek and modern stainless steel tumbler designed to keep beverages cold for extended periods. ",
//         amount: 150.89,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/chilltumbler.jpg"
//     },
//     {
//         id: 16,
//         productName: "Slim bottle",
//         category: "bottle",
//         description: "Ideal for serving chilled beverages in any setting.",
//         amount: 790.99,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/slimbottle.jpg"
//     },
//     {
//         id: 17,
//         productName: "Tumbler",
//         category: "tumbler",
//         description: "Ideal for serving a wide range of beverages, including coffee, tea, iced drinks, smoothies, and more.",
//         amount: 180.99,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/tumbler.jpg"
//     },
//     {
//         id: 18,
//         productName: "Tumbler with straw",
//         category: "tumbler",
//         description: "reliable companion for those on the go",
//         amount: 120.99,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/tumblerstraw.jpg"
//     },
//     {
//         id: 19,
//         productName: "Tumbler",
//         category: "tumbler",
//         description: " lightweight and versatile option for everyday use",
//         amount: 450.90,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/throughtumbler.jpg"
//     },
//     {
//         id: 20,
//         productName: "Travel mug",
//         category: "mug",
//         description: " Ideal for serving hot beverages like coffee, tea, or hot chocolate on the go.",
//         amount: 100.99,
//         img_url: "https://mapulecodes.github.io/fridayimages/images2/travelmug.jpg"
//     },
// {
//     id: 21,
//     productName: "Travel mug black lid",
//     category: "mug",
//     description: "Ideal for serving beverages like cocktails, whiskey, or iced drinks where temperature control is crucial.",
//     amount: 100.50,
//     img_url: "https://mapulecodes.github.io/fridayimages/images2/travelmug2.jpg"
// }
// ];

// // local storage
// localStorage.setItem("products", JSON.stringify(products));

