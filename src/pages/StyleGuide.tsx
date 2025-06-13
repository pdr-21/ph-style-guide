import React from 'react';
import PageHeader from '../components/common/PageHeader';
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
      <PageHeader 
        title="Style Guide" 
        description="Design system and style guidelines" 
      />
      
      <div className="p-8">
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