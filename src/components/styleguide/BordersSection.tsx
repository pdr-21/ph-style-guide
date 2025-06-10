import React from 'react';

const BordersSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Borders & Focus Rings</h2>
        <p className="text-sm text-gray-600 mb-8">
          Focus rings provide essential visual feedback for keyboard navigation and accessibility. 
          We use box-shadow instead of borders to prevent layout shifts and maintain consistent component sizing.
        </p>
        
        {/* Why Box Shadow */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Why Box-Shadow for Focus Rings?</h3>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="space-y-3 text-sm text-blue-800">
              <p><strong>No Layout Shift:</strong> Box-shadow appears outside the element's box model, preventing size changes</p>
              <p><strong>Consistent Sizing:</strong> Components maintain exact dimensions regardless of focus state</p>
              <p><strong>Better Performance:</strong> No reflow or repaint of surrounding elements</p>
              <p><strong>Accessibility:</strong> Clear visual indication without disrupting layout</p>
            </div>
          </div>
        </div>

        {/* Focus Ring Types */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Focus Ring Types</h3>
          
          {/* Normal Focus */}
          <div className="mb-8">
            <h4 className="text-md font-medium text-gray-700 mb-4">Normal Focus</h4>
            <p className="text-sm text-gray-600 mb-4">
              Used for text inputs, text areas, and smaller components in general. 
              Features a 2px primary ring with a subtle 1px outer border.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <div className="text-sm text-gray-700 mb-2">
                <strong>CSS:</strong> <span className="font-mono">box-shadow: 0 0 0 2px #4D3EE0, 0 0 0 3px #AEB5C2;</span>
              </div>
              <div className="text-sm text-gray-700">
                <strong>Tailwind:</strong> <span className="font-mono">shadow-focus-normal</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Text Input Example</label>
                <input 
                  type="text" 
                  placeholder="Focus me with Tab key"
                  className="w-full max-w-md px-3 py-2 border border-n-100 rounded-md focus:shadow-focus-normal focus:border-transparent outline-none text-sm transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Textarea Example</label>
                <textarea 
                  placeholder="Focus me with Tab key"
                  rows={3}
                  className="w-full max-w-md px-3 py-2 border border-n-100 rounded-md focus:shadow-focus-normal focus:border-transparent outline-none text-sm transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Small Button Example</label>
                <button className="px-4 py-2 bg-b-200 text-white rounded-md focus:shadow-focus-normal outline-none text-sm font-medium hover:bg-b-300 transition-all">
                  Focus me with Tab key
                </button>
              </div>
            </div>
          </div>

          {/* Medium Focus */}
          <div className="mb-8">
            <h4 className="text-md font-medium text-gray-700 mb-4">Medium Focus</h4>
            <p className="text-sm text-gray-600 mb-4">
              Used for dropdowns, larger components, and prominent interactive elements. 
              Features a 2px primary ring with a 6px outer glow for enhanced visibility.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <div className="text-sm text-gray-700 mb-2">
                <strong>CSS:</strong> <span className="font-mono">box-shadow: 0 0 0 2px #4D3EE0, 0 0 0 8px #CAC1F2;</span>
              </div>
              <div className="text-sm text-gray-700">
                <strong>Tailwind:</strong> <span className="font-mono">shadow-focus-medium</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dropdown Example</label>
                <select className="w-full max-w-md px-3 py-2 border border-n-100 rounded-md focus:shadow-focus-medium focus:border-transparent outline-none text-sm transition-all bg-white">
                  <option>Focus me with Tab key</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Large Button Example</label>
                <button className="px-6 py-3 bg-p-300 text-white rounded-lg focus:shadow-focus-medium outline-none text-base font-medium hover:bg-p-400 transition-all">
                  Focus me with Tab key
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Component Example</label>
                <div 
                  tabIndex={0}
                  className="w-full max-w-md p-4 bg-white border border-n-75 rounded-lg focus:shadow-focus-medium outline-none transition-all cursor-pointer hover:border-n-100"
                >
                  <div className="text-sm font-medium text-gray-800">Interactive Card</div>
                  <div className="text-xs text-gray-600 mt-1">Focus me with Tab key</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Interactive Demo</h3>
          <p className="text-sm text-gray-600 mb-4">
            Use the Tab key to navigate through these elements and see the focus rings in action:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-50 rounded-lg">
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-700">Normal Focus Elements</h4>
              <input 
                type="text" 
                placeholder="Input field"
                className="w-full px-3 py-2 border border-n-100 rounded-md focus:shadow-focus-normal focus:border-transparent outline-none text-sm transition-all"
              />
              <button className="w-full px-4 py-2 bg-b-200 text-white rounded-md focus:shadow-focus-normal outline-none text-sm font-medium hover:bg-b-300 transition-all">
                Small Button
              </button>
              <input 
                type="checkbox" 
                className="w-4 h-4 text-b-200 border-n-100 rounded focus:shadow-focus-normal focus:border-transparent outline-none transition-all"
              />
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-700">Medium Focus Elements</h4>
              <select className="w-full px-3 py-2 border border-n-100 rounded-md focus:shadow-focus-medium focus:border-transparent outline-none text-sm transition-all bg-white">
                <option>Dropdown</option>
                <option>Option 1</option>
              </select>
              <button className="w-full px-6 py-3 bg-p-300 text-white rounded-lg focus:shadow-focus-medium outline-none text-base font-medium hover:bg-p-400 transition-all">
                Large Button
              </button>
              <div 
                tabIndex={0}
                className="w-full p-3 bg-white border border-n-75 rounded-lg focus:shadow-focus-medium outline-none transition-all cursor-pointer hover:border-n-100"
              >
                <div className="text-sm font-medium text-gray-800">Focusable Card</div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Guidelines */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Implementation Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-md font-medium text-green-800 mb-4">✅ Best Practices</h4>
              <div className="space-y-2 text-sm text-green-700">
                <p>• Use <span className="font-mono">shadow-focus-normal</span> for small interactive elements</p>
                <p>• Use <span className="font-mono">shadow-focus-medium</span> for large or prominent elements</p>
                <p>• Always include <span className="font-mono">outline-none</span> when using custom focus rings</p>
                <p>• Add <span className="font-mono">transition-all</span> for smooth focus transitions</p>
                <p>• Test focus rings with keyboard navigation</p>
              </div>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="text-md font-medium text-red-800 mb-4">❌ Avoid</h4>
              <div className="space-y-2 text-sm text-red-700">
                <p>• Using border properties for focus states</p>
                <p>• Removing focus indicators without replacement</p>
                <p>• Making focus rings too subtle or invisible</p>
                <p>• Inconsistent focus ring styles across components</p>
                <p>• Forgetting to test with keyboard navigation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-md font-medium text-gray-800 mb-3">Focus Ring Usage Guidelines</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Accessibility:</strong> Focus rings are essential for keyboard navigation and screen readers</p>
            <p><strong>Consistency:</strong> Use the same focus ring type for similar component sizes</p>
            <p><strong>Visibility:</strong> Ensure focus rings are visible against all background colors</p>
            <p><strong>Performance:</strong> Box-shadow is more performant than border changes</p>
            <p><strong>Testing:</strong> Always test focus rings with actual keyboard navigation</p>
            <p><strong>Color Contrast:</strong> Maintain sufficient contrast ratios for accessibility compliance</p>
            <p><strong>Responsive:</strong> Focus rings should work well across all screen sizes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BordersSection;