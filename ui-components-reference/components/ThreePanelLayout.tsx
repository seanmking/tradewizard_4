import React, { ReactNode } from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';

interface ThreePanelLayoutProps {
  children: ReactNode;
  currentStep: number;
  navigationTitle?: string;
}

const STEPS = [
  { id: 1, name: 'Business Profile' },
  { id: 2, name: 'Product Selection' },
  { id: 3, name: 'Production Capacity' },
  { id: 4, name: 'Target Markets' },
  { id: 5, name: 'Certifications' },
];

export default function ThreePanelLayout({ 
  children, 
  currentStep,
  navigationTitle = 'Export Assessment'
}: ThreePanelLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Navigation Panel */}
      <div className="hidden md:block w-64 bg-white border-r border-gray-200 p-6">
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800">{navigationTitle}</h2>
          <p className="text-sm text-gray-500 mt-1">Step {currentStep} of {STEPS.length}</p>
        </div>
        
        <div className="space-y-1">
          {STEPS.map((step) => {
            const isComplete = step.id < currentStep;
            const isCurrent = step.id === currentStep;
            
            return (
              <div 
                key={step.id}
                className={`flex items-center py-2 px-3 rounded-lg ${
                  isCurrent 
                    ? 'bg-purple-100' 
                    : isComplete 
                      ? 'bg-gray-100' 
                      : ''
                }`}
              >
                <div 
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-white font-medium text-sm ${
                    isCurrent 
                      ? 'bg-purple-600' 
                      : isComplete 
                        ? 'bg-gray-300' 
                        : 'bg-gray-200'
                  }`}
                >
                  {step.id}
                </div>
                <span 
                  className={`ml-3 font-medium ${
                    isCurrent 
                      ? 'text-purple-700' 
                      : isComplete 
                        ? 'text-gray-500' 
                        : 'text-gray-400'
                  }`}
                >
                  {step.name}
                </span>
                {isComplete && (
                  <CheckCircle className="ml-auto text-green-500" size={16} />
                )}
                {isCurrent && (
                  <ChevronRight className="ml-auto text-purple-600" size={16} />
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Main Content Area (split into Conversation and Context panels) */}
      <div className="flex-1 flex overflow-hidden">
        {/* Center Conversation Panel */}
        <div className="w-[55%] overflow-auto border-r border-gray-200">
          <div className="max-w-3xl mx-auto px-4 py-8">
            {/* This will be the conversation with Sarah */}
            {children}
          </div>
        </div>
        
        {/* Right Context Panel */}
        <div className="w-[45%] bg-gray-50 overflow-auto">
          <div className="h-full p-6">
            {/* This will be the context-specific content */}
            <div id="context-panel-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}