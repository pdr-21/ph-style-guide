import React from 'react';
import ButtonPreview from '../components/component_previews/ButtonPreview';

interface ComponentsProps {
  activeComponentSection: string;
}

const Components: React.FC<ComponentsProps> = ({ activeComponentSection }) => {
  const renderComponentPreview = () => {
    switch (activeComponentSection) {
      case 'buttons':
        return <ButtonPreview />;
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
    <div className="w-full">
      {renderComponentPreview()}
    </div>
  );
};

export default Components;