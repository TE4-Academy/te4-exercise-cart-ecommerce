// Day 4: Checkout Flow and Validation Functions
// TODO: Complete the functions below to create professional checkout experience

/**
 * Validate checkout form fields
 * @returns {boolean} True if all validation passes, false otherwise
 */
function validateCheckoutForm() {
  // TODO: Get values from all form fields
  // Use document.getElementById() for:
  // - customer-email
  // - shipping-name
  // - shipping-address
  // - shipping-city
  // - shipping-zip
  // - payment-method
  // TODO: Validate email format
  // Use regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // Show alert if invalid: 'Please enter a valid email address'
  // TODO: Check all required fields are filled
  // Show alert if missing: 'Please fill in all required fields'
  // TODO: Validate ZIP code format
  // Use regex: /^\d{5}(-\d{4})?$/
  // Show alert if invalid: 'Please enter a valid ZIP code'
  // TODO: Return true if all validation passes, false otherwise
}

/**
 * Show checkout form and hide cart
 */
function proceedToCheckout() {
  // TODO: Check if cart is empty
  // Show alert 'Your cart is empty' and return if empty
  // TODO: Hide cart section
  // Set display style to 'none' for element with id 'cart-section'
  // TODO: Show checkout section
  // Set display style to 'block' for element with id 'checkout-section'
  // TODO: Update checkout summary
  // Call updateCheckoutSummary() function
}

/**
 * Update order summary in checkout section
 */
function updateCheckoutSummary() {
  // TODO: Calculate order totals
  // Use existing calculateSubtotal() function
  // Tax = subtotal * 0.08
  // Shipping = free if subtotal > 50, otherwise $9.99
  // Total = subtotal + tax + shipping
  // TODO: Create HTML summary
  // Use this structure:
  /*
  const summaryHTML = `
    <div class="summary-line">Items: ${getTotalItems()}</div>
    <div class="summary-line">Subtotal: $${subtotal.toFixed(2)}</div>
    <div class="summary-line">Tax: $${tax.toFixed(2)}</div>
    <div class="summary-line">Shipping: $${shipping.toFixed(2)}</div>
    <div class="summary-total">Total: $${total.toFixed(2)}</div>
  `;
  */
  // TODO: Display summary in #checkout-order-summary container
}

/**
 * Cancel checkout and return to cart
 */
function cancelCheckout() {
  // TODO: Hide checkout section
  // Set display style to 'none' for element with id 'checkout-section'
  // TODO: Show cart section
  // Set display style to 'block' for element with id 'cart-section'
}

/**
 * Show order confirmation after successful checkout
 * @param {Object} order - The completed order object
 */
function showOrderConfirmation(order) {
  // TODO: Hide checkout section
  // TODO: Create confirmation HTML
  // Include order ID, customer email, total, item count
  // Use this structure:
  /*
  const confirmationHTML = `
    <div class="order-confirmation">
      <h2>✅ Order Confirmed!</h2>
      <div class="order-details">
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Email:</strong> ${order.customer.email}</p>
        <p><strong>Total:</strong> $${order.totals.total.toFixed(2)}</p>
        <p><strong>Items:</strong> ${order.items.length}</p>
      </div>
      <p>A confirmation email has been sent to ${order.customer.email}</p>
      <button onclick="startNewOrder()" class="new-order-btn">Start New Order</button>
    </div>
  `;
  */
  // TODO: Display confirmation (replace main content or show in modal)
  // TODO: Log order for debugging
}

/**
 * Start a new order (reset after confirmation)
 */
function startNewOrder() {
  // TODO: Hide order confirmation
  // TODO: Show cart section
  // TODO: Reset checkout form fields
  // TODO: Update displays
}

/**
 * Apply user preferences to the interface
 * @param {Object} preferences - User preference object
 */
function applyUserPreferences(preferences) {
  // TODO: Apply theme preference
  // Set document.body.className to include theme class
  // TODO: Apply currency preference
  // Update price displays throughout the app
  // TODO: Pre-fill shipping form if default address exists
  // TODO: Log applied preferences
}
