import React from 'react';
import ColorsSection from '../components/styleguide/ColorsSection';
import TypographySection from '../components/styleguide/TypographySection';
import SpacingSection from '../components/styleguide/SpacingSection';
import CornerRadiusSection from '../components/styleguide/CornerRadiusSection';
import BordersSection from '../components/styleguide/BordersSection';
import ShadowsSection from '../components/styleguide/ShadowsSection';

interface StyleGuideProps {
  activeSection: string;
}

const StyleGuide: React.FC<StyleGuideProps> = ({ activeSection }) => {
  return (
    <div>
      <div className="border-b border-n-75 pb-4 px-8">
        <h1 className="text-2xl font-semibold text-gray-800">Style Guide</h1>
        <p className="text-gray-600 mt-1">Design system and style guidelines</p>
      </div>
      
      <div className="pt-8 px-8">
        {activeSection === 'colors' && <ColorsSection />}
        {activeSection === 'typography' && <TypographySection />}
        {activeSection === 'spacing' && <SpacingSection />}
        {activeSection === 'corner-radius' && <CornerRadiusSection />}
        {activeSection === 'borders' && <BordersSection />}
        {activeSection === 'shadows' && <ShadowsSection />}
      </div>
    </div>
  );
};

export default StyleGuide;