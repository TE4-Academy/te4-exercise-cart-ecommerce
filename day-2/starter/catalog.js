// ============================================
// Day 2: Product Catalog Functions
// ============================================
// Your task: Complete all functions marked TODO
// Run tests in console (F12) to check your work
// ============================================

// ============================================
// SECTION 1: DISPLAY PRODUCTS (60 minutes)
// ============================================

/**
 * Display products in the grid
 * @param {Array} productsToShow - Array of product objects to display
 * 
 * TODO: Complete this function to:
 * 1. Get the #product-grid element
 * 2. Clear its current content
 * 3. Loop through productsToShow with forEach
 * 4. Create HTML for each product (image, name, price, stock, button)
 * 5. Add HTML to the container
 * 
 * HINTS:
 * - Use template literals: `<div>${product.name}</div>`
 * - Access product properties: product.name, product.price, etc.
 * - Use innerHTML += or insertAdjacentHTML()
 * - Format price with 2 decimals: product.price.toFixed(2)
 */
function displayProducts(productsToShow) {
  console.log('TODO: Display products', productsToShow);
  
  // TODO: Get container element
  const container = document.getElementById('product-grid');
  
  // TODO: Clear container
  // container.innerHTML = '';
  
  // TODO: Check if no products
  // if (productsToShow.length === 0) {
  //   container.innerHTML = '<p>No products found.</p>';
  //   return;
  // }
  
  // TODO: Loop through products and create HTML
  // productsToShow.forEach(product => {
  //   const productCard = `
  //     <div class="product-card">
  //       <!-- Add product image here -->
  //       <!-- Add product name here -->
  //       <!-- Add price here -->
  //       <!-- Add stock here -->
  //       <!-- Add "Add to Cart" button here -->
  //     </div>
  //   `;
  //   container.innerHTML += productCard;
  // });
}

// TODO: Call displayProducts with all products when page loads
// displayProducts(products);


// ============================================
// SECTION 2: FILTER BY CATEGORY (60 minutes)
// ============================================

/**
 * Filter products by category
 * @param {string} category - Category to filter by ('all', 'electronics', 'clothing', 'home', 'office')
 * 
 * TODO: Complete this function to:
 * 1. Check if category is 'all'
 * 2. If 'all', display all products
 * 3. Otherwise, use filter() to get products matching the category
 * 4. Display the filtered array
 * 
 * HINTS:
 * - filter() creates a new array: products.filter(product => condition)
 * - Check category: product.category === category
 * - Call displayProducts() with the filtered array
 * 
 * EXAMPLE:
 * filterByCategory('electronics') → Show only electronics
 * filterByCategory('all') → Show all products
 */
function filterByCategory(category) {
  console.log('TODO: Filter by category:', category);
  
  // TODO: Check if category is 'all'
  // if (category === 'all') {
  //   displayProducts(products);
  // } else {
  //   // TODO: Use filter() to get matching products
  //   const filtered = products.filter(product => {
  //     // TODO: Return true if product category matches
  //   });
  //   displayProducts(filtered);
  // }
}


// ============================================
// SECTION 3: SEARCH PRODUCTS (60 minutes)
// ============================================

/**
 * Search products by name
 * @param {string} searchText - Text to search for
 * 
 * TODO: Complete this function to:
 * 1. Convert search text to lowercase
 * 2. Use filter() to find products where name includes search text
 * 3. Remember to make product name lowercase too!
 * 4. Display the search results
 * 
 * HINTS:
 * - Convert to lowercase: searchText.toLowerCase()
 * - Check if string contains text: string.includes(searchText)
 * - Both strings must be lowercase for case-insensitive search
 * 
 * EXAMPLE:
 * searchProducts('mouse') → Should find "Gaming Mouse"
 * searchProducts('MOUSE') → Should also find "Gaming Mouse" (case-insensitive)
 */
function searchProducts(searchText) {
  console.log('TODO: Search for:', searchText);
  
  // TODO: Convert search text to lowercase
  // const searchLower = searchText.toLowerCase();
  
  // TODO: Filter products where name includes search text
  // const results = products.filter(product => {
  //   // TODO: Make product name lowercase and check if it includes searchLower
  // });
  
  // TODO: Display results
  // displayProducts(results);
}


