import React, { useState } from 'react';
import TopNavigation from './TopNavigation';
import SideNavigation from './SideNavigation';
import { Environment, AppPage } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
  currentView: Environment;
  onViewChange: (view: Environment, subView?: string) => void;
  activeAppPage: AppPage;
  activeStyleGuideSection: string;
  activeComponentSection: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, onViewChange, activeAppPage, activeStyleGuideSection, activeComponentSection }) => {

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
          activeAppPage={activeAppPage}
          activeStyleGuideSection={activeStyleGuideSection}
          activeComponentSection={activeComponentSection}
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