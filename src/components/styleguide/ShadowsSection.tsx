import React from 'react';

const ShadowsSection: React.FC = () => {
  const shadowValues = [
    {
      name: 'Depth 0.5',
      class: 'shadow-depth-05',
      description: 'Subtle elevation for hover states and small components',
      css: '0 0.125rem 0.1875rem 0 rgba(53, 59, 70, 0.15)',
      usage: 'Cards on hover, small buttons, tooltips'
    },
    {
      name: 'Depth 1',
      class: 'shadow-depth-1',
      description: 'Standard elevation for cards and containers',
      css: '0 0.125rem 0.875rem 0 rgba(53, 59, 70, 0.15)',
      usage: 'Default cards, form containers, navigation items'
    },
    {
      name: 'Depth 2',
      class: 'shadow-depth-2',
      description: 'Medium elevation for floating elements',
      css: '0 0.125rem 0.25rem 0 rgba(12, 11, 59, 0.2), 0 0.0625rem 0.625rem 0 rgba(12, 11, 59, 0.12)',
      usage: 'Dropdowns, popovers, floating panels'
    },
    {
      name: 'Depth 3',
      class: 'shadow-depth-3',
      description: 'High elevation for important overlays',
      css: '0 0.25rem 0.75rem 0 rgba(53, 59, 70, 0.4)',
      usage: 'Modals, important notifications, primary CTAs'
    },
    {
      name: 'Depth 4',
      class: 'shadow-depth-4',
      description: 'Maximum elevation for top-level overlays',
      css: '0 0.75rem 1.5625rem 0 rgba(53, 59, 70, 0.4), 0 0 0.25rem 0 rgba(53, 59, 70, 0.3)',
      usage: 'Full-screen modals, drawers, major overlays'
    },
    {
      name: 'Input Overlay',
      class: 'shadow-input-overlay',
      description: 'Special shadow for input focus states and overlays',
      css: '0 0.25rem 0.75rem 0 rgba(0, 0, 0, 0.15)',
      usage: 'Input focus states, search overlays, autocomplete'
    }
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Shadows</h2>
        <p className="text-sm text-gray-600 mb-8">
          Shadows create depth and hierarchy in your interface, helping users understand the spatial 
          relationships between elements. Our shadow system uses consistent elevation levels to maintain 
          visual coherence while providing clear interaction feedback.
        </p>
        
        {/* Shadow Scale */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Shadow Scale</h3>
          <div className="space-y-8">
            {shadowValues.map((shadow, index) => (
              <div key={shadow.name} className="border border-gray-200 rounded-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Shadow Information */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 mb-2">{shadow.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{shadow.description}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Tailwind Class:</span>
                          <span className="ml-2 font-mono text-blue-600">{shadow.class}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">CSS Value:</span>
                          <div className="mt-1 p-2 bg-gray-50 rounded text-xs font-mono text-gray-800 break-all">
                            box-shadow: {shadow.css};
                          </div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Common Usage:</span>
                          <span className="ml-2 text-gray-600">{shadow.usage}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Examples */}
                  <div className="space-y-4">
                    <div className="text-sm font-medium text-gray-700 mb-3">Visual Examples:</div>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Card Example */}
                      <div className={`p-4 bg-white rounded-lg border border-gray-100 ${shadow.class}`}>
                        <div className="w-full h-8 bg-gray-200 rounded mb-2"></div>
                        <div className="w-3/4 h-3 bg-gray-100 rounded mb-1"></div>
                        <div className="w-1/2 h-3 bg-gray-100 rounded"></div>
                      </div>

                      {/* Button Example */}
                      <div className="flex items-center justify-center">
                        <button className={`px-4 py-2 bg-p-300 text-white rounded-lg text-sm font-medium ${shadow.class} hover:bg-p-400 transition-all duration-200`}>
                          Button
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Interactive Shadow Comparison</h3>
          <p className="text-sm text-gray-600 mb-6">
            Hover over each card to see the shadow effect in action:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shadowValues.slice(0, 6).map((shadow, index) => (
              <div 
                key={shadow.name}
                className={`p-6 bg-white rounded-lg border border-gray-100 transition-all duration-300 cursor-pointer hover:${shadow.class} hover:-translate-y-1`}
              >
                <div className="text-sm font-medium text-gray-800 mb-2">{shadow.name}</div>
                <div className="text-xs text-gray-600 mb-3">{shadow.description}</div>
                <div className="text-xs font-mono text-blue-600">{shadow.class}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Guidelines by Context */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Usage by Context</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-md font-medium text-blue-800 mb-4">Static Elements</h4>
              <div className="space-y-2 text-sm text-blue-700">
                <p><strong>Depth 0.5:</strong> Subtle cards, list items</p>
                <p><strong>Depth 1:</strong> Standard cards, containers</p>
                <p><strong>Depth 2:</strong> Important content blocks</p>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-md font-medium text-green-800 mb-4">Interactive Elements</h4>
              <div className="space-y-2 text-sm text-green-700">
                <p><strong>Depth 1:</strong> Button hover states</p>
                <p><strong>Depth 2:</strong> Dropdowns, tooltips</p>
                <p><strong>Depth 3:</strong> Modals, important overlays</p>
                <p><strong>Depth 4:</strong> Full-screen overlays</p>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="text-md font-medium text-purple-800 mb-4">Form Elements</h4>
              <div className="space-y-2 text-sm text-purple-700">
                <p><strong>Input Overlay:</strong> Focus states, search</p>
                <p><strong>Depth 1:</strong> Form containers</p>
                <p><strong>Depth 2:</strong> Autocomplete dropdowns</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="text-md font-medium text-orange-800 mb-4">Navigation</h4>
              <div className="space-y-2 text-sm text-orange-700">
                <p><strong>Depth 1:</strong> Navigation bars</p>
                <p><strong>Depth 2:</strong> Dropdown menus</p>
                <p><strong>Depth 3:</strong> Mobile navigation drawers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Examples */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Shadow Animations</h3>
          <p className="text-sm text-gray-600 mb-6">
            Examples of how shadows can be used with animations for enhanced user experience:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hover Elevation */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-700">Hover Elevation</h4>
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-depth-05 hover:shadow-depth-2 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="text-sm font-medium text-gray-800">Hover me</div>
                <div className="text-xs text-gray-600 mt-1">Depth 0.5 → Depth 2</div>
              </div>
            </div>

            {/* Click Depth */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-700">Click Feedback</h4>
              <button className="w-full p-4 bg-p-300 text-white rounded-lg shadow-depth-2 hover:shadow-depth-3 active:shadow-depth-1 active:translate-y-0.5 transition-all duration-150 font-medium">
                <div className="text-sm">Click me</div>
                <div className="text-xs opacity-90 mt-1">Active state feedback</div>
              </button>
            </div>

            {/* Focus State */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-700">Focus State</h4>
              <input 
                type="text" 
                placeholder="Focus me"
                className="w-full p-4 border border-gray-300 rounded-lg shadow-depth-05 focus:shadow-input-overlay focus:border-b-200 outline-none transition-all duration-200"
              />
              <div className="text-xs text-gray-600">Depth 0.5 → Input Overlay</div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-md font-medium text-gray-800 mb-3">Shadow Usage Guidelines</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Hierarchy:</strong> Use deeper shadows for elements that should appear closer to the user</p>
            <p><strong>Consistency:</strong> Maintain consistent shadow depths for similar component types</p>
            <p><strong>Performance:</strong> Avoid excessive shadow blur values that may impact rendering performance</p>
            <p><strong>Accessibility:</strong> Ensure shadows don't interfere with text readability or color contrast</p>
            <p><strong>Context:</strong> Consider the background color when choosing shadow opacity and color</p>
            <p><strong>Animation:</strong> Use smooth transitions when changing shadow depths for better UX</p>
            <p><strong>Mobile:</strong> Consider reducing shadow intensity on smaller screens for better performance</p>
            <p><strong>Dark Mode:</strong> Adjust shadow colors and opacity for dark theme compatibility</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShadowsSection;