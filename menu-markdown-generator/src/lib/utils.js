// Function to format price strings
export function formatPrice(price) {
    if (!price) return '';
    
    // Remove any existing currency symbols and formatting
    const cleanPrice = price.replace(/[^0-9.]/g, '');
    
    // Format as currency
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(parseFloat(cleanPrice));
  }
  
  // Function to get emoji for food category
  export function getCategoryEmoji(category) {
    const emojiMap = {
      appetizers: '🥗',
      starters: '🥗',
      soups: '🥣',
      salads: '🥬',
      main: '🍽️',
      entrees: '🍽️',
      desserts: '🍰',
      drinks: '🥤',
      beverages: '🥤',
      sides: '🍟',
      breakfast: '🍳',
      lunch: '🥪',
      dinner: '🍖',
      seafood: '🦐',
      pasta: '🍝',
      pizza: '🍕',
      sushi: '🍱',
      default: '🍴'
    };
  
    const lowercaseCategory = category.toLowerCase();
    return emojiMap[lowercaseCategory] || emojiMap.default;
  }
  
  // Function to sanitize text from OCR
  export function sanitizeOCRText(text) {
    if (!text) return '';
    
    return text
      // Remove multiple spaces
      .replace(/\s+/g, ' ')
      // Remove multiple newlines
      .replace(/\n+/g, '\n')
      // Remove special characters
      .replace(/[^\w\s$.,!?-]/g, '')
      // Trim whitespace
      .trim();
  }