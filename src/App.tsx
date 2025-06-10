import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Components from './pages/Components';
import StyleGuide from './pages/StyleGuide';
import { Environment } from './types';

function App() {
  const [currentView, setCurrentView] = useState<Environment>('App');
  const [activeStyleGuideSection, setActiveStyleGuideSection] = useState('colors');
  const [activeComponentSection, setActiveComponentSection] = useState('buttons');

  const handleViewChange = (view: Environment, subView?: string) => {
    setCurrentView(view);
    if (view === 'Style Guide' && subView) {
      setActiveStyleGuideSection(subView);
    } else if (view === 'Components' && subView) {
      setActiveComponentSection(subView);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'App':
        return <Dashboard />;
      case 'Components':
        return <Components activeComponentSection={activeComponentSection} />;
      case 'Style Guide':
        return <StyleGuide activeSection={activeStyleGuideSection} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout 
      currentView={currentView} 
      onViewChange={handleViewChange}
      activeStyleGuideSection={activeStyleGuideSection}
      activeComponentSection={activeComponentSection}
    >
      {renderContent()}
    </Layout>
  );
}

export default App;