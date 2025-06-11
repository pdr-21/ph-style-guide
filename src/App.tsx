import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Components from './pages/Components';
import StyleGuide from './pages/StyleGuide';
import { Environment } from './types';

function App() {
  const [currentView, setCurrentView] = useState<Environment>('App');
  const [activeStyleGuideSection, setActiveStyleGuideSection] = useState('colors');
  const [activeComponentSection, setActiveComponentSection] = useState('buttons');
  const [activeAppSection, setActiveAppSection] = useState('dashboard');

  const handleViewChange = (view: Environment, subView?: string) => {
    setCurrentView(view);
    if (view === 'Style Guide' && subView) {
      setActiveStyleGuideSection(subView);
    } else if (view === 'Components' && subView) {
      setActiveComponentSection(subView);
    } else if (view === 'App' && subView) {
      setActiveAppSection(subView);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'App':
        return (
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/initiatives" element={<Projects />} />
            <Route path="/initiatives/:id" element={<ProjectDetail />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        );
      case 'Components':
        return <Components activeComponentSection={activeComponentSection} />;
      case 'Style Guide':
        return <StyleGuide activeSection={activeStyleGuideSection} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Router>
      <Layout 
        currentView={currentView} 
        onViewChange={handleViewChange}
        activeStyleGuideSection={activeStyleGuideSection}
        activeComponentSection={activeComponentSection}
        activeAppSection={activeAppSection}
      >
        {renderContent()}
      </Layout>
    </Router>
  );
}

export default App;