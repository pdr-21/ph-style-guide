import React from 'react';

const ShadowsSection: React.FC = () => {
  const shadowValues = [
    { 
      name: 'shadow-none', 
      value: 'shadow-none', 
      description: 'No shadow',
      class: 'shadow-none',
      css: 'box-shadow: none;'
    },
    { 
      name: 'shadow-sm', 
      value: 'shadow-sm', 
      description: 'Small shadow',
      class: 'shadow-sm',
      css: 'box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);'
    },
    { 
      name: 'shadow', 
      value: 'shadow', 
      description: 'Default shadow',
      class: 'shadow',
      css: 'box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);'
    },
    { 
      name: 'shadow-md', 
      value: 'shadow-md', 
      description: 'Medium shadow',
      class: 'shadow-md',
      css: 'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);'
    },
    { 
      name: 'shadow-lg', 
      value: 'shadow-lg', 
      description: 'Large shadow',
      class: 'shadow-lg',
      css: 'box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);'
    },
    { 
      name: 'shadow-xl', 
      value: 'shadow-xl', 
      description: 'Extra large shadow',
      class: 'shadow-xl',
      css: 'box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);'
    },
    { 
      name: 'shadow-2xl', 
      value: 'shadow-2xl', 
      description: 'Extra extra large shadow',
      class: 'shadow-2xl',
      css: 'box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);'
    },
    { 
      name: 'shadow-inner', 
      value: 'shadow-inner', 
      description: 'Inner shadow',
      class: 'shadow-inner',
      css: 'box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);'
    },
  ];

  const coloredShadows = [
    {
      name: 'Primary Shadow',
      class: 'shadow-lg shadow-p-300/25',
      css: 'box-shadow: 0 10px 15px -3px rgb(92 165 155 / 0.25), 0 4px 6px -4px rgb(92 165 155 / 0.25);',
      color: 'Primary (Myrtle Green)'
    },
    {
      name: 'Secondary Shadow',
      class: 'shadow-lg shadow-b-200/25',
      css: 'box-shadow: 0 10px 15px -3px rgb(77 62 224 / 0.25), 0 4px 6px -4px rgb(77 62 224 / 0.25);',
      color: 'Secondary (Blue)'
    },
    {
      name: 'Error Shadow',
      class: 'shadow-lg shadow-r-300/25',
      css: 'box-shadow: 0 10px 15px -3px rgb(241 68 88 / 0.25), 0 4px 6px -4px rgb(241 68 88 / 0.25);',
      color: 'Error (Red)'
    },
    {
      name: 'Success Shadow',
      class: 'shadow-lg shadow-g-300/25',
      css: 'box-shadow: 0 10px 15px -3px rgb(54 179 126 / 0.25), 0 4px 6px -4px rgb(54 179 126 / 0.25);',
      color: 'Success (Green)'
    },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Shadows</h2>
        <p className="text-sm text-gray-600 mb-8">
          Shadows create depth and hierarchy in your interface. They help establish visual layers, 
          indicate elevation, and provide subtle visual cues about interactive elements. Use shadows 
          consistently to maintain a cohesive design system.
        </p>
        
        {/* Default Shadows */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Default Shadow Scale</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shadowValues.map((shadow) => (
              <div key={shadow.name} className="space-y-4">
                <div className="text-sm">
                  <div className="font-medium text-gray-800 mb-1">{shadow.name}</div>
                  <div className="text-gray-600 mb-2">{shadow.description}</div>
                  <div className="text-gray-500">
                    <span className="font-mono text-xs">{shadow.class}</span>
                  </div>
                </div>
                
                {/* Visual representation */}
                <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
                  <div 
                    className={`w-16 h-16 bg-white rounded-lg border border-gray-100 ${shadow.class}`}
                  ></div>
                </div>
                
                {/* CSS Value */}
                <div className="bg-gray-100 p-3 rounded text-xs font-mono text-gray-700 break-all">
                  {shadow.css}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Colored Shadows */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Colored Shadows</h3>
          <p className="text-sm text-gray-600 mb-6">
            Colored shadows can be used to reinforce brand colors or semantic meanings. 
            Use them sparingly for special emphasis or to create thematic consistency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coloredShadows.map((shadow) => (
              <div key={shadow.name} className="space-y-4">
                <div className="text-sm">
                  <div className="font-medium text-gray-800 mb-1">{shadow.name}</div>
                  <div className="text-gray-600 mb-2">{shadow.color}</div>
                  <div className="text-gray-500">
                    <span className="font-mono text-xs">{shadow.class}</span>
                  </div>
                </div>
                
                {/* Visual representation */}
                <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
                  <div 
                    className={`w-20 h-20 bg-white rounded-lg border border-gray-100 ${shadow.class}`}
                  ></div>
                </div>
                
                {/* CSS Value */}
                <div className="bg-gray-100 p-3 rounded text-xs font-mono text-gray-700 break-all">
                  {shadow.css}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Usage Examples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cards */}
            <div className="space-y-4">
              <h4 className="text-md font-medium text-gray-700">Cards</h4>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="text-sm font-medium text-gray-800">Basic Card</div>
                  <div className="text-xs text-gray-600 mt-1">shadow-sm</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                  <div className="text-sm font-medium text-gray-800">Elevated Card</div>
                  <div className="text-xs text-gray-600 mt-1">shadow-md</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-lg">
                  <div className="text-sm font-medium text-gray-800">Prominent Card</div>
                  <div className="text-xs text-gray-600 mt-1">shadow-lg</div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              <h4 className="text-md font-medium text-gray-700">Buttons</h4>
              <div className="space-y-4">
                <button className="px-4 py-2 bg-p-300 text-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-sm font-medium">
                  Subtle Button
                </button>
                <button className="px-4 py-2 bg-b-200 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-sm font-medium">
                  Elevated Button
                </button>
                <button className="px-6 py-3 bg-p-400 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 text-base font-medium">
                  Hero Button
                </button>
              </div>
            </div>

            {/* Modals & Overlays */}
            <div className="space-y-4">
              <h4 className="text-md font-medium text-gray-700">Modals & Overlays</h4>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-xl border border-gray-200">
                  <div className="text-sm font-medium text-gray-800">Modal Dialog</div>
                  <div className="text-xs text-gray-600 mt-1">shadow-xl</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-2xl">
                  <div className="text-sm font-medium text-gray-800">Overlay Panel</div>
                  <div className="text-xs text-gray-600 mt-1">shadow-2xl</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Interactive Shadow Demo</h3>
          <p className="text-sm text-gray-600 mb-4">
            Hover over these elements to see how shadows can change on interaction:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-lg">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="text-sm font-medium text-gray-800">Hover Card</div>
              <div className="text-xs text-gray-600 mt-1">shadow-sm → shadow-lg</div>
            </div>
            
            <button className="p-4 bg-p-300 text-white rounded-lg shadow-md hover:shadow-xl active:shadow-sm transition-shadow duration-200 text-sm font-medium">
              Interactive Button
            </button>
            
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <div className="text-sm font-medium text-gray-800">Prominent Element</div>
              <div className="text-xs text-gray-600 mt-1">shadow-lg → shadow-2xl</div>
            </div>
          </div>
        </div>

        {/* Common Use Cases */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Common Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-md font-medium text-gray-800 mb-4">Elevation Hierarchy</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>shadow-none:</strong> Flat elements, inline content</p>
                <p><strong>shadow-sm:</strong> Subtle cards, form elements</p>
                <p><strong>shadow:</strong> Standard cards, buttons</p>
                <p><strong>shadow-md:</strong> Elevated panels, dropdowns</p>
                <p><strong>shadow-lg:</strong> Important cards, floating elements</p>
                <p><strong>shadow-xl:</strong> Modals, overlays</p>
                <p><strong>shadow-2xl:</strong> High-priority overlays</p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-md font-medium text-gray-800 mb-4">Interaction States</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Hover:</strong> Increase shadow depth for feedback</p>
                <p><strong>Active:</strong> Reduce shadow to simulate press</p>
                <p><strong>Focus:</strong> Combine with focus rings for accessibility</p>
                <p><strong>Disabled:</strong> Reduce or remove shadows</p>
                <p><strong>Loading:</strong> Subtle shadows for skeleton states</p>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-md font-medium text-gray-800 mb-3">Shadow Usage Guidelines</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Consistency:</strong> Use the same shadow values throughout your design system</p>
            <p><strong>Hierarchy:</strong> Higher shadows indicate higher elevation and importance</p>
            <p><strong>Performance:</strong> Use CSS transitions for smooth shadow changes</p>
            <p><strong>Accessibility:</strong> Don't rely solely on shadows to convey information</p>
            <p><strong>Context:</strong> Consider the background when choosing shadow intensity</p>
            <p><strong>Restraint:</strong> Use colored shadows sparingly for special emphasis</p>
            <p><strong>Responsive:</strong> Consider how shadows appear on different screen sizes</p>
            <p><strong>Dark Mode:</strong> Adjust shadow opacity and colors for dark themes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShadowsSection;