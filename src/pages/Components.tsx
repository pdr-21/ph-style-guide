import React from 'react';
import ButtonPreview from '../components/component_previews/ButtonPreview';
import InputPreview from '../components/component_previews/InputPreview';
import SideNavigationItemPreview from '../components/component_previews/SideNavigationItemPreview';
import SideNavigationPreview from '../components/component_previews/SideNavigationPreview';
import TopNavigationPreview from '../components/component_previews/TopNavigationPreview';

interface ComponentsProps {
  activeComponentSection: string;
}

const Components: React.FC<ComponentsProps> = ({ activeComponentSection }) => {
  const renderComponentPreview = () => {
    switch (activeComponentSection) {
      case 'buttons':
        return <ButtonPreview />;
      case 'inputs':
        return <InputPreview />;
      case 'side-nav-item':
        return <SideNavigationItemPreview />;
      case 'side-nav':
        return <SideNavigationPreview />;
      case 'top-nav':
        return <TopNavigationPreview />;
      default:
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Component Preview</h2>
              <p className="text-gray-600">Select a component from the sidebar to preview it</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full bg-gr-25">
      {renderComponentPreview()}
    </div>
  );
};

export default Components;