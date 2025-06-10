import React from 'react';

const TypographySection: React.FC = () => {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Typography</h2>
        
        {/* Headings */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Headings</h3>
          <div className="space-y-8">
            <div className="border-b border-gray-100 pb-6">
              <h1 className="text-7xl font-poppins font-semibold leading-[144px] text-gray-800 mb-2">Headline 1</h1>
              <div className="text-sm text-gray-600">
                <p><strong>Class:</strong> text-7xl (96px)</p>
                <p><strong>Font:</strong> font-poppins font-semibold</p>
                <p><strong>Line Height:</strong> leading-[144px]</p>
              </div>
            </div>
            
            <div className="border-b border-gray-100 pb-6">
              <h2 className="text-6xl font-poppins font-semibold leading-[90px] text-gray-800 mb-2">Headline 2</h2>
              <div className="text-sm text-gray-600">
                <p><strong>Class:</strong> text-6xl (60px)</p>
                <p><strong>Font:</strong> font-poppins font-semibold</p>
                <p><strong>Line Height:</strong> leading-[90px]</p>
              </div>
            </div>
            
            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-5xl font-poppins font-semibold leading-[72px] text-gray-800 mb-2">Headline 3</h3>
              <div className="text-sm text-gray-600">
                <p><strong>Class:</strong> text-5xl (48px)</p>
                <p><strong>Font:</strong> font-poppins font-semibold</p>
                <p><strong>Line Height:</strong> leading-[72px]</p>
              </div>
            </div>
            
            <div className="border-b border-gray-100 pb-6">
              <h4 className="text-[34px] font-poppins font-semibold leading-[52px] text-gray-800 mb-2">Headline 4</h4>
              <div className="text-sm text-gray-600">
                <p><strong>Class:</strong> text-4xl (34px, custom)</p>
                <p><strong>Font:</strong> font-poppins font-semibold</p>
                <p><strong>Line Height:</strong> leading-[52px]</p>
              </div>
            </div>
            
            <div className="border-b border-gray-100 pb-6">
              <h5 className="text-2xl font-poppins font-semibold leading-9 text-gray-800 mb-2">Headline 5</h5>
              <div className="text-sm text-gray-600">
                <p><strong>Class:</strong> text-2xl (24px)</p>
                <p><strong>Font:</strong> font-poppins font-semibold</p>
                <p><strong>Line Height:</strong> leading-9 (36px)</p>
              </div>
            </div>
            
            <div className="border-b border-gray-100 pb-6">
              <h6 className="text-xl font-poppins font-semibold leading-[30px] text-gray-800 mb-2">Headline 6</h6>
              <div className="text-sm text-gray-600">
                <p><strong>Class:</strong> text-xl (20px)</p>
                <p><strong>Font:</strong> font-poppins font-semibold</p>
                <p><strong>Line Height:</strong> leading-[30px]</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitles */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Subtitles</h3>
          <div className="space-y-6">
            <div className="border-b border-gray-100 pb-4">
              <p className="text-lg font-poppins font-semibold leading-6 text-gray-800 mb-2">Subtitle 1</p>
              <div className="text-sm text-gray-600">
                <p><strong>Class:</strong> text-lg (18px)</p>
                <p><strong>Font:</strong> font-poppins font-semibold</p>
                <p><strong>Line Height:</strong> leading-6 (24px)</p>
              </div>
            </div>
            
            <div className="border-b border-gray-100 pb-4">
              <p className="text-sm font-poppins font-semibold leading-6 text-gray-800 mb-2">Subtitle 2</p>
              <div className="text-sm text-gray-600">
                <p><strong>Class:</strong> text-sm (14px)</p>
                <p><strong>Font:</strong> font-poppins font-semibold</p>
                <p><strong>Line Height:</strong> leading-6 (24px)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Body Text */}
        <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Body Text</h3>
          
          {/* Body 1 */}
          <div className="mb-8">
            <h4 className="text-md font-medium text-gray-700 mb-4">Body 1</h4>
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <p className="text-base font-poppins font-normal leading-6 text-gray-800 mb-2">Regular: This is body text in regular weight (16px/24px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-base font-poppins font-normal leading-6</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <p className="text-base font-poppins font-medium leading-6 text-gray-800 mb-2">Medium: This is body text in medium weight (16px/24px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-base font-poppins font-medium leading-6</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <p className="text-base font-poppins font-semibold leading-6 text-gray-800 mb-2">SemiBold: This is body text in semibold weight (16px/24px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-base font-poppins font-semibold leading-6</p>
                </div>
              </div>
            </div>
          </div>

          {/* Body 2 Condensed */}
          <div className="mb-8">
            <h4 className="text-md font-medium text-gray-700 mb-4">Body 2 (Condensed)</h4>
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <p className="text-sm font-poppins font-normal leading-5 text-gray-800 mb-2">Regular: This is condensed body text (14px/20px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-sm font-poppins font-normal leading-5</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <p className="text-sm font-poppins font-medium leading-5 text-gray-800 mb-2">Medium: This is condensed body text (14px/20px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-sm font-poppins font-medium leading-5</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <p className="text-sm font-poppins font-semibold leading-5 text-gray-800 mb-2">SemiBold: This is condensed body text (14px/20px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-sm font-poppins font-semibold leading-5</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <p className="text-sm font-poppins font-normal leading-5 underline text-gray-800 mb-2">Regular Link: This is a condensed link (14px/20px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-sm font-poppins font-normal leading-5 underline</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <p className="text-sm font-poppins font-medium leading-5 underline text-gray-800 mb-2">Medium Link: This is a condensed link (14px/20px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-sm font-poppins font-medium leading-5 underline</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <p className="text-sm font-poppins font-semibold leading-5 underline text-gray-800 mb-2">SemiBold Link: This is a condensed link (14px/20px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-sm font-poppins font-semibold leading-5 underline</p>
                </div>
              </div>
            </div>
          </div>

          {/* Body 3 */}
          <div className="mb-8">
            <h4 className="text-md font-medium text-gray-700 mb-4">Body 3</h4>
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs font-poppins font-normal leading-4 text-gray-800 mb-2">Regular: This is small body text (12px/16px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-xs font-poppins font-normal leading-4</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs font-poppins font-medium leading-4 text-gray-800 mb-2">Medium: This is small body text (12px/16px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-xs font-poppins font-medium leading-4</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs font-poppins font-semibold leading-4 text-gray-800 mb-2">SemiBold: This is small body text (12px/16px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-xs font-poppins font-semibold leading-4</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subtext */}
          <div className="mb-8">
            <h4 className="text-md font-medium text-gray-700 mb-4">Subtext</h4>
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <p className="text-[10px] font-poppins font-normal leading-3 text-gray-800 mb-2">Regular: This is subtext for fine details (10px/12px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-[10px] font-poppins font-normal leading-3</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <p className="text-[10px] font-poppins font-medium leading-3 text-gray-800 mb-2">Medium: This is subtext for fine details (10px/12px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-[10px] font-poppins font-medium leading-3</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <p className="text-[10px] font-poppins font-semibold leading-3 text-gray-800 mb-2">SemiBold: This is subtext for fine details (10px/12px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-[10px] font-poppins font-semibold leading-3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Overline */}
          <div className="mb-8">
            <h4 className="text-md font-medium text-gray-700 mb-4">Overline</h4>
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs font-poppins font-normal leading-4 uppercase tracking-wider text-gray-800 mb-2">Regular: This is overline text (12px/16px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-xs font-poppins font-normal leading-4 uppercase tracking-wider</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs font-poppins font-medium leading-4 uppercase tracking-wider text-gray-800 mb-2">Medium: This is overline text (12px/16px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-xs font-poppins font-medium leading-4 uppercase tracking-wider</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs font-poppins font-semibold leading-4 uppercase tracking-wider text-gray-800 mb-2">SemiBold: This is overline text (12px/16px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-xs font-poppins font-semibold leading-4 uppercase tracking-wider</p>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="mb-8">
            <h4 className="text-md font-medium text-gray-700 mb-4">Caption</h4>
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs font-poppins font-normal leading-4 text-gray-600 mb-2">Regular: This is caption text for images and descriptions (12px/16px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-xs font-poppins font-normal leading-4 text-gray-600</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs font-poppins font-medium leading-4 text-gray-600 mb-2">Medium: This is caption text for images and descriptions (12px/16px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-xs font-poppins font-medium leading-4 text-gray-600</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <p className="text-xs font-poppins font-semibold leading-4 text-gray-600 mb-2">SemiBold: This is caption text for images and descriptions (12px/16px)</p>
                <div className="text-sm text-gray-600">
                  <p><strong>Class:</strong> text-xs font-poppins font-semibold leading-4 text-gray-600</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="text-md font-medium text-gray-800 mb-3">Typography Usage Guidelines</h4>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Headings:</strong> Use for page titles, section headers, and content hierarchy</p>
            <p><strong>Subtitles:</strong> Use for supporting headings and section descriptions</p>
            <p><strong>Body 1:</strong> Primary text for main content, paragraphs, and readable text</p>
            <p><strong>Body 2:</strong> Secondary text for UI elements, labels, and compact layouts</p>
            <p><strong>Body 3:</strong> Small text for metadata, timestamps, and secondary information</p>
            <p><strong>Subtext:</strong> Fine print, legal text, and minimal details</p>
            <p><strong>Overline:</strong> Category labels, section identifiers, and navigation elements</p>
            <p><strong>Caption:</strong> Image descriptions, help text, and explanatory content</p>
            <p><strong>Font Weights:</strong> Use Regular for body text, Medium for emphasis, SemiBold for headings</p>
            <p><strong>Line Height:</strong> Maintain consistent spacing for readability and visual rhythm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypographySection;