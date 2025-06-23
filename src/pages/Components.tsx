import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ButtonPreview from '../components/component_previews/ButtonPreview';
import InputPreview from '../components/component_previews/InputPreview';
import DropdownPreview from '../components/component_previews/DropdownPreview';
import KPICardPreview from '../components/component_previews/KPICardPreview';
import ToggleSwitchPreview from '../components/component_previews/ToggleSwitchPreview';
import SideNavigationItemPreview from '../components/component_previews/SideNavigationItemPreview';
import SideNavigationPreview from '../components/component_previews/SideNavigationPreview';
import TopNavigationPreview from '../components/component_previews/TopNavigationPreview';

interface ComponentsProps {
  activeComponentSection: string;
}

const Components: React.FC<ComponentsProps> = ({ activeComponentSection }) => {
  // Get dynamic title and description based on active section
  const getPageInfo = () => {
    switch (activeComponentSection) {
      case 'buttons':
        return {
          title: 'Button Component',
          description: 'ShadCN button component integrated with our design system'
        };
      case 'inputs':
        return {
          title: 'Input Component', 
          description: 'ShadCN input component integrated with our design system'
        };
      case 'dropdowns':
        return {
          title: 'Dropdown Component',
          description: 'Custom dropdown component integrated with our design system'
        };
      case 'kpi-cards':
        return {
          title: 'KPI Card Component',
          description: 'Key Performance Indicator cards with charts and trend indicators'
        };
      case 'toggle-switch':
        return {
          title: 'Toggle Switch Component',
          description: 'Custom toggle switch component with smooth animations'
        };
      case 'side-nav-item':
        return {
          title: 'Side Navigation Item Component',
          description: 'Individual navigation items used in the side navigation'
        };
      case 'side-nav':
        return {
          title: 'Side Navigation Component',
          description: 'Complete side navigation component with environment switching'
        };
      case 'top-nav':
        return {
          title: 'Top Navigation Component',
          description: 'Complete top navigation component with environment switching and app switcher'
        };
      default:
        return {
          title: 'Components',
          description: 'Component library and preview environment'
        };
    }
  };

  const { title, description } = getPageInfo();

  const renderComponentPreview = () => {
    switch (activeComponentSection) {
      case 'buttons':
        return <ButtonPreview />;
      case 'inputs':
        return <InputPreview />;
      case 'dropdowns':
        return <DropdownPreview />;
      case 'kpi-cards':
        return <KPICardPreview />;
      case 'toggle-switch':
        return <ToggleSwitchPreview />;
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
      <PageHeader 
        title={title}
        description={description}
      />
      {renderComponentPreview()}
    </div>
  );
};

export default Components;