import React from 'react';
import ColorsSection from '../components/styleguide/ColorsSection';
import TypographySection from '../components/styleguide/TypographySection';
import SpacingSection from '../components/styleguide/SpacingSection';
import CornerRadiusSection from '../components/styleguide/CornerRadiusSection';
import BordersSection from '../components/styleguide/BordersSection';

interface StyleGuideProps {
  activeSection: string;
}

const StyleGuide: React.FC<StyleGuideProps> = ({ activeSection }) => {
  return (
    <div className="space-y-8">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Style Guide</h1>
        <p className="text-gray-600 mt-1">Design system and style guidelines</p>
      </div>
      
      {activeSection === 'colors' && <ColorsSection />}
      {activeSection === 'typography' && <TypographySection />}
      {activeSection === 'spacing' && <SpacingSection />}
      {activeSection === 'corner-radius' && <CornerRadiusSection />}
      {activeSection === 'borders' && <BordersSection />}
    </div>
  );
};

export default StyleGuide;