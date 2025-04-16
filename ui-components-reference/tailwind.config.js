/**
 * TradeWizard 3.0 Tailwind CSS Configuration
 * 
 * This configuration file sets up the color system and other Tailwind settings
 * for the TradeWizard 3.0 UI components. It includes important safelist
 * configurations to prevent critical utility classes from being purged
 * during production builds.
 */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    // Ensure all paths where you use Tailwind classes are included
  ],
  theme: {
    extend: {
      colors: {
        // TradeWizard color system
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',  // Main purple
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        // Direct mapping of utility colors that might be used
        success: {
          100: '#dcfce7',
          500: '#22c55e',
          700: '#15803d',
        },
        warning: {
          100: '#fef9c3',
          500: '#eab308',
          700: '#a16207',
        },
        error: {
          100: '#fee2e2',
          500: '#ef4444',
          700: '#b91c1c',
        },
        info: {
          100: '#e0f2fe',
          500: '#0ea5e9',
          700: '#0369a1',
        },
        // Neutral colors
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      // Other theme extensions like spacing, typography, etc.
      borderRadius: {
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
    }
  },
  plugins: [],
  // CRITICAL: Safelist to prevent purging of dynamically used classes
  safelist: [
    // Primary color variants - all utility types
    'bg-primary-50', 'bg-primary-100', 'bg-primary-200', 'bg-primary-300', 'bg-primary-400',
    'bg-primary-500', 'bg-primary-600', 'bg-primary-700', 'bg-primary-800', 'bg-primary-900',
    
    'text-primary-50', 'text-primary-100', 'text-primary-200', 'text-primary-300', 'text-primary-400',
    'text-primary-500', 'text-primary-600', 'text-primary-700', 'text-primary-800', 'text-primary-900',
    
    'border-primary-50', 'border-primary-100', 'border-primary-200', 'border-primary-300', 'border-primary-400',
    'border-primary-500', 'border-primary-600', 'border-primary-700', 'border-primary-800', 'border-primary-900',
    
    'hover:bg-primary-50', 'hover:bg-primary-100', 'hover:bg-primary-200', 'hover:bg-primary-300', 
    'hover:bg-primary-400', 'hover:bg-primary-500', 'hover:bg-primary-600', 'hover:bg-primary-700', 
    'hover:bg-primary-800', 'hover:bg-primary-900',
    
    'focus:ring-primary-500', 'focus:border-primary-500',
    
    // Secondary color variants - all utility types
    'bg-secondary-50', 'bg-secondary-100', 'bg-secondary-200', 'bg-secondary-300', 'bg-secondary-400',
    'bg-secondary-500', 'bg-secondary-600', 'bg-secondary-700', 'bg-secondary-800', 'bg-secondary-900',
    
    'text-secondary-50', 'text-secondary-100', 'text-secondary-200', 'text-secondary-300', 'text-secondary-400',
    'text-secondary-500', 'text-secondary-600', 'text-secondary-700', 'text-secondary-800', 'text-secondary-900',
    
    'border-secondary-50', 'border-secondary-100', 'border-secondary-200', 'border-secondary-300', 'border-secondary-400',
    'border-secondary-500', 'border-secondary-600', 'border-secondary-700', 'border-secondary-800', 'border-secondary-900',
    
    // Status colors
    'bg-success-100', 'bg-success-500', 'bg-success-700',
    'text-success-500', 'text-success-700',
    'border-success-500',
    
    'bg-error-100', 'bg-error-500', 'bg-error-700',
    'text-error-500', 'text-error-700',
    'border-error-500',
    
    'bg-warning-100', 'bg-warning-500', 'bg-warning-700',
    'text-warning-500', 'text-warning-700',
    'border-warning-500',
    
    'bg-info-100', 'bg-info-500', 'bg-info-700',
    'text-info-500', 'text-info-700',
    'border-info-500',
    
    // Gray scale
    'bg-gray-50', 'bg-gray-100', 'bg-gray-200', 'bg-gray-300', 'bg-gray-400',
    'bg-gray-500', 'bg-gray-600', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900',
    
    'text-gray-50', 'text-gray-100', 'text-gray-200', 'text-gray-300', 'text-gray-400',
    'text-gray-500', 'text-gray-600', 'text-gray-700', 'text-gray-800', 'text-gray-900',
    
    'border-gray-50', 'border-gray-100', 'border-gray-200', 'border-gray-300', 'border-gray-400',
    'border-gray-500', 'border-gray-600', 'border-gray-700', 'border-gray-800', 'border-gray-900',
    
    // Common interactive states
    'hover:bg-gray-50', 'hover:bg-gray-100', 'hover:bg-gray-200',
    'focus:ring-2', 'focus:ring-offset-2',
    
    // Specific UI classes used in our components
    'rounded-2xl', 'rounded-xl', 'rounded-lg', 'rounded-full',
    'shadow-sm', 'shadow', 'shadow-md',
    'w-5', 'h-5', 'w-6', 'h-6', 'w-8', 'h-8', 'w-12', 'h-12', 'w-16', 'h-16',
    'max-w-[80%]',
  ]
}
