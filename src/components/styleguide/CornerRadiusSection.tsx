import React from 'react';

const CornerRadiusSection: React.FC = () => {
  const radiusValues = [
    { name: 'border-radius-none', value: 'rounded-none', pixels: '0px', class: 'rounded-none' },
    { name: 'border-radius-xs', value: 'rounded-xs', pixels: '2px', class: 'rounded-xs' },
    { name: 'border-radius-sm', value: 'rounded-sm', pixels: '4px', class: 'rounded-sm' },
    { name: 'border-radius-md', value: 'rounded-md', pixels: '6px', class: 'rounded-md' },
    { name: 'border-radius-lg', value: 'rounded-lg', pixels: '8px', class: 'rounded-lg' },
    { name: 'border-radius-xl', value: 'rounded-xl', pixels: '10px', class: 'rounded-xl' },
    { name: 'border-radius-2xl', value: 'rounded-2xl', pixels: '12px', class: 'rounded-2xl' },
    { name: 'border-radius-rounded', value: 'rounded-full', pixels: '9999px', class: 'rounded-full' },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Corner Radius</h2>
        <p className="text-sm text-gray-600 mb-8">
          Corner radius values create visual hierarchy and modern aesthetics. Use consistent radius values 
          throughout your interface to maintain design coherence and establish visual relationships between elements.
        </p>
        
        {/* Radius Scale */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Radius Scale</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {radiusValues.map((radius) => (
              <div key={radius.name} className="space-y-4">
                <div className="text-sm">
                  <div className="font-medium text-gray-800 mb-1">{radius.name}</div>
                  <div className="text-gray-600">
                    <span className="font-mono">{radius.value}</span> ({radius.pixels})
                  </div>
                  <div className="text-gray-500">
                    <span className="font-mono">{radius.class}</span>
                  </div>
                </div>
                
                {/* Visual representation */}
                <div className="flex items-center justify-center">
                  <div 
                    className={`w-20 h-20 bg-primary-600 border border-gray-200 ${radius.class}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Usage Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Button Examples */}
            <div className="space-y-4">
              <h4 className="text-md font-medium text-gray-700">Buttons</h4>
              <div className="space-y-3">
                <button className="px-4 py-2 bg-primary-600 text-white rounded-sm text-sm font-medium hover:bg-primary-700 transition-colors">
                  Small Radius (4px)
                </button>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors">
                  Large Radius (8px)
                </button>
                <button className="px-6 py-2 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-colors">
                  Pill Button (9999px)
                </button>
              </div>
            </div>

            {/* Card Examples */}
            <div className="space-y-4">
              <h4 className="text-md font-medium text-gray-700">Cards</h4>
              <div className="space-y-3">
                <div className="p-4 bg-white border border-gray-200 rounded-md shadow-sm">
                  <div className="text-sm font-medium text-gray-800">Medium Card</div>
                  <div className="text-xs text-gray-600 mt-1">rounded-md (6px)</div>
                </div>
                <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                  <div className="text-sm font-medium text-gray-800">Large Card</div>
                  <div className="text-xs text-gray-600 mt-1">rounded-xl (10px)</div>
                </div>
              </div>
            </div>

            {/* Input Examples */}
            <div className="space-y-4">
              <h4 className="text-md font-medium text-gray-700">Inputs</h4>
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Small radius input"
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none text-sm"
                />
                <input 
                  type="text" 
                  placeholder="Medium radius input"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Common Use Cases */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Common Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-md font-medium text-gray-800 mb-4">Small Radius (2px-6px)</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>rounded-xs (2px):</strong> Subtle rounding for minimal design</p>
                <p><strong>rounded-sm (4px):</strong> Form inputs, small buttons</p>
                <p><strong>rounded-md (6px):</strong> Standard buttons, cards, containers</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-md font-medium text-gray-800 mb-4">Large Radius (8px+)</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>rounded-lg (8px):</strong> Large cards, modals, panels</p>
                <p><strong>rounded-xl (10px):</strong> Hero sections, feature cards</p>
                <p><strong>rounded-2xl (12px):</strong> Large containers, images</p>
                <p><strong>rounded-full (9999px):</strong> Pills, avatars, badges</p>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-md font-medium text-gray-800 mb-3">Corner Radius Usage Guidelines</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Consistency:</strong> Use the same radius values throughout your design system</p>
            <p><strong>Hierarchy:</strong> Larger radius values can indicate higher importance or prominence</p>
            <p><strong>Context:</strong> Match radius to component size - larger components can handle larger radius</p>
            <p><strong>Brand:</strong> Radius style should align with your brand personality (sharp vs. soft)</p>
            <p><strong>Accessibility:</strong> Ensure sufficient contrast at rounded corners</p>
            <p><strong>Performance:</strong> Avoid excessive radius values that may impact rendering</p>
            <p><strong>Responsive:</strong> Consider how radius scales across different screen sizes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CornerRadiusSection;