# Day 4 Exercise: Advanced E-commerce Features

## Goal
Build advanced e-commerce functionality including localStorage persistence, professional checkout flow, order management, and user preferences.
Build on Day 3 interactive cart UI.

## Time
5 hours (5 sections × 60 minutes)

---

## Setup

### Create Day 4 Folder
Keep previous days separate. Create new folder for Day 4.

### Files Needed
```
day-4/
├── index.html       (copy from Day 3, then modify)
├── cart.js          (copy from Day 3)
├── products.js      (copy from Day 3)
├── catalog.js       (copy from Day 3)
├── cart-ui.js       (copy from Day 3)
├── storage.js       (NEW - copy from day-4/starter/storage.js)
├── checkout.js      (NEW - copy from day-4/starter/checkout.js)
└── orders.js        (NEW - copy from day-4/starter/orders.js)
```

### Setup Steps
1. Create `day-4` folder
2. Copy all files from your Day 3 folder into `day-4` folder
3. Copy `day-4/starter/storage.js` into `day-4` folder (localStorage functions)
4. Copy `day-4/starter/checkout.js` into `day-4` folder (checkout flow)
5. Copy `day-4/starter/orders.js` into `day-4` folder (order management)
6. Reference `day-4/starter/styles.css` for additional CSS examples

---

## Section 1: LocalStorage Persistence (60 minutes)

### Task 1.1: Add Storage Scripts to HTML (5 min)

Add to Day 4 `index.html` in the scripts section (after existing scripts):

```html
<script src="cart.js"></script>
<script src="products.js"></script>
<script src="catalog.js"></script>
<script src="cart-ui.js"></script>
<script src="storage.js"></script>
<script src="checkout.js"></script>
<script src="orders.js"></script>
```

### Task 1.2: Complete saveCartToStorage() (15 min)

In Day 4 `storage.js`, find the `saveCartToStorage()` function with TODO comments.

Complete the function to:
1. Use try-catch for error handling
2. Convert cart array to JSON string with JSON.stringify()
3. Save to localStorage with key 'ecommerce-cart'
4. Log success message
5. Handle any errors gracefully

### Task 1.3: Complete loadCartFromStorage() (20 min)

Find the `loadCartFromStorage()` function with TODO comments.

Complete the function to:
1. Use try-catch for error handling
2. Get data from localStorage with key 'ecommerce-cart'
3. Check if data exists
4. Parse JSON string back to array with JSON.parse()
5. Update global cart variable
6. Handle corrupted data by resetting to empty array
7. Log the loaded cart

### Task 1.4: Add Auto-Save to Cart Functions (15 min)

Update your Day 3 cart functions to automatically save after changes:

In `cart.js`, modify these functions to call `saveCartToStorage()` at the end:
- `addToCart()` - add saveCartToStorage() call
- `removeFromCart()` - add saveCartToStorage() call
- `updateQuantity()` - add saveCartToStorage() call

Example:
```javascript
function addToCart(product, quantity = 1) {
  // ... existing code ...
  
  saveCartToStorage(); // Add this line
}
```

### Task 1.5: Test Cart Persistence (5 min)

Test localStorage functionality:
1. Add several items to cart
2. Refresh the browser page
3. Cart should automatically reload with same items
4. Check browser dev tools → Application → Local Storage → see your data
5. Clear localStorage and verify cart resets

Checkpoint: Cart persists between browser refreshes

---

## Section 2: Advanced Checkout Flow (60 minutes)

### Task 2.1: Add Checkout Form HTML (15 min)

Add to Day 4 `index.html` after the cart section:

```html
<section id="checkout-section" style="display: none;">
  <h2>Checkout</h2>
  
  <div class="checkout-container">
    <div class="checkout-form">
      <div class="form-section">
        <h3>Contact Information</h3>
        <input type="email" id="customer-email" placeholder="Email address" required>
        <input type="tel" id="customer-phone" placeholder="Phone number">
      </div>
      
      <div class="form-section">
        <h3>Shipping Address</h3>
        <input type="text" id="shipping-name" placeholder="Full name" required>
        <input type="text" id="shipping-address" placeholder="Street address" required>
        <input type="text" id="shipping-city" placeholder="City" required>
        <input type="text" id="shipping-zip" placeholder="ZIP code" required>
      </div>
      
      <div class="form-section">
        <h3>Payment Method</h3>
        <select id="payment-method" required>
          <option value="">Select payment method</option>
          <option value="card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bank">Bank Transfer</option>
        </select>
      </div>
      
      <div class="checkout-actions">
        <button onclick="processOrder()" class="checkout-submit-btn">Complete Order</button>
        <button onclick="cancelCheckout()" class="cancel-btn">Back to Cart</button>
      </div>
    </div>
    
    <div class="order-summary">
      <h3>Order Summary</h3>
      <div id="checkout-order-summary"></div>
    </div>
  </div>
</section>
```

### Task 2.2: Complete validateCheckoutForm() (20 min)

In Day 4 `checkout.js`, find the `validateCheckoutForm()` function with TODO comments.

Complete the function to:
1. Get values from all form fields
2. Validate email format using regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
3. Check all required fields are filled
4. Validate ZIP code format using regex: `/^\d{5}(-\d{4})?$/`
5. Show appropriate error messages for each validation failure
6. Return true if all validation passes, false otherwise

### Task 2.3: Complete proceedToCheckout() function (15 min)

Find the `proceedToCheckout()` function with TODO comments.

Complete the function to:
1. Check if cart is empty (show alert if so)
2. Hide cart section: `document.getElementById('cart-section').style.display = 'none'`
3. Show checkout section: `document.getElementById('checkout-section').style.display = 'block'`
4. Call updateCheckoutSummary() to show order details

### Task 2.4: Complete updateCheckoutSummary() (10 min)

Find the `updateCheckoutSummary()` function with TODO comments.

Complete the function to:
1. Calculate subtotal using existing calculateSubtotal()
2. Calculate tax (8% of subtotal)
3. Calculate shipping (free if subtotal > $50, otherwise $9.99)
4. Calculate total (subtotal + tax + shipping)
5. Create HTML summary with all totals
6. Display in #checkout-order-summary container

Use this HTML structure:
```javascript
const summaryHTML = `
  <div class="summary-line">Items: ${getTotalItems()}</div>
  <div class="summary-line">Subtotal: $${subtotal.toFixed(2)}</div>
  <div class="summary-line">Tax: $${tax.toFixed(2)}</div>
  <div class="summary-line">Shipping: $${shipping.toFixed(2)}</div>
  <div class="summary-total">Total: $${total.toFixed(2)}</div>
`;
```

Checkpoint: Checkout form displays and validates properly

---

## Section 3: Order Processing and Management (60 minutes)

### Task 3.1: Complete generateOrderId() (10 min)

In Day 4 `orders.js`, find the `generateOrderId()` function with TODO comments.

Complete the function to:
1. Create unique order ID with format: 'ORD-[timestamp]-[random]'
2. Use Date.now() for timestamp
3. Generate random string with: Math.random().toString(36).substr(2, 5).toUpperCase()
4. Return combined string

Example result: 'ORD-1697123456789-A3K9M'

### Task 3.2: Complete calculateOrderTotals() (15 min)

Find the `calculateOrderTotals()` function with TODO comments.

Complete the function to:
1. Calculate subtotal using existing calculateSubtotal()
2. Calculate tax (8% of subtotal)
3. Calculate shipping (free if subtotal > $50, otherwise $9.99)
4. Calculate total (subtotal + tax + shipping)
5. Return object with all totals:
```javascript
return {
  subtotal: subtotal,
  tax: tax,
  shipping: shipping,
  total: total
};
```

### Task 3.3: Complete processOrder() (25 min)

Find the `processOrder()` function with TODO comments.

Complete the function to:
1. Validate checkout form (return early if invalid)
2. Create order object with this structure:
```javascript
const order = {
  id: generateOrderId(),
  timestamp: new Date().toISOString(),
  customer: {
    email: // get from form,
    name: // get from form,
    phone: // get from form
  },
  shipping: {
    name: // get from form,
    address: // get from form,
    city: // get from form,
    zip: // get from form
  },
  payment: {
    method: // get from form
  },
  items: [...cart], // copy cart items
  totals: calculateOrderTotals(),
  status: 'confirmed'
};
```
3. Save order using saveOrder()
4. Clear cart and save to storage
5. Show order confirmation using showOrderConfirmation()

### Task 3.4: Complete saveOrder() and getOrderHistory() (10 min)

Find both functions with TODO comments:

**saveOrder()**: 
1. Use try-catch for error handling
2. Get existing orders from localStorage ('ecommerce-orders') or empty array
3. Parse JSON or default to []
4. Push new order to array
5. Save updated array back to localStorage
6. Log success

**getOrderHistory()**:
1. Use try-catch for error handling
2. Get orders from localStorage ('ecommerce-orders')
3. Parse JSON or return empty array
4. Return the orders array

Checkpoint: Orders can be processed and saved successfully

---

## Section 4: User Interface Enhancements (60 minutes)

### Task 4.1: Add Checkout Styling (20 min)

Add to your CSS file or `<style>` tag in Day 4 index.html:

```css
#checkout-section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.checkout-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  max-width: 1000px;
}

.checkout-form {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.form-section {
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.form-section h3 {
  margin: 0 0 15px 0;
  color: #333;
}

.form-section input,
.form-section select {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.form-section input:focus,
.form-section select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
}

.checkout-actions {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.checkout-submit-btn {
  background: #28a745;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  flex: 1;
}

.checkout-submit-btn:hover {
  background: #218838;
}

.cancel-btn {
  background: #6c757d;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.cancel-btn:hover {
  background: #5a6268;
}

.order-summary {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  height: fit-content;
}

.order-summary h3 {
  margin: 0 0 15px 0;
  color: #333;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 5px 0;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  margin: 15px 0 0 0;
  padding: 15px 0 0 0;
  border-top: 2px solid #333;
  font-size: 18px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .checkout-container {
    grid-template-columns: 1fr;
  }
  
  .checkout-actions {
    flex-direction: column;
  }
}
```

### Task 4.2: Complete cancelCheckout() (5 min)

In Day 4 `checkout.js`, find the `cancelCheckout()` function with TODO comments.

Complete the function to:
1. Hide checkout section: `document.getElementById('checkout-section').style.display = 'none'`
2. Show cart section: `document.getElementById('cart-section').style.display = 'block'`

### Task 4.3: Complete showOrderConfirmation() (20 min)

Find the `showOrderConfirmation()` function with TODO comments.

Complete the function to:
1. Hide checkout section
2. Create confirmation HTML with order details:
```javascript
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
```
3. Display confirmation in main container
4. Log order for debugging

### Task 4.4: Add Order History Display (15 min)

Add order history section to HTML:
```html
<section id="order-history-section" style="display: none;">
  <h2>Order History</h2>
  <div id="order-history-list"></div>
  <button onclick="showCart()" class="back-btn">Back to Shopping</button>
</section>
```

Complete `displayOrderHistory()` function in orders.js:
1. Get order history using getOrderHistory()
2. Check if any orders exist
3. Create HTML for each order
4. Display in #order-history-list container

Checkpoint: Complete checkout flow with confirmation and history

---

## Section 5: Advanced Features and Integration (60 minutes)

### Task 5.1: Add User Preferences (25 min)

In Day 4 `storage.js`, find the user preferences functions.

Complete `saveUserPreferences()`:
1. Use try-catch for error handling
2. Save preferences object to localStorage with key 'user-preferences'
3. Log success

Complete `loadUserPreferences()`:
1. Use try-catch for error handling  
2. Get data from localStorage with key 'user-preferences'
3. Parse JSON or return default preferences
4. Return preferences object

