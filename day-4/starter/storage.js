// Day 4: LocalStorage and Data Persistence Functions
// TODO: Complete the functions below to add data persistence to the e-commerce app

/**
 * Save cart to localStorage for persistence between sessions
 */
function saveCartToStorage() {
  // TODO: Use try-catch for error handling
  // TODO: Convert cart array to JSON string using JSON.stringify()
  // TODO: Save to localStorage with key 'ecommerce-cart'
  // TODO: Log success message
  // TODO: Handle any errors gracefully (show console.error)
}

/**
 * Load cart from localStorage when page loads
 */
function loadCartFromStorage() {
  // TODO: Use try-catch for error handling
  // TODO: Get data from localStorage with key 'ecommerce-cart'
  // TODO: Check if data exists
  // TODO: Parse JSON string back to array using JSON.parse()
  // TODO: Update global cart variable
  // TODO: Handle corrupted data by resetting to empty array
  // TODO: Log the loaded cart for debugging
}

/**
 * Save user preferences to localStorage
 * @param {Object} preferences - User preference object
 */
function saveUserPreferences(preferences) {
  // TODO: Use try-catch for error handling
  // TODO: Convert preferences to JSON and save with key 'user-preferences'
  // TODO: Log success message
  // TODO: Handle any errors gracefully
}

/**
 * Load user preferences from localStorage
 * @returns {Object} User preferences or default values
 */
function loadUserPreferences() {
  // TODO: Use try-catch for error handling
  // TODO: Get data from localStorage with key 'user-preferences'
  // TODO: Parse JSON or return default preferences if not found
  // TODO: Return preferences object
  // Default preferences structure:
  /*
  return {
    currency: 'USD',
    theme: 'light',
    notifications: true
  };
  */
}

/**
 * Save search state for persistence
 * @param {Object} searchState - Current search filters and sort options
 */
function saveSearchState(searchState) {
  // TODO: Use try-catch for error handling
  // TODO: Save search state with key 'search-state'
  // TODO: Log save action
}

/**
 * Load search state from localStorage
 * @returns {Object} Search state or default values
 */
function loadSearchState() {
  // TODO: Use try-catch for error handling
  // TODO: Get search state from localStorage with key 'search-state'
  // TODO: Parse and return, or return defaults
  // Default search state:
  /*
  return {
    searchTerm: '',
    category: 'all',
    sortBy: 'name'
  };
  */
}

/**
 * Clear all stored data (useful for testing)
 */
function clearAllStoredData() {
  // TODO: Remove 'ecommerce-cart' from localStorage
  // TODO: Remove 'user-preferences' from localStorage
  // TODO: Remove 'search-state' from localStorage
  // TODO: Remove 'ecommerce-orders' from localStorage
  // TODO: Log that data was cleared
  // TODO: Reset global variables (cart = [])
  // TODO: Refresh displays
}

// TODO: Add initialization function that loads all saved data when page loads