// ============================================
// SECTION 4: SORT PRODUCTS (30 minutes)
// ============================================

/**
 * Sort products by different criteria
 * @param {string} sortBy - Sort method ('price-low', 'price-high', 'name')
 * 
 * TODO: Complete this function to:
 * 1. Make a copy of products array (don't modify original!)
 * 2. Sort the copy based on sortBy parameter:
 *    - 'price-low': Low to high price
 *    - 'price-high': High to low price
 *    - 'name': Alphabetically
 * 3. Display the sorted array
 * 
 * HINTS:
 * - Copy array: [...products]
 * - Sort numbers ascending: (a, b) => a.price - b.price
 * - Sort numbers descending: (a, b) => b.price - a.price
 * - Sort strings: (a, b) => a.name.localeCompare(b.name)
 * 
 * REMEMBER:
 * - Negative result → a comes before b
 * - Positive result → b comes before a
 */
function sortProducts(sortBy) {
  console.log('TODO: Sort by:', sortBy);
  
  // TODO: Make a copy of products array
  // let sorted = [...products];
  
  // TODO: Sort based on sortBy parameter
  // if (sortBy === 'price-low') {
  //   sorted.sort((a, b) => /* compare prices low to high */);
  // } else if (sortBy === 'price-high') {
  //   sorted.sort((a, b) => /* compare prices high to low */);
  // } else if (sortBy === 'name') {
  //   sorted.sort((a, b) => /* compare names alphabetically */);
  // }
  
  // TODO: Display sorted products
  // displayProducts(sorted);
}


// ============================================
// SECTION 4: CART INTEGRATION (30 minutes)
// ============================================

/**
 * Handle adding product to cart
 * @param {number} productId - ID of product to add
 * 
 * TODO: Complete this function to:
 * 1. Find the product by ID using find()
 * 2. Check if product exists
 * 3. Call addToCart() from Day 1 with product and quantity 1
 * 4. Show a success message (alert or console.log)
 * 5. Update the cart display
 * 
 * HINTS:
 * - Find product: products.find(p => p.id === productId)
 * - Check if found: if (!product) return;
 * - Add to cart: addToCart(product, 1)
 * - Update display: updateCartDisplay()
 */
function handleAddToCart(productId) {
  console.log('TODO: Add product to cart:', productId);
  
  // TODO: Find product by ID
  // const product = products.find(p => /* condition here */);
  
  // TODO: Check if product exists
  // if (!product) {
  //   console.log('Product not found!');
  //   return;
  // }
  
  // TODO: Add to cart (from Day 1)
  // addToCart(product, 1);
  
  // TODO: Show success message
  // alert(`Added ${product.name} to cart!`);
  
  // TODO: Update cart display
  // updateCartDisplay();
}

/**
 * Update cart count display
 * 
 * TODO: Complete this function to:
 * 1. Get total items from cart (Day 1 function)
 * 2. Update the #cart-count element text
 * 
 * HINTS:
 * - Get total: getTotalItems() from Day 1
 * - Update text: element.textContent = 'Cart: X items'
 */
function updateCartDisplay() {
  console.log('TODO: Update cart display');
  
  // TODO: Get total items from cart
  // const total = getTotalItems();
  
  // TODO: Update cart count element
  // const cartCount = document.getElementById('cart-count');
  // if (cartCount) {
  //   cartCount.textContent = `Cart: ${total} items`;
  // }
}


// ============================================
// INITIALIZATION
// ============================================

// TODO: Uncomment this when displayProducts is complete
// displayProducts(products);

// TODO: Uncomment this when updateCartDisplay is complete
// updateCartDisplay();


// ============================================
// HELPFUL DEBUGGING
// ============================================

// Uncomment these to test functions in console:
// window.testDisplay = () => displayProducts(products);
// window.testFilter = (cat) => filterByCategory(cat);
// window.testSearch = (text) => searchProducts(text);
// window.testSort = (sort) => sortProducts(sort);