Add preferences panel to HTML:
```html
<div id="preferences-panel" style="display: none;">
  <h3>User Preferences</h3>
  <div class="pref-section">
    <label>Currency:</label>
    <select id="currency-select">
      <option value="USD">USD ($)</option>
      <option value="EUR">EUR (€)</option>
      <option value="SEK">SEK (kr)</option>
    </select>
  </div>
  <div class="pref-section">
    <label>Theme:</label>
    <select id="theme-select">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
  <button onclick="savePreferences()">Save Preferences</button>
</div>
```

### Task 5.2: Enhanced Cart Initialization (15 min)

Update your page initialization to include all new features:

In your main script or HTML, create:
```javascript
function initializeApp() {
  console.log('Initializing e-commerce app...');
  
  // Load saved data
  loadCartFromStorage();
  
  // Initialize displays
  displayProducts();
  displayCart();
  
  // Load and apply user preferences
  const preferences = loadUserPreferences();
  applyUserPreferences(preferences);
  
  console.log('App initialized successfully');
}

// Call on page load
window.addEventListener('load', initializeApp);
```

### Task 5.3: Complete Search State Persistence (10 min)

Add search state management in storage.js:

Complete `saveSearchState()` and `loadSearchState()`:
1. Save/load search filters and sort preferences
2. Restore search form values on page load
3. Maintain user's search preferences between sessions

### Task 5.4: Final Integration Testing (10 min)

Test the complete e-commerce workflow:

1. **Product Browsing**: Search, filter, sort products
2. **Cart Management**: Add items, modify quantities
3. **Persistence**: Refresh page, verify cart and preferences persist
4. **Checkout**: Fill form, validate, process order
5. **Order Confirmation**: Verify order saved and confirmation shown
6. **Order History**: Check order appears in history
7. **Preferences**: Change currency/theme, verify they persist

Create test checklist:
- [ ] Cart persists after browser refresh
- [ ] Search filters maintain state
- [ ] Checkout form validates properly
- [ ] Orders save to localStorage
- [ ] Order confirmation displays correctly
- [ ] Order history shows past orders
- [ ] User preferences save and apply
- [ ] Error handling works (try corrupting localStorage data)

Checkpoint: Complete e-commerce application with all advanced features

---

## Troubleshooting

### LocalStorage Issues:
- **"Storage quota exceeded"**: Clear old data or use compression
- **"Permission denied"**: Check if browser is in private mode
- **Data corruption**: Always use try-catch and provide fallbacks

### Checkout Problems:
- **Form validation fails**: Check regex patterns and field names
- **Order not saving**: Verify JSON.stringify/parse operations
- **Confirmation not showing**: Check function call order

### Integration Issues:
- **Cart not loading**: Verify loadCartFromStorage() is called on page load
- **Functions not found**: Check script loading order in HTML
- **UI not updating**: Ensure displayCart() is called after cart changes

### Performance Issues:
- **Slow loading**: Limit localStorage data size
- **Memory usage**: Clear old orders periodically
- **Search lag**: Implement debounced search

---

## Extension Challenges

When finished, some extra tasks:

### Easy Extensions:
1. Add product images to order history
2. Implement currency conversion with real exchange rates
3. Add dark/light theme toggle
4. Create printable order receipts

### Medium Extensions:
1. Add discount codes functionality
2. Implement wishlist with localStorage
3. Add product reviews and ratings
4. Create customer loyalty points system

### Advanced Extensions:
1. Add real-time inventory tracking
2. Implement order status updates
3. Add email notifications (simulated)
4. Create admin dashboard for order management
5. Add product recommendations based on order history

---

## Completion Checklist

- [ ] LocalStorage saves and loads cart data properly
- [ ] Cart persists between browser sessions
- [ ] Checkout form validates all required fields
- [ ] Orders process and save successfully
- [ ] Order confirmation displays with details
- [ ] Order history shows past purchases
- [ ] User preferences save and apply correctly
- [ ] Search state persists between sessions
- [ ] All features integrate smoothly
- [ ] Error handling prevents crashes
- [ ] Code follows patterns from previous days
- [ ] Performance is acceptable with large datasets

---
