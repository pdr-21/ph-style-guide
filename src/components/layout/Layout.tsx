import React, { useState } from 'react';
import TopNavigation from './TopNavigation';
import SideNavigation from './SideNavigation';
import { Environment } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: Environment;
  onViewChange: (view: Environment, subView?: string) => void;
  activeStyleGuideSection: string;
  activeComponentSection: string;
  activeAppSection: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onViewChange, activeStyleGuideSection, activeComponentSection, activeAppSection }) => {

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <TopNavigation 
        currentEnvironment={currentView}
        onEnvironmentChange={(view) => onViewChange(view)}
      />
      
      <div className="flex">
        {/* Side Navigation */}
        <SideNavigation 
          currentView={currentView} 
          onEnvironmentChange={onViewChange}
          activeStyleGuideSection={activeStyleGuideSection}
          activeComponentSection={activeComponentSection}
          activeAppSection={activeAppSection}
        />
        
        {/* Main Content Area */}
        <main className={`flex-1 mt-18 ${currentView === 'App' ? 'ml-16' : 'ml-48'}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;