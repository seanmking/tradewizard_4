# TradeWizard 3.0 UI Components Reference

This folder contains a clean, modern implementation of the TradeWizard 3.0 Product Classification UI components using Next.js 14, TypeScript, and Tailwind CSS.

## Purpose

These components serve as reference implementations that demonstrate:
- Modern architecture patterns
- Clean separation of concerns
- Simple state management using React Context
- The three-panel layout design
- Proper TypeScript typing

## Folder Structure

```
ui-components-reference/
├── components/       # UI components
├── context/          # React Context for state management
├── data/             # Sample data for demonstration
├── pages/            # Next.js page implementation
└── implementation-guide.md  # Detailed implementation guide
```

## Key Components

1. **ThreePanelLayout** - Core layout structure with navigation, conversation, and context panels
2. **ProductClassification** - Main product classification interface with cascading selection
3. **ConversationPanel** - Implementation of the Sarah AI agent conversation interface
4. **ContextPanel** - Supporting information panel that accompanies the main workflow
5. **ProductClassificationContext** - React Context for state management

## Implementation Notes

- Uses React Context instead of Redux or Zustand for simpler state management
- Built with TypeScript for strong typing throughout
- Implements the cascading HS code selection UI
- Follows the three-panel layout design
- Created for integration with Next.js 14

## How to Use

These components can be:
1. Referenced as implementation examples
2. Copied and adapted into your Next.js project
3. Used as a starting point for your own implementation

For detailed implementation instructions, see the `implementation-guide.md` file.
