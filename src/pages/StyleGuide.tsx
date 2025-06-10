import React from 'react';

interface StyleGuideProps {
  activeSection: string;
}

const StyleGuide: React.FC<StyleGuideProps> = ({ activeSection }) => {

  const renderColorsSection = () => (
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

        {/* Kobe Colors */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Kobe (K)</h3>
          <p className="text-sm text-gray-600 mb-4">
            The "Kobe" colors include warm shades from orange to lighter browns. This group can serve as 
            energizing accents, draw attention, or be used in thematic contexts, adding warmth and dynamism.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#491F08' }}></div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">K500</div>
                <div className="text-gray-500">#491F08</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#913D1C' }}></div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">K400</div>
                <div className="text-gray-500">#913D1C</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#DA5C30' }}></div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">K300</div>
                <div className="text-gray-500">#DA5C30</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#F6814B' }}></div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">K200</div>
                <div className="text-gray-500">#F6814B</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#EBA47F' }}></div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">K100</div>
                <div className="text-gray-500">#EBA47F</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#F0C1A8' }}></div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">K75</div>
                <div className="text-gray-500">#F0C1A8</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#F7E1D4' }}></div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">K50</div>
                <div className="text-gray-500">#F7E1D4</div>
              </div>
            </div>
          </div>
        </div>

        {/* Brown Colors */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Brown (BR)</h3>
          <p className="text-sm text-gray-600 mb-4">
            Browns, ranging from lighter to darker shades, are rooted in nature, evoking earth, wood, 
            stability, and warmth. They can ground a palette, adding seriousness and balance.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#4A350F' }}></div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">BR500</div>
                <div className="text-gray-500">#4A350F</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#956727' }}></div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">BR400</div>
                <div className="text-gray-500">#956727</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#E09E3E' }}></div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">BR300</div>
                <div className="text-gray-500">#E09E3E</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#F8BA4B' }}></div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">BR200</div>
                <div className="text-gray-500">#F8BA4B</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#FACD78' }}></div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">BR100</div>
                <div className="text-gray-500">#FACD78</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#F5DDAB' }}></div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">BR75</div>
                <div className="text-gray-500">#F5DDAB</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#FBEDD5' }}></div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">BR50</div>
                <div className="text-gray-500">#FBEDD5</div>
              </div>
            </div>
          </div>
        </div>

        {/* Semantic Colors Section */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Semantic Colors</h3>
          <p className="text-sm text-gray-600 mb-6">
            Semantic colors are used for specific UI states and feedback, providing clear visual communication 
            for success, warning, and error states.
          </p>

          {/* Red Colors */}
          <div className="mb-8">
            <h4 className="text-md font-medium text-gray-700 mb-4">Red (R)</h4>
            <p className="text-sm text-gray-600 mb-4">
              Red is one of the most potent and emotionally charged colors. In UI design, it's specifically 
              used for critical states, errors, warnings, and destructive actions. It demands careful and precise application.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#C40F24' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">R500</div>
                  <div className="text-gray-500">#C40F24</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#EF233C' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">R400</div>
                  <div className="text-gray-500">#EF233C</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#F14458' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">R300</div>
                  <div className="text-gray-500">#F14458</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#F36374' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">R200</div>
                  <div className="text-gray-500">#F36374</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#F9B1B9' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">R100</div>
                  <div className="text-gray-500">#F9B1B9</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#FCD9DD' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">R75</div>
                  <div className="text-gray-500">#FCD9DD</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#FFE9EB' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">R50</div>
                  <div className="text-gray-500">#FFE9EB</div>
                </div>
              </div>
            </div>
          </div>

          {/* Yellow Colors */}
          <div className="mb-8">
            <h4 className="text-md font-medium text-gray-700 mb-4">Yellow (Y)</h4>
            <p className="text-sm text-gray-600 mb-4">
              Yellow is the brightest and most energetic chromatic color, instantly grabbing attention. In UI, 
              it often communicates information requiring notice but less critical than red-flagged issues, such as 
              lower-priority warnings or highlighting important, non-alarming content.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#C24B00' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">Y500</div>
                  <div className="text-gray-500">#C24B00</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#DF6E38' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">Y400</div>
                  <div className="text-gray-500">#DF6E38</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#FF8B00' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">Y300</div>
                  <div className="text-gray-500">#FF8B00</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#FFCD92' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">Y200</div>
                  <div className="text-gray-500">#FFCD92</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="w-full h-20 rounded-lg border border-gray-200" style={{ backgroundColor: '#FFFAE6' }}></div>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">Y100</div>
                  <div className="text-gray-500">#FFFAE6</div>
                </div>
              </div>
            </div>
          </div>

          {/* Green Colors */}
          <div className="mb-8">
            <h4 className="text-md font-medium text-gray-700 mb-4">Green (G)</h4>
            <p className="text-sm text-gray-600 mb-4">
              Green has a vital and established semantic role in UI design, universally understood as