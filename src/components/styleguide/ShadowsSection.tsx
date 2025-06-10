import React from 'react';

const ShadowsSection: React.FC = () => {
  const shadowValues = [
    {
      name: 'Depth 0.5',
      class: 'shadow-depth-05',
      css: '0px 2px 3px 0px #353B4626',
      description: 'Subtle elevation for hover states and minor depth',
      usage: 'Hover effects, subtle cards, minor elevation'
    },
    {
      name: 'Depth 1',
      class: 'shadow-depth-1',
      css: '0px 2px 14px 0px #353B4626',
      description: 'Light shadow for standard cards and containers',
      usage: 'Standard cards, form containers, content blocks'
    },
    {
      name: 'Depth 2',
      class: 'shadow-depth-2',
      css: '0px 2px 4px 0px #0C0B3B33, 0px 1px 10px 0px #0C0B3B1F, 0px 2px 5px 0px #0C0B3B24',
      description: 'Medium shadow with multiple layers for enhanced depth',
      usage: 'Elevated cards, navigation bars, important containers'
    },
    {
      name: 'Depth 3',
      class: 'shadow-depth-3',
      css: '0px 4px 12px 0px #353B4666',
      description: 'Strong shadow for prominent elements',
      usage: 'Modals, dropdowns, floating panels'
    },
    {
      name: 'Depth 4',
      class: 'shadow-depth-4',
      css: '0px 12px 25px 0px #353B4666, 0px 0px 4px 0px #353B464D',
      description: 'Maximum depth with dual shadow layers',
      usage: 'High-priority modals, overlays, hero sections'
    },
    {
      name: 'Input Overlay',
      class: 'shadow-input-overlay',
      css: '0px 4px 12px 0px #00000026',
      description: 'Special shadow for input overlays and dropdowns',
      usage: 'Dropdown menus, autocomplete overlays, input suggestions'
    }
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Shadows</h2>
        <p className="text-sm text-gray-600 mb-8">
          Shadows create depth and hierarchy in your interface, helping users understand the spatial 
          relationships between elements. Our shadow system provides consistent elevation levels 
          from subtle depth to prominent overlays.
        </p>
        
        {/* Shadow Scale */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Shadow Scale</h3>
          <div className="space-y-8">
            {shadowValues.map((shadow, index) => (
              <div key={shadow.name} className="border border-gray-200 rounded-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Shadow Info */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-md font-medium text-gray-800 mb-2">{shadow.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{shadow.description}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Class:</span>
                          <span className="font-mono ml-2 text-gray-600">{shadow.class}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">CSS:</span>
                          <div className="font-mono text-xs text-gray-600 mt-1 p-2 bg-gray-50 rounded break-all">
                            box-shadow: {shadow.css};
                          </div>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Usage:</span>
                          <span className="ml-2 text-gray-600">{shadow.usage}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual Example */}
                  <div className="flex items-center justify-center p-8">
                    <div 
                      className={`w-32 h-24 bg-white border border-gray-100 rounded-lg flex items-center justify-center ${shadow.class}`}
                    >
                      <div className="text-center">
                        <div className="text-sm font-medium text-gray-800">{shadow.name}</div>
                        <div className="text-xs text-gray-500 mt-1">Example</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Usage Examples</h3>
          
          {/* Cards with Different Shadows */}
          <div className="mb-8">
            <h4 className="text-md font-medium text-gray-700 mb-4">Card Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-depth-05 border border-gray-100">
                <div className="text-sm font-medium text-gray-800 mb-2">Subtle Card</div>
                <div className="text-xs text-gray-600 mb-3">Depth 0.5 - Minimal elevation</div>
                <div className="text-xs text-gray-500">Perfect for hover states and subtle content separation</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-depth-1 border border-gray-100">
                <div className="text-sm font-medium text-gray-800 mb-2">Standard Card</div>
                <div className="text-xs text-gray-600 mb-3">Depth 1 - Standard elevation</div>
                <div className="text-xs text-gray-500">Ideal for content cards and form containers</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-depth-2 border border-gray-100">
                <div className="text-sm font-medium text-gray-800 mb-2">Elevated Card</div>
                <div className="text-xs text-gray-600 mb-3">Depth 2 - Enhanced elevation</div>
                <div className="text-xs text-gray-500">Great for important content and navigation elements</div>
              </div>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="mb-8">
            <h4 className="text-md font-medium text-gray-700 mb-4">Interactive Elements</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="relative">
                  <button className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-depth-1 hover:shadow-depth-2 transition-shadow duration-200 text-left">
                    <div className="text-sm font-medium text-gray-800">Dropdown Button</div>
                    <div className="text-xs text-gray-600">Hover to see shadow change</div>
                  </button>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg shadow-input-overlay p-4">
                  <div className="text-sm font-medium text-gray-800 mb-2">Input Overlay</div>
                  <div className="text-xs text-gray-600">Uses input-overlay shadow for dropdown menus</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-depth-3 border border-gray-100">
                  <div className="text-sm font-medium text-gray-800 mb-2">Modal Content</div>
                  <div className="text-xs text-gray-600 mb-3">Depth 3 - Strong elevation</div>
                  <div className="text-xs text-gray-500">Perfect for modals and floating panels</div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-depth-4 border border-gray-100">
                  <div className="text-sm font-medium text-gray-800 mb-2">Hero Section</div>
                  <div className="text-xs text-gray-600 mb-3">Depth 4 - Maximum elevation</div>
                  <div className="text-xs text-gray-500">For high-priority content and overlays</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shadow Hierarchy */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Shadow Hierarchy</h3>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {shadowValues.map((shadow, index) => (
                <div key={shadow.name} className="text-center">
                  <div 
                    className={`w-16 h-16 bg-white rounded-lg mx-auto mb-3 flex items-center justify-center ${shadow.class}`}
                  >
                    <span className="text-xs font-medium text-gray-600">{index === 0 ? '0.5' : index === shadowValues.length - 1 ? 'IO' : index}</span>
                  </div>
                  <div className="text-xs text-gray-600">{shadow.name}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <div className="text-sm text-gray-600">← Lower Elevation</div>
              <div className="text-xs text-gray-500 mt-1">Higher Elevation →</div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-md font-medium text-green-800 mb-4">✅ Do</h4>
              <div className="space-y-2 text-sm text-green-700">
                <p>• Use shadows consistently to establish hierarchy</p>
                <p>• Apply lighter shadows for subtle elevation</p>
                <p>• Use stronger shadows for modals and overlays</p>
                <p>• Combine shadows with transitions for smooth interactions</p>
                <p>• Test shadows on different background colors</p>
                <p>• Use input-overlay shadow for dropdown menus</p>
              </div>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="text-md font-medium text-red-800 mb-4">❌ Don't</h4>
              <div className="space-y-2 text-sm text-red-700">
                <p>• Mix different shadow styles inconsistently</p>
                <p>• Use overly strong shadows for small elements</p>
                <p>• Apply shadows to every element</p>
                <p>• Create custom shadows outside the system</p>
                <p>• Use shadows as the only way to show hierarchy</p>
                <p>• Forget to consider performance with many shadows</p>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-md font-medium text-gray-800 mb-3">Shadow Usage Guidelines</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Depth 0.5:</strong> Subtle hover effects, minor content separation, gentle elevation</p>
            <p><strong>Depth 1:</strong> Standard cards, form containers, basic content blocks</p>
            <p><strong>Depth 2:</strong> Elevated cards, navigation elements, important containers</p>
            <p><strong>Depth 3:</strong> Modals, dropdowns, floating panels, prominent elements</p>
            <p><strong>Depth 4:</strong> High-priority modals, overlays, hero sections, maximum elevation</p>
            <p><strong>Input Overlay:</strong> Dropdown menus, autocomplete suggestions, input-related overlays</p>
            <p><strong>Performance:</strong> Use shadows sparingly on mobile devices and consider GPU acceleration</p>
            <p><strong>Accessibility:</strong> Don't rely solely on shadows to convey important information</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShadowsSection;