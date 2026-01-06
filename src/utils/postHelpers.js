/**
 * Calculate reading time for text content
 * @param {string} text - The text content to analyze
 * @returns {number} - Estimated reading time in minutes
 */
export const calculateReadingTime = (text) => {
  if (!text) return 0;
  
  // Remove HTML tags
  const plainText = text.replace(/<[^>]*>/g, '');
  
  // Count words (assuming average reading speed of 200 words per minute)
  const words = plainText.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  
  return minutes;
};

/**
 * Extract plain text from HTML
 * @param {string} html - HTML string
 * @returns {string} - Plain text
 */
export const stripHtml = (html) => {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
};

/**
 * Create excerpt from text
 * @param {string} text - Text to excerpt
 * @param {number} maxLength - Maximum length in characters
 * @returns {string} - Excerpted text
 */
export const createExcerpt = (text, maxLength = 150) => {
  const plainText = stripHtml(text);
  if (plainText.length <= maxLength) return plainText;
  
  return plainText.substring(0, maxLength).trim() + '...';
};

/**
 * Extract tags from WordPress post categories
 * @param {Array} categories - WordPress categories array
 * @returns {Array} - Array of tag names
 */
export const extractTags = (categories) => {
  if (!categories || !Array.isArray(categories)) return [];
  return categories.map(cat => cat.name || cat);
};

/**
 * Filter posts by search query
 * @param {Array} posts - Array of posts
 * @param {string} query - Search query
 * @returns {Array} - Filtered posts
 */
export const filterPosts = (posts, query) => {
  if (!query || !query.trim()) return posts;
  
  const lowerQuery = query.toLowerCase();
  
  return posts.filter(post => {
    const title = (post.title?.rendered || post.title || '').toLowerCase();
    const content = stripHtml(post.content?.rendered || post.content || '').toLowerCase();
    const excerpt = stripHtml(post.excerpt?.rendered || post.excerpt || '').toLowerCase();
    
    return title.includes(lowerQuery) || 
           content.includes(lowerQuery) || 
           excerpt.includes(lowerQuery);
  });
};

/**
 * Sort posts by date
 * @param {Array} posts - Array of posts
 * @param {string} order - 'asc' or 'desc'
 * @returns {Array} - Sorted posts
 */
export const sortPostsByDate = (posts, order = 'desc') => {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return order === 'desc' ? dateB - dateA : dateA - dateB;
  });
};
