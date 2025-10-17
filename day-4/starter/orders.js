// Day 4: Order Management and History Functions
// TODO: Complete the functions below to handle order processing and history

/**
 * Generate unique order ID
 * @returns {string} Unique order identifier
 */
function generateOrderId() {
  // TODO: Create unique order ID with format 'ORD-[timestamp]-[random]'
  // Use Date.now() for timestamp
  // Use Math.random().toString(36).substr(2, 5).toUpperCase() for random part
  // Example result: 'ORD-1697123456789-A3K9M'
}

/**
 * Calculate order totals including tax and shipping
 * @returns {Object} Object with subtotal, tax, shipping, total
 */
function calculateOrderTotals() {
  // TODO: Calculate subtotal using existing calculateSubtotal() function
  // TODO: Calculate tax (8% of subtotal)
  // TODO: Calculate shipping
  // Free shipping if subtotal > $50, otherwise $9.99
  // TODO: Calculate total (subtotal + tax + shipping)
  // TODO: Return object with all totals:
  /*
  return {
    subtotal: subtotal,
    tax: tax,
    shipping: shipping,
    total: total
  };
  */
}

/**
 * Process order and save to localStorage
 */
function processOrder() {
  // TODO: Validate checkout form first
  // Return early if validation fails
  // TODO: Create order object with this structure:
  /*
  const order = {
    id: generateOrderId(),
    timestamp: new Date().toISOString(),
    customer: {
      email: // get from form customer-email,
      name: // get from form shipping-name,
      phone: // get from form customer-phone
    },
    shipping: {
      name: // get from form shipping-name,
      address: // get from form shipping-address,
      city: // get from form shipping-city,
      zip: // get from form shipping-zip
    },
    payment: {
      method: // get from form payment-method
    },
    items: [...cart], // copy current cart items
    totals: calculateOrderTotals(),
    status: 'confirmed'
  };
  */
  // TODO: Save order using saveOrder() function
  // TODO: Clear cart and save to storage
  // TODO: Show order confirmation using showOrderConfirmation()
}

/**
 * Save order to localStorage
 * @param {Object} order - Order object to save
 */
function saveOrder(order) {
  // TODO: Use try-catch for error handling
  // TODO: Get existing orders from localStorage with key 'ecommerce-orders'
  // Parse JSON or default to empty array []
  // TODO: Add new order to array (push)
  // TODO: Save updated array back to localStorage
  // TODO: Log success message with order ID
  // TODO: Handle any errors gracefully
}

/**
 * Get order history from localStorage
 * @returns {Array} Array of order objects
 */
function getOrderHistory() {
  // TODO: Use try-catch for error handling
  // TODO: Get orders from localStorage with key 'ecommerce-orders'
  // TODO: Parse JSON or return empty array if no data
  // TODO: Return the orders array
  // TODO: Handle errors by returning empty array
}

/**
 * Display order history in the UI
 */
function displayOrderHistory() {
  // TODO: Get order history using getOrderHistory()
  // TODO: Get container element with id 'order-history-list'
  // TODO: Clear existing content
  // TODO: Check if any orders exist
  // Show 'No orders found' message if empty
  // TODO: Loop through orders and create HTML for each
  // Include: order ID, date, total, status, item count
  // Use this structure for each order:
  /*
  const orderHTML = `
    <div class="order-item">
      <div class="order-header">
        <span class="order-id">Order: ${order.id}</span>
        <span class="order-date">${new Date(order.timestamp).toLocaleDateString()}</span>
      </div>
      <div class="order-details">
        <span>Total: $${order.totals.total.toFixed(2)}</span>
        <span>Items: ${order.items.length}</span>
        <span class="order-status">${order.status}</span>
      </div>
    </div>
  `;
  */
  // TODO: Add all order HTML to container
}

/**
 * Show order history section
 */
function showOrderHistory() {
  // TODO: Hide other sections (cart, checkout)
  // TODO: Show order history section
  // Set display style to 'block' for element with id 'order-history-section'
  // TODO: Update order history display
  // Call displayOrderHistory()
}

/**
 * Return to cart/shopping from order history
 */
function showCart() {
  // TODO: Hide order history section
  // TODO: Show cart section
  // TODO: Update cart display
}

/**
 * Get order by ID
 * @param {string} orderId - Order ID to find
 * @returns {Object|null} Order object or null if not found
 */
function getOrderById(orderId) {
  // TODO: Get order history
  // TODO: Find order with matching ID using find()
  // TODO: Return order object or null
}

/**
 * Update order status (for future features)
 * @param {string} orderId - Order ID to update
 * @param {string} newStatus - New status value
 */
function updateOrderStatus(orderId, newStatus) {
  // TODO: Get order history
  // TODO: Find order by ID
  // TODO: Update status if order found
  // TODO: Save updated orders back to localStorage
  // TODO: Log status update
}
