/**
 * TradeWizard 3.0 PostCSS Configuration
 * 
 * This file configures the PostCSS plugins for TradeWizard 3.0.
 * Proper PostCSS configuration is essential for Tailwind CSS to work correctly.
 */

module.exports = {
  plugins: {
    // Enable nesting CSS features (important for complex components)
    'tailwindcss/nesting': {},
    
    // Main Tailwind CSS plugin 
    tailwindcss: {},
    
    // Add vendor prefixes to CSS rules using values from Can I Use
    autoprefixer: {},
    
    // Only add minification in production mode
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}
