import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ThreePanelLayout from '../components/ThreePanelLayout';
import { ProductClassificationProvider } from '../context/ProductClassificationContext';
import ProductClassification from '../components/ProductClassification';
import ConversationPanel from '../components/ConversationPanel';
import ContextPanel from '../components/ContextPanel';

// Main page component
export default function ProductClassificationPage() {
  return (
    <ProductClassificationProvider>
      <ThreePanelLayout currentStep={2}>
        <div className="flex flex-col h-full">
          {/* Conversation Panel Content */}
          <ConversationPanel />
          
          {/* Product Classification UI (shown in conversation panel) */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <ProductClassification />
          </div>
        </div>
        
        {/* Context Panel Content via Portal */}
        <ContextPortal>
          <ContextPanel />
        </ContextPortal>
      </ThreePanelLayout>
    </ProductClassificationProvider>
  );
}

// Portal component for context panel
function ContextPortal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Only run on client-side
    setMounted(true);
    
    return () => setMounted(false);
  }, []);
  
  // Portal target element
  const contextPanel = typeof document !== 'undefined' 
    ? document.getElementById('context-panel-content') 
    : null;
  
  // Only render on client-side and when context panel exists
  if (!mounted || !contextPanel) return null;
  
  // Use React's createPortal to render children into the context panel
  return createPortal(children, contextPanel);
}