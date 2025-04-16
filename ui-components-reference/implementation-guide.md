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

2. **Create the Component Structure**
   - Create the file structure following the organization in this repository
   - Ensure proper imports between components

3. **Implement the Components**
   - Start with the context for state management
   - Implement the layout components
   - Add the UI components
   - Connect everything with the page component

4. **Test the Implementation**
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

## Customization Options

You can customize this implementation in several ways:

1. **Styling**: Update Tailwind classes to match your design system
2. **Data Sources**: Replace sample HS code data with real data sources
3. **AI Integration**: Enhance the conversation with real AI responses
4. **State Management**: Extend the context with additional state as needed

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

The three-panel layout with conversation-driven guidance creates an intuitive user experience that aligns with the project's goals of simplifying export readiness assessment for South African SMEs.