import React from 'react';

const SpacingSection: React.FC = () => {
  const spacingValues = [
    { name: 'spacing-none', value: '0', pixels: '0px', class: 'p-0' },
    { name: 'spacing-xs', value: '2', pixels: '8px', class: 'p-2' },
    { name: 'spacing-sm', value: '4', pixels: '16px', class: 'p-4' },
    { name: 'spacing-md', value: '6', pixels: '24px', class: 'p-6' },
    { name: 'spacing-lg', value: '8', pixels: '32px', class: 'p-8' },
    { name: 'spacing-xl', value: '10', pixels: '40px', class: 'p-10' },
    { name: 'spacing-2xl', value: '12', pixels: '48px', class: 'p-12' },
    { name: 'spacing-3xl', value: '14', pixels: '56px', class: 'p-14' },
    { name: 'spacing-4xl', value: '16', pixels: '64px', class: 'p-16' },
    { name: 'spacing-5xl', value: '24', pixels: '96px', class: 'p-24' },
    { name: 'spacing-6xl', value: '32', pixels: '128px', class: 'p-32' },
    { name: 'spacing-7xl', value: '40', pixels: '160px', class: 'p-40' },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Spacing</h2>
        <p className="text-sm text-gray-600 mb-8">
          Consistent spacing creates visual rhythm and hierarchy in your interface. Our spacing system 
          is based on a 4px grid (0.25rem) to ensure pixel-perfect alignment across all screen sizes.
        </p>
        
        {/* Spacing Scale */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Spacing Scale</h3>
          <div className="space-y-6">
            {spacingValues.map((spacing) => (
              <div key={spacing.name} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-sm font-medium text-gray-800 min-w-[120px]">
                      {spacing.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-mono">{spacing.value}</span> ({spacing.pixels})
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="font-mono">{spacing.class}</span>
                    </div>
                  </div>
                </div>
                
                {/* Visual representation */}
                <div className="flex items-center space-x-4">
                  {/* Padding example */}
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-2">Padding Example:</div>
                    <div className="bg-blue-50 border border-blue-200 rounded">
                      <div 
                        className={`bg-blue-100 border border-blue-300 rounded text-xs text-blue-800 text-center ${spacing.class}`}
                      >
                        Content
                      </div>
                    </div>
                  </div>
                  
                  {/* Margin example */}
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-2">Margin Example:</div>
                    <div className="bg-green-50 border border-green-200 rounded p-2">
                      <div 
                        className={`bg-green-100 border border-green-300 rounded text-xs text-green-800 text-center p-2 ${spacing.class.replace('p-', 'm-')}`}
                      >
                        Content
                      </div>
                    </div>
                  </div>
                  
                  {/* Gap example */}
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 mb-2">Gap Example:</div>
                    <div 
                      className={`flex bg-purple-50 border border-purple-200 rounded p-2 ${spacing.class.replace('p-', 'gap-')}`}
                    >
                      <div className="bg-purple-100 border border-purple-300 rounded text-xs text-purple-800 text-center p-1 flex-1">
                        Item 1
                      </div>
                      <div className="bg-purple-100 border border-purple-300 rounded text-xs text-purple-800 text-center p-1 flex-1">
                        Item 2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Use Cases */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Common Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-md font-medium text-gray-800 mb-4">Component Spacing</h4>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>spacing-xs (8px):</strong> Small gaps between related elements</p>
                <p><strong>spacing-sm (16px):</strong> Standard spacing between form elements</p>
                <p><strong>spacing-md (24px):</strong> Section spacing within components</p>
                <p><strong>spacing-lg (32px):</strong> Spacing between component groups</p>
                <p><strong>spacing-xl (40px):</strong> Large section separators</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-md font-medium text-gray-800 mb-4">Layout Spacing</h4>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>spacing-2xl (48px):</strong> Page section spacing</p>
                <p><strong>spacing-3xl (56px):</strong> Major content blocks</p>
                <p><strong>spacing-4xl (64px):</strong> Hero section padding</p>
                <p><strong>spacing-5xl (96px):</strong> Large page sections</p>
                <p><strong>spacing-6xl+ (128px+):</strong> Extra large layouts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Spacing */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Responsive Spacing</h3>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="text-md font-medium text-blue-800 mb-4">Responsive Examples</h4>
            <div className="space-y-3 text-sm text-blue-700">
              <p><strong>Mobile to Desktop:</strong> <span className="font-mono">p-4 md:p-8 lg:p-12</span></p>
              <p><strong>Responsive Gaps:</strong> <span className="font-mono">gap-2 sm:gap-4 md:gap-6</span></p>
              <p><strong>Responsive Margins:</strong> <span className="font-mono">m-4 lg:m-8 xl:m-16</span></p>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-md font-medium text-gray-800 mb-3">Spacing Usage Guidelines</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Consistency:</strong> Use the same spacing values throughout your design for visual harmony</p>
            <p><strong>Hierarchy:</strong> Larger spacing creates stronger visual separation and hierarchy</p>
            <p><strong>Responsive:</strong> Adjust spacing for different screen sizes to maintain proportions</p>
            <p><strong>Grid System:</strong> All spacing values are based on a 4px grid for pixel-perfect alignment</p>
            <p><strong>Padding vs Margin:</strong> Use padding for internal spacing, margin for external spacing</p>
            <p><strong>Gap:</strong> Use gap for spacing between flex or grid items for cleaner layouts</p>
            <p><strong>Accessibility:</strong> Ensure sufficient spacing for touch targets (minimum 44px)</p>
            <p><strong>Performance:</strong> Consistent spacing reduces CSS complexity and improves maintainability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpacingSection;