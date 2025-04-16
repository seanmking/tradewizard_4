# TradeWizard 3.0 Product Classification Implementation Guide

This guide provides an overview of the Product Classification module for TradeWizard 3.0, which implements the cascading HS code selection interface according to the project requirements.

## Architecture Overview

The implementation follows these key architectural principles:

1. **Three-Panel Layout**: A consistent layout with navigation, conversation, and context panels
2. **React Context for State Management**: Simple and effective state management without Redux or Zustand
3. **Component Separation**: Clear boundaries between UI components and business logic
4. **TypeScript Throughout**: Strong typing for all components and data

## Key Components

### 1. Three-Panel Layout

The `ThreePanelLayout` component provides the core UI structure with:
- Left navigation panel (240px) - Shows progress and navigation
- Center conversation panel (55%) - Contains Sarah (AI agent) and primary UI
- Right context panel (45%) - Shows contextual information

### 2. Product Classification Context

The `ProductClassificationContext` manages:
- Product data and selection state
- Classification workflow state (steps 0-4)
- Classification choices (chapter, heading, subheading)
- Actions for updating the state

### 3. ProductClassification Component

The main interface for selecting products and navigating the HS code classification process, featuring:
- Expandable product cards
- Step-by-step classification workflow
- Hierarchical selection interface
- Success state with code visualization

### 4. Conversation Panel

Implements Sarah, the AI assistant who guides users through the classification process:
- Conversational interface
- Contextual responses
- Quick-reply buttons
- Message history

### 5. Context Panel

Provides supporting information:
- Classification progress
- Current product details
- Help information about HS codes
- Market insights

## Implementation Steps

1. **Setup the Project**
   ```bash
   # Create a new Next.js project
   npx create-next-app@latest tradewizard-3.0 --typescript --tailwind

   # Navigate to the project directory
   cd tradewizard-3.0
   
   # Install additional dependencies
   npm install lucide-react
   ```

2. **Configure Tailwind CSS Properly**
   
   Create a proper `tailwind.config.js` file in the root of your project:

   ```js
   // tailwind.config.js
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
           // Add any other custom colors needed
         }
       }
     },
     plugins: [],
     // CRITICAL: Safelist to prevent purging of dynamically used classes
     safelist: [
       // Primary color variants
       'bg-primary-50', 'bg-primary-100', 'bg-primary-200', 'bg-primary-300', 'bg-primary-400',
       'bg-primary-500', 'bg-primary-600', 'bg-primary-700', 'bg-primary-800', 'bg-primary-900',
       'text-primary-50', 'text-primary-100', 'text-primary-200', 'text-primary-300', 'text-primary-400',
       'text-primary-500', 'text-primary-600', 'text-primary-700', 'text-primary-800', 'text-primary-900',
       'border-primary-50', 'border-primary-100', 'border-primary-200', 'border-primary-300', 'border-primary-400',
       'border-primary-500', 'border-primary-600', 'border-primary-700', 'border-primary-800', 'border-primary-900',
       
       // Secondary color variants
       'bg-secondary-50', 'bg-secondary-100', 'bg-secondary-200', 'bg-secondary-300', 'bg-secondary-400',
       'bg-secondary-500', 'bg-secondary-600', 'bg-secondary-700', 'bg-secondary-800', 'bg-secondary-900',
       'text-secondary-50', 'text-secondary-100', 'text-secondary-200', 'text-secondary-300', 'text-secondary-400',
       'text-secondary-500', 'text-secondary-600', 'text-secondary-700', 'text-secondary-800', 'text-secondary-900',
       'border-secondary-50', 'border-secondary-100', 'border-secondary-200', 'border-secondary-300', 'border-secondary-400',
       'border-secondary-500', 'border-secondary-600', 'border-secondary-700', 'border-secondary-800', 'border-secondary-900',
       
       // You can add other critical utility classes here
     ]
   }
   ```

3. **Create PostCSS Configuration**

   Create a `postcss.config.js` file in the root of your project:

   ```js
   // postcss.config.js
   module.exports = {
     plugins: {
       'tailwindcss/nesting': {},
       tailwindcss: {},
       autoprefixer: {},
     }
   }
   ```

4. **Convert Existing Components to Use the Color System**

   When adapting the provided components, replace generic color references with theme colors:

   | Original Class | Themed Replacement |
   |----------------|-------------------|
   | `bg-purple-600` | `bg-primary-600` |
   | `text-purple-700` | `text-primary-700` |
   | `border-purple-500` | `border-primary-500` |
   | `bg-blue-50` | `bg-secondary-50` |
   | `text-blue-800` | `text-secondary-800` |

5. **Create the Component Structure**
   - Create the file structure following the organization in this repository
   - Ensure proper imports between components

6. **Implement the Components**
   - Start with the context for state management
   - Implement the layout components with proper theme colors
   - Add the UI components
   - Connect everything with the page component

7. **Test the Implementation**
   ```bash
   # Run the development server
   npm run dev
   
   # Open in browser
   open http://localhost:3000
   ```

## Integration with TradeWizard 3.0

To integrate this implementation into TradeWizard 3.0:

1. **Copy the Component Files**
   - Copy all components to the appropriate directories in TradeWizard 3.0
   - Update imports to match your project structure

2. **Configure Routing**
   - Add the product classification page to your Next.js routes
   - Link to it from your assessment flow

3. **Connect with Backend Services**
   - Integrate with real HS code data sources
   - Connect with AI services for enhanced functionality
   - Implement proper state persistence

## Technical Details

### State Management

The state management is handled through React Context, which provides a simple but effective way to manage state across components without the complexity of Redux or Zustand.

```tsx
// Creating a context consumer
import { useProductClassification } from '../context/ProductClassificationContext';

// Inside a component
const {
  products,
  selectedProductId,
  toggleProductExpansion,
  // Other state and actions...
} = useProductClassification();
```

### Cascading Selection Logic

The cascading selection for HS codes works as follows:

1. User selects a Chapter (2-digit)
2. Available Headings (4-digit) are filtered based on Chapter
3. User selects a Heading
4. Available Subheadings (6-digit) are filtered based on Heading
5. User selects a Subheading
6. The full HS code is formed and assigned to the product

### Portal for Context Panel

The Context Panel is rendered using React's `createPortal` to inject content into a specific DOM node:

```tsx
// ContextPortal component simplified
function ContextPortal({ children }) {
  // Only render on client side
  const contextPanel = document.getElementById('context-panel-content');
  
  return createPortal(children, contextPanel);
}
```

## Tailwind CSS Color System Integration

### Common Pitfalls & Troubleshooting

1. **Missing Color Classes**
   - **Problem**: Tailwind purges unused classes during production builds, including custom theme colors that might be dynamically generated
   - **Solution**: Use the `safelist` option in `tailwind.config.js` to explicitly include essential color classes
   
2. **Inconsistent Color Appearance**
   - **Problem**: Design system colors aren't showing up as expected
   - **Troubleshooting Steps**:
     1. Check that your `tailwind.config.js` correctly extends the theme with your custom colors
     2. Ensure your content paths include all files where color classes are used
     3. Verify that PostCSS is properly configured (especially if you're using Tailwind v3+)
     4. Check for conflicting CSS that might be overriding your theme colors

3. **Design System Integration**
   - **Problem**: Custom color system doesn't match the design requirements
   - **Solution**: 
     - Map all colors to appropriate semantic roles (primary, secondary, etc.)
     - Use CSS variables for theming if you need runtime color switching
     - Consider a design token system for larger applications

4. **Build-time Errors**
   - **Problem**: Build failures related to Tailwind configuration
   - **Solution**:
     - Ensure Tailwind and PostCSS versions are compatible
     - Check that all plugin configurations are correct
     - Look for syntax errors in configuration files

### Using CSS Variables for Dynamic Theming (Advanced)

If your project requires dynamic theme switching, consider using CSS variables:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          // ...and so on
          600: 'var(--color-primary-600)',
        }
      }
    }
  }
}
```

Then define your variables in a global CSS file:

```css
:root {
  --color-primary-50: #f5f3ff;
  --color-primary-100: #ede9fe;
  /* ...and so on */
  --color-primary-600: #7c3aed;
}

/* For dark mode or themes */
.dark-theme {
  --color-primary-50: #2e1065;
  --color-primary-100: #4c1d95;
  /* ...reversed values */
  --color-primary-600: #c4b5fd;
}
```

## Performance Considerations

1. **Large Data Sets**
   - Implement virtualized lists for larger product collections
   - Add search and filtering for HS code options
   - Consider pagination for extensive code lists

2. **Optimizations**
   - Use memoization for expensive computations
   - Implement lazy loading for components
   - Add proper data caching

## Conclusion

This implementation provides a solid foundation for the Product Classification module in TradeWizard 3.0. It follows the architectural principles outlined in the project requirements while providing a clean, maintainable codebase that can be extended as needed.

The three-panel layout with conversation-driven guidance creates an intuitive user experience that aligns with the project's goals of simplifying export readiness assessment for South African SMEs. By following the Tailwind CSS configuration guidance, you'll avoid common pitfalls with color systems and ensure a consistent visual experience.
