import React from 'react';

const StyleGuide: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Style Guide</h1>
        <p className="text-gray-600 mt-1">Design system and style guidelines</p>
      </div>
      
      {/* Colors Section */}
      <section className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Colors</h2>
          
          {/* Core Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Core</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="space-y-2">
                <div className="w-full h-20 bg-black rounded-lg border border-gray-200"></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">Black</div>
                  <div className="text-gray-500">#000000</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 bg-white rounded-lg border border-gray-200"></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">White</div>
                  <div className="text-gray-500">#FFFFFF</div>
                </div>
              </div>
            </div>
          </div>

          {/* Gray Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Grays (GR)</h3>
            <p className="text-sm text-gray-600 mb-4">
              Grays are neutral, achromatic colors vital for structuring UI and building visual hierarchy. 
              They support primary and accent colors without competing for attention.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#404040' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">GR500</div>
                  <div className="text-gray-500">#404040</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#525252' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">GR400</div>
                  <div className="text-gray-500">#525252</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#A2A2A2' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">GR300</div>
                  <div className="text-gray-500">#A2A2A2</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#CCCCCC' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">GR200</div>
                  <div className="text-gray-500">#CCCCCC</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#EBEBEB' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">GR100</div>
                  <div className="text-gray-500">#EBEBEB</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#F1F3F4' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">GR50</div>
                  <div className="text-gray-500">#F1F3F4</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#F8F9FB' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">GR25</div>
                  <div className="text-gray-500">#F8F9FB</div>
                </div>
              </div>
            </div>
          </div>

          {/* Neutral Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Neutrals (N)</h3>
            <p className="text-sm text-gray-600 mb-4">
              The Neutrals in this specification, represented by desaturated blue-gray shades, offer a sophisticated 
              alternative to purely achromatic grays. They lend a modern, calm, and subtly tinted character to the UI, 
              often used for backgrounds or structural elements ("UI chrome").
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#353B46' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">N500</div>
                  <div className="text-gray-500">#353B46</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#464F5E' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">N400</div>
                  <div className="text-gray-500">#464F5E</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#637085' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">N300</div>
                  <div className="text-gray-500">#637085</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#8C95A8' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">N200</div>
                  <div className="text-gray-500">#8C95A8</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#AEB5C2' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">N100</div>
                  <div className="text-gray-500">#AEB5C2</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#D1D5DC' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">N75</div>
                  <div className="text-gray-500">#D1D5DC</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#E8EAEE' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">N50</div>
                  <div className="text-gray-500">#E8EAEE</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#F4F6FA' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">N40</div>
                  <div className="text-gray-500">#F4F6FA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Primary (P)</h3>
            <p className="text-sm text-gray-600 mb-4">
              The Primary color, "Myrtle Green," is the flagship color of the brand's identity, central to 
              distinguishing key interactions, especially main Call to Action (CTA) buttons.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#1D3734' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">P500</div>
                  <div className="text-gray-500">#1D3734</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#3C6D68' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">P400</div>
                  <div className="text-gray-500">#3C6D68</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#5CA59B' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">P300</div>
                  <div className="text-gray-500">#5CA59B</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#58D7C9' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">P200</div>
                  <div className="text-gray-500">#58D7C9</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#91DFD5' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">P100</div>
                  <div className="text-gray-500">#91DFD5</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#C1E5E2' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">P75</div>
                  <div className="text-gray-500">#C1E5E2</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#D8F4F2' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">P50</div>
                  <div className="text-gray-500">#D8F4F2</div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Secondary (B)</h3>
            <p className="text-sm text-gray-600 mb-4">
              The Secondary color, blue, supports the primary color. It's often associated with calm, trust, 
              and technology, providing alternative interaction paths and enriching visual communication.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#0C0B3B' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">B500</div>
                  <div className="text-gray-500">#0C0B3B</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#1C1876' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">B400</div>
                  <div className="text-gray-500">#1C1876</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#2927B2' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">B300</div>
                  <div className="text-gray-500">#2927B2</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#4D3EE0' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">B200</div>
                  <div className="text-gray-500">#4D3EE0</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#7571E0' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">B100</div>
                  <div className="text-gray-500">#7571E0</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#A391F2' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">B75</div>
                  <div className="text-gray-500">#A391F2</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#CAC1F2' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">B50</div>
                  <div className="text-gray-500">#CAC1F2</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#EAE8FB' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">B40</div>
                  <div className="text-gray-500">#EAE8FB</div>
                </div>
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-md font-medium text-gray-800 mb-3">Usage Guidelines</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Core:</strong> Use Black and White for maximum contrast and fundamental UI elements</p>
              <p><strong>Grays (GR):</strong> Use for neutral backgrounds, borders, and text hierarchy without color bias</p>
              <p><strong>Neutrals (N):</strong> Use for sophisticated UI chrome and structural elements with subtle blue undertones</p>
              <p><strong>Primary (P):</strong> Use Myrtle Green for main CTAs, key interactions, and brand emphasis</p>
              <p><strong>Secondary (B):</strong> Use Blue for supporting actions, links, and complementary interactions</p>
              <p><strong>Contrast:</strong> Ensure sufficient contrast ratios for accessibility (4.5:1 minimum for text)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;

export default StyleGuide