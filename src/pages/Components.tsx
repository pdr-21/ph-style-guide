import React from 'react';
import ButtonPreview from '../components/component_previews/ButtonPreview';
import InputPreview from '../components/component_previews/InputPreview';

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
      default:
        return (
          <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Component Preview</h2>
              <p className="text-gray-600">Select a component from the sidebar to preview it</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      <div className="border-b border-n-75">
        <div className="pb-4 pt-4 px-8">
          <h1 className="text-2xl font-semibold text-gray-800">Components</h1>
          <p className="text-gray-600 mt-1">Component library and previews</p>
        </div>
      </div>
      
      <div className="pt-8 px-8">
        {renderComponentPreview()}
      </div>
    </div>
  );
};

export default Components;