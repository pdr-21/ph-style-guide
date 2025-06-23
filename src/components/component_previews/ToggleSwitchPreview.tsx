import React, { useState } from 'react';
import ToggleSwitch from '../ui/ToggleSwitch';
import { Target, Zap, AlertTriangle, Home, Settings, User } from 'lucide-react';

const ToggleSwitchPreview: React.FC = () => {
  const [textOnlyActive, setTextOnlyActive] = useState('automatic');
  const [iconOnlyActive, setIconOnlyActive] = useState('home');
  const [iconTextActive, setIconTextActive] = useState('goals');

  // Text-only options
  const textOnlyOptions = [
    { id: 'automatic', label: 'Automatic' },
    { id: 'goals', label: 'Goals' },
    { id: 'problems', label: 'Problems' },
  ];

  // Icon-only options
  const iconOnlyOptions = [
    { id: 'home', icon: Home },
    { id: 'settings', icon: Settings },
    { id: 'user', icon: User },
  ];

  // Icon + text options
  const iconTextOptions = [
    { id: 'automatic', label: 'Automatic', icon: Zap },
    { id: 'goals', label: 'Goals', icon: Target },
    { id: 'problems', label: 'Problems', icon: AlertTriangle },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-4xl space-y-12">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Toggle Switch Component</h1>
          <p className="text-gray-600">Custom toggle switch component with smooth animations</p>
        </div>

        {/* Text Only Toggle */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Text Only Toggle</h2>
            <div className="flex justify-center">
              <ToggleSwitch
                options={textOnlyOptions}
                activeOptionId={textOnlyActive}
                onOptionChange={setTextOnlyActive}
              />
            </div>
            <div className="text-center mt-4 text-sm text-gray-600">
              Active: <span className="font-mono">{textOnlyActive}</span>
            </div>
          </div>

          {/* Icon Only Toggle */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Icon Only Toggle</h2>
            <div className="flex justify-center">
              <ToggleSwitch
                options={iconOnlyOptions}
                activeOptionId={iconOnlyActive}
                onOptionChange={setIconOnlyActive}
              />
            </div>
            <div className="text-center mt-4 text-sm text-gray-600">
              Active: <span className="font-mono">{iconOnlyActive}</span>
            </div>
          </div>

          {/* Icon + Text Toggle */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Icon + Text Toggle</h2>
            <div className="flex justify-center">
              <ToggleSwitch
                options={iconTextOptions}
                activeOptionId={iconTextActive}
                onOptionChange={setIconTextActive}
              />
            </div>
            <div className="text-center mt-4 text-sm text-gray-600">
              Active: <span className="font-mono">{iconTextActive}</span>
            </div>
          </div>

          {/* Different Sizes Demo */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Size Variations</h2>
            <div className="space-y-6">
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm text-gray-600">Default Size</span>
                <ToggleSwitch
                  options={textOnlyOptions}
                  activeOptionId={textOnlyActive}
                  onOptionChange={setTextOnlyActive}
                />
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm text-gray-600">With Custom Styling</span>
                <ToggleSwitch
                  options={iconTextOptions}
                  activeOptionId={iconTextActive}
                  onOptionChange={setIconTextActive}
                  className="scale-110"
                />
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Interactive Demo</h2>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Click on the options to see the smooth animation between states:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-gray-50 rounded-lg">
              <div className="text-center space-y-4">
                <h3 className="text-sm font-medium text-gray-700">Dashboard Mode</h3>
                <ToggleSwitch
                  options={textOnlyOptions}
                  activeOptionId={textOnlyActive}
                  onOptionChange={setTextOnlyActive}
                />
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-sm font-medium text-gray-700">Navigation</h3>
                <ToggleSwitch
                  options={iconOnlyOptions}
                  activeOptionId={iconOnlyActive}
                  onOptionChange={setIconOnlyActive}
                />
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-sm font-medium text-gray-700">Enhanced Mode</h3>
                <ToggleSwitch
                  options={iconTextOptions}
                  activeOptionId={iconTextActive}
                  onOptionChange={setIconTextActive}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Usage Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Component Features</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Smooth Animation:</strong> 300ms ease-in-out transition between states</p>
                <p><strong>Flexible Content:</strong> Supports text-only, icon-only, or icon+text combinations</p>
                <p><strong>Responsive Design:</strong> Automatically adjusts to content size</p>
                <p><strong>Accessible:</strong> Proper button semantics and keyboard navigation</p>
                <p><strong>Customizable:</strong> Accepts className prop for custom styling</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Best Practices</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Content:</strong> Keep option labels concise (1-2 words)</p>
                <p><strong>Icons:</strong> Use consistent icon sizes (12px recommended)</p>
                <p><strong>Options:</strong> Limit to 2-4 options for optimal UX</p>
                <p><strong>Spacing:</strong> Ensure adequate touch targets for mobile</p>
                <p><strong>Context:</strong> Use for related options that are mutually exclusive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitchPreview;