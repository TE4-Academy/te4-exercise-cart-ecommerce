// ===== SHOPPING CART - Day 1 Exercise =====
// Follow the TODOs in order - they match the exercise parts
// Run test-cart.js to verify your work after each part

// Sample products for testing
const products = {
  laptop: { id: 1, name: "Laptop", price: 999, stock: 10 },
  mouse: { id: 2, name: "Wireless Mouse", price: 29, stock: 25 },
  keyboard: { id: 3, name: "Mechanical Keyboard", price: 79, stock: 15 },
  monitor: { id: 4, name: '27" Monitor', price: 299, stock: 8 },
  headphones: { id: 5, name: "Headphones", price: 149, stock: 20 },
};

// ===== STATE =====
let cart = []; // Your shopping cart - starts empty

// ===== PART 1: ADD TO CART (45 minutes) =====

/**
 * Add an item to the cart or update quantity if it already exists
 * @param {Object} product - Product to add {id, name, price}
 * @param {number} quantity - How many to add (default: 1)
 */
function addToCart(product, quantity = 1) {
  // TODO: Implement this function
  //
  // Steps:
  // 1. Use find() to check if item already exists in cart
  //    Hint: cart.find(item => item.id === product.id)
  //
  // 2. If item exists:
  //    - Increase the quantity: existingItem.quantity += quantity
  //    - Log: "Updated [name] quantity to [quantity]"
  //
  // 3. If item is new:
  //    - Push new object to cart with: {id, name, price, quantity}
  //    - Log: "Added [quantity]x [name] to cart"
  //
  // 4. Call displayCart() to show the updated cart

  console.log("TODO: Implement addToCart");
}

// ===== PART 2: REMOVE AND UPDATE (45 minutes) =====

/**
 * Remove an item from the cart
 * @param {number} itemId - ID of item to remove
 */
function removeFromCart(itemId) {
  // TODO: Implement this function
  //
  // Steps:
  // 1. Find the item to get its name for the message
  //    Hint: const item = cart.find(...)
  //
  // 2. If item not found:
  //    - Log error message and return
  //
  // 3. Remove the item using filter:
  //    cart = cart.filter(item => item.id !== itemId)
  //    (Keep everything EXCEPT the item we want to remove)
  //
  // 4. Log: "Removed [name] from cart"
  // 5. Call displayCart()

  console.log("TODO: Implement removeFromCart");
}

/**
 * Update the quantity of a cart item
 * @param {number} itemId - ID of item to update
 * @param {number} newQuantity - New quantity value
 */
function updateQuantity(itemId, newQuantity) {
  // TODO: Implement this function
  //
  // Steps:
  // 1. Find the item in cart
  //
  // 2. If item not found:
  //    - Log error and return
  //
  // 3. If newQuantity is 0 or less:
  //    - Call removeFromCart(itemId) and return
  //    (Quantity of 0 means remove the item)
  //
  // 4. Otherwise:
  //    - Update: item.quantity = newQuantity
  //    - Log: "Updated [name] quantity to [newQuantity]"
  //
  // 5. Call displayCart()

  console.log("TODO: Implement updateQuantity");
}

/**
 * Increase quantity by 1
 * @param {number} itemId
 */
function increaseQuantity(itemId) {
  // TODO: Implement this function
  //
  // Steps:
  // 1. Find the item in cart
  // 2. If found, call updateQuantity(itemId, item.quantity + 1)

  console.log("TODO: Implement increaseQuantity");
}

/**
 * Decrease quantity by 1
 * @param {number} itemId
 */
function decreaseQuantity(itemId) {
  // TODO: Implement this function
  //
  // Steps:
  // 1. Find the item in cart
  // 2. If found, call updateQuantity(itemId, item.quantity - 1)

  console.log("TODO: Implement decreaseQuantity");
}

// ===== PART 3: CALCULATIONS (50 minutes) =====

/**
 * Calculate the total cost of all items in cart
 * @returns {number} Total cost
 */
function calculateSubtotal() {
  // TODO: Implement this function using reduce()
  //
  // The reduce() method processes each item and builds up a total
  // Pattern: array.reduce((accumulator, currentItem) => { ... }, startValue)
  //
  // Example:
  // return cart.reduce((total, item) => {
  //   return total + (item.price * item.quantity);
  // }, 0);  // Start with 0
  //
  // For each item: add (price × quantity) to the running total

  return 0; // TODO: Replace with actual calculation
}

/**
 * Calculate total number of items in cart
 * @returns {number} Total item count
 */
function getTotalItems() {
  // TODO: Implement this function using reduce()
  //
  // Similar to calculateSubtotal, but sum quantities instead of prices
  // return cart.reduce((total, item) => {
  //   return total + item.quantity;
  // }, 0);

  return 0; // TODO: Replace with actual calculation
}

/**
 * Calculate final total with tax
 * @param {number} taxRate - Tax rate as decimal (e.g., 0.25 for 25%)
 * @returns {number} Total with tax
 */
function calculateTotal(taxRate = 0.25) {
  // TODO: Implement this function
  //
  // Steps:
  // 1. Get subtotal: const subtotal = calculateSubtotal()
  // 2. Calculate tax: const tax = subtotal * taxRate
  // 3. Return: subtotal + tax

  return 0; // TODO: Replace with actual calculation
}

/**
 * Get cart summary with all totals
 * @returns {Object} Cart summary
 */
function getCartSummary() {
  // TODO: Implement this function
  //
  // Steps:
  // 1. Calculate all values:
  //    - itemCount = getTotalItems()
  //    - subtotal = calculateSubtotal()
  //    - tax = subtotal * 0.25
  //    - total = subtotal + tax
  //
  // 2. Return an object with formatted values:
  //    return {
  //      itemCount: itemCount,
  //      subtotal: subtotal.toFixed(2),
  //      tax: tax.toFixed(2),
  //      total: total.toFixed(2)
  //    };
  //
  // .toFixed(2) formats to 2 decimal places (e.g., "123.45")

  return {}; // TODO: Replace with actual object
}

/**
 * Display cart contents in console
 */
function displayCart() {
  // TODO: Implement this function
  //
  // Steps:
  // 1. console.clear() - clear the console
  // 2. Print header: "=== SHOPPING CART ==="
  // 3. If cart is empty:
  //    - Print "Cart is empty"
  //    - return
  // 4. Loop through cart items (use forEach):
  //    - Print item name
  //    - Print: "$[price] x [quantity] = $[itemTotal]"
  //    - Calculate itemTotal = price * quantity
  // 5. Get summary: const summary = getCartSummary()
  // 6. Print summary:
  //    - Total Items: X
  //    - Subtotal: $X.XX
  //    - Tax (25%): $X.XX
  //    - TOTAL: $X.XX

  console.log("=== Cart Display Not Yet Implemented ===");
  console.log("Current cart:", cart);
}

// ===== PART 4: STOCK MANAGEMENT (40 minutes) =====

// TODO: Update the addToCart function above to check stock
//
// Add this at the BEGINNING of addToCart, before the find():
//
// // Check stock if available
// if (product.stock !== undefined) {
//   const currentInCart = cart.find(item => item.id === product.id);
//   const currentQuantity = currentInCart ? currentInCart.quantity : 0;
//
//   if (currentQuantity + quantity > product.stock) {
//     console.log(`Cannot add ${quantity}x ${product.name}. Only ${product.stock - currentQuantity} available.`);
//     return;  // Stop here, don't add to cart
//   }
// }

// ===== PART 5: CHOOSE ONE FEATURE (60 minutes) =====

// Option A: Discount Code System
// TODO: Implement if you choose this option
//
// let discountCode = null;  // Add this with cart state at top
//
// function applyDiscount(code) {
//   const codes = {
//     'SAVE10': { code: 'SAVE10', percentage: 0.10 },
//     'SAVE20': { code: 'SAVE20', percentage: 0.20 }
//   };
//
//   if (codes[code]) {
//     discountCode = codes[code];
//     console.log(`Applied ${code}`);
//   } else {
//     console.log('Invalid code');
//   }
// }
//
// Then update calculateTotal to subtract discount before tax

// Option B: Shipping Calculator
// TODO: Implement if you choose this option
//
// function calculateShipping() {
//   const subtotal = calculateSubtotal();
//   if (subtotal >= 500) {
//     return 0;  // Free shipping
//   }
//   return 10;  // $10 flat rate
// }
//
// Then update getCartSummary to include shipping in total

// Option C: localStorage Persistence
// TODO: Implement if you choose this option
//
// function saveCart() {
//   localStorage.setItem('cart', JSON.stringify(cart));
// }
//
// function loadCart() {
//   const saved = localStorage.getItem('cart');
//   if (saved) {
//     cart = JSON.parse(saved);
//   }
// }
//
// Call saveCart() after every cart change
// Call loadCart() when page loads

// ===== INITIAL MESSAGE =====
console.log("✓ Cart system loaded!");
console.log("Available products:", products);
console.log("\nFollow the TODOs in cart.js");
console.log("Run tests by opening index.html in browser");
console.log("Or test manually: addToCart(products.laptop)\n");
