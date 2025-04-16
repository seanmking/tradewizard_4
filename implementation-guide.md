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
   npx create-next-app@latest tradewizard-3 --typescript --tailwind

   # Navigate to the project directory
   cd tradewizard-3
   
   # Install additional dependencies
   npm install lucide-react
   ```

2. **Create the Component Structure**
   Create the following directory structure in your project:
   ```
   components/
   ├── ThreePanelLayout.tsx
   ├── ProductClassificationContext.tsx
   ├── ProductClassification.tsx
   ├── ConversationPanel.tsx
   ├── ContextPanel.tsx
   ├── ProductClassificationPage.tsx
   └── hsCodeData.ts
   ```

3. **Implement the Core Components**
   - Copy the provided component code to their respective files
   - Ensure all TypeScript types are properly imported
   - Set up the Next.js page to use the dynamic import pattern

4. **Add the Page Route**
   - Create `pages/product-classification.tsx` using the provided code
   - This uses dynamic imports to ensure client-side rendering of DOM-dependent components

5. **Test the Implementation**
   ```bash
   # Run the development server
   npm run dev
   
   # Open in browser
   open http://localhost:3000/product-classification
   ```

## Integration Guidelines

### Connecting to Backend Services

In a production environment, you would connect this UI to real services:

1. **HS Code Data**
   - Replace the mock data in `hsCodeData.ts` with data loaded from an API or CSV file
   - Implement search functionality for larger datasets
   - Add country-specific HS code extensions

2. **AI Agent Integration**
   - Replace the simulated responses in `ConversationPanel.tsx` with real API calls
   - Implement proper conversation history management
   - Add typing indicators and other UX enhancements

3. **State Persistence**
   - Add API endpoints to save classification progress
   - Implement session management for multi-step workflows
   - Add resume capability for returning users

### Extending the Component

The implementation is designed to be extensible:

1. **Adding New Fields**
   - Extend the `Product` interface in `ProductClassificationContext.tsx`
   - Update the UI components to display new fields
   - Add additional form controls as needed

2. **Enhanced Validation**
   - Add validation rules to ensure correct classification
   - Implement confidence scoring for suggestions
   - Add warning indicators for potential misclassifications

3. **Additional Panels**
   - The three-panel layout can accommodate additional content
   - Consider adding tabs to the context panel for different types of information
   - Add more detailed product visualizations

## Performance Considerations

1. **Large Datasets**
   - Implement virtualized lists for large product collections
   - Add search and filtering capabilities
   - Consider pagination for HS code options

2. **State Management**
   - The current implementation uses React Context which is suitable for moderate state complexity
   - For larger applications, consider isolating specific state slices
   - Implement memoization for expensive computations

3. **API Integration**
   - Add caching for frequently accessed data
   - Implement loading states for asynchronous operations
   - Add error boundaries for graceful failure handling

## Next Steps

1. **Implement Real Data Sources**
   - Connect to a real HS code database (CSV or API)
   - Implement proper search and filtering
   - Add country-specific extensions

2. **Integration with Overall Flow**
   - Connect to previous and next steps in the assessment flow
   - Implement state persistence between steps
   - Add validation before proceeding to next steps

3. **Enhanced AI Integration**
   - Implement real-time AI suggestions for classification
   - Add product image analysis for classification hints
   - Improve conversational guidance with LLM integration

4. **Mobile Optimization**
   - Test and optimize for mobile devices
   - Implement responsive adaptations for the three-panel layout
   - Add touch-friendly controls for mobile users

## Conclusion

This implementation provides a solid foundation for the Product Classification module in TradeWizard 3.0. It follows the architectural principles outlined in the project requirements while providing a clean, maintainable codebase that can be extended as needed.

The three-panel layout with conversation-driven guidance creates an intuitive user experience that aligns with the project's goals of simplifying export readiness assessment for South African SMEs.