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
  // Get dynamic title and description based on active section
  const getPageInfo = () => {
    switch (activeSection) {
      case 'colors':
        return {
          title: 'Colors',
          description: 'Color palette and usage guidelines for the design system'
        };
      case 'typography':
        return {
          title: 'Typography',
          description: 'Font styles, sizes, and text hierarchy guidelines'
        };
      case 'spacing':
        return {
          title: 'Spacing',
          description: 'Spacing scale and layout guidelines for consistent design'
        };
      case 'corner-radius':
        return {
          title: 'Corner Radius',
          description: 'Border radius values and usage guidelines'
        };
      case 'borders':
        return {
          title: 'Borders & Focus Rings',
          description: 'Border styles and focus ring guidelines for accessibility'
        };
      case 'shadows':
        return {
          title: 'Shadows',
          description: 'Shadow styles and elevation guidelines for depth and hierarchy'
        };
      default:
        return {
          title: 'Style Guide',
          description: 'Design system and style guidelines'
        };
    }
  };

  const { title, description } = getPageInfo();

  return (
    <div>
      <PageHeader 
        title={title}
        description={description}
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