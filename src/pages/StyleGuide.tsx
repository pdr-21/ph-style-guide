import React from 'react';

const StyleGuide: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Style Guide</h1>
        <p className="text-gray-600 mt-1">Design system and style guidelines</p>
      </div>
      
      {/* Colors Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Colors</h2>
          
          {/* Primary Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Primary (Purple)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="space-y-2">
                <div className="w-full h-20 bg-primary-600 rounded-lg border border-gray-200"></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">Primary 600</div>
                  <div className="text-gray-500">#2927B2</div>
                  <div className="text-xs text-gray-400">Main brand color</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 bg-primary-50 rounded-lg border border-gray-200"></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">Primary 50</div>
                  <div className="text-gray-500">#EAE8FB</div>
                  <div className="text-xs text-gray-400">Light background</div>
                </div>
              </div>
            </div>
          </div>

          {/* Gray Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Gray (Neutral)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="space-y-2">
                <div className="w-full h-20 bg-gray-50 rounded-lg border border-gray-200"></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">Gray 50</div>
                  <div className="text-gray-500">#F8F9FB</div>
                  <div className="text-xs text-gray-400">Background</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 bg-gray-200 rounded-lg border border-gray-200"></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">Gray 200</div>
                  <div className="text-gray-500">#E5E7EB</div>
                  <div className="text-xs text-gray-400">Borders</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 bg-gray-500 rounded-lg border border-gray-200"></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">Gray 500</div>
                  <div className="text-gray-500">#6B7280</div>
                  <div className="text-xs text-gray-400">Secondary text</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 bg-gray-600 rounded-lg border border-gray-200"></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">Gray 600</div>
                  <div className="text-gray-500">#4B5563</div>
                  <div className="text-xs text-gray-400">Icons</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 bg-gray-800 rounded-lg border border-gray-200"></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">Gray 800</div>
                  <div className="text-gray-500">#1F2937</div>
                  <div className="text-xs text-gray-400">Primary text</div>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-md font-medium text-gray-800 mb-3">Usage Guidelines</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Primary Purple:</strong> Use for primary actions, active states, and brand elements</p>
              <p><strong>Gray Neutral:</strong> Use for text hierarchy, backgrounds, and interface elements</p>
              <p><strong>Contrast:</strong> Ensure sufficient contrast ratios for accessibility (4.5:1 minimum)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;